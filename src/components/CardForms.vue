<template>
  <div class="card mt-5 mb-5 border border-black">
    <div class="card-header" style="background-color: black; color: white">
      <h2>Image</h2>
    </div>
    <div class="card-body d-flex justify-content-around">
      <img :src="pokemonData.sprites.other.home.front_default" alt="" />
      <img :src="pokemonData.sprites.other.home.front_shiny" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardForms",
  props: ["pokemonData"],
  setup() {},
};
</script>
