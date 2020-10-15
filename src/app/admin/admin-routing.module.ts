import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-data',
    loadChildren: () => import('./add-data/add-data.module').then( m => m.AddDataPageModule)
  },
  {
    path: ':adminsId',
    loadChildren: () => import('./edit-data/edit-data.module').then( m => m.EditDataPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
