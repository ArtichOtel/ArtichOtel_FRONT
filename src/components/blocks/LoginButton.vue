<template>
  <div class="bg-secondary text-white fixed right-0 top-16 w-10 h-10 flex justify-center items-center z-100 rounded-l-lg
  hover:invert duration-500 hover:duration-200 cursor-pointer">

    <div v-if="!isLogged">
      <RouterLink to="/login"><img :src="iconURL + 'user.svg'" alt="login"></RouterLink>
    </div>

    <div v-if="isLogged" @click="$emit('logoutRequest')">
      <img :src="iconURL + 'logout.svg'" alt="logout">
    </div>


  </div>
</template>

<script setup>
// different behaviour if logged or not
// default is NOT logged
import { ref } from 'vue';

const props = defineProps({
  isLogged: Boolean
});
const iconURL = ref(import.meta.env.VITE_API_ICON_URL);

</script>