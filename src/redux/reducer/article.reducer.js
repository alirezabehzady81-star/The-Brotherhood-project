import { createSlice } from "@reduxjs/toolkit";

export const articleReducer = createSlice({
    initialState: {
        list: [],
        params: {
            RowsOfPage:"5",
            PageNumber: "1"
        },
        newId: null
    },

    name: "articleReducer",

    reducers: {
        addLimit: (state, action) => {
            state.params.RowsOfPage = action.payload
            state.params.PageNumber = action.payload; 
        },
        updateNewId: (state, action) => {
            state.newId = action.payload

        },
        // changeQuantity:(state,action)=>{
        //     let{id,change} =action.payload
        //     let item =state.map(
        //         (item)=>item.id = id
        //     )
        //     item.quantity =change
        // }
    }
})

export const { addLimit, updateNewId } = articleReducer.actions;