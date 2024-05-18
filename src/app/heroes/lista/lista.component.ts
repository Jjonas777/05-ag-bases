import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public nombreHeroes: string[] = ["Thor","Iroman",
  "Capitán America", "Hulk", "Spiderman"];
  public nombreHeroeBorrado?: string; //?: Es un string o un vacio(undefined)

  borrarHeroe(): void {
    //pop elimina el ultimo elemento de un Arreglo y lo retorna
    this.nombreHeroeBorrado = this.nombreHeroes.pop();
  }

}
