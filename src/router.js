import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/resume',
            name: 'resume',
            // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
        },
        {
            path: '/photography',
            name: 'photography',
            component: () => import(/* webpackChunkName: "photography" */ './views/Photography.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue')
        }
    ]
});
