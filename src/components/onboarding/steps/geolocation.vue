<script setup lang="ts">
import { store } from '../store';
</script>

<template v-slot:"geolocation">
  <h1 className="text-xl font-bold mb-2 text-indigo-700">Geolocalização</h1>
  
  <p className="text-sm pb-4 leading-relaxed">Clique no botão abaixo para habilitar a localização.</p>
  
  <button v-if="!store.geolocation" @click="store.geolocation = !store.geolocation" className="cursor-pointer px-4 py-2 text-indigo-700 border border-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition-all duration-300">
    Habilitar localização
  </button>

  <button v-if="store.geolocation" className="cursor-pointer px-4 py-2 text-green-700 border border-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300">
    Geolocalização habilitada!
  </button>
</template>

<style scoped>
</style>
