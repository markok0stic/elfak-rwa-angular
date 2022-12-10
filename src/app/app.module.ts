import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {userReducer} from "./store/user/user.reducer";
import {AppState} from "./app.state";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/user/user.effects";
import {InterceptorService} from "./auth/interceptor";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { RegisterComponent } from './components/register/register.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeComponent} from "./components/home/home.component";
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from "@fullcalendar/angular";
import interactionPlugin  from "@fullcalendar/interaction";
import daygridPlugin  from "@fullcalendar/daygrid";
import { RangeDatePickerComponent } from './components/range-date-picker/range-date-picker.component';
import {MatDatepickerModule, MatDateRangeInput} from "@angular/material/datepicker";
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PeriodSchedulerComponent } from './components/period-scheduler/period-scheduler.component';

FullCalendarModule.registerPlugins([interactionPlugin, daygridPlugin])
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    CalendarComponent,
    RangeDatePickerComponent,
    RequestsTableComponent,
    PeriodSchedulerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    StoreModule.forRoot<AppState>({
      userState: userReducer,
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),

    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatStepperModule,
    MatSelectModule,
    MatRippleModule,
    MatChipsModule,
    MatBadgeModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
