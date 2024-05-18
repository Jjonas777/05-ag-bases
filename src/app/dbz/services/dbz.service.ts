import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: personaje[] = [{
    id: uuid(),
    nombre: "Goku",
    poder: 7000
  },{
    id: uuid(),
    nombre: "Krillin",
    poder: 700
  },{
    id: uuid(),
    nombre: "Vegueta",
    poder: 5500
  }];


  enNuevoPersonaje( personaje: personaje ): void {

    //Inicializamos y añadimos campo ID
    const newPersonaje: personaje = {
      /*id: uuid(),
      nombre: personaje.nombre,
      poder: personaje.poder*/
      id: uuid(), ...personaje //asignación de todos los campos en 1 línea
    }
    console.log(newPersonaje);

    this.personajes.push(newPersonaje); //Push: Agregar el personaje en la última posición
  }

  /*
  enEliminarPersonaje( index: number ): void {
    //Eliminar por indice
    this.personajes.splice(index,1); //splice: Elimina 1 elemento en la pocision index
  }
  */
  enEliminarPersonajeById( id: string ){

    console.log(this.personajes.filter( (personaje) => personaje.id !== id ));

    //Eliminar personaje que tiene 'id' igual al 'id' parámetro
    this.personajes = this.personajes.filter( (personaje) => personaje.id !== id );
  }

}
