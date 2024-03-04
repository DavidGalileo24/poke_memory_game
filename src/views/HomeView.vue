<script setup>
import { onMounted } from 'vue';
import {usePokemonStore} from '../stores/pokemon';

const pokemonStore = usePokemonStore();
onMounted(() => {
  pokemonStore.getAllPokemon();
});

</script>

<template>
  <main class="p-2 w-5/6 mx-auto">
    <h1 class="text-center text-4xl font-bold">Memory game</h1>
    <!--card-->
    <div class=" grid grid-cols-5 gap-2 mt-5">
      <div
        v-for="poke in pokemonStore.data" :key="poke.id" 
        class="rounded-md border-gray-300 text-center cursor-pointer"
      >
        <img
          v-if="pokemonStore.active==false" 
          class="h-44 w-full object-cover rounded-md" 
          src="/images/img1.jpg" 
          alt="image description"
          @click="pokemonStore.activeCard(true)"
        >
        <div 
          v-else 
          class="h-44 w-full rounded-md flex items-center justify-center border border-slate-500 animate__animated animate__flipInY" 
          @click="pokemonStore.activeCard(false)"
          >
            {{ poke.name }}
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>

</style>
