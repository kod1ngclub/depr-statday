import { DayUsecaseInterface } from "./interface/day"

import { Task } from "../entity/day/task";
import { Id } from "../entity/shared/id";

import { Store } from "../../service/interface/store";

export class DayUsecaseImpl implements DayUsecaseInterface {
    OpenTask(task: Task): void {
        throw new Error("Method not implemented.");
    }
    CloseTask(id: Id): void {
        throw new Error("Method not implemented.");
    }
    EditTask(id: Id, data: Task): void {
        throw new Error("Method not implemented.");
    }
    ExpireTask(id: Id): void {
        throw new Error("Method not implemented.");
    }
    PassTask(id: Id, current: Date): void {
        throw new Error("Method not implemented.");
    }
}
