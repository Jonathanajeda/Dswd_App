import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ApplicationPage } from './application.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
describe('ApplicationPage', () => {
  let component: ApplicationPage;
  let fixture: ComponentFixture<ApplicationPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [ApplicationPage],
    imports: [IonicModule.forRoot(),
    AppRoutingModule
  ]
}).compileComponents();

    fixture = TestBed.createComponent(ApplicationPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should go to upload on Next', () => {
    spyOn(router, 'navigate');

component.application()

      expect(router.navigate).toHaveBeenCalledWith(['upload']);

  })
});
