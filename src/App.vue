<script setup lang="ts">

  import NavBar from './components/NavBar.vue'
  import CardNewInfo from './components/CardNewInfo.vue';
  import LoadingApi from './components/LoadingApi.vue';
  import ErrorApi from './components/ErrorApi.vue';
  import type { IAbilities, IPokemons } from './interfaces/interfaces';
  import { ref } from 'vue';

  let showLoadingApi =  ref<boolean>(false);
  let showErrorApi = ref<boolean>(false);
  const arrPokemon = ref<IPokemons>([]);

  async function fetApi(url: string): Promise<any | Error> {

    showLoadingApi.value =  true;
    showErrorApi.value =  false;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          showErrorApi.value = true;
          return new Error(
            `Something went wrong with the request, check your URL or your Internet connection!`
          );
        }
        showErrorApi.value = false;

        const data = await response.json();
        return data;
      } catch (error) {
        showErrorApi.value = true;
        return error
      }finally{
        showLoadingApi.value = false;
      }
  }

  async function searchPokemon():Promise<any> {

    const pokemons:IPokemons = [];
    const firstReqPokemon = await fetApi("https://pokeapi.co/api/v2/pokemon?limit=15");

    if(firstReqPokemon instanceof Error){
      return console.log(firstReqPokemon);
    }

    for(const info of firstReqPokemon.results) {
      const secondReqPokemon = await fetApi(info.url);
      const thirdReqPokemon = await fetApi(secondReqPokemon.species.url);
      const datePrimitiveMerged = Object.assign({}, secondReqPokemon, thirdReqPokemon); 
      pokemons.push(...PokemonDTO(datePrimitiveMerged));
    }

    return pokemons
  }

  async function searchPokemonSingle():Promise<any> {

    const pokemons:IPokemons = [];
    const pokemonSingle = [];
    const namePokemon = (document.getElementById('namePokemon') as HTMLInputElement).value.toLocaleLowerCase();
    const firstReqPokemon = await fetApi(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);

    pokemonSingle.push(firstReqPokemon);

    if(firstReqPokemon instanceof Error){
      return console.log(firstReqPokemon);
    }

    for(const info of pokemonSingle) {
      const thirdReqPokemon = await fetApi(info.species.url);
      const datePrimitiveMerged = Object.assign({}, firstReqPokemon, thirdReqPokemon); 
      pokemons.push(...PokemonDTO(datePrimitiveMerged));
    }

    arrPokemon.value = pokemons;
    return arrPokemon;
  }

  function PokemonDTO(primitive:any):IPokemons {

    const pokemons:IPokemons = [];

    pokemons.push({
      id: primitive.id,
      name: primitive.name[0].toUpperCase()+primitive.name.slice(1),
      color: primitive.color.name,
      abilities: AbilitiesDTO(primitive.abilities),
      description: primitive.flavor_text_entries[7].flavor_text.replace(/[^a-zA-Z-. ]/g, ""),
      height: primitive.height,
      weight: primitive.weight,
      image: primitive.sprites.other.dream_world.front_default,
    })

    return pokemons
  }

  function AbilitiesDTO(primitives:any[]):IAbilities {

    const abilities:IAbilities = [];

    for(const infoAbility of primitives) {

      abilities.push({
        name: infoAbility.ability.name,
      })
    }

    return abilities
  }

  (async function(){
    arrPokemon.value = await searchPokemon();
  })()

</script>
<template>
  <header>
    <NavBar />
  </header>
  <main>
    <LoadingApi v-show="showLoadingApi" />
    <div class="max-w-lg mx-auto">
      <form @submit.prevent="searchPokemonSingle()">
        <div class="relative flex w-full my-5">
          <select disabled
            class="py-2 p-x-1 rounded-lg rounded-r-none border-r-0 text-sm text-gray-900 border border-gray-300 dark:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            name="" id="">
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="color">Color</option>
          </select>
          <input type="search" id="namePokemon"
            class="p-2 w-full rounded-lg rounded-l-none text-sm text-gray-900 border border-gray-300 dark:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
            placeholder="Search your Pokemón!" required />
          <button
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
    <ErrorApi v-show="showErrorApi" />
    <CardNewInfo :arrPokemon="arrPokemon"></CardNewInfo>
  </main>
</template>

<style scoped>
</style>
