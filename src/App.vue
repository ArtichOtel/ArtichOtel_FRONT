<template class="font-content">
  <LoginButton />
  <RouterView />
</template>

<script setup>
import {ref} from "vue";
import LoginButton from "./components/LoginButton.vue";

const connectionStatus = ref({
  connected: false,
  role: null
})



</script>
