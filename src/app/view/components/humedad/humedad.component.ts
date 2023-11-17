import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrl: './humedad.component.scss'
})
export class HumedadComponent {
  @Input() humedad: number = 16; 
}
