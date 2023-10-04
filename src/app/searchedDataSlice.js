import { createSlice } from "@reduxjs/toolkit";

const searchedDataSlice = createSlice({
    name : 'searchedData',
    initialState : [],
    reducers: {
        wordDetailsFn(state,action){
            state.push(action.payload)
        },
    }
})

export const {wordDetailsFn} = searchedDataSlice.actions;
export default searchedDataSlice.reducer;