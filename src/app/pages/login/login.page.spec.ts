import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/Store/loading/loading.reducer';
import { loginReducer } from 'src/Store/login/login.reducer';
import { AppState } from '@capacitor/app';  
import { login, loginFail, loginSuccess, recoverPassword } from 'src/Store/login/login.action';
import { LoginState } from 'src/Store/login/LoginState';
import { AppInitialState } from 'src/Store/login/AppInitialState';
import { User } from 'src/app/components/model/user/User';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  let page: any;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule, StoreModule.forRoot([]),
      StoreModule.forFeature("loading", loadingReducer),
      StoreModule.forFeature("login", loginReducer)
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    store = TestBed.get(Store);

    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
  }));

  it('should create form on init', () => {
    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  })

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })
  it('should go to sign up page on sign up', () =>{
    spyOn(router, 'navigate');

    component.signup();

    expect(router.navigate).toHaveBeenCalledWith(['signup']);

  })

  it('should recover email/password on forgot email/password', () =>{
    fixture.detectChanges();
    component.form.get('email')?.setValue("valid@email.com");
    page.querySelector("#recoverPasswordButton").click();
    store.select('login').subscribe(loginState => {
      expect(loginState.isRecoveringPassword).toBeTruthy
    })
  })
  it('should show loading when recovering password', () => {
    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.select('loading').subscribe (loadingState => {
      expect(loadingState.show).toBeTruthy();
    })
  })

  it('login', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loginReducer(initialState, login());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isLoggedIn: false,
      isLoggingIn: true

    })
  })

  it('loginSuccess', () => {
    const initialState: LoginState = {
      ...AppInitialState.login,
      isLoggingIn: true
    }
    const user = new User();
    user.id = "anyId"
    const newState = loginReducer(initialState, loginSuccess({user}));
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isLoggedIn: true,
      isLoggingIn: false

    })
  })

  it('loginFail', () => {
    const initialState: LoginState = {
      ...AppInitialState.login,
      isLoggingIn: true
    }
    const error = {error: 'error'}
    const newState = loginReducer(initialState, loginFail({error}));
    expect(newState).toEqual({
      ...initialState,
      error,
      isLoggedIn: false,
      isLoggingIn: false

    })
  })
});
