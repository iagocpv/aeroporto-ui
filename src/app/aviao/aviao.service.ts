import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aviao } from './aviao.interface';


@Injectable({ providedIn: 'root'})
export class AviaoService {

  constructor(private http: HttpClient) {}  

  getAllAvioes(): Observable<Array<Aviao>> {
    return this.http.get<Array<Aviao>>('http://localhost:8080/avioes/');
  }
  addAviao(aviao: Aviao): Observable<Aviao>{
    return this.http.post<Aviao>('http://localhost:8080/avioes/', aviao);
  }
  deleteAviao(id: number): Observable<HttpResponse<any>> {	  	
    return this.http.delete<HttpResponse<any>>(`http://localhost:8080/avioes/${id}`, {observe: 'response'});
  }
  updateAviao(id: number, aviao: Aviao): Observable<Aviao> {	  	
    return this.http.put<Aviao>(`http://localhost:8080/avioes/${id}`, aviao);
  }
  getAviao(id: number): Observable<Aviao>{	  	
    return this.http.get<Aviao>(`http://localhost:8080/avioes/${id}`);
  }
  
}