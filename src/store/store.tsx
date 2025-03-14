import { configureStore } from "@reduxjs/toolkit";
import CardSystem from "./CardSystem";
const store= configureStore({
    reducer:{
        cart:CardSystem
    }
})
export default store