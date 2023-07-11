import { createAction } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { loadingReducer } from "./loading.reducer";
import { LoadingState } from "./loading.state"


describe('loading store', () => {

    it('show', () => {
        const initialState: LoadingState = {show: false};
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })
    it('hide', () => {
        const initialState: LoadingState = {show: true};
        const newState = loadingReducer(initialState, hide());

        expect(newState).toEqual({show: false});
    })
    it('should keep state if action is unknown', () => {
        const initialState: LoadingState = {show: true};
        const action = createAction("Unknown")
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })
})