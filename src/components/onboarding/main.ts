import { defineCustomElement } from 'vue'
import Onboarding from './onboarding.vue'

const VueOnboarding = defineCustomElement(Onboarding, { shadowRoot: false })
customElements.define('vue-onboarding', VueOnboarding)

export { VueOnboarding }
