import { createRouter, createWebHistory } from "vue-router";
import PokemonTable from "./components/PokemonTable.vue";
import Login from "./components/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: PokemonTable, name: "PokemonTable" },
    { path: "/login", component: Login, name: "Login" },
  ],
});

import useAuth from "./store/auth";
router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();

  if (to.name === "Login" && isAuthenticated.value) next({ next: "Home" });
  else next();
});
export default router;
