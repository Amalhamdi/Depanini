import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheDS } from '../model/ficheDS.model';

@Injectable({
  providedIn: 'root'
})
export class FicheDSService {
  private apiUrl = 'http://localhost:8080/depanini/api/DS/';

  constructor(private httpClient: HttpClient) { }

  getAllFicheDs(): Observable<FicheDS[]> {
    return this.httpClient.get<FicheDS[]>(this.apiUrl + 'all');
  }

  getFicheDsById(id: number): Observable<FicheDS> {
    return this.httpClient.get<FicheDS>(this.apiUrl + 'getbyid/' + id);
  }

  createFicheDs(ficheDS: FicheDS): Observable<FicheDS> {
    return this.httpClient.post<FicheDS>(this.apiUrl + 'addficheDs', ficheDS);
  }

  updateFicheDs(ficheDS: FicheDS): Observable<FicheDS> {
    return this.httpClient.put<FicheDS>(this.apiUrl + 'updateficheDs', ficheDS);
  }

  deleteFicheDs(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + 'delficheDs/' + id);
  }
}
