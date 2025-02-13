import { configureStore } from "@reduxjs/toolkit";
import cartSystem from './slice/cartSlice' 

const store = configureStore({
    reducer:{
        allCart : cartSystem
    }
})

export default store;