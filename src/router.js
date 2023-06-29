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

export default router;
