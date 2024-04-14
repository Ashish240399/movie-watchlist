import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState:Alert={
    type:"info",
    content:""
}

const alertbarSlice=createSlice({
    name:"alertbar",
    initialState,
    reducers:{
        setAlert:(state,action:PayloadAction<Alert>)=>{
            return action.payload;
        },
        clearAlert:()=>initialState
    }
})

export const {setAlert,clearAlert} = alertbarSlice.actions;

export default alertbarSlice.reducer;