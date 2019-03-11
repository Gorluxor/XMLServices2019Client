import { Component, OnInit } from '@angular/core';
import { Predmet } from 'app/model/predmet';
import { PredmetiService } from 'app/service/predmeti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dodaj-predmet',
  templateUrl: './dodaj-predmet.component.html',
  styleUrls: ['./dodaj-predmet.component.css']
})
export class DodajPredmetComponent implements OnInit {

newSubject: Predmet = new Predmet();
id: number;
postojiDugme: boolean = true;

private sub: any;
isDataAvailable: boolean;

constructor(private predmetiService : PredmetiService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.isDataAvailable = false;
    if(params['id'] != null){
      this.id = +params['id']; // (+) konvertuje string 'id' u broj
      //id postavljamo kao path parametar pomocu interpolacije stringa
      if(this.id != null )
      { 
        this.postojiDugme = false; //znaci da hoce da azurira
        this.predmetiService.findOne(this.id).subscribe(
          s => {
            this.newSubject = s;
          }
        )
      }
    }
 });
}

addSubject(){
  this.predmetiService.addSubject(this.newSubject).subscribe(
    s => {
      this.newSubject = s;
      this.router.navigate(['predmeti']);
      //console.log(s);
    }
  );
}

saveChangesSubject(){ 
 this.predmetiService.updateSubject(this.id, this.newSubject).subscribe(
   s => {
    this.newSubject = s;
    this.router.navigate(['predmeti']);
   }
 );
}

goBack(){
  this.router.navigate(['predmeti']);
}

}
