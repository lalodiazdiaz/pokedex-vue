<template>
  <div v-if="!loadingTable">
    <Loading />
  </div>
  <div v-else class="container-fluid">
    <h1>List of pokemon</h1>

    <table class="table table-striped table-bordered border border-black px-5">
      <thead>
        <tr style="height: 50px; display: flex">
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
            style="background-color: black; color: white"
          >
            Id
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
            style="background-color: black; color: white"
          >
            Name
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
            style="background-color: black; color: white"
          >
            Pokémon
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
            style="background-color: black; color: white"
          >
            View
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="height: 100px; display: flex"
          v-for="(pokemon, index) of pokemonList"
          :key="index"
        >
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
          >
            {{ index }}
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
          >
            {{ pokemon.name.replace(/^./, (str) => str.toUpperCase()) }}
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
          >
            <img
              width="100"
              v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                index + 1
              }.png`"
              :alt="pokemon.name"
            />
          </th>
          <th
            class="d-flex w-25 h-100 justify-content-center align-items-center"
          >
            <router-link :to="`/${index}`" class="btn btn-primary"
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
