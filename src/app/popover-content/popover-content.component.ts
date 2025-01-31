import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent {

  constructor(private router: Router) {}

  irAjustes() {
    this.router.navigateByUrl('/tabs/ajustes'); // ✅ Ahora sí debe funcionar
  }
}
