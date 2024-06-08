import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlices";
import userAuthSlice from "./Slices/userAuthSlice";

const store = configureStore({
    reducer:{
        product:userSlice.reducer,
        user:userAuthSlice.reducer
    }
})

export default store