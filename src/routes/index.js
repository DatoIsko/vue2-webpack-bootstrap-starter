/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Home from '@/pages/Home/Index';
import Account from '@/pages/Account/Index';
import Login from '@/pages/Login/Index';
import Register from '@/pages/Register/Index';

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: Home,

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: Account,

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: Login,

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: Register,

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
