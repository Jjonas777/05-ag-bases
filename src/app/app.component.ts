import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = '05-ag-bases';
  public contador: number = 10;

  contadorUnidad( valor: number ): void{ //contadorUnidad se infiere que es "public"
    this.contador += valor;
  }

  resetear(): void{
    this.contador = 10;
  }
}
