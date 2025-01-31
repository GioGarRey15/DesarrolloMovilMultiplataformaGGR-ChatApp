import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Importa Router

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  
  constructor(private router: Router) {} // ✅ Inyecta Router en el constructor

  irAjustes() {
    this.router.navigateByUrl('/tabs/ajustes'); // ✅ Ahora funcionará correctamente
  }
}
