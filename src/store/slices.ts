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
            console.log("state: " );
            console.log(state.data);
            
        },
        removeFavourite : (state, action) => {
            state.data.find((index) => {
                if (index === action.payload) {
                    state.data.splice(action.payload, 1)
                    console.log("state: " );
                    console.log(state.data);
                }
            })
        }
    }
})

export const { addFavourite, removeFavourite } = slices.actions

export default slices.reducer