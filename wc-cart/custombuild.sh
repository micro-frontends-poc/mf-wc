#!/bin/sh
ng build wc-cart --prod --output-hashing=none && cat dist/wc-cart/runtime-es2015.js, dist/wc-cart/polyfills-es2015.js, dist/wc-cart/main-es2015.js | Set-Content preview/wc-cart.js