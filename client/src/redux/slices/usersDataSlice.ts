import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UsersState = User[];

const initialState: UsersState = [];

const usersDataSlice = createSlice({
    name: 'usersData',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        addMovieToWatchList: (state, action: PayloadAction<{ email: string; movie: Movie }>) => {
            const { email, movie } = action.payload;
            const user = state.find(user => user.email === email);
            if (user) {
                user.watchList.push(movie);
            }
        },
        removeMovieFromWatchList: (state, action: PayloadAction<{ email: string; movie: Movie }>) => {
            const { email, movie } = action.payload;
            const user = state.find(user => user.email === email);
            if (user) {
                user.watchList = user.watchList.filter(m => m.Title !== movie.Title);
            }
        },
    },
});

export const { addUser, addMovieToWatchList, removeMovieFromWatchList } = usersDataSlice.actions;

export default usersDataSlice.reducer;