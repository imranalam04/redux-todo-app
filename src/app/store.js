import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feautures/todo/todoSlice"

export const store = configureStore({
    reducer:todoReducer, 
})
