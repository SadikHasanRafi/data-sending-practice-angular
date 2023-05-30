import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { FormsModule } from '@angular/forms';
import { Page2ChildComponent } from './page2/page2-child/page2-child.component';
import { UserService } from './page2/page2-child/service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    LocalStorageComponent,
    Page2ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
