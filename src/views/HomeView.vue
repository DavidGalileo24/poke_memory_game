<script setup>
import { onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemon';
const pokeData = usePokemonStore();

const secondArray = pokeData.firstArray.slice();

</script>

<template>
  <div class="grid gap-3 mt-7 grid-cols-4 w-2/3 mx-auto">
    <div v-for="imag in pokeData.firstArray.concat(secondArray)" :key="imag.id" class="border rounded-md p-5 hover:cursor-pointer card">
      <img src="../../public/images/8.png" class="w-24 h-24 mx-auto" @click="pokeData.getImage(imag.id)" v-if="pokeData.statusCard==false"/>
      <img :src="imag.file" class="w-24 h-24 mx-auto" v-else />
      <!--<h3 class="text-center text-lg mt-2 font-semibold">{{ imag.name }}</h3>-->
    </div>
  </div>
</template>
<style scoped>

</style>
