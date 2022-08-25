import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './component/login/login.component';
import { ApiService, AuthService, ConfigService, UserService } from './service';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { ExcursionComponent } from './component/excursion/excursion.component';
import { ExcursionsComponent } from './component/excursions/excursions.component';
import { CommentComponent } from './component/comment/comment.component';
import { CommentsComponent } from './component/comments/comments.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { ReservationsComponent } from './component/reservations/reservations.component';
import { PastExcursionComponent } from './component/past-excursion/past-excursion.component';
import { PastExcursionsComponent } from './component/past-excursions/past-excursions.component';
import { CreateExcursionComponent } from './component/create-excursion/create-excursion.component';
import { GenerateReportComponent } from './component/generate-report/generate-report.component';
import { PopupComponent } from './component/popup/popup.component';
import { TuorguidExcursionsComponent } from './component/tuorguid-excursions/tuorguid-excursions.component';
import { LocationsComponent } from './component/locations/locations.component';
import { LocationComponent } from './component/location/location.component';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';
import { TourguidesComponent } from './component/tourguides/tourguides.component';
import { TourguideComponent } from './component/tourguide/tourguide.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comments/:excursionId', component: CommentsComponent},
  { path: 'reservations', component: ReservationsComponent},
  { path: 'pastExcursions', component: PastExcursionsComponent},
  { path: 'createExcursion', component: CreateExcursionComponent},
  { path: 'generateReport', component: GenerateReportComponent},
  { path: 'tuorguid-excursions', component: TuorguidExcursionsComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'tourguides', component: TourguidesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    HeaderComponent,
    ExcursionComponent,
    ExcursionsComponent,
    CommentComponent,
    CommentsComponent,
    ReservationComponent,
    ReservationsComponent,
    PastExcursionComponent,
    PastExcursionsComponent,
    CreateExcursionComponent,
    GenerateReportComponent,
    PopupComponent,
    TuorguidExcursionsComponent,
    LocationsComponent,
    LocationComponent,
    VehiclesComponent,
    VehicleComponent,
    TourguidesComponent,
    TourguideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
      AuthService,
      ApiService,
      UserService,
      ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
