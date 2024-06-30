import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    data: [],
}

export const slices = createSlice({
    name: "applicationStore",
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            state.data.push(action.payload);
            console.log("New state: " );
            console.log(state.data);
            
        },
        removeFavourite: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        }

    }
})

export const { addFavourite, removeFavourite } = slices.actions

export default slices.reducer