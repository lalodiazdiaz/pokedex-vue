<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-around">
      <div class="card mt-3 w-50">
        <div class="cart-header">
          <h2>
            {{ pokemonData.name.replace(/^./, (str) => str.toUpperCase()) }}
          </h2>
        </div>
        <div class="cart-body">
          <img
            width="400"
            :src="pokemonData.sprites.other.home.front_default"
            alt=""
          />
        </div>
        <div class="cart-footer d-flex flex-row justify-content-around">
          <h2 v-for="(type, index) in pokemonData.types" :key="index">
            {{ type.type.name.replace(/^./, (str) => str.toUpperCase()) }}
          </h2>
        </div>
      </div>
      <div class="w-50">info</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import usePoke from "../store/pokemon";
export default {
  name: "Pokemon",

  setup() {
    const {
      params: { id },
    } = useRoute();

    const { getPokemon, pokemonData } = usePoke();
    getPokemon(id);

    return { pokemonData };
  },
};
</script>
