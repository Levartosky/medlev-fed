/*
========================================================
STEP FINALIZATION PAGE
========================================================
*/

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({

  selector: 'app-step-finalization',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './step-finalization.html',

  styleUrls: ['./step-finalization.scss']

})

export class StepFinalizationComponent {

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================
  */
  constructor(
    private router: Router
  ) { }

  /*
  ========================================================
  ESTADOS
  ========================================================
  */

  selectedUrgency = 'Esta semana';

  selectedRpa = 'Não';

  acceptedPrivacy = true;

  /*
  ========================================================
  SELECT URGENCY
  ========================================================
  */
  selectUrgency(value: string): void {

    this.selectedUrgency = value;

  }

  /*
  ========================================================
  SELECT RPA
  ========================================================
  */
  selectRpa(value: string): void {

    this.selectedRpa = value;

  }

  /*
  ========================================================
  TOGGLE PRIVACY
  ========================================================
  */
  togglePrivacy(): void {

    this.acceptedPrivacy =
      !this.acceptedPrivacy;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento/entregaveis'
    ]);

  }

  /*
  ========================================================
  SUBMIT FORM
  ========================================================
  */
  submitForm(): void {

    this.router.navigate([
      '/orcamento/sucesso'
    ]);

  }

}