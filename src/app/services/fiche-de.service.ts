import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheDE } from '../model/ficheDE.model';


@Injectable({
  providedIn: 'root'
})
export class FicheDEService {
  private apiUrl = 'http://localhost:8080/depanini/api/DE/'; 

  constructor(private httpClient: HttpClient) { }

  getAllFicheDe(): Observable<FicheDE[]> {
    return this.httpClient.get<FicheDE[]>(this.apiUrl + 'all');
  }

  getFicheDeById(id: number): Observable<FicheDE> {
    return this.httpClient.get<FicheDE>(this.apiUrl + 'getbyid/' + id);
  }

  createFicheDe(ficheDE: FicheDE): Observable<FicheDE> {
    return this.httpClient.post<FicheDE>(this.apiUrl + 'addficheDe', ficheDE);
  }

  updateFicheDe(ficheDE: FicheDE): Observable<FicheDE> {
    return this.httpClient.put<FicheDE>(this.apiUrl + 'updateficheDe', ficheDE);
  }

  deleteFicheDe(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + 'delficheDE/' + id);
  }
}
