import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState:Modal={
    content:"",
    contentHead:"",
    actions:[]
}

const modalSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{
        setModal:(state,action:PayloadAction<Modal>)=>{
            return action.payload;
        },
        clearModal:()=>initialState
    }
})

export const {setModal,clearModal} = modalSlice.actions;

export default modalSlice.reducer;