import { createStore, combineReducers } from "redux"
import currencyReducer from "./currencyReducer"
import detailProductReducer from "./detailProductReducer"
import productBoughtReducer from "./productBoughtReducer"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import sellIdGeneratorReducer from "./sellIdGeneratorReducer"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducerList = combineReducers({
    detail: detailProductReducer,
    currency: currencyReducer,
    bought: productBoughtReducer,
    sellId: sellIdGeneratorReducer
})

const persistedReducer = persistReducer(persistConfig, reducerList)

const store = createStore(persistedReducer)

export default store