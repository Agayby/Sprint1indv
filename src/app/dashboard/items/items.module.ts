import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemNewComponent } from './item-new/item-new.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsService } from './items.service'

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule],
  declarations: [ItemsComponent, ItemComponent, ItemsListComponent, ItemNewComponent, ItemEditComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
