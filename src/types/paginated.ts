export interface Paginated<T> {
    data: Array<T>,
    first: number,
    items: number,
    last: number,
    next: number | null,
    pages: number,
    prev: number | null
}

export type PaginateInfo = Omit<Paginated<never>, "data">