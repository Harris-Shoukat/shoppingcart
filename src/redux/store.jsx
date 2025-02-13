import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/cartSlice' 

const store = configureStore({
    reducer:{
        allCart : cartSlice
    }
})

export default store;