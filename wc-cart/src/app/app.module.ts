import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [BrowserModule],
  entryComponents: [CartComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const custom = createCustomElement(CartComponent, { injector: injector });
    customElements.define('wc-cart', custom);
  }

  ngDoBootstrap() {}
}
