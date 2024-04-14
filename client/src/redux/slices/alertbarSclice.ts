import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Initial state for the alert bar
const initialState:Alert={
    type:"info",
    content:""
}

// Creating a slice for the alert bar
const alertbarSlice=createSlice({
    name:"alertbar", // Name of the slice
    initialState, // Initial state
    reducers:{ // Reducers
        // setAlert reducer: sets the state to the payload of the action
        setAlert:(state,action:PayloadAction<Alert>)=>{
            return action.payload;
        },
        // clearAlert reducer: resets the state to the initial state
        clearAlert:()=>initialState
    }
})

// Exporting the actions
export const {setAlert,clearAlert} = alertbarSlice.actions;

// Exporting the reducer
export default alertbarSlice.reducer;