import { Component, OnInit } from '@angular/core';
import { Programme }  from "./../programme";
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // Fields
   prg: Programme = new Programme();
   prgs: Array<Programme> = [];
   cmd: string = "new";

   // Event handlers
   addProgramme(): void {
   	let p: Programme = new Programme();
   	p.id = this.prg.id;
   	p.name = this.prg.name;
   	p.language = this.prg.language;
   	p.startDate = this.prg.startDate;
   	p.endDate = this.prg.endDate;

   	this.prgs.push( p );
   }
   editProgramme(p: Programme): void {
   	this.prg = p;
   	this.cmd = "edit";
   }
   delProgramme(p: Programme): void {
   	let index = this.prgs.indexOf(p);
   	this.prgs.splice(index,1);
   }
   canProgramme(): void {
   	this.prg = new Programme();
   	this.cmd = "new";
   }
   doAction(cmd: string): void {
   	this.cmd = cmd;

   }
}
