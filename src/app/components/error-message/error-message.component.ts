import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string = '';
  @Input() field: FormGroup | AbstractControl | null = new FormGroup({});
  @Input() error: string = '';

  constructor() {}

  ngOnInit() {}

  shouldShowComponent() {
    if (this.field instanceof FormGroup && this.field?.touched && this.field?.errors?.['required']) {
      return true;
    }
    return false;
  }
}
