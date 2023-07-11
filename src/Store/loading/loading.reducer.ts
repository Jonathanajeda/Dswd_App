import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { LoadingState } from "./loading.state";
 
const initialState: LoadingState = {
    show: false
};

const reducer = createReducer(
    initialState,
    on(show, () => {
        return { show: true };
    }),
    on(hide, () => {
        return { show: false };
    })
);

export function loadingReducer(state: LoadingState = initialState, action: any): LoadingState {
    return reducer(state, action);
}
