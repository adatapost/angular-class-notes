Display Data 
===

In this sample, we will display data with the help of ```<input>``` form elements.

The [attribute]="expression" angular directive syntax is used to write/update object directly to the attributes of DOM.

app.component.ts
---

```typescript
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
```

app.component.html
---

```html
<div class="container">
  <h1 class="text-center border-bottom">{{ title }}</h1>
  <div class="row center">
    <div class="col-5">
      <div class="card">
        <div class="card-header bg-primary text-white">
         <h4 class="card-title">{{ courseName }}</h4>
        </div>
        <div class="card-body">
          <p><strong>Course Code</strong></p>
          <p>
            <input type="number" [value]="courseId" class="form-control" />
          </p>
          <p><strong>Course Title</strong></p>
          <p><input type="text"
            [value]="courseName" class="form-control" /></p>          
          <p><strong>Duration</strong></p>
          <p><input type="range" 
            max="100"
            title="{{duration}} hours"
            min="1" [value]="duration" class="form-control"></p>  
          <p><strong>Fees</strong></p>
          <p><input type="number" [value]="courseFees" class="form-control" /></p>  
          <p><strong>Payment Mode</strong></p>
          <p>
            <select [value]="paymentMode" class="form-control">
              <option>Cash</option>
              <option>Draft</option>
              <option>Net Banking</option>
            </select>
          </p> 
          <p><strong>Course Level</strong></p>
          <p>
            <select [value]="level" class="form-control">
              <option value="0">Choose</option>
              <option value="1">Novice to Exper</option>
            </select>
          </p>
          <p><strong>Course Status</strong></p>
          <p>Available/Closed ?
            <input type="checkbox" [checked]="available"/></p>     
        </div>
        <div class="card-footer">
          For more information please contact to our course cordinator.
        </div>
      </div>
    </div>
    <div class="col-5">
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
```	