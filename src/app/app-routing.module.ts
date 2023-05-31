import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'children', component: ChildComponent },
  { path: '', component: RoomsComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
