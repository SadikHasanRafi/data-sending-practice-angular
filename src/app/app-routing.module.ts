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
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SimpleFormComponent } from './reactive-form/simple-reactive-form/simple-form/simple-form.component';
import { ReactiveFormValidationAgainComponent } from './reactive-form-validation-again/reactive-form-validation-again.component';
import { NestedFieldReactiveFormComponent } from './nested-field-reactive-form/nested-field-reactive-form.component';
import { ReactiveFormNestedFieldAgainComponent } from './reactive-form-nested-field-again/reactive-form-nested-field-again.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateRouteComponent } from './private-route/private-route.component';
import { LoginComponent } from './login/login.component';
import { canActivateChild } from './guard/admin.guard';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'children', component: ChildComponent },
  { path: '', component: RoomsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'rxjs-country', component: RxJsCountryComponent },
  { path: 'more', component: MorePracticesComponent , children:[
    { path:"add-users", component:PostMethodComponent, pathMatch: 'full' },  
    { path:"template-driven-from", component:TemplateDrivenFormComponent },  
    { path:"simple-reactive-form", component:SimpleFormComponent },  
    { path:"nested-form-field-again", component:ReactiveFormNestedFieldAgainComponent },  
    { path:"reactive-form-validation-2", component:ReactiveFormValidationAgainComponent },  
    { path:"nested-form-field", component:NestedFieldReactiveFormComponent },  
    { path:"private-route", component:PrivateRouteComponent , canActivate:[authGuard]  },  
    { path:"login", component:LoginComponent},  
    { path:"dynamic-route", component:DynamicRouteComponent },  
    { path:"dynamic-route/:name", component:CountryDetailsComponent },  
    { path:"view-all-users", component:ViewAllUsersComponent, children:[
      { path:"view-single-user/:id", component:ViewSingleUserComponent },
    ]}
  ]}, 
   { path: '**', component: PageNotFoundComponent },

];  
//assalamuakaim ami sadik hasan rafi ekhane frontend devloper er intern hisebe join korchi hafiz vai er under e asi .. apnar sathe introductory sakhat kar er jonno esechi kemon asen ?
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
