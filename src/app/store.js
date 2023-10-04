// store.js
import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./wordSlice";
import searchedDataSlice from './searchedDataSlice'
const store = configureStore({
    reducer : {
        word : wordSlice,
        searchedData : searchedDataSlice
    }
})

export default store;
