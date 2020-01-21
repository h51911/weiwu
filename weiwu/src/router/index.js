import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Mine from '../pages/Mine.vue'

//2.使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        name: 'home',
        path: '/home',
        component: Home
    }, {
        name: '',
        path: '/',
        component: Home
        //重定向
        // redirect: Home
    }, {
        name: 'mine',
        path: '/mine',
        component: Mine,
    }
    ]
});

export default router