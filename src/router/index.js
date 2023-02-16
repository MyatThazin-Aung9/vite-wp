import { createRouter, createWebHistory } from 'vue-router';

// Pages

import TopPage from '@/views/page/top.vue'
import AboutPage from '@/views/page/about.vue'
import BookPage from '@/views/post/Book.vue'
import NewsPage from '@/views/post/News.vue'
import BookSingle from '@/views/single/Book-single.vue'
import Contact from '@/views/page/contact.vue'

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
      {
          path: '/books/:id',
          name: 'book.single',
          component: BookSingle,
      },
      {
          path: '/contact',
          name: 'contact',
          component: Contact,
    },
    ],
  });
  
export default router;