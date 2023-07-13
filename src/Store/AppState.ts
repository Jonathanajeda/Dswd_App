import { LoadingState } from './loading/loading.state';
import { LoginState } from './login/LoginState';


export interface AppState {
  loading: LoadingState;
  login: LoginState;
}
