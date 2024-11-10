export interface LangMap {
    LABEL_DATE(): string
    LABEL_HOW_MANY_TASKS(): string
    LABEL_HOW_MANY_TAGS(): string

    FORMAT_DATE: (year: number, month: number, day: number) => string
    
    VALUE_AVERAGE(): string
    
    TITLE_HOW_MANY_OPEN_TASKS_PER_DAY(): string
    TITLE_HOW_MANY_CLOSE_TASKS_PER_DAY(): string
    TITLE_HOW_MANY_EXPIRE_TASKS_PER_DAY(): string
    TITLE_HOW_MANY_PASS_TASKS_PER_DAY(): string
    TITLE_HOW_MANY_TAGS(): string
    TITLE_HOW_MANY_TAGS_IN_TASKS_UNTIL_NOW(): string
}

/*
 * LABEL: label text in graph
 * FORMAT: text format function for x or y in graph
 * VALUE: some frequently-used texts for x or y in graph
 * TITLE: graph title texts
 */

export interface LangPack {
    langname(): string
    map(): LangMap
}
