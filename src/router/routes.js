import Index from '@/views/Index/index.vue';

const Category = () => import('@/views/Category/index.vue');
const Article = () => import('@/views/Article/index.vue');
const Ins = () => import('@/views/Ins/index.vue');
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
    path: '/ins',
    component: Ins,
    name: 'ins',
  },
  {
    path: '/article',
    component: Article,
    name: 'article',
  },
];
