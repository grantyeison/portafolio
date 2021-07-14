import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styles: []
})
export class InteresesComponent {
  intereses: any

  constructor(private infoService: InformacionService) {
    this.infoService.cargar_intereses().subscribe(data => {
        this.intereses = data.json()
      })
    }
}
