import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
    name : 'data',
    initialState : '',
    reducers : {
        wordFn(state,action){
            return  state = action.payload
        }
    }
})
export const {wordFn} = wordSlice.actions;
export default wordSlice.reducer;
