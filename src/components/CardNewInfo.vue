<script setup lang="ts">

interface IPokemon{
  id: number,
  name: string,
  color: string,
  abilities: IAbilities,
  description: string,
  height: number,
  weight:number,
  image: string
}

interface IAbility {
  name: string,
}

interface IAbilities extends Array<IAbility>{}

defineProps<{
  arrPokemon: Array<IPokemon>
}>()

</script>
<template>
	<div class="container mx-auto flex flex-row flex-wrap justify-between">
		<div v-for="(pokemon, index) in arrPokemon" v-bind:key="index" :class="'max-w-xs rounded-3xl overflow-hidden shadow-xl my-4 bg-gradient-to-r from-'+pokemon.color+'-500 via-'+pokemon.color+'-150 to-white'">
		<!-- <div v-for="(pokemon, index) in arrPokemon" v-bind:key="index" :class="'max-w-xs rounded-3xl overflow-hidden shadow-xl my-4 bg-gradient-to-r from-green-500 via-green-150 to-white'"> -->
			<div class="w-full flex justify-center h-2/5 px-6 py-4">
				<img :src="pokemon.image" alt="Sunset in the mountains">
			</div>
			<div class="px-6 py-4 h-2/5">
				<div class="font-bold text-white text-xl mb-2">{{ pokemon.name }}</div>
					<p class="text-white text-base">
						{{ pokemon.description }}
					</p>
			</div>
			<div class="px-6 py-4 h-1/5">
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
				<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
</style>