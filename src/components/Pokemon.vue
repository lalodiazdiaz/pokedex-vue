<template>
  <div class="container-fluid" v-if="!loading">
    <Loading />
  </div>
  <div v-else class="container-fluid">
    <div class="d-flex">
      <div
        class="d-flex flex-row justify-content-between"
        style="width: 100%; height: 100%"
      >
        <CardImage :pokemonData="pokemonData" />
        <CardStats :pokemonData="pokemonData" />
        <div style="width: 20%">
          <CardAbilities :pokemonData="pokemonData" />
          <CardMoves :pokemonData="pokemonData" />
        </div>
      </div>
    </div>
    <CardForms :pokemonData="pokemonData" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import usePoke from "../store/pokemon";
import CardImage from "./CardImage.vue";
import CardStats from "./CardStats.vue";
import CardAbilities from "./CardAbilities.vue";
import CardMoves from "./CardMoves.vue";
import CardForms from "./CardForms.vue";
import Loading from "./Loading.vue";
export default {
  name: "Pokemon",
  components: {
    CardImage,
    CardStats,
    CardAbilities,
    CardMoves,
    CardForms,
    Loading,
  },

  setup() {
    const {
      params: { id },
    } = useRoute();

    const { getPokemon, pokemonData, loading } = usePoke();
    getPokemon(id);
    console.log(loading);
    return { pokemonData, loading };
  },
};
</script>
