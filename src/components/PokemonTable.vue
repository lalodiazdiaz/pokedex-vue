<template>
  <h1>List of pokemon</h1>
  <div class="container">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Pokémon</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in pokemonList" :key="pokemon.id">
          <th>
            {{ pokemon.id }}
          </th>
          <th>{{ pokemon.name.replace(/^./, (str) => str.toUpperCase()) }}</th>
          <th class="w-25">
            <img
              style="width: 80px"
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
export default {
  name: "PokemonTable",
  setup() {
    const { getAllPokemon, pokemonList } = usePoke();
    getAllPokemon();

    return { pokemonList };
  },
};
</script>
