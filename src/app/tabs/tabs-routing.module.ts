import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', // ✅ Se agrega 'tabs' como ruta principal
    component: TabsPage,
    children: [
      {
        path: 'chats',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../llamadas/llamadas.module').then(m => m.LlamadasPageModule)
      },
      {
        path: 'stories',
        loadChildren: () => import('../historias/historias.module').then(m => m.HistoriasPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: 'chats', // ✅ Solo 'chats', ya que estamos dentro de 'tabs'
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chats', // ✅ Ahora redirige correctamente
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
