import { Component } from '@angular/core';
import { Course } from "./course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	/* Fields */
	title = 'Tutorial: Displaying the data';

	levels = [[0,"Begineer"],[1,"Intermediate"],[2,"Advance"],[3,"Expert"]];
	paymentModes: Array<String> = ["Cash","Draft","Net Banking","Bank Transfer"];

	course: Course = new Course(101,
		"Full stack Angular",
		"Angular is a framework which uses HTML and TypeScript to develop"
		+"the client applications.",
		3000,
		45,
		"Cash",
		1,
		true,
		"/assets/images/angular.svg");

	/* Returns css-class string */
	cardHeader(): string {
		return "card-header text-white " + ( this.course.available ? 'bg-primary' : 'bg-warning' );
	}

}  
