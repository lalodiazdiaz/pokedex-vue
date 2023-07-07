<template>
  <div class="card mt-3" style="width: 100%">
    <div
      class="cart-header border-top border-end border-start border-black"
      style="background-color: black; color: white"
    >
      <h2>Abilities</h2>
    </div>
    <div
      class="cart-body d-flex flex-column justify-content-around border-top border-end border-start border-bottom border-black"
    >
      <h3
        class="text-capitalize"
        v-for="(ability, index) in pokemonData.abilities"
        :key="index"
      >
        • {{ ability.ability.name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAbilities",
  props: ["pokemonData"],

  setup() {},
};
</script>
