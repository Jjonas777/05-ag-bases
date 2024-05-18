import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  <h3> Contador: {{contador}} </h3>

  <button (click)="contadorUnidad( +1 )"> +1 </button>
  <button (click)="resetear()"> Resetear </button>
  <button (click)="contadorUnidad( -1 )"> -1 </button>

  `
})
export class ContadorComponent {
  public contador: number = 10;

  contadorUnidad( valor: number ): void{ //contadorUnidad se infiere que es "public"
    this.contador += valor;
  }

  resetear(): void{
    this.contador = 10;
  }
}
