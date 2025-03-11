import { configureStore } from "@reduxjs/toolkit";
import CardSystem from "./CardSystem";
const store= configureStore({
    reducer:{
        name:CardSystem
    }
})
export default store