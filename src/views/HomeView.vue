<script setup>
import { onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemon';
const pokeData = usePokemonStore();

const secondArray = pokeData.firstArray.slice();

</script>

<template>
  <h1 class="text-center text-3xl font-semibold mt-10">Memory Game</h1>
  <div class="grid gap-3 mt-7 grid-cols-4 w-2/3 mx-auto ">
    <div v-for="imag in pokeData.firstArray" :key="imag.id" @click="pokeData.getImage(imag)" class="rounded-lg p-5 border-4 bg-gray-900 border-blue-300 hover:cursor-pointer card">
      <img :src="pokeData.image" class="w-24 h-24 mx-auto" />
      {{pokeData.image}}
      <!--<h3 class="text-center text-lg mt-2 font-semibold">{{ imag.name }}</h3>-->
    </div>
  </div>
</template>
<style scoped>
</style>
