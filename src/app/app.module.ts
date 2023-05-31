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
import { CarComponent } from './car/car.component';
import { FuelTypeService } from './car/Service/fuel-type.service';

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
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FuelTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
