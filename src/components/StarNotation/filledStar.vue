<template>
  <img :src="iconURL + 'filledStar.svg'" alt="étoile pleine">
</template>

<script setup>
import { ref } from 'vue';


const iconURL = ref(import.meta.env.VITE_API_ICON_URL)
</script>