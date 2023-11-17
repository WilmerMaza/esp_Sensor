import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  private eventSource!: EventSource;
  private notificacionesSubject = new Subject<string[]>();
  private url: string = `${environment.api_esp}esp8266/notificaciones-sse`;
  notificaciones$: Observable<string[]> =
    this.notificacionesSubject.asObservable();
  constructor() {
    this.setupSSE();
  }
  private setupSSE() {
    this.eventSource = new EventSource(this.url);

    this.eventSource.addEventListener('message', (event: any) => {
      const data = JSON.parse(event.data);
      this.notificacionesSubject.next(data);
    });

    this.eventSource.addEventListener('error', (error) => {
      console.error('Error en la conexión SSE:', error);
    });
  }

  closeConnection() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
