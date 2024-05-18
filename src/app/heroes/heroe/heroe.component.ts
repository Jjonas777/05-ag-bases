import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'Iroman';
  public edad:   number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  getDescripcion(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  setCambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  setCambiarEdad(): void {
    this.edad = 25;
  }

  setResetear(): void {
    this.nombre = 'Iroman';
    this.edad = 45;
  }

}
