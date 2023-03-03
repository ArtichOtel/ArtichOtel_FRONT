<template>
  <img :src="iconURL + 'emptyStar.svg'" alt="étoile vide">
</template>

<script setup>
import { ref } from 'vue';
const iconURL = ref(import.meta.env.VITE_API_ICON_URL);
</script>