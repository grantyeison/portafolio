import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styles: []
})
export class TrabajosComponent {
  portafolio = []

  constructor(private infoService: InformacionService) {
    this.infoService.cargar_portafolio().subscribe(data => {
        this.portafolio = data.json()
      })
    }
   }
