<template>
  <div class="card mt-3 border border-black" style="width: 25%">
    <div
      class="cart-header border-top border-end border-start border-black"
      style="background-color: black; color: white"
    >
      <h2>Information</h2>
    </div>
    <div class="card-body text-start">
      <h3>Pokedex number: {{ pokemonData.id }}</h3>
      <h3 class="text-capitalize">name: {{ pokemonData.name }}</h3>
      <h3>Height: {{ pokemonData.height / 10 }} m</h3>
      <h3>Weight: {{ pokemonData.weight / 10 }} Kg</h3>
      <h3>Base experience: {{ pokemonData.base_experience }}xp</h3>
    </div>
    <div class="card-header" style="background-color: black; color: white">
      <h2>Stats</h2>
    </div>
    <div class="card-body">
      <h3 class="text-start">HP: {{ pokemonData.stats[0].base_stat }}</h3>
      <h3 class="text-start">Attack: {{ pokemonData.stats[1].base_stat }}</h3>
      <h3 class="text-start">Defense: {{ pokemonData.stats[2].base_stat }}</h3>
      <h3 class="text-start">Speed: {{ pokemonData.stats[5].base_stat }}</h3>
      <h3 class="text-start">
        Special Attack: {{ pokemonData.stats[3].base_stat }}
      </h3>
      <h3 class="text-start">
        Special Defense: {{ pokemonData.stats[4].base_stat }}
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardStats",
  props: ["pokemonData"],
  setup() {},
};
</script>
