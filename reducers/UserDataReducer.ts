import { AnyAction } from "redux";

const initialState = {};

export default function(
    state=initialState,
    action: AnyAction
) {
    switch(action.type) {
        case "STORE_USER_DATA":
            return state = action.payload;
        default:
            return state;
    }
}
