import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { ItemNewComponent } from './item-new/item-new.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  { path: '', component: ItemsComponent, pathMatch: 'full' },
  { path: 'new', component: ItemNewComponent, pathMatch: 'full' },
  { path: 'edit', component: ItemEditComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
