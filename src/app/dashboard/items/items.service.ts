import {Item} from "./item.model"
import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from "@angular/core";
import { Response } from "@angular/http";
import { Headers } from "@angular/http";
import { UserService } from "../../user.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Injectable()
export class ItemsService implements OnInit{
  constructor(private http:Http,private userService:UserService){
}
ngOnInit(){
this.getItems();
}

  itemEdited: Item;
  items: Item[] = [

  ];
  changedItems = new EventEmitter<Item[]>();

  // onDelete(item: Item){
  //   for(var i = 0; i < this.items.length; i++){
  //       if(this.items[i]._id === item._id)
  //         this.items.splice(i,1);
  //
  //   }
  //
  // }

onEdit(item: Item){
  this.itemEdited = item;
}
//
//   onItemEdited(name: string, price: number ){
//     for(var i = 0; i < this.items.length; i++){
//         if(this.items[i]._id === this.itemEdited._id){
//           this.items[i].name = name;
//           this.items[i].price = price;
//         }
//   }
// }
  // onItemAdded(name: string, price: number ){
  //   this.items.push(new Item(4, name, price, new Date(), new Date, 'Peter'));
  // }

  getItems(){
  console.log(this.userService.user);
  const headers = new Headers({'x-auth':this.userService.user.token});
  this.http.get('http://localhost:3000/api/product/getProducts',{headers:headers})

  .subscribe((res:Response)=>{
  this.items = res.json().data;
  this.changedItems.emit(this.items);
  },(err:any)=>{
  this.items = [];

  });
  }

  addProduct(name:string,price:number){
var item = new Item(null,name,price,new Date(),new Date(),this.userService.user.username);
const headers = new Headers({'x-auth':this.userService.user.token});

this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:headers})

.subscribe((res: Response)=>{
this.getItems();
},(err)=>{
console.log(err);
});

}

deleteItem(item:Item){

const headers = new Headers({'x-auth':this.userService.user.token});
this.http.delete(`http://localhost:3000/api/product/deleteProduct/${item._id}`,{headers:headers})

.subscribe((res: Response)=>{
this.getItems();
});

}

editItem(updatedItem:Item){

const headers = new Headers({'x-auth':this.userService.user.token});

this.http.patch(`http://localhost:3000/api/product/updateProduct/${updatedItem._id}`,updatedItem,{headers:headers})
.subscribe((res: Response)=>{
this.getItems();
});


  }
}
