<template>
  <div class="card mt-3 h-50" style="margin-left: 1%">
    <div
      class="cart-header border-top border-end border-start border-black"
      style="background-color: black; color: white"
    >
      <h2>Moves</h2>
    </div>
    <div
      class="cart-body d-flex flex-column justify-content-around border-top border-end border-start border-bottom border-black h-100"
    >
      <h3 class="text-capitalize">• {{ pokemonData.moves[0].move.name }}</h3>
      <h3 class="text-capitalize">• {{ pokemonData.moves[1].move.name }}</h3>
      <h3 class="text-capitalize">• {{ pokemonData.moves[2].move.name }}</h3>
      <h3 class="text-capitalize">• {{ pokemonData.moves[3].move.name }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardMoves",
  props: ["pokemonData"],

  setup() {},
};
</script>
