import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SignupPage } from './signup.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let router: Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPage],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should go to login on signup', () => {
spyOn(router, 'navigate');

component.signup()

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
});
