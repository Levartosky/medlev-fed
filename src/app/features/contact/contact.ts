/*
========================================================
CONTACT COMPONENT
========================================================

Página de contato da MEDLEV.

Responsabilidades:
- exibir canais de atendimento (WhatsApp, E-mail, Instagram, Localização)
- formulário de envio de mensagem
- manter consistência visual com Home e About

A página foi construída utilizando:
- Angular Standalone
- SCSS modular
- Glassmorphism
- UI cinematográfica

========================================================
*/

/*
Importa Component do Angular.
*/
import { Component } from '@angular/core';

/*
Importa RouterModule.

Necessário para:
- routerLink
- navegação SPA
*/
import { RouterModule } from '@angular/router';

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  /*
  Nome da tag HTML.
  */
  selector: 'app-contact',

  /*
  Angular moderno standalone.
  */
  standalone: true,

  /*
  Tudo usado no HTML
  precisa ser importado aqui.
  */
  imports: [
    RouterModule
  ],

  /*
  HTML da página.
  */
  templateUrl: './contact.html',

  /*
  SCSS da página.
  */
  styleUrl: './contact.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class ContactComponent {

}
