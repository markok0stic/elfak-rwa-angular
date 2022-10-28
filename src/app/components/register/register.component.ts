import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {RegisterUser} from "../../models/user";
import {registerUser} from "../../store/user/user/user.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);

  loading: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.loading = state.userState.loading;
    });
  }

  handleSubmit() {
    if (
      !this.email.value ||
      !this.password.value ||
      !this.firstName.value ||
      !this.lastName.value ||
      !this.phone.value
    )
      return;

    const registerData: RegisterUser = {
      email: this.email.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
    };

    this.store.dispatch(registerUser({ registerData }));
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
