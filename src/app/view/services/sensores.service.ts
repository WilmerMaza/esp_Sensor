import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SensoresService {


  // Inyecta el HttpClient en el servicio
  constructor(private http: HttpClient) {}

  getAllDatos(): Observable<any> {
    const endpoin = `${environment.api_esp}esp8266/getAll`
    // Realiza la solicitud GET a la API y devuelve los datos como un Observable
    return this.http.get<any>(endpoin);
  }
}
