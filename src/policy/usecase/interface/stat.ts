import { Day } from "../../entity/day/day"
import { DoughnutGraph } from "../../entity/stat/doughnut"
import { LineGraph } from "../../entity/stat/line"

export interface StatUsecaseInterface {
    HowManyOpenTasksPerDay(day: Array<Day>): LineGraph
    HowManyCloseTasksPerDay(day: Array<Day>): LineGraph
    HowManyExpireTasksPerDay(day: Array<Day>): LineGraph
    HowManyPassTasksPerDay(day: Array<Day>): LineGraph
    HowManyTags(day: Array<Day>): LineGraph
    HowManyTagInTasksUntilNow(day: Array<Day>): DoughnutGraph
}
