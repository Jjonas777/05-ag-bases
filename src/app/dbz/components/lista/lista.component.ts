import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public personajeLista: personaje[] = [{
    nombre: "",
    poder: 0
  }];

  @Output()
  public enEliminarPersonajeById: EventEmitter<string> = new EventEmitter;

  quitarPersonaje( id?: string ): void {

    if (!id) return; //Si no hay ID que no emita el evento
    //Emitir el evento al servicio
    this.enEliminarPersonajeById.emit( id );

  }

}
