<template>
  <h1>List of pokemon</h1>
  <div class="container">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemonList" :key="index">
          <th>{{ ++index }}</th>
          <th>{{ pokemon.name }}</th>
          <th><button class="btn btn-primary">View more</button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PokemonTable",
  setup() {
    let pokemonList = ref([]);
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => (pokemonList.value = data.results));

    return { pokemonList };
  },
};
</script>
