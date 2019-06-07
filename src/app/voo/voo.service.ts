import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voo } from './voo.interface';

@Injectable({ providedIn: 'root' })
export class VooService {

  constructor(private http : HttpClient) { }

  getAllVoos(): Observable<Array<Voo>> {
    return this.http.get<Array<Voo>>('http://localhost:8080/voos/');
  }
  addVoo(voo: Voo): Observable<Voo> {
    return this.http.post<Voo>('http://localhost:8080/voos/', voo);
  }
  deleteVoo(id: number): Observable<HttpResponse<any>> {	  	
    return this.http.delete<HttpResponse<any>>(`http://localhost:8080/voos/${id}`, {observe: 'response'});
  }
  updateVoo(id: number, voo: Voo): Observable<Voo> {	  	
    return this.http.put<Voo>(`http://localhost:8080/voos/${id}`, voo);
  }
  getVoo(id: number): Observable<Voo> {	  	
    return this.http.get<Voo>(`http://localhost:8080/voos/${id}`);
  }
}