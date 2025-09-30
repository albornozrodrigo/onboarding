<script setup lang="ts">
import { store } from '../store';
</script>

<template v-slot:"geolocation">
  <h1 className="text-xl font-bold mb-2 text-indigo-700">Nome</h1>
  
  <p className="text-sm pb-4 leading-relaxed">Digite seu nome para continuar o cadastro.</p>
  
  <input v-model="store.name" type="text" placeholder="Nome" className="w-full px-4 py-2 text-indigo-700 border border-indigo-700 rounded-lg hover:bg-indigo-700 hover:text-white transition-all duration-300" />
</template>

<style scoped>
</style>
