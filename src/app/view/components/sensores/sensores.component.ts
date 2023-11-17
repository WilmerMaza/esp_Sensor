import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { responseSSE } from '../../model/sse';
import { SensoresService } from '../../services/sensores.service';
import { SseService } from '../../services/sse.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrl: './sensores.component.scss',
})
export class SensoresComponent implements OnInit {
  notificaciones: string[] = [];
  private subscription: Subscription;
  public humedad: number = 0;
  public temperatura: number = 0;
  constructor(
    private sseService: SseService,
    private sensoresService: SensoresService
  ) {
    this.subscription = this.sseService.notificaciones$.subscribe(
      (notificaciones: string[]) => {
        this.notificaciones = notificaciones;
        this.sensorSse(this.notificaciones);
      }
    );
  }
  ngOnInit(): void {
    this.inivalue();
  }

  inivalue(): void {
    this.sensoresService.getAllDatos().subscribe((res: responseSSE[]) => {
      res.forEach(({ name, value }: responseSSE) => {
        this.humedad = name === 'Humedad' ? parseInt(value) : this.humedad;

        this.temperatura =
          name === 'Temperatura' ? parseInt(value) : this.temperatura;
      });
    });
  }

  sensorSse(notificaciones: any[]): void {
    const humedad = notificaciones[notificaciones.length - 1];
    this.humedad = humedad.name === 'Humedad' ? parseInt(humedad.value) : 0;

    const temperatura = notificaciones[notificaciones.length - 2];
    this.temperatura =
      temperatura.name === 'Temperatura' ? parseInt(temperatura.value) : 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sseService.closeConnection();
  }
}
