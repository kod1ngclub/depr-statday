import { Cond, Conv, Store } from "../interface/store"

import { IDBPDatabase, openDB } from "idb"

const IDB_DATABASE_NAME             = "StatdayIndexedDBDatabaseName"
const IDB_DATABASE_VERSION          = 2
const IDB_STORE_NAME                = "StatdayIndexedDBStoreName"
const IDB_STORE_KEYPATH             = "id"
const IDB_STORE_AUTOINCREASEMENT    = true

// IDB_DATABASE_NAME, IDB_STORE_NAME
// should satisfy var-naming rule ..
// 
// ex) 'statday-indexed-db-name' is not allowed because of '-'


// cause it has 'id' property in actual IndexedDB
type IndexedDBableDocType<OriginType> = { data: OriginType }
function FromOriginToIndexedDBabled<T>(origin: T): IndexedDBableDocType<T> { return { data: origin }}
function FromIndexedDBabledToOrigin<T>(indexed: IndexedDBableDocType<T>): T { return indexed.data }

export class IndexedDBStore<DocType> implements Store<DocType> {
    private idb: Promise<IDBPDatabase>

    constructor() {
        this.idb = openDB(
            IDB_DATABASE_NAME,
            IDB_DATABASE_VERSION,
            {
                upgrade(idbp: IDBPDatabase) {
                    idbp.createObjectStore(
                        IDB_STORE_NAME,
                        { keyPath: IDB_STORE_KEYPATH, autoIncrement: IDB_STORE_AUTOINCREASEMENT }
                    )
                }
            }
        )
    }
    
    async read(cond: Cond<DocType> | null): Promise<DocType[]> {
        const db = (await this.idb)
        const docs = await db.getAll(IDB_STORE_NAME)

        // if cond nothing => find data -> return
        if (cond === null) {
            return docs.map(item => {
                // find data
                const doc = item as unknown as IndexedDBableDocType<DocType>
                return doc.data
            })
        }

        // if has cond => find data -> check cond -> return
        return docs.map(item => {
            // find data
            const doc = item as unknown as IndexedDBableDocType<DocType>
            return doc.data
        }).filter(item => cond(item)) // check cond
    }

    async write(item: DocType): Promise<DocType> {
        const db = await this.idb
        const tx = db.transaction(IDB_STORE_NAME, "readwrite")
        
        await tx.store.add(FromOriginToIndexedDBabled(item))
        return item
    }

    async edit(cond: Cond<DocType>, conv: Conv<DocType>): Promise<DocType[]> {
        const eventuals = new Array<DocType>

        const db = (await this.idb)
        const tx = db.transaction(IDB_STORE_NAME, "readwrite")

        for await (const cursor of tx.store) {
            const raw = FromIndexedDBabledToOrigin<DocType>(cursor.value)

            // if cond not satisfied => pass it
            console.log("CATCHED RAW", raw)
            if (!cond(raw)) { continue }

            // if catch it
            const converted = conv(raw);

            tx.store.put(FromOriginToIndexedDBabled(converted), cursor.key)
            eventuals.push(converted)
        }

        await tx.done

        return eventuals
    }
}
