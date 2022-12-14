import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";
import {Store} from "@ngrx/store";
import {AppState} from "./app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User | null = null;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.userState.user;
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
