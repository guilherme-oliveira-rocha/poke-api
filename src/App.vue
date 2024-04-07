<script setup lang="ts">

import NavBar from './components/NavBar.vue'
import CardNewInfo from './components/CardNewInfo.vue';
import { ref } from 'vue';

interface IPokemon{
  id: number,
  name: string,
  abilities: IAbilities,
  height: number,
  weight:number,
  image: string
}

interface IPokemons extends Array<IPokemon>{}

interface IAbility {
  name: string,
}

interface IAbilities extends Array<IAbility>{}

const arrPokemon = ref<Array<IPokemons>>([]);
// const arrNews = ref<(number | string | boolean)[]>([])

async function fetApi(url: string): Promise<any | Error> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return new Error(
          `Something went wrong with the request, check your URL or your Internet connection!`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error
    }
}

async function searchPokemon():Promise<any> {

  const pokemons:IPokemons = [];

  const firstReqPokemon = await fetApi("https://pokeapi.co/api/v2/pokemon?limit=55");

  if(firstReqPokemon instanceof Error){
    return console.log(firstReqPokemon);
  }

  for(const info of firstReqPokemon.results) {
    const secondReqPokemon = await fetApi(info.url);
    pokemons.push(...PokemonDTO(secondReqPokemon));
  }

  return pokemons
}

function PokemonDTO(primitive:any):IPokemons {

  const pokemons:IPokemons = [];

    pokemons.push({
      id: primitive.id,
      name: primitive.name,
      abilities: AbilitiesDTO(primitive.abilities),
      height: primitive.height,
      weight: primitive.weight,
      image: primitive.sprites.back_default,
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
      <NavBar/>
  </header>

  <main>
      <CardNewInfo :arrPokemon="arrPokemon"></CardNewInfo>
  </main>
</template>

<style scoped>
</style>
