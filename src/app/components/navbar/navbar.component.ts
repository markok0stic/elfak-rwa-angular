import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AppState} from "../../app.state";
import {logoutUser} from "../../store/user/user/user.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User | null = null;
  baseUrl: string = environment.api + '/';

  constructor(private store: Store<AppState>, public router: Router) { }

  ngOnInit(): void {
    this.store.subscribe((state) => { this.user = state.userState.user });
  }

  handleLog() {
    if (this.user) {
      this.store.dispatch(logoutUser());
    } else {
      this.router.navigate(['']);
    }
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
