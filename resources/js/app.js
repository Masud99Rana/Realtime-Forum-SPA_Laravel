
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)



// Vue-SimpleMDE
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
Vue.use(VueSimplemde)



import md from 'marked'
window.md = md
//End Vue-SimpleMDE


import User from './Helpers/User'
window.User = User


import Exception from './Helpers/Exception'
window.Exception = Exception






window.EvenBus = new Vue();



// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './Router/router.js'

const app = new Vue({
    el: '#app',
    router
});





