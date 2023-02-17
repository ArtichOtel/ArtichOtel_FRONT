<template class="font-content">
  <LoginButton />
  <RouterView v-bind:sections="data" />
</template>

<script setup>
import {ref} from "vue";
import LoginButton from "./components/LoginButton.vue";
import axios from "axios";

const connectionStatus = ref({
  connected: false,
  role: null
})

const data = ref([])

axios.get(`${import.meta.env.VITE_API_BASE_URL}/sections`)
    .then((response) => {
      data.value = response.data
    })
    .catch((err)=> {
      console.log("BUG :", err)
    })



</script>
