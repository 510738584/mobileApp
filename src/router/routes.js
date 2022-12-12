import Index from '@/views/Index/index.vue';

const Category = () => import('@/views/Category/index.vue');
const Article = () => import('@/views/Article/index.vue');
export default [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
    name: 'index',
  },
  {
    path: '/category',
    component: Category,
    name: 'category',
  },
  {
    path: '/article',
    component: Article,
    name: 'article',
  },
];
