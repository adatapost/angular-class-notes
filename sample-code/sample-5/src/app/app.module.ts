import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule, ButtonsModule } from "ngx-bootstrap";

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ProgramComponent } from './program/program.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProgramComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
