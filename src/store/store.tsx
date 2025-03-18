import { configureStore } from "@reduxjs/toolkit";
import CardSystem from "./CardSystem";
import AuthSlice from "../features/auth/signin/AuthSlice";
const store= configureStore({
    reducer:{
        cart:CardSystem,
        auth:AuthSlice
    }
})
export default store