Display and edit data
===

In this example, we will create a class named "Course" and we will use its instance to represent the course data.

Step-1 Create a class file named "course.ts" at root of the app
---
You can create it manually or use following command from cLI to create a class.

```your_project>ng generate class Course```

Course.ts
---
```typescript
export class Course {
	/// Instance Fields
	id: number;
	name: string;
	description: string;
	fees: number;
	duration: number;
	paymentMode: string;
	level: number;
	available: boolean;
	image: string;

	///Constructor
	constructor(id: number = 0,
				name: string = '',
				description: string = '',
				fees: number = 0,
				duration: number = 0,
				paymentMode: string = '',
				level: number = 0,
				available: boolean = false,
				image: string = '') {
		this.id = id;
		this.name = name;
		this.description = description;
		this.fees = fees;
		this.duration = duration;
		this.paymentMode = paymentMode;
		this.level = level;
		this.available = available;
		this.image = image;
	}
}

```

app.component.ts
---
```typescript
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
```
app.component.html
---
```html
<div class="container">
  <h1 class="text-center border-bottom">
      <img src="/assets/images/ganesh.png" alt="Aum Shree Ganeshaay Namh" class="img img-responsive" style="width: 100px" />
      <br/>
     {{ title }}
  </h1>
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <div [class]="cardHeader()">
         <h4 class="card-title">{{ course.name }}</h4>
        </div>
        <div class="card-body">
          <p class="text-center">
            <img 
            [src]="course.image" 
             [title] = "course.description"
            [alt]="course.name" class="img" style="width: 100px" /> 
          </p>
          <p><strong>Course Code</strong></p>
          <p>
            <input type="number" 
            [(ngModel)] = "course.id"
            class="form-control" />
          </p>
          <p><strong>Course Title</strong></p>
          <p><input type="text"
            [(ngModel)]="course.name" 
            class="form-control" /></p>
          <p><strong>Description</strong></p>
          <p><textarea [(ngModel)]="course.description" 
            class="form-control"></textarea>
          </p>         
          <p><strong>Duration</strong></p>
          <p><input type="range" 
            max="100"
            title="{{course.duration}} hours"
            min="1" [(ngModel)]="course.duration" class="form-control"></p>  
          <p><strong>Fees</strong></p>
          <p><input type="number" [(ngModel)]="course.fees" class="form-control" /></p>  
          <p><strong>Payment Mode</strong></p>
          <p>
            <select [(ngModel)]="course.paymentMode" class="form-control">
              <option *ngFor="let m of paymentModes">{{m}}</option>
            </select>
          </p> 
          <p><strong>Course Level</strong></p>
          <p>
            <select [(ngModel)]="course.level"
             [disabled] = "!course.available"
             class="form-control">
               <option *ngFor="let entry of levels"
                  [value]="entry[0]">
                    {{ entry[1]}}
               </option>
            </select>
          </p>
          <p><strong>Course Status</strong></p>
          <p>Available/Closed ?
            <input type="checkbox" [(ngModel)]="course.available"/></p>     
        </div>
        <div class="card-footer">
          For more information please contact to our course cordinator.
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div [class]="cardHeader()">
         <h4 class="card-title">{{ course.name }}</h4>
        </div>
        <div class="card-body">
          <p class="text-center">
            <img 
            [src]="course.image" 
             [title] = "course.description"
            [alt]="course.name" class="img" style="width: 100px" /> 
          </p>
          <p><strong>Course Code</strong></p>
          <p>
            <input type="number" disabled="disabled" [value]="course.id" class="form-control" />
          </p>
          <p><strong>Course Title</strong></p>
          <p><input type="text"
            [value]="course.name" disabled="disabled" class="form-control" /></p> 
          <p><textarea 
            disabled="disabled" 
            [(ngModel)]="course.description" 
            class="form-control"></textarea>
          </p>          
          <p><strong>Duration</strong></p>
          <p><input type="range" 
            max="100"
            title="{{course.duration}} hours"
            min="1" [value]="course.duration" disabled="disabled" class="form-control"></p>  
          <p><strong>Fees</strong></p>
          <p><input type="number" disabled="disabled" 
            [value]="course.fees" class="form-control" /></p>  
          <p><strong>Payment Mode</strong></p>
          <p>
            <select [value]="course.paymentMode" disabled="disabled" class="form-control">
              <option *ngFor="let m of paymentModes">{{m}}</option>
            </select>
          </p> 
          <p><strong>Course Level</strong></p>
          <p>
            <select [value]="course.level" 
            disabled="disabled" class="form-control">
              <option *ngFor="let entry of levels"
                  [value]="entry[0]">
                    {{ entry[1]}}
               </option>
            </select>
          </p>
          <p><strong>Course Status</strong></p>
          <p>Available/Closed ?
            <input type="checkbox" disabled="disabled" 
            [checked]="course.available"/></p>     
        </div>
        <div class="card-footer">
          For more information please contact to our course cordinator.
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div [class]="cardHeader()">
         <h4 class="card-title">{{ course.name }}</h4>
        </div>
        <div class="card-body">
          <p class="text-center">
            <img 
            [src]="course.image" 
             [title] = "course.description"
            [alt]="course.name" class="img" style="width: 100px" /> 
          </p>
          <p><strong>Course Code</strong></p>
          <p>{{course.id}}</p>
          <p><strong>Course Title</strong></p>
          <p>{{course.name}}</p>  
          <p><strong>Desription</strong></p>
          <p>{{course.description}}</p>         
          <p><strong>Duration</strong></p>
          <p>{{course.duration}} Hours</p>  
          <p><strong>Fees</strong></p>
          <p>{{course.fees}}</p>  
          <p><strong>Payment Mode</strong></p>
          <p>{{course.paymentMode}}</p> 
          <p><strong>Course Level</strong></p>
          <p>{{course.level}}</p>
          <p><strong>Course Status</strong></p>
          <p>{{course.available ? 'Available' : 'Closed'}}</p>     
        </div>
        <div class="card-footer">
          For more information please contact to our course cordinator.
        </div>
      </div>
    </div>
  </div>
</div>  
```




