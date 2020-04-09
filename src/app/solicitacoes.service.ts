import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Solicitacao } from '../domain/solicitacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  url = "/api/fichas";

  constructor(private http: HttpClient) { }

  getSolicitacoes():Observable<Solicitacao[]>{
    return this.http.get<Solicitacao[]>(this.url);
    
  }
}