import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {
  frase = "";

  getFrase() {
    let frases = ["Vai ter dia de sorte", "Vai ter um dia ruim", "Você é especial", "Terá uma semana abençoada", "A vida trará coisas boas se tiver paciência", "Não compense na ira o que lhe falta na razão"]
    let aleatorio = () => Math.floor(Math.random() * (frases.length));
    this.frase = frases[aleatorio()];
    return this.frase;
  }
}
