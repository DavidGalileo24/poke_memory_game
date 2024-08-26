<script setup>
import { onMounted } from 'vue';

const firstArray = [
  {
    id: 1,
    file: '../../public/images/1.png'
  },
  {
    id: 2,
    file: '../../public/images/2.png'
  },
  {
    id: 3,
    file: '../../public/images/3.png'
  },
  {
    id: 4,
    file: '../../public/images/4.png'
  },
  {
    id: 5,
    file: '../../public/images/5.png'
  },
  {
    id: 6,
    file: '../../public/images/6.png'
  },
  {
    id: 7,
    file: '../../public/images/7.png'
  },
  {
    id: 8,
    file: '../../public/images/8.png'
  },
]

</script>

<template>
    <div v-for="imag in firstArray" :key="imag.id" class="w-">
      <img :src="imag.file" class="w-20 h-20" />
    </div>
</template>
