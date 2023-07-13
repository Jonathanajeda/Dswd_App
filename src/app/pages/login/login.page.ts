import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/Store/AppState';
import { show, hide } from 'src/Store/loading/loading.action';
import { recoverPassword } from 'src/Store/login/login.action';
import { XmlDbService } from 'src/app/xml-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private xmlDbService: XmlDbService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.store.select('login').subscribe((loginState) => {
      if (loginState.isRecoveringPassword) {
        this.store.dispatch(show());
      }
    });
  }

  login() {
    if (this.form.valid) {
      // Perform login logic here
    }
  }

  forgotEmailPassword() {
    this.store.dispatch(recoverPassword());

    setTimeout(() => {
      this.store.dispatch(hide());
    }, 2000);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
