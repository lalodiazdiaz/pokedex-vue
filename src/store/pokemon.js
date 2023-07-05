import { reactive, toRefs, readonly } from "vue";

const state = reactive({
  pokemonList: [],
  pokemonData: {},
});

export default function usePoke() {
  const getAllPokemon = () => {
    if (state.pokemonList.length === 0) {
      //fetch
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then((response) => response.json())
        .then((data) =>
          data.results.forEach((pokemonUrl) => {
            fetch(pokemonUrl.url)
              .then((response) => response.json())
              .then((res) => state.pokemonList.push(res));
          })
        );
    }
  };

  const getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => ((state.pokemonData = data), console.log(data)));
  };
  return { ...toRefs(readonly(state)), getAllPokemon, getPokemon };
}
