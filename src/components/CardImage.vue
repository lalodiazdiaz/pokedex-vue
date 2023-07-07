<template>
  <div class="card mt-3" style="width: 40%; height: 100%">
    <div
      class="cart-header border-top border-end border-start border-black rounded-top"
      style="background-color: black; color: white"
    >
      <h2>
        {{ pokemonData.name.replace(/^./, (str) => str.toUpperCase()) }}
      </h2>
    </div>
    <div class="cart-body border-top border-end border-start border-black">
      <img
        width="400"
        :src="pokemonData.sprites.other.home.front_default"
        alt=""
      />
    </div>
    <div
      class="cart-header border-top border-end border-start border-black"
      style="background-color: black; color: white"
    >
      <h2>Types</h2>
    </div>
    <div
      class="cart-footer d-flex flex-row justify-content-around border border-black rounded-bottom"
    >
      <h2 v-for="(type, index) in pokemonData.types" :key="index">
        {{ type.type.name.replace(/^./, (str) => str.toUpperCase()) }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImage",
  props: ["pokemonData"],
  setup() {},
};
</script>
