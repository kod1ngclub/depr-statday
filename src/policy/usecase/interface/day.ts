import { Task } from "../../entity/day/task"
import { Id } from "../../entity/shared/id"

export interface DayUsecaseInterface {
    OpenTask(task: Task): void
    CloseTask(id: Id): void
    EditTask(id: Id, data: Task): void
    ExpireTask(id: Id): void
    PassTask(id: Id, current: Date): void
}
