import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  standalone:false
})
export class StoriesComponent {

  @Input() stories: any[] = []; // Recibe las historias como Input

  constructor() {}

  showStory(imageSrc: string) {
    const storyImage = document.getElementById('storyImage') as HTMLImageElement;
    const storyView = document.getElementById('storyView') as HTMLElement;
    const progress = document.getElementById('progress') as HTMLElement;

    storyImage.src = imageSrc;
    storyView.style.display = 'flex';

    progress.style.width = '0%';
    setTimeout(() => progress.style.width = '100%', 50);
    setTimeout(() => this.hideStory(), 3000);  // Esconde la historia después de 3 segundos
  }

  hideStory() {
    const storyView = document.getElementById('storyView') as HTMLElement;
    storyView.style.display = 'none';
  }
}
