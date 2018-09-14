import Vue from 'vue'
import App from './App.vue'
import { APP_NAME, hello, Figure } from './myUtils.js'
import './style.css'
import './main.css'
import pic from './images/icon.jpg'

window.addEventListener(
  'DOMContentLoaded',
  function () {
    const img = new Image()
    img.src = pic
    document.body.appendChild(img)
    const app = new Vue({
      components: { App },
      template: '<App/>'
    })
    app.$mount('#app')
  },
  false
)

console.log(APP_NAME)

hello()

console.log(Figure.getTriangle(10, 5))
console.log(Figure.getTriangle(30, 20))

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  console.log('開発モード')
}
