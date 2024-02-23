<script setup>
import { onMounted } from 'vue';
import {usePokemonStore} from '../stores/pokemon';

const pokemonStore = usePokemonStore();
onMounted(() => {
  pokemonStore.getAllPokemon();
});

</script>

<template>
  <main class="p-5 w-5/6 mx-auto">
    <h1 class="text-center text-3xl font-bold">Memory game</h1>
    <!--card-->
    <div class=" grid grid-rows-4 gap-4 grid-flow-col mt-8">
      <div
        v-for="poke in pokemonStore.data" :key="poke.id" 
        class="rounded-md border-gray-300 text-center cursor-pointer hover:border-2"
      >
        <img 
          class="h-72 w-full object-cover rounded-md" 
          src="/images/img1.jpg" 
          alt="image description"
        >
    </div>
    </div>
  </main>
</template>
<style scoped>

</style>
