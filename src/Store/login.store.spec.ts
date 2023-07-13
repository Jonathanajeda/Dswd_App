import { AppInitialState } from "./login/AppInitialState"
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login/login.action"
import { loginReducer } from "./login/login.reducer"
import { LoginState } from "./login/LoginState"

describe("Login store", () => {

    it('recoverPassword', () => {
        const initialState: LoginState = AppInitialState.login;
        const newState = loginReducer(initialState, recoverPassword());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        })
    })
    it('recoverPasswordSuccess', () => {
        const initialState: LoginState = AppInitialState.login;
        const newState = loginReducer(initialState, recoverPasswordSuccess());
        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        })
    })
    it('recoverPasswordFail', () => {
        const initialState: LoginState = AppInitialState.login;
        const error = {error: 'error'};
        const newState = loginReducer(initialState, recoverPasswordFail({error}));
        expect(newState).toEqual({
            ...initialState,
            error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        })
    })
})