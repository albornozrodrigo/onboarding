<script setup lang="ts">
import { store } from './store'

const props = defineProps<{
  steps: {
    title: string
    description?: string
  }[]
}>()

function goToStep(step: number) {
  store.currentStep = step
}
</script>

<template>
  <nav
    className="flex justify-center items-start gap-2 bg-gradient-to-br from-pink-600 via-purple-700 to-violet-700 max-sm:w-full min-sm:max-w-1/3 rounded-lg p-4"
  >
    <ul className="flex align-center gap-1 justify-center min-sm:flex-col">
      <li
        v-for="(step, index) in props.steps"
        :key="step.title"
        @click="goToStep(index + 1)"
        :class="[
          'flex place-items-center p-2 rounded-lg min-sm:hover:bg-white/10 transition-all duration-300 cursor-pointer',
          store.currentStep === index + 1 ? 'bg-white/10' : '',
        ]"
      >
        <span
          class="bg-white/60 min-w-6 size-6 font-bold text-sm rounded-full justify-center flex items-center"
        >
          {{ index + 1 }}
        </span>
        <div className="p-2 text-white/60 text-sm max-sm:hidden">
          <h2>{{ step.title }}</h2>
          <small v-if="step.description">{{ step.description }}</small>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
