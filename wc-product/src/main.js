import Vue from "vue"
import App from "./App.vue"
import wrap from "@vue/web-component-wrapper"
import "@/assets/style.css"

Vue.config.productionTip = false

const CustomElement = wrap(Vue, App)

window.customElements.define("wc-products", CustomElement)

// new Vue({
//   render: h => h(App)
// }).$mount("#app")
