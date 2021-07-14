import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {

  info:any = {};

  constructor( public http: Http ) {
    this.cargar_firebase();
  }

  public cargar_firebase(){
    this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Personal.json")
        .subscribe(data => {
          this.info = data.json();
        })
  }

  public cargar_skills(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Skills.json")

  }

  public cargar_informacion_personal(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Personal.json")

  }

  public cargar_estudios(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Edtudios.json")

  }

  public cargar_cursos(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Capacitaciones.json")

  }

  public cargar_experiencia(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Experiencia_laboral.json")

  }

  public cargar_portafolio(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Portafolio.json")

  }

  public cargar_intereses(): Observable<any> {
      return this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio/Intereses.json")

  }
}
