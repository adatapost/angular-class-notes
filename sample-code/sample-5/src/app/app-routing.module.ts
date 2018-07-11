import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ProgramComponent } from './program/program.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
 { path: '', redirectTo: "/home", pathMatch: 'full' },
 { path: "home", component: HomeComponent },
 { path: "program", component: ProgramComponent},
 { path: "course", component: CourseComponent},
 { path: "**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
