import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index';
import Generic from '@/views/Generic';
import Element from '@/views/Element';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/generic',
    name: 'Generic',
    component: Generic,
  },
  {
    path: '/element',
    name: 'Element',
    component: Element,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
