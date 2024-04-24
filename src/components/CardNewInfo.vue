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
	<div class="container mx-auto flex flex-row flex-wrap justify-between">
		<div v-for="(pokemon, index) in arrPokemon" v-bind:key="index"
			:class="'max-w-xs rounded-3xl my-4 '+pokemon.color+' bg-gradient-to-r [&.red]:from-red-500 [&.blue]:from-blue-500 [&.green]:from-green-500 [&.white]:from-white [&.brown]:from-brown [&.yellow]:from-yellow-500 !to-slate-300'">
			<div class="w-full flex justify-center px-6 py-4">
				<img :src="pokemon.image" alt="Sunset in the mountains">
			</div>
			<div class="px-6 py-4">
				<div class="w-full mb-5">
					<p :class="'font-bold text-'+pokemon.color+'-950 text-3xl'">
						{{ pokemon.name }}
					</p>
				</div>
				<div
					:class="'-full flex flex-col justify-between rounded-3xl border '+pokemon.color+' bg-gradient-to-r from-slate-300 [&.red]:via-red-400 [&.blue]:via-blue-400 [&.purple]:via-purple-400 [&.green]:via-green-400 [&.white]:via-white [&.brown]:via-brown [&.yellow]:via-yellow-400 to-slate-900 divide-y mb-4'">
					<div class="w-full text-center">
						<p :class="'font-mono font-extralight '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white-950 [&.yellow]:text-yellow-950 text-xl mx-2 my-1'">
							Informations
						</p>
					</div>
					<div class="w-full flex justify-between  divide-'+pokemon.color+'-700 divide-x">
						<div class="w-full flex gap-1 justify-center px-3 py-1.5">
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								ID:
							</p>
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								{{ pokemon.id }}
							</p>
						</div>
						<div class="w-full flex gap-1 justify-center px-3 py-1.5">
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								Height:
							</p>
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								{{ pokemon.height }}
							</p>
						</div>
						<div class="w-full flex gap-1 justify-center px-3 py-1.5">
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								Weight:
							</p>
							<p :class="'font-semibold '+pokemon.color+' [&.green]:text-green-950 [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
								{{ pokemon.weight }}
							</p>
						</div>
					</div>
				</div>
				<div>
					<div class="w-full mb-5">
						<p :class="'font-medium '+pokemon.color+' [&.red]:text-red-950 [&.blue]:text-blue-950 [&.purple]:text-purple-950  [&.white]:text-white [&.yellow]:text-yellow-950 text-base'">
							{{ pokemon.description }}
						</p>
					</div>
				</div>
				<div class="w-full flex justify-between mb-2">
					<p v-for="(abilities, indexAbilities) in  pokemon.abilities" v-bind:key="indexAbilities"
						:class="'border bg-gradient-to-r from-slate-200 [&.red]:via-red-400 [&.blue]:via-blue-400 [&.purple]:via-purple-400 [&.green]:via-green-400 [&.white]:via-white [&.brown]:via-brown [&.yellow]:via-yellow-400 rounded-full px-2 py-1 text-lg font-medium text-black mr-2 mb-3'">
						{{ abilities.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
</style>