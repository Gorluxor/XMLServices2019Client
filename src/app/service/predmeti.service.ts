import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Predmet } from 'app/model/predmet';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PredmetiService {

  constructor(private http: HttpClient){
  }

  addSubject(newSubject: Predmet): Observable<Predmet>{
    return this.http.post<Predmet>('/api/predmeti', newSubject);
  }

  findOne(id: number): Observable<Predmet>{
    //'api/subject' + id === `/api/subject/${id}
    return this.http.get<Predmet>(`/api/predmeti/${id}`);
  }

  findAll(): Observable<Predmet[]>{
    //'api/subject' + id === `/api/subject/${id}
    return this.http.get<Predmet[]>('/api/predmeti');
  }

  deleteSubject(id: number): Observable<{}>{
    console.log(id);
    return this.http.delete(`/api/predmeti/${id}`);
  }

  updateSubject(id: number, subject: Predmet) : Observable<Predmet> {
    return this.http.put<Predmet>(`/api/predmeti/${id}`, subject);
  }

}
