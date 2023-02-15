<template class="font-content">
  <RouterView />
</template>

<script setup>
import {ref} from "vue";

const connectionStatus = ref({
  connected: false,
  role: null
})



</script>
