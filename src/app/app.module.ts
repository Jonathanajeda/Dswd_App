import { XmlDbService } from './xml-db.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from 'src/Store/App.Store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, XmlDbService],
  bootstrap: [AppComponent],

})
export class AppModule {}
