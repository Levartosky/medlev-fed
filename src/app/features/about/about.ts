/*
========================================================
ABOUT COMPONENT
========================================================

Página institucional premium da MEDLEV.

Responsabilidades:
- apresentar posicionamento da marca
- reforçar autoridade
- transmitir sofisticação
- manter consistência visual com a Home

A página foi construída utilizando:
- Angular Standalone
- SCSS modular
- Glassmorphism
- UI cinematográfica
- Layout responsivo

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
  selector: 'app-about',

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
  templateUrl: './about.html',

  /*
  SCSS da página.
  */
  styleUrl: './about.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class AboutComponent {

}