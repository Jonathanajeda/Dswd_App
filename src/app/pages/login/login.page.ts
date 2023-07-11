import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPgeForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { AppState } from 'src/Store/AppState';
import { show, hide } from 'src/Store/loading/loading.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new LoginPgeForm(this.formbuilder).createForm();
  }

  forgotEmailPassword(){
    this.store.dispatch(show())

    setTimeout(() => {
      this.store.dispatch(hide())
    }, 2000 )

    
  }

  login() {
    this.router.navigate(['home']);
  }
  signup() {
    this.router.navigate(['signup']);
  }

}
