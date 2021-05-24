import { createStore, combineReducers } from "redux";
import { userDataReducer } from "../reducers";

const store = createStore(
    combineReducers({
        userData: userDataReducer
    })
);

export type StateProps = ReturnType<typeof store.getState>

export default store;
