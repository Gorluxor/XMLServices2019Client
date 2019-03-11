import { Component, OnInit } from '@angular/core';
import { Predmet } from 'app/model/predmet';
import { PredmetiService } from 'app/service/predmeti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svi-predmeti',
  templateUrl: './svi-predmeti.component.html',
  styleUrls: ['./svi-predmeti.component.css']
})
export class SviPredmetiComponent implements OnInit {

  predmeti: Predmet[];

  constructor(private predmetiService : PredmetiService, private router: Router) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(){
    this.predmetiService.findAll().subscribe(
      s => this.predmeti = s
    );

  }

  deleteSubject(id: number){
   this.predmetiService.deleteSubject(id).subscribe(
     s => this.getAll(),
     err=> console.log("err")
   );    
  }

  updateSubject(id: number){
   this.router.navigate(['predmeti/edit', id]);
  }

}
