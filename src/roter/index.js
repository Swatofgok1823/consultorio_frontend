import { createRouter, createWebHistory } from 'vue-router';
import insertar from '@/components/insertar.vue';
import conexion from '@/components/conexion.vue';
import actualizar from '@/components/actualizar.vue';
import loginregistro from '@/components/loginregistro.vue';
import profesor from '@/components/profesor.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import Recursos from '@/components/Recursos.vue';
import estudiante from '@/components/estudiante.vue';
import administrador from '@/components/administrador.vue';
import crudusers from '@/components/crudusers.vue';
import Gestion_Casos from '@/components/Gestion_Casos_Estu.vue';
import estudianteRecu from '@/components/estudianteRecu.vue';
import Header from '@/components/Header.vue';
import HeaderProfe from '@/components/HeaderProfe.vue';
import HeaderEstu from '@/components/HeaderEstu.vue';
import QuienesSomos1 from '@/components/quienesSomos.vue';
import HeaderAdmin from '@/components/HeaderAdmin.vue';
import Gestion_Casos_Estu from '@/components/Gestion_Casos_Estu.vue';
import Gestion_Casos_Profe from '@/components/Gestion_Casos_Profe.vue';
import Gestion_Casos_Admin from '@/components/Gestion_Casos_Admin.vue';
import Recursos_Admin from '@/components/Recursos_Admin.vue';
import Recursos_Estu from '@/components/Recursos_Estu.vue';
import RestablecerContrasena from '@/components/RestablecerContrasena.vue';


const routes = [
  {
    path: '/',
    redirect: '/home' // Redirección automática de la raíz a /home
  },
  {
    path: '/quienesomos',
    name: 'quienesomos',
    component: QuienesSomos1
  },
  {
    path: '/restablecerContrasena',
    name: 'restablecerContrasena',
    component: RestablecerContrasena
  },
  {
    path: '/Header',
    name: '/header',
    component: Header
  },
  {
    path: '/HeaderEstu',
    name: '/headerEstu',
    component: HeaderEstu
  },
  {
    path: '/HeaderProfe',
    name: '/headerProfe',
    component: HeaderProfe
  },
  {
    path: '/HeaderAdmin',
    name: 'headerAdmin',
    component: HeaderAdmin
  },
  {
    path: '/home',
    name: '/HomeComponent',
    component: HomeComponent
  },
  {
    path: '/recursos',
    name: '/recursos_profe',
    component: Recursos
  },
  {
    path: '/recursos_admin',
    name: '/recursos_admin',
    component: Recursos_Admin
  },
  {
    path: '/recursos_estu',
    name: '/recursos',
    component: Recursos_Estu
  },
  {
    path: '/insertar',
    name: '/insertar',
    component: insertar
  },
  {
    path: '/login',
    name: 'loginregistro',
    component: loginregistro
  },
  {
    path: '/profesor',
    name: 'profesor',
    component: profesor
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: estudiante
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: administrador
  },
  {
    path: '/crudusers',
    name: 'crudusers',
    component: crudusers
  },
  {
    path: '/gestion_casos_profe',
    name: 'gestion_casos_profe',
    component: Gestion_Casos_Profe
  },
  {
    path: '/gestion_casos_estu',
    name: 'gestion_casos_estu',
    component: Gestion_Casos_Estu
  },
  {
    path: '/gestion_casos_admin',
    name: 'gestion_casos_admin',
    component: Gestion_Casos_Admin
  },
  {
    path: '/esturecur',
    name: 'vista_recursos',
    component: estudianteRecu
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
