import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export class CS {
    cs(...classes: string[]) {
        const ret = twMerge(clsx(classes))
        return ret
    }
}