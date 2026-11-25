import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./reducer/article.reducer";

export const store = configureStore({
    reducer: {
        article: articleReducer.reducer
    }
})