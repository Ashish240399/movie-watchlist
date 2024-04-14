// Importing necessary functions from Redux toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defining the type for the loader state
type Loader = {
    fn: boolean;
}

// Defining the initial state for the loader
const initialState = {
    fn :false
};

// Creating a slice for the loader
const loaderSlice = createSlice({
    name: 'loader', // Name of the slice
    initialState, // Initial state
    reducers: { // Reducers
        // setLoader reducer: sets the state to the payload of the action
        setLoader: (state, action: PayloadAction<Loader>) => {
            return action.payload;
        },
        // clearLoader reducer: resets the state to the initial state
        clearLoader: () => initialState,
    },
});

// Exporting the actions
export const { setLoader, clearLoader } = loaderSlice.actions;

// Exporting the reducer
export default loaderSlice.reducer;