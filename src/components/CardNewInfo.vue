<script setup lang="ts">
import type { IPokemon } from '@/interfaces/interfaces';


defineProps<{
  arrPokemon: Array<IPokemon>
}>()

</script>
<template>
	<div class="container mx-auto">

    <!-- <div class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2">
      I'm a centered div using transforms!
  </div> -->
		<div class="flex flex-row flex-wrap lg:justify-between justify-center">
			<div v-for="(pokemon, index) in arrPokemon" v-bind:key="index"
				:class="'max-w-xs rounded-3xl mx-4 my-4 '+pokemon.color+' bg-gradient-to-r [&.green]:from-green-500 [&.red]:from-red-500 [&.blue]:from-blue-500 [&.purple]:from-purple-500 [&.pink]:from-pink-500 [&.white]:from-white [&.brown]:from-brown [&.yellow]:from-yellow-500 !to-slate-300'">
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