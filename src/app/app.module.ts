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
    ViewAllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FuelTypeService,PostDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
