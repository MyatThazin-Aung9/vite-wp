import { createRouter, createWebHistory } from 'vue-router';

// Pages

import TopPage from '@/views/page/top.vue'
import AboutPage from '@/views/page/about.vue'
import BookPage from '@/views/post/Book.vue'
import NewsPage from '@/views/post/News.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
          path: '/',
          name: 'home',
          component: TopPage,
      },
      {
          path: '/about',
          name: 'about',
          component: AboutPage,
      },
      {
          path: '/books',
          name: 'books',
          component: BookPage,
      },
      {
        path: '/news',
        name: 'news',
        component: NewsPage,
    },
    ],
  });
  
export default router;