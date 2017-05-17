import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Search from './component/Search.vue';
import Header from './component/header.vue';
import About from './component/About.vue';
import VueRouter from 'vue-router';
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.component('app-header', Header);

const routes = [
    { path: '/', component: Search },
    { path: '/about', component: About }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
})