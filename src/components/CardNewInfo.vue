<script setup lang="ts">

interface IPokemon{
  id: number,
  name: string,
  color: string,
  abilities: IAbilities,
  description: string,
  height: number,
  weight:number,
  image: string,
  backGroundColor: string
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
	<div class="container mx-auto">
		<div class="mx-auto">

			<form class="max-w-lg mx-auto">
				<div class="flex">
					<label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your
						Email</label>
					<button id="dropdown-button" data-dropdown-toggle="dropdown"
						class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
						type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="m1 1 4 4 4-4" />
						</svg></button>
					<div id="dropdown"
						class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
						<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
							<li>
								<button type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
							</li>
							<li>
								<button type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
							</li>
							<li>
								<button type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
							</li>
							<li>
								<button type="button"
									class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
							</li>
						</ul>
					</div>
					<div class="relative w-full">
						<input type="search" id="search-dropdown"
							class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
							placeholder="Search your favourite Pokemon" required />
						<button type="submit"
							class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 20 20">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
							<span class="sr-only">Search</span>
						</button>
					</div>
				</div>
			</form>
		</div>
		<div class="flex flex-row flex-wrap justify-between">
			<div v-for="(pokemon, index) in arrPokemon" v-bind:key="index"
				:class="'max-w-xs rounded-3xl my-4 '+pokemon.color+' bg-gradient-to-r [&.green]:from-green-500 [&.red]:from-red-500 [&.blue]:from-blue-500 [&.purple]:from-purple-500 [&.pink]:from-pink-500 [&.white]:from-white [&.brown]:from-brown [&.yellow]:from-yellow-500 !to-slate-300'">
				<div class="w-full flex justify-center h-72 px-6 py-4">
					<img :src="pokemon.image" alt="Sunset in the mountains">
				</div>
				<div class="px-6 py-4">
					<div class="w-full mb-5">
						<p
							:class="'font-bold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 [&.brown]:brown950 text-3xl'">
							{{ pokemon.name }}
						</p>
					</div>
					<div
						:class="'-full flex flex-col justify-between rounded-3xl border '+pokemon.color+' bg-gradient-to-r from-slate-300 [&.red]:via-red-400 [&.blue]:via-blue-400 [&.purple]:via-purple-400 [&.pink]:via-pink-400 [&.green]:via-green-400 [&.white]:via-white [&.brown]:via-brown [&.yellow]:via-yellow-400 to-slate-900 divide-y mb-4'">
						<div class="w-full text-center">
							<p
								:class="'font-mono font-extralight '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-xl mx-2 my-1'">
								Informations
							</p>
						</div>
						<div class="w-full flex justify-between  divide-'+pokemon.color+'-700 divide-x">
							<div class="w-full flex gap-1 justify-center px-3 py-1.5">
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									ID:
								</p>
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									{{ pokemon.id }}
								</p>
							</div>
							<div class="w-full flex gap-1 justify-center px-3 py-1.5">
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									Height:
								</p>
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									{{ pokemon.height }}
								</p>
							</div>
							<div class="w-full flex gap-1 justify-center px-3 py-1.5">
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									Weight:
								</p>
								<p
									:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-base'">
									{{ pokemon.weight }}
								</p>
							</div>
						</div>
					</div>
					<div class="w-full h-56 mt-5 mb-5">
						<p
							:class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-xl'">
							{{ pokemon.description }}
						</p>
					</div>
					<div class="w-full mb-5">
						<p
							:class="'underline font-mono font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950 [&.pink]:text-pink-950  [&.white]:text-black [&.brown]:text-yellow-950 text-3xl'">
							Skills
						</p>
					</div>
					<div class="w-full flex flex-wrap justify-start mb-2">
						<p v-for="(abilities, indexAbilities) in  pokemon.abilities" v-bind:key="indexAbilities"
							:class="'border bg-gradient-to-r from-slate-300 [&.red]:via-red-600 [&.blue]:via-blue-600 [&.purple]:via-purple-600 [&.pink]:via-pink-600 [&.green]:via-green-600 [&.white]:via-white [&.brown]:via-brown [&.yellow]:via-yellow-600 rounded-full px-2 py-1 text-lg font-semibold text-black mr-2 mb-3'">
							{{ abilities.name }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<style scoped>
</style>