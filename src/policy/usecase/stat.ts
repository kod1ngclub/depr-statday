import { Day } from "../entity/day/day";
import { DoughnutGraph } from "../entity/stat/doughnut";
import { LineGraph } from "../entity/stat/line";
import { StatUsecaseInterface } from "./interface/stat"

export class StatUsecaseImpl implements StatUsecaseInterface {
    HowManyOpenTasksPerDay(day: Array<Day>): LineGraph {
        throw new Error("Method not implemented.");
    }
    HowManyCloseTasksPerDay(day: Array<Day>): LineGraph {
        throw new Error("Method not implemented.");
    }
    HowManyExpireTasksPerDay(day: Array<Day>): LineGraph {
        throw new Error("Method not implemented.");
    }
    HowManyPassTasksPerDay(day: Array<Day>): LineGraph {
        throw new Error("Method not implemented.");
    }
    HowManyTags(day: Array<Day>): LineGraph {
        throw new Error("Method not implemented.");
    }
    HowManyTagInTasksUntilNow(day: Array<Day>): DoughnutGraph {
        throw new Error("Method not implemented.");
    }
}
