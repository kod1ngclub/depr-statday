import { LangMap, LangPack } from "../interface/lang"

const KO_LANGNAME = "ko-KR"

class KoLangMap implements LangMap {
    LABEL_DATE(): string { return "날짜" }
    LABEL_HOW_MANY_TASKS(): string { return "Task 개수" }
    LABEL_HOW_MANY_TAGS(): string { return "Tag 개수" }

    FORMAT_DATE(year: number, month: number, day: number): string { return `${year}/${month}/${day}` }

    VALUE_AVERAGE(): string { return "평균값" }

    TITLE_HOW_MANY_OPEN_TASKS_PER_DAY(): string { return "일일 Task 생성 개수" }
    TITLE_HOW_MANY_CLOSE_TASKS_PER_DAY(): string { return "일일 Task 완료 개수" }
    TITLE_HOW_MANY_EXPIRE_TASKS_PER_DAY(): string { return "일일 Task 만료 개수" }
    TITLE_HOW_MANY_PASS_TASKS_PER_DAY(): string { return "일일 Task 미루기 개수" }
    TITLE_HOW_MANY_TAGS(): string { return "현재 Tag 개수" }
    TITLE_HOW_MANY_TAGS_IN_TASKS_UNTIL_NOW(): string { return "현재까지의 Tag 사용 현황" }
}

const KO_LANGMAP = Object.freeze(new KoLangMap())

export class KoLangPack implements LangPack {
    langname(): string { return KO_LANGNAME }

    map(): LangMap { return KO_LANGMAP }
}
