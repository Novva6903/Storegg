import { createSlice } from "@reduxjs/toolkit";

const initState = {
    value: 200
}

const currencySlices = createSlice({
    name: "money system",
    initialState: initState,
    reducers: {
        decreaseMoneyValue: (state, action) => {
            state.value = state.value - action.payload
        },
        increaseMoneyValue: (state, action) => {
            state.value = state.value + action.payload
        },
        changeMoneyValue: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {decreaseMoneyValue, increaseMoneyValue, changeMoneyValue} = currencySlices.actions
export const currencySelector = (state: any) => state.currency
export default currencySlices.reducer