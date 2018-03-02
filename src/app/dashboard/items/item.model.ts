export class Item {

  constructor(public _id: number,
              public name: string,
              public price: number,
              public creationDate: Date,
              public updateDate: Date,
              public sellerName: string ){}
}
