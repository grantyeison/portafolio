import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: []
})
export class ExperienciaComponent {
  experiencias = []

  constructor(private infoService: InformacionService) {
    this.infoService.cargar_experiencia().subscribe(data => {
        this.experiencias = data.json()
      })
    }
  }
