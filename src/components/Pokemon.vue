<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-evenly">
      <div class="card mt-3" style="width: 30%; height: 100%">
        <div
          class="cart-header border-top border-end border-start border-black"
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
          class="cart-footer d-flex flex-row justify-content-around border border-black"
        >
          <h2 v-for="(type, index) in pokemonData.types" :key="index">
            {{ type.type.name.replace(/^./, (str) => str.toUpperCase()) }}
          </h2>
        </div>
      </div>

      <div class="d-flex flex-row justify-content-around" style="width: 70%">
        <!-- stats -->
        <div
          class="card mt-3 border border-black"
          style="margin-left: 20px; width: 45%"
        >
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
          <div
            class="card-header"
            style="background-color: black; color: white"
          >
            <h2>Stats</h2>
          </div>
          <div class="card-body">
            <h3 class="text-start">HP: {{ pokemonData.stats[0].base_stat }}</h3>
            <h3 class="text-start">
              Attack: {{ pokemonData.stats[1].base_stat }}
            </h3>
            <h3 class="text-start">
              Defense: {{ pokemonData.stats[2].base_stat }}
            </h3>
            <h3 class="text-start">
              Speed: {{ pokemonData.stats[5].base_stat }}
            </h3>
            <h3 class="text-start">
              Special Attack: {{ pokemonData.stats[3].base_stat }}
            </h3>
            <h3 class="text-start">
              Special Defense: {{ pokemonData.stats[4].base_stat }}
            </h3>
          </div>
        </div>
        <div style="width: 45%">
          <!-- abilities -->

          <div class="card mt-3" style="margin-left: 20px; width: 100%">
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
          <!-- moves -->
          <div class="w-100 card mt-3 h-50" style="margin-left: 20px">
            <div
              class="cart-header border-top border-end border-start border-black"
              style="background-color: black; color: white"
            >
              <h2>Moves</h2>
            </div>
            <div
              class="cart-body d-flex flex-column justify-content-around border-top border-end border-start border-bottom border-black h-100"
            >
              <h3 class="text-capitalize">
                • {{ pokemonData.moves[0].move.name }}
              </h3>
              <h3 class="text-capitalize">
                • {{ pokemonData.moves[1].move.name }}
              </h3>
              <h3 class="text-capitalize">
                • {{ pokemonData.moves[2].move.name }}
              </h3>
              <h3 class="text-capitalize">
                • {{ pokemonData.moves[3].move.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-5 mb-5 border border-black">
      <div class="card-header" style="background-color: black; color: white">
        <h2>Image</h2>
      </div>
      <div class="card-body d-flex justify-content-around">
        <img :src="pokemonData.sprites.other.home.front_default" alt="" />
        <img :src="pokemonData.sprites.other.home.front_shiny" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import usePoke from "../store/pokemon";
export default {
  name: "Pokemon",

  setup() {
    const {
      params: { id },
    } = useRoute();

    const { getPokemon, pokemonData } = usePoke();
    getPokemon(id);

    return { pokemonData };
  },
};
</script>
