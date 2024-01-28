<script setup>
import { onMounted } from 'vue';
import {usePokemonStore} from '../stores/pokemon';

const pokemonStore = usePokemonStore();
onMounted(() => {
  pokemonStore.getPokemon();
});

</script>

<template>
  <main>
    gg<p>{{ pokemonStore.data }}</p>
  </main>
</template>
