import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter-app",
    initialState:0,
    reducers:{
        increment : (state) =>{
            return state+1;

        },

        reset: ( ) => {
            return 0;
        },

        decrement: (state,) => {
            return state -1 ;
        }

    }
})


export const {increment , reset , decrement} = counterSlice.actions;

export default counterSlice.reducer