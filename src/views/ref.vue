<template>
  <div>
    <h1>Reactividad con ref()</h1>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Definir una variable reactiva con ref()
    const counter = ref(0)

    // Función para incrementar el contador
    const increment = () => {
      counter.value++
    }

    // Retornar los datos y métodos que se utilizarán en el componente
    return {
      counter,
      increment,
    }
  },
}
</script>
