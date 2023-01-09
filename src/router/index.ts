import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import DetailView from '../views/DetailView.vue'
import type { PropType } from 'vue'

type Product = {
  product_id: string;
  product_name: string;
  image_url: string;
  product_quantity: string;
  product_price: string;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/detail/:product',
      name: 'detail',
      component: DetailView,
      props: true
    },
  ]
})

export default router
