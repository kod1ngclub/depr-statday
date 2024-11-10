export type Cond<T> = (item: T) => boolean
export type Conv<T> = (item: T) => T

export interface Store<DocType> {
    read(cond: Cond<DocType> | null): Promise<Array<DocType>>
    write(item: DocType): Promise<DocType>
    edit(cond: Cond<DocType>, conv: Conv<DocType>): Promise<Array<DocType>>
}
