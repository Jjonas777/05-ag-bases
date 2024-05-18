import { Component, EventEmitter, Output } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  @Output()
  public enNuevoPersonaje: EventEmitter<personaje> = new EventEmitter(); //Emitirevento

  public personaje: personaje = {
    nombre: '',
    poder: 0
  };

  mostrarPersonaje(): void {

    console.log(this.personaje);

    //Si el personaje enviado desde el formulario es vacío que no muestre en consola el personaje desde MainPage
    if( this.personaje.nombre.length === 0 ) return;

    //Emitir el personaje desde MainPage
    this.enNuevoPersonaje.emit(this.personaje);

    //Incializar los inputs luego de agregar
    this.personaje = { nombre:'', poder: 0 }

  };

}
