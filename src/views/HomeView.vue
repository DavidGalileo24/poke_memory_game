<script setup>
import { onMounted } from 'vue';
import {usePokemonStore} from '../stores/pokemon';

const pokemonStore = usePokemonStore();
onMounted(() => {
  pokemonStore.getAllPokemon();
});

</script>

<template>
  <main>
    <pre>{{ pokemonStore.data }}</pre>
  </main>
</template>
