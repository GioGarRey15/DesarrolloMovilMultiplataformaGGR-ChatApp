import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  // Asegúrate de importar PopoverController
import { PopoverContentComponent } from '../popover-content/popover-content.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone:false
})
export class ChatPage implements OnInit {

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverContentComponent,  // Componente que se mostrará en el popover
      event: event,  // El evento de clic que activa el popover
      translucent: true
    });
    await popover.present();
  }

  chats: any[] = [
    { username: 'Daniela P.', message: '¿Ya viste el correo?', date: '08:30', avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { username: 'Roberto V.', message: 'Te envío el archivo en un rato.', date: '09:15', avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { username: 'Ana C.', message: '¡Feliz aniversario!', date: '10:05', avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { username: 'Jorge M.', message: 'Nos vemos a las 5.', date: '11:45', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { username: 'Camila R.', message: 'Acabo de llegar a casa.', date: '12:10', avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { username: 'Luis T.', message: 'Voy por un café, ¿quieres algo?', date: '12:50', avatarUrl: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { username: 'Fernanda L.', message: 'Gracias por el apoyo.', date: '13:30', avatarUrl: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { username: 'Andrés F.', message: '¿Qué planes para el fin de semana?', date: '14:00', avatarUrl: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { username: 'Valentina O.', message: 'Tengo una sorpresa para ti.', date: '14:40', avatarUrl: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { username: 'Pablo G.', message: 'Nos vemos en el parque.', date: '15:15', avatarUrl: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { username: 'Samantha K.', message: 'Ya terminé el informe.', date: '15:45', avatarUrl: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { username: 'Hugo Z.', message: '¿Listo para el partido?', date: '16:20', avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { username: 'Laura B.', message: 'Me encantó tu regalo.', date: '17:10', avatarUrl: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { username: 'Emilio N.', message: 'Confirmado para mañana.', date: '17:50', avatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { username: 'Renata E.', message: 'Tengo que contarte algo.', date: '18:30', avatarUrl: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { username: 'Fabián D.', message: '¡Feliz cumpleaños! 🎉', date: '19:05', avatarUrl: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { username: 'Isabela X.', message: '¿Quieres salir esta noche?', date: '19:45', avatarUrl: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { username: 'Rodrigo A.', message: 'Terminando la tarea.', date: '20:20', avatarUrl: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { username: 'Carolina W.', message: '¡Gracias por venir!', date: '21:00', avatarUrl: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { username: 'Martín S.', message: 'Te mando el enlace.', date: '21:30', avatarUrl: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { username: 'María J.', message: 'Nos vemos en la cafetería.', date: '22:10', avatarUrl: 'https://randomuser.me/api/portraits/women/21.jpg' },
    { username: 'Felipe T.', message: 'Dale, avísame cuando llegues.', date: '22:45', avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { username: 'Cecilia H.', message: 'Te llamo en un rato.', date: '23:15', avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg' },
    { username: 'Tomás M.', message: 'Mañana te cuento.', date: '23:50', avatarUrl: 'https://randomuser.me/api/portraits/men/24.jpg' }
  ];

}
