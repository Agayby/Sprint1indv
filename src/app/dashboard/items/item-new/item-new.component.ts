import { Component, OnInit } from '@angular/core';

import {ItemsService } from '../items.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

 onAdd(name, price){
    this.itemsService.addProduct(name.value, price.value);
 }

}
