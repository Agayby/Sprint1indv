import { Component, OnInit } from '@angular/core';

import {ItemsService } from '../items.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

  onEdit(name, price){
     this.itemsService.itemEdited.name = name.value;
     this.itemsService.itemEdited.price = price.value;
     this.itemsService.editItem(this.itemsService.itemEdited);
  }

}
