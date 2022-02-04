import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroi } from '../../herois.component';

@Injectable({
  providedIn: 'root'
})
// root <- singleton;
// plataform <- Carrega a Service antes de tudo no bootstrap;
// any <- uma instancia para cada modulo lazy load;
export class HeroisService {

  constructor(private httpClient:HttpClient) { }

  buscarHerois():Observable<Heroi[]>{
    return this.httpClient.get<Heroi[]>(`${environment.urlBase}/herois`);
  }
}
