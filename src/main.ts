import { IndexedDBStore } from "./service/store/indexedDB";

const i = new IndexedDBStore<{ a: string }>()

i.write({ a: "hello, World"})
.then(d => console.log("WRITE", d))
.then(() => {
    i.read(null).then(d => console.log("READ ALL!!", d))
})

i.edit((i) => (i.a == "hello, World"), (i) => {return { a: "Something" }})
