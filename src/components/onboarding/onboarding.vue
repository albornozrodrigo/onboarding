<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import '../../assets/main.css'
import StepIndicator from './stepIndicator.vue'
import StepNavigation from './stepNavigation.vue'
import { store } from './store'

const components = {
  welcome: defineAsyncComponent(() => import('./steps/welcome.vue')),
  geolocation: defineAsyncComponent(() => import('./steps/geolocation.vue')),
  notifications: defineAsyncComponent(() => import('./steps/notifications.vue')),
  name: defineAsyncComponent(() => import('./steps/name.vue')),
  age: defineAsyncComponent(() => import('./steps/age.vue')),
  finish: defineAsyncComponent(() => import('./steps/finish.vue')),
}

const steps = [
  {
    title: 'Bem-vindo!',
    slug: 'welcome',
    description: 'Lorem ipsum dolor sit.',
    component: components.welcome,
  },
  {
    title: 'Geolocalização',
    slug: 'geolocation',
    description: 'Habilite a localização',
    component: components.geolocation,
  },
  {
    title: 'Notificações',
    slug: 'notifications',
    description: 'Habilite as notificações',
    component: components.notifications,
  },
  {
    title: 'Nome',
    slug: 'name',
    description: 'Preencha seu nome',
    component: components.name,
  },
  {
    title: 'Idade',
    slug: 'age',
    description: 'Preencha sua data de nascimento',
    component: components.age,
  },
  {
    title: 'Finalizar',
    slug: 'finish',
    component: components.finish,
  },
]
</script>

<template>
  <div className="max-sm:w-full min-sm:max-w-3xl text-gray-700 w-full h-full m-4">
    <div className="rounded-lg shadow-lg p-4 gap-4 bg-gray-100 flex max-sm:flex-col h-full">
      <StepIndicator :steps="steps" />

      <div
        className="max-sm:w-full min-sm:max-w-2/3 w-full rounded-lg border border-violet-700/60 p-4"
      >
        <component :is="steps[store.currentStep - 1].component"></component>
      </div>
    </div>

    <StepNavigation :currentStepSlug="steps[store.currentStep - 1].slug" :maxSteps="steps.length" />
  </div>
</template>

<style scoped></style>
