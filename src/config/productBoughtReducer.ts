import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { IProductAPIResult } from "./interface";

type product = {
    bought: IProductAPIResult[]
}

const initState: product = {
    bought: []
}

const boughtSlices = createSlice({
    name: "add product",
    initialState: initState,
    reducers: {
        addProduct: (state, action) => {
            state.bought.push(action.payload)
        },
        removeProduct: (state, action) => {
            const removeBought = state.bought.filter(
                item => {
                    if (item.id !== action.payload.id) return true
                }
            )

            const newBought = removeBought.filter(
                item => {
                    if (item.id > action.payload.id) {
                        item.id = item.id - 1
                    }
                    return true
                }
            )

            state.bought = newBought
        },
    }
})

export const {addProduct, removeProduct} = boughtSlices.actions
export const boughtSelector = (state: any) => state.bought
export default boughtSlices.reducer