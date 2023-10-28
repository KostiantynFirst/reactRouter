import { configureStore} from "@reduxjs/toolkit";
// import {createAction, createReducer } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
// import logger from "redux-logger";

// import { myValueSlice } from "./myValue/slice";
import { userSlice } from "./UserSlice";



// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(10, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });

export const store = configureStore({
    reducer: {
        // myValue: myReducer,
        // myValue: myValueSlice.reducer,
        user: userSlice.reducer,
    },
    // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
})