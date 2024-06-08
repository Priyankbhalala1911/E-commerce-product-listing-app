import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name: "authentication",
    initialState: {
        user: null
    },
    reducers: {
        login(state, action) {

            if (action.payload) {
                state.isAuth = true;
            }

        },

        logOut(state, action) {
            state.isAuth = false
        },

        signup(state, action) {
            if (action.payload) {
                state.isAuth = true;
            }
        }
    }
})

export const {login,logOut,signup} = userAuthSlice.actions;
export default userAuthSlice;