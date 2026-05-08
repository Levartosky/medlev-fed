import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({

  selector: 'app-success',

  standalone: true,

  templateUrl: './success.html',

  styleUrl: './success.scss'

})

export class SuccessComponent {

  constructor(
    private router: Router
  ) {}

  goHome(): void {

    this.router.navigate([
      '/'
    ]);

  }

}