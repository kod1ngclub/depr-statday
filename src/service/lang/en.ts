import { LangMap, LangPack } from "../interface/lang"

const EN_LANGNAME = "en-US"

class EnLangMap implements LangMap {
    LABEL_DATE(): string { return "Date" }
    LABEL_HOW_MANY_TASKS(): string { return "Number of Tasks" }
    LABEL_HOW_MANY_TAGS(): string { return "Number of Tags" }

    FORMAT_DATE(year: number, month: number, day: number): string { return `${year}/${month}/${day}` }

    VALUE_AVERAGE(): string { return "Average" }

    TITLE_HOW_MANY_OPEN_TASKS_PER_DAY(): string { return "How many tasks were opened per day" }
    TITLE_HOW_MANY_CLOSE_TASKS_PER_DAY(): string { return "How many tasks were completed per day" }
    TITLE_HOW_MANY_EXPIRE_TASKS_PER_DAY(): string { return "How many tasks were expired per day" }
    TITLE_HOW_MANY_PASS_TASKS_PER_DAY(): string { return "How many tasks were passed per day" }
    TITLE_HOW_MANY_TAGS(): string { return "Current number of tags" }
    TITLE_HOW_MANY_TAGS_IN_TASKS_UNTIL_NOW(): string { return "How many tags were used until now" }
}

const EN_LANGMAP = Object.freeze(new EnLangMap())

export class EnLangPack implements LangPack {
    langname(): string { return EN_LANGNAME }

    map(): LangMap { return EN_LANGMAP }
}
