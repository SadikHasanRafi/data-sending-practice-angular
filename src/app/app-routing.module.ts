import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CarsComponent } from './cars/cars.component';
import { PostsComponent } from './posts/posts.component';
import { RxJsCountryComponent } from './rx-js-country/rx-js-country.component';
import { MorePracticesComponent } from './more-practices/more-practices.component';
import { PostMethodComponent } from './post-method/post-method.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewSingleUserComponent } from './view-all-users/view-single-user/view-single-user.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'children', component: ChildComponent },
  { path: '', component: RoomsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'rxjs-country', component: RxJsCountryComponent },
  { path: 'more', component: MorePracticesComponent , children:[
    { path:"add-users", component:PostMethodComponent, pathMatch: 'full' },  
    { path:"view-all-users", component:ViewAllUsersComponent, children:[
      { path:"view-single-user/:id", component:ViewSingleUserComponent },
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
