import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  nome: string;
  whatsapp: string;
  email: string;
  assunto: string;
  mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {

  async sendContactEmail(data: ContactFormData): Promise<void> {
    const date = new Date().toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    await emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      {
        from_name: data.nome,
        whatsapp: data.whatsapp,
        reply_to: data.email,
        subject: data.assunto,
        message: data.mensagem,
        date
      },
      environment.emailjs.publicKey
    );
  }

}
