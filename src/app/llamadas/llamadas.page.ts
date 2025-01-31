import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from '../popover-content/popover-content.component';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.page.html',
  styleUrls: ['./llamadas.page.scss'],
  standalone: false
})
export class LlamadasPage implements OnInit {

  callHistory = [
    { id: 1, name: 'John Doe', time: '12:45 PM', type: 'incoming', duration: '5 min', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { id: 2, name: 'Jane Smith', time: '1:30 PM', type: 'outgoing', duration: '3 min', avatar: 'https://randomuser.me/api/portraits/women/20.jpg' },
    { id: 3, name: 'Carlos Vega', time: '2:15 PM', type: 'missed', duration: '0 min', avatar: 'https://randomuser.me/api/portraits/men/30.jpg' },
    { id: 4, name: 'Laura Martinez', time: '3:00 PM', type: 'incoming', duration: '10 min', avatar: 'https://randomuser.me/api/portraits/women/40.jpg' },
    { id: 5, name: 'Daniel Rodríguez', time: '4:20 PM', type: 'outgoing', duration: '8 min', avatar: 'https://randomuser.me/api/portraits/men/50.jpg' },
    { id: 6, name: 'Sofía González', time: '5:10 PM', type: 'missed', duration: '0 min', avatar: 'https://randomuser.me/api/portraits/women/60.jpg' },
    { id: 7, name: 'Miguel Torres', time: '6:30 PM', type: 'incoming', duration: '6 min', avatar: 'https://randomuser.me/api/portraits/men/70.jpg' },
    { id: 8, name: 'Isabel López', time: '7:45 PM', type: 'outgoing', duration: '12 min', avatar: 'https://randomuser.me/api/portraits/women/80.jpg' },
    { id: 9, name: 'Fernando Pérez', time: '8:20 PM', type: 'missed', duration: '0 min', avatar: 'https://randomuser.me/api/portraits/men/90.jpg' }
  ];

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverContentComponent,
      event: event,
      translucent: true
    });
    await popover.present();
  }

  getCallTypeClass(type: string): string {
    switch (type) {
      case 'incoming': return 'call-received';
      case 'outgoing': return 'call-dialed';
      case 'missed': return 'call-missed';
      default: return '';
    }
  }

  getCallIcon(type: string): string {
    switch (type) {
      case 'incoming': return 'call';
      case 'outgoing': return 'call-outline';
      case 'missed': return 'close-circle';
      default: return 'call';
    }
  }

  getCallTypeLabel(type: string): string {
    switch (type) {
      case 'incoming': return 'Llamada recibida';
      case 'outgoing': return 'Llamada realizada';
      case 'missed': return 'Llamada perdida';
      default: return 'Llamada';
    }
  }
}
