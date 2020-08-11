export interface Pond {
	name: string;
	size : number;
}

export interface Farm {
    name: string;
    ponds: Pond[];
}