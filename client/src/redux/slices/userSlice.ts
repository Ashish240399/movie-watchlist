import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    email: string;
    watchList: Movie[]
};

const initialState: User = {
    email: '',
    watchList: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;