import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

// cart slice creates an object like this

// {
//     actions: {
//         addItem
//     },
//     reducer: 
// }

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer