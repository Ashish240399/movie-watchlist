import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Loader = {
    fn: boolean;
}

const initialState = {
    fn :false
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<Loader>) => {
            return action.payload;
        },
        clearLoader: () => initialState,
    },
});

export const { setLoader, clearLoader } = loaderSlice.actions;

export default loaderSlice.reducer;