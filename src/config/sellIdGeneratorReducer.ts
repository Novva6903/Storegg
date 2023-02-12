import { createSlice } from "@reduxjs/toolkit";

const initState = {
    value: 1
}

const sellIdSlices = createSlice({
    name: "money system",
    initialState: initState,
    reducers: {
        increaseValue: (state) => {
            console.log(state.value)
            state.value = state.value+1
        },
        decreaseValue: (state) => {
            if (state.value <= 1) state.value = 1
            else state.value = state.value-1
        },
    }
})

export const {increaseValue, decreaseValue} = sellIdSlices.actions
export const sellIdSelector = (state: any) => state.sellId
export default sellIdSlices.reducer