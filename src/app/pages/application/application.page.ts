import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  application(){
    this.router.navigate(['upload'])
  }

}
