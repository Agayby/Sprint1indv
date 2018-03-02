import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import {Item} from '../item.model';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input () item: Item;

  constructor(public itemsService : ItemsService) { }

  ngOnInit() {
  }

  onEdit(item: Item){
    this.itemsService.onEdit(item);
  }

  onDelete(){
    this.itemsService.deleteItem(this.item);
  }



}
