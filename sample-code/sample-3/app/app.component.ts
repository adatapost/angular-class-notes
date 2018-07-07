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
	paymentMode: string = "Draft";
	paymentModes: Array<String> = ["Cash","Netbanking","Draft","Bank Transfer"];
	level: number = 1;   // 1 for expert
}  
