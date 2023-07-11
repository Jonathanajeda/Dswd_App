import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>) { }

  canLoad(): Observable<boolean> {
    return of(true);
  }
}
