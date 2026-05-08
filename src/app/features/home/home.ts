/*
========================================================
HOME COMPONENT
========================================================

Este é o componente principal da Home.

Responsabilidades:
- controlar lógica da página
- responder eventos
- integrar APIs futuramente
- controlar animações
- controlar interações

Atualmente:
- componente estático
- sem lógica complexa

Mais pra frente:
- integraremos backend
- WhatsApp
- formulário
- animações
- IA
========================================================
*/

/*
Importa Component do Angular.
*/
import { Component } from '@angular/core';

/*
Importa RouterModule.

Responsável por disponibilizar:
- routerLink
- router-outlet
- navegação SPA
*/
import { RouterModule } from '@angular/router';

/*
Decorator do Angular.

Define:
- selector
- html
- scss
*/
@Component({

  /*
  Nome da tag HTML do componente.
  */
  selector: 'app-home',

  /*
  Angular moderno standalone.
  */
  standalone: true,

  /*
  IMPORTS DO COMPONENTE

  Em standalone:
  tudo que o HTML usa
  precisa ser importado aqui.
  */
  imports: [
    RouterModule
  ],

  /*
  Arquivo HTML do componente.
  */
  templateUrl: './home.html',

  /*
  Arquivo SCSS do componente.
  */
  styleUrl: './home.scss'

})

/*
Classe principal do componente.
*/
export class HomeComponent {

  /*
  Futuramente:
  - integraremos APIs
  - criaremos métodos
  - capturaremos eventos
  - faremos animações
  */

}