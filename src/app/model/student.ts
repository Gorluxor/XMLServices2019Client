import { Predmet } from "./predmet";

export class Student {
    id: number; 
	ime : string;
	prezime: string;
    polozeniPredmeti: Predmet[];
    
    constructor(){
        this.id = 0;
        this.ime = "";
        this.prezime = "";
        this.polozeniPredmeti = [];
    }
}