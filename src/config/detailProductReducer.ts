import { createSlice } from "@reduxjs/toolkit";

const initState = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0,
    }
}

const detailSlices = createSlice({
    name: "detail product",
    initialState: initState,
    reducers: {
        fetchDetailProduct: (state, action) => {
            state.id = action.payload.id
            state.category = action.payload.category
            state.description = action.payload.description
            state.image = action.payload.image
            state.price = action.payload.price
            state.rating = action.payload.rating
            state.title = action.payload.title
        },
    }
})

export const {fetchDetailProduct, } = detailSlices.actions
export const detailSelector = (state: any) => state.detail
export default detailSlices.reducer