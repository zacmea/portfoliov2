import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/portfoliov2',
        name: 'home2',
        component: HomeView
    },
    {
        path:'/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
