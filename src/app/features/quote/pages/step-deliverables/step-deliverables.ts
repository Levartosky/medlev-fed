/*
========================================================
STEP DELIVERABLES PAGE
========================================================
*/

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({

  selector: 'app-step-deliverables',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './step-deliverables.html',

  styleUrls: ['./step-deliverables.scss']

})

export class StepDeliverablesComponent {

  /*
  ========================================================
  CONSTRUCTOR
  ========================================================
  */
  constructor(
    private router: Router
  ) {}

  /*
  ========================================================
  ESTADOS
  ========================================================
  */

  selected3DType = 'Pacote básico';

  selectedSoftware = 'SketchUp';

  /*
  ========================================================
  SELECT 3D TYPE
  ========================================================
  */
  select3DType(type: string): void {

    this.selected3DType = type;

  }

  /*
  ========================================================
  SELECT SOFTWARE
  ========================================================
  */
  selectSoftware(software: string): void {

    this.selectedSoftware = software;

  }

  /*
  ========================================================
  PREVIOUS STEP
  ========================================================
  */
  previousStep(): void {

    this.router.navigate([
      '/orcamento/escopo'
    ]);

  }

  /*
  ========================================================
  NEXT STEP
  ========================================================
  */
  nextStep(): void {

    this.router.navigate([

      '/orcamento/finalizacao'
    ]);

  }

}