import { Color } from "../shared/color"

export type Fragment = {
    name: string
    color: Color
    value: number
}

export type DoughnutGraph = {
    title: string
    fragments: Array<Fragment>
}
