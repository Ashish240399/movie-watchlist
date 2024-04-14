// Importing necessary functions from Redux toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defining the type for the user state
type User = {
    email: string; // Email of the user
    watchList: Movie[] // Watchlist of the user
};

// Defining the initial state for the user
const initialState: User = {
    email: '', // Initially, the email is an empty string
    watchList: [] // Initially, the watchlist is an empty array
};

// Creating a slice for the user
const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState, // Initial state
    reducers: { // Reducers
        // setUser reducer: sets the state to the payload of the action
        setUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        // clearUser reducer: resets the state to the initial state
        clearUser: () => initialState,
    },
});

// Exporting the actions
export const { setUser, clearUser } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;