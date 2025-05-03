// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "./pages/SignIn.vue";
import SignUp from "./pages/SignUp.vue";
import Password from "./pages/Password.vue";
import Home from "./pages/Home.vue";
import tester from "./pages/tester.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/SignIn", component: SignIn },
  { path: "/SignUp", component: SignUp },
  { path: "/Password", component: Password },
  { path: "/tester", component: tester },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
