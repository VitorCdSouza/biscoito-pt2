import { FraseComponent } from './../frase/frase.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  bAb = "../../assets/biscoito-aberto.png"
  bisc = "../../assets/biscoito.png"
  biscAtual = this.bisc;

  desativado = false;

  quebrar() {
    this.biscAtual = this.bAb;
    this.desativado = true;
  }
}
