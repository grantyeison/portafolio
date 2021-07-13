import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {
  estudios = []
  cursos = []

  constructor( private infoService: InformacionService) {
    this.infoService.cargar_estudios().subscribe(data => {
        this.estudios = data.json()
      })
    this.infoService.cargar_cursos().subscribe(data => {
        this.cursos = data.json()
      })
  }

}
