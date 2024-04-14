// Importing necessary functions from Redux toolkit
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Defining the initial state for the modal
const initialState:Modal={
    content:"", // Content of the modal
    contentHead:"", // Header of the modal
    actions:[] // Actions in the modal
}

// Creating a slice for the modal
const modalSlice=createSlice({
    name:"modal", // Name of the slice
    initialState, // Initial state
    reducers:{ // Reducers
        // setModal reducer: sets the state to the payload of the action
        setModal:(state,action:PayloadAction<Modal>)=>{
            return action.payload;
        },
        // clearModal reducer: resets the state to the initial state
        clearModal:()=>initialState
    }
})

// Exporting the actions
export const {setModal,clearModal} = modalSlice.actions;

// Exporting the reducer
export default modalSlice.reducer;