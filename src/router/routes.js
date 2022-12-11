import Index from '@/views/Index/index.vue';

const Category = () => import('@/views/Category/index.vue');
export default [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/category',
    component: Category,
  },
];
