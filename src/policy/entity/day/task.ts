import { TagName } from "./tag"

import { Id } from "../shared/id"

export enum TaskState {
    Opened, // being now
    Closed, // completed it
    Expired, // deleted cuz the day passed
    Passed // intentionally passed it to the next day
}

export type Task = {
    id: Id
    title: string
    list: Array<string>
    tagname: TagName
    state: TaskState
}
