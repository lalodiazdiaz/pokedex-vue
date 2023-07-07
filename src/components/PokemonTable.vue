<template>
  <h1>List of pokemon</h1>
  <div v-if="!loadingTable">
    <Loading />
  </div>
  <div v-else class="container-fluid">
    <table class="table table-striped table-bordered border border-black px-5">
      <thead>
        <tr>
          <th style="background-color: black; color: white">Id</th>
          <th style="background-color: black; color: white">Name</th>
          <th style="background-color: black; color: white">Pokémon</th>
          <th style="background-color: black; color: white">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in pokemonList" :key="pokemon.id">
          <th>
            {{ pokemon.id }}
          </th>
          <th>{{ pokemon.name.replace(/^./, (str) => str.toUpperCase()) }}</th>
          <th>
            <img
              width="100"
              :src="pokemon.sprites.other.home.front_default"
              :alt="pokemon.name"
            />
          </th>
          <th>
            <router-link :to="`/${pokemon.id}`" class="btn btn-primary"
              >View more</router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import usePoke from "../store/pokemon";
import Loading from "./Loading.vue";
export default {
  name: "PokemonTable",
  components: {
    Loading,
  },
  setup() {
    const { getAllPokemon, pokemonList, loadingTable } = usePoke();
    getAllPokemon();

    return { pokemonList, loadingTable };
  },
};
</script>
