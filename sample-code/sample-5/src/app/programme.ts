export class Programme {
	id: number;
	name: string;
	language: string;
	startDate: Date;
	endDate: Date;

	constructor(id: number = 0,
	name: string = "",
	language: string = '',
	startDate: Date = new Date(0),
	endDate: Date = new Date(0)) {

	}
}
