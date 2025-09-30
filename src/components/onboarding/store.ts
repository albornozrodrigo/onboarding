import { reactive } from 'vue'

export const store = reactive({
  currentStep: 1,
  geolocation: false,
  notifications: false,
  name: '',
  birthDate: '',
})
