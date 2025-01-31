import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PopoverContentComponent } from '../popover-content/popover-content.component';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
  standalone: false
})
export class HistoriasPage implements OnInit {

  stories = [
    { name: 'Lalo Montalvo', time: 'Hace 5 minutos', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg' },
    { name: 'Yonathan Beltrán', time: 'Hace 10 minutos', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
    { name: 'Rodolfo Estrada', time: 'Hace 15 minutos', image: 'https://laopinion.com/wp-content/uploads/sites/3/2020/02/neymar-david-beckham.jpg?quality=80&strip=all' },
    { name: 'Daniel Gutierrez', time: 'Hace 30 minutos', image: 'https://th.bing.com/th/id/R.6ff6d1d2d09d6b1d8481bb0bf58913d6?rik=bvpGJ93QZLJueA&pid=ImgRaw&r=0' },
    { name: 'Diego Zilli', time: 'Hace 1 hora', image: 'https://media.tycsports.com/files/2020/08/16/112516/kevin-de-bruyne.jpg' },
    { name: 'Abiel Ontiveros', time: 'Hace 2 horas', image: 'https://th.bing.com/th/id/OIP.5UWClZn42ZiYxOrMZtPghgHaEK?rs=1&pid=ImgDetMain' },
    { name: 'Michin', time: 'Hace 3 horas', image: 'https://e3.365dm.com/24/03/1600x900/skynews-premier-league-erling-haaland_6484222.jpg?20240309141505' }
  ];

  constructor(
    private alertCtrl: AlertController, 
    private sanitizer: DomSanitizer,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() { }

  async viewStory(story: any) {
    const sanitizedImage: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(
      `<img src="${story.image}" width="100%" style="border-radius: 10px;">`
    );

    const alert = await this.alertCtrl.create({
      header: story.name,
      message: sanitizedImage as string,
      buttons: ['Cerrar'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  showStory(image: string) {
    const storyView = document.getElementById('storyView')!;
    const storyImage = document.getElementById('storyImage') as HTMLImageElement;
    const progress = document.getElementById('progress')!;

    storyImage.src = image;
    storyView.classList.add('active');
    progress.style.width = '0%';

    setTimeout(() => {
      progress.style.width = '100%';
    }, 50);

    setTimeout(() => {
      this.hideStory();
    }, 5000);
  }

  hideStory() {
    const storyView = document.getElementById('storyView')!;
    storyView.classList.remove('active');
  }

  async presentPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverContentComponent, 
      event: ev,
      translucent: true
    });
    await popover.present();
  }
}
