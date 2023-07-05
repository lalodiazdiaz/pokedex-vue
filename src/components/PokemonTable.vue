<template>
  <h1>List of pokemon</h1>
  <div class="container">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemonList" :key="index">
          <th>
            {{ pokemon.id }}
          </th>
          <th class="w-25">
            <img
              class="w-25"
              :src="pokemon.sprites.other.home.front_default"
              alt=""
            />
          </th>
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
    let pokemon = [];
    let pokemonList = ref([]);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.json())
      .then(
        (data) => (
          (pokemon = data.results),
          pokemon.forEach((pokemonUrl) => {
            fetch(pokemonUrl.url)
              .then((response) => response.json())
              .then((res) => pokemonList.value.push(res));
          })
        )
      );

    return { pokemonList };
  },
};
</script>
