<template>
  <div>
    <h1>Uso de Computed</h1>
    <p>Radio: <input v-model="radio" type="number" /></p>
    <p>Área del círculo: {{ area }}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup() {
    const radio = ref(0)

    // Propiedad computada para calcular el área del círculo
    const area = computed(() => {
      const r = radio.value
      return Math.PI * r * r
    })

    return {
      radio,
      area,
    }
  },
}
</script>
