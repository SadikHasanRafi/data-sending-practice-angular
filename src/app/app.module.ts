import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FooterComponent } from './footer/footer.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { FuelTypeService } from './cars/Service/fuel-type.service';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { RxJsCountryComponent } from './rx-js-country/rx-js-country.component';
import { MorePracticesComponent } from './more-practices/more-practices.component';
import { PostMethodComponent } from './post-method/post-method.component';
import { PostDatabaseService } from './post-method/Service/post-database.service';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewSingleUserComponent } from './view-all-users/view-single-user/view-single-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { EmptyFieldDirectiveDirective } from './template-driven-form/empty-field-directive/empty-field-directive.directive';
import { SimpleFormComponent } from './reactive-form/simple-reactive-form/simple-form/simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormValidationAgainComponent } from './reactive-form-validation-again/reactive-form-validation-again.component';
import { NestedFieldReactiveFormComponent } from './nested-field-reactive-form/nested-field-reactive-form.component';
import { ReactiveFormNestedFieldAgainComponent } from './reactive-form-nested-field-again/reactive-form-nested-field-again.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { LoginComponent } from './login/login.component';
import { PrivateRouteComponent } from './private-route/private-route.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NavbarComponent,
    FooterComponent,
    RoomComponent,
    RoomsComponent,
    ContainerComponent,
    CarsComponent,
    PostsComponent,
    RxJsCountryComponent,
    MorePracticesComponent,
    PostMethodComponent,
    ViewAllUsersComponent,
    ViewSingleUserComponent,
    TemplateDrivenFormComponent,
    EmptyFieldDirectiveDirective,
    SimpleFormComponent,
    ReactiveFormValidationAgainComponent,
    NestedFieldReactiveFormComponent,
    ReactiveFormNestedFieldAgainComponent,
    DynamicRouteComponent,
    CountryDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    PrivateRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAl_HJRSmFkKxMtxzyUZ8LZS4xZboMwgJs",
      authDomain: "angular-test-59971.firebaseapp.com",
      projectId: "angular-test-59971",
      storageBucket: "angular-test-59971.appspot.com",
      messagingSenderId: "372398654950",
      appId: "1:372398654950:web:39c638b7b3b4eb74c28227"
    }),
    AngularFireAuthModule
  ],
  providers: [FuelTypeService,PostDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
