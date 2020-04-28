import { Component, HostListener } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: Item[] = [];

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if (event.origin.startsWith('http://localhost:3000')) {
      this.items.push(
        new Item(
          event.data.id,
          event.data.name,
          event.data.description,
          event.data.price
        )
      );
    }
  }

  constructor() {
    console.log('bar');
  }

  removeItem(item) {
    console.table(this.items);
    const itemIndex = this.items.findIndex((it) => item.id == it.id);
    this.items.splice(itemIndex, 1);
    window.parent.postMessage(item.id, 'http://localhost:3000');
  }
}
