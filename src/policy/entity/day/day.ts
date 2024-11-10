import { Task } from "./task"

import { Date } from "../shared/date"

export type Day = {
    date: Date
    story: string
    tasks: Array<Task>
}
