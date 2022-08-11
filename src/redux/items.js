import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.value += action.payload
        },
        removeItem: (state, action) => {
            state.value += action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { setItems, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;