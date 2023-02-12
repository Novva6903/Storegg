export interface IProductAPIResult {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}

export interface IActionReducer {
    type: string,
    payload?: any
}

export interface IPreviewProduct {
    id: number,
    title: string,
    image: string,
    price: number
}

export interface ISearchParams{
    search?: string
}

export interface IIdParams{
    id?: string
}