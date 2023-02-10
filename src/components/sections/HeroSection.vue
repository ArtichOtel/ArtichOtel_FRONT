<template>
  <section
    v-for="hero in heroData"
    :key="hero.id"
    class="bg-gradient-to-r from-cyan-500 to-blue-500 w-5/5 h-96"
  >
    <h1>{{ hero.title }}</h1>
    <h2>{{ hero.subtitle }}</h2>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
<script setup>
import axios from "axios";
import { ref } from "vue";

let heroData = ref([]);

axios.get("http://localhost/api/hero").then((resp) => {
  heroData.value = resp.data;
});
</script>

<style scoped></style>
