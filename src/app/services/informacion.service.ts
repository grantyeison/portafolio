import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  Portafolio:any = {};
  cargada: boolean = false;

  constructor( public http: Http ) {
    this.cargar_firebase();
  }

public cargar_firebase(){
  this.http.get("https://portafolio-247d7-default-rtdb.firebaseio.com/Portafolio.json")
              .subscribe(data => {
                console.log(data.json());
                this.Portafolio = data.json();
                this.cargada = true
              })
}

}
