import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {
  info: any = {}

  constructor(private infoService: InformacionService) {
    this.infoService.cargar_informacion_personal().subscribe(data => {
      this.info = data.json();
      console.log(this.info)
    })
  }

}
