/*
========================================================
CONTACT COMPONENT
========================================================

Página de contato da MEDLEV.

Responsabilidades:
- exibir canais de atendimento (WhatsApp, E-mail, Instagram, Localização)
- formulário de envio de mensagem com validação e envio via EmailJS
- manter consistência visual com Home e About

A página foi construída utilizando:
- Angular Standalone
- ReactiveFormsModule
- EmailService (EmailJS)
- SCSS modular
- Glassmorphism
- UI cinematográfica

========================================================
*/

import { AfterViewInit, Component, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

type FormState = 'idle' | 'sending' | 'success' | 'error';

/*
========================================================
COMPONENT
========================================================
*/
@Component({

  selector: 'app-contact',

  standalone: true,

  imports: [
    RouterModule,
    ReactiveFormsModule
  ],

  templateUrl: './contact.html',

  styleUrl: './contact.scss'

})

/*
========================================================
CLASS
========================================================
*/
export class ContactComponent implements AfterViewInit, OnDestroy {

  isNavScrolled = false;
  private observer?: IntersectionObserver;

  formState: FormState = 'idle';
  form: FormGroup;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.form = this.fb.group({
      nome:     ['', [Validators.required, Validators.minLength(3)]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      email:    ['', [Validators.required, Validators.email]],
      assunto:  ['', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
      autorizo: [false, Validators.requiredTrue]
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isNavScrolled = window.scrollY > 20;
    }
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid || this.formState === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    this.formState = 'sending';

    try {
      await this.emailService.sendContactEmail(this.form.value);
      this.formState = 'success';
      this.form.reset();
    } catch {
      this.formState = 'error';
    }
  }

  resetState(): void {
    this.formState = 'idle';
  }

  maskWhatsApp(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 11);

    let masked = '';
    if (digits.length === 0) {
      masked = '';
    } else if (digits.length <= 2) {
      masked = `(${digits}`;
    } else if (digits.length <= 7) {
      masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else {
      masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    input.value = masked;
    this.form.get('whatsapp')?.setValue(masked, { emitEvent: false });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer?.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
