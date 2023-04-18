export default class OrderItem {
  _id: string;
  //_productId: string;
  _name: string;
  _price: number;
  //_quantity: number;
  _total: number;

 
  constructor(
    id: string,
    name: string,
    price: number,
   
  ) {
    this._id = id;
    this._name = name;
    this._price = price;
   // this._productId = productId;
    //this._quantity = quantity;
    this._total = this.total();
  }

  total(): number {
    return this._price * this._quantity
  }
}