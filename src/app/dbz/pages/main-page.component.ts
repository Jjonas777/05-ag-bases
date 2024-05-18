import { Component } from '@angular/core';
import { DbzService } from './../services/dbz.service';
import { personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(
    private DbzService: DbzService
  ){}

  get personajes(): personaje[] {
    //return this.DbzService.personajes;
    return [...this.DbzService.personajes]; //hace una copia del objeto personajes
  };

  enEliminarPersonaje(id: string): void {
    this.DbzService.enEliminarPersonajeById(id);
  };

  enNuevoPersonaje(personaje: personaje): void {
    this.DbzService.enNuevoPersonaje(personaje);
  }

}
