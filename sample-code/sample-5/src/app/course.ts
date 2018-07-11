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
