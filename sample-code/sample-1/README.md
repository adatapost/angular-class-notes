Display component properties
===

We will use {{ }} ng expression or string interpolation syntax to display the fields/properties of AppComponent class.

app.component.ts
---
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	/* Fields */
	title = 'Tutorial: Displaying the data';

	courseId: number = 101;
	courseName: string = "Full Stack Angular";
	courseFees: number = 30000;
	duration: number = 50;  // Hours
	available: boolean = true;
	paymentMode: Array<String> = ["Cash","Netbanking","Draft","Bank Transfer"];
	level: number = 1;   // 1 for expert
}  

app.component.html
---

<div class="container">
  <h1 class="text-center border-bottom">{{ title }}</h1>
  <div class="row">
    <div class="col-5 center">
      <div class="card">
        <div class="card-header bg-primary text-white">
         <h4 class="card-title">{{ courseName }}</h4>
        </div>
        <div class="card-body">
          <p><strong>Course Code</strong></p>
          <p>{{courseId}}</p>
          <p><strong>Course Title</strong></p>
          <p>{{courseName}}</p>          
          <p><strong>Duration</strong></p>
          <p>{{duration}} Hours</p>  
          <p><strong>Fees</strong></p>
          <p>{{courseFees}}</p>  
          <p><strong>Payment Mode</strong></p>
          <p>{{paymentMode}}</p> 
          <p><strong>Course Level</strong></p>
          <p>{{level}} - Novice to Expert</p>
          <p><strong>Course Status</strong></p>
          <p>{{available ? 'Available' : 'Closed'}}</p>     
        </div>
        <div class="card-footer">
          For more information please contact to our course cordinator.
        </div>
      </div>
    </div>
  </div>
</div>

