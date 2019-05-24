import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoggedStatusService } from '../shared/logged-status/logged-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loggedStatus: LoggedStatusService) {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }
  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
    this.loggedStatus.onLogged(this.form.value.userName);
  }
}
