import { Color } from "../shared/color"
import { Point } from "../shared/point"

export type Line = {
    name: string
    color: Color
    points: Array<Point>
}

export type LineGraph = {    
    title: string
    label: { x: string, y: string }
    lines: Array<Line>
}
