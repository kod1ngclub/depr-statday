import { Color } from "../shared/color"

export type TagName = string & { __brand: "BRAND_TYPE_DEFINATION_TAG" }

export type Tag = {
    name: TagName
    color: Color
}
