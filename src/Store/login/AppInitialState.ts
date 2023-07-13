export interface LoadingState {
  show: boolean;
}

export interface LoginState {
  error: null;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  isRecoveredPassword: boolean;
  isRecoveringPassword: boolean;
  user: null;
}

export interface AppState {
  loading: LoadingState;
  login: LoginState;
}

export const AppInitialState: AppState = {
  loading: {
    show: false
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
    user: null
  }
};
