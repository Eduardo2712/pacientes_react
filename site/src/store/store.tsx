import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reduxModal from "./reduxModal/reduxModal.reducer";

const rootReducer = combineReducers({
    reduxModal: reduxModal,
});

export default configureStore({
    reducer: rootReducer,
});
