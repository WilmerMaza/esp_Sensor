import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.scss',
})
export class TemperaturaComponent {
  @Input() temperatura: number = 16; // Valor de la temperatura

  get indicatorPosition(): number {
    return (this.temperatura / 100.0) * 90.0;
  }
}
