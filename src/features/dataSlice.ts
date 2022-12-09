import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variant } from "interfaces/Variant";

export interface DataState {
    stock: Variant[] | [],
}

const initialState: DataState = {
    stock: [],
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addToData: (state, action: PayloadAction<Variant[]>) => {
            state.stock = action.payload;
        },
    }
})

export const {addToData} = dataSlice.actions;

export const selectFilteredData = (state:any, name:string) => 
    name.length > 0 ? state.data.stock.filter((item: Variant) => item.name.toLowerCase().includes(name.toLowerCase())) : [];
    

    

export default dataSlice.reducer;