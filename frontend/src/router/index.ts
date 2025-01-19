import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import FormView from '@/views/CVForm.vue';
import PreviewView from '@/views/CVPreview.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/form', name: 'Form', component: FormView },
  { path: '/preview', name: 'Preview', component: PreviewView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
