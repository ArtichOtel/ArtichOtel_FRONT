<template>
  <section
    class="relative bg-gradient-to-r from-cyan-500 to-blue-500 h-[calc(100vh-48px)] mt-12 bg-hero bg-cover bg-no-repeat"
  >
    <nav></nav>
    <div class="flex flex-col w-full h-full">
      <div class="m-auto text-center">
        <h1 class="text-7xl text-secondary">{{ heroData.title }}</h1>
        <h2 class="text-5xl text-secondary">{{ heroData.subtitle }}</h2>
      </div>
      <div
        class="m-auto flex-col md:flex-row text-center lg:justify-between gap-5 flex w-full md:w-6/12 h-auto w-9/12"
      >
        <button
          class="bg-primary rounded-lg py-2 px-12 text-2xl text-secondary"
        >
          Offre du moment
        </button>
        <button class="bg-accent rounded-lg py-2 px-12 text-2xl text-texts">
          Je réserve une chambre de luxe
        </button>
      </div>
    </div>
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

const props = defineProps({
  title: String,
  uri: String,
});

axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`).then((resp) => {
  heroData.value = resp.data[0];
});
</script>

<style scoped></style>
