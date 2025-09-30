<script setup lang="ts">
import { defineProps } from 'vue'
import { store } from './store'

const props = defineProps({
  maxSteps: {
    type: Number,
    required: true,
  },
})

function handleBack() {
  if (store.currentStep > 1) store.currentStep--
}

function handleNext() {
  if (store.currentStep <= props.maxSteps) store.currentStep++
}
</script>

<template>
  <div class="w-full flex justify-between items-center py-2">
    <button
      :disabled="store.currentStep === 1"
      @click="handleBack"
      className="text-indigo-700 text-sm cursor-pointer hover:bg-indigo-700 hover:text-white transition-all duration-300 border border-indigo-700 rounded-lg px-4 py-2"
    >
      Voltar
    </button>
    <button
      @click="handleNext"
      :disabled="store.currentStep === props.maxSteps"
      className="text-indigo-700 text-sm cursor-pointer hover:bg-indigo-700 hover:text-white transition-all duration-300 border border-indigo-700 rounded-lg px-4 py-2"
    >
      {{ store.currentStep === maxSteps ? 'Finalizar' : 'Continuar' }}
    </button>
  </div>
</template>

<style scoped></style>
