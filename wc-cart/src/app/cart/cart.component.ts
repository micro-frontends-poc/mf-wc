import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  // selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: Item[] = [
    { id: 5, name: 'dfsf', description: 'dfsf', price: '10eur' },
  ];
  constructor() {}

  @Input('cartItemAdded')
  set cartItems(item: Item) {
    this.items.push(new Item(item.id, item.name, item.description, item.price));
  }
  @Output('cartItemRemoved') cartItemRemoved = new EventEmitter<any>();

  ngOnInit(): void {}

  removeItem(item) {
    console.table(this.items);
    const itemIndex = this.items.findIndex((it) => item.id == it.id);
    this.items.splice(itemIndex, 1);
    this.cartItemRemoved.emit(JSON.stringify(item));
  }
}
