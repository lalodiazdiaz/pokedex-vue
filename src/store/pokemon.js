import { reactive, toRefs, readonly } from "vue";

const state = reactive({
  pokemonList: [],
  pokemonData: {},
  loading: false,
  loadingTable: false,
});

export default function usePoke() {
  const getAllPokemon = async () => {
    if (state.pokemonList.length === 0) {
      //fetch
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then((response) => response.json())
        .then((data) =>
          data.results.forEach((pokemonUrl) => {
            fetch(pokemonUrl.url)
              .then((response) => response.json())
              .then(
                (res) => state.pokemonList.push(res),
                setTimeout(() => {
                  state.loadingTable = true;
                }, 1500)
              );
          })
        );
    }
  };

  const getPokemon = async (id) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(
        (data) => (
          (state.pokemonData = data),
          setTimeout(() => {
            state.loading = true;
          }, 1500)
        )
      )
      .catch((error) => console.log(error));
  };
  return { ...toRefs(readonly(state)), getAllPokemon, getPokemon };
}
