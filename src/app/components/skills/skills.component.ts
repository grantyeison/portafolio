import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent {

  skills = []

  constructor(private infoService: InformacionService) {
    this.infoService.cargar_skills().subscribe(data => {
        this.skills = data.json()
      })
    }

}
