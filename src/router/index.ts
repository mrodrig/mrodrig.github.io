import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    // The routes below use route level code-splitting
    // This generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
        path: '/resume',
        name: 'resume',
        component: () => import(/* webpackChunkName: "resume" */ '../views/ResumeView.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue'),
    },
    {
        path: '/photography',
        name: 'photography',
        component: () => import(/* webpackChunkName: "photography" */ '../views/PhotographyView.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
