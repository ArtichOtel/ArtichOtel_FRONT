<template>
  <section id="hero" v-if="heroData"
    class="relative h-[calc(100vh-48px)] mt-12 bg-cover bg-no-repeat"
    :style="{background: 'url(' + heroData.url_image + ')'}"
  >
    <nav></nav>
    <div class="flex flex-col w-full h-full">
      <div v-if="heroData" class="m-auto text-center">
        <h1 class="text-7xl font-title text-secondary">
          {{ heroData.title }}
        </h1>
        <h2 class="text-5xl font-title text-secondary">
          {{ heroData.subtitle }}
        </h2>
      </div>
      <div
        v-if="heroCTA"
        class="m-auto flex-col md:flex-row text-center lg:justify-between gap-5 flex md:w-6/12 h-auto w-9/12"
      >
        <button
          class="bg-primary rounded-lg py-2 px-12 text-2xl text-secondary font-content"
          role="link" v-on:click="goTo(heroCTA[0].url)"
        >
          {{ heroCTA[0].text }}
        </button>
        <button
          class="bg-accent rounded-lg py-2 px-12 text-2xl text-texts font-content"
          role="link" v-on:click="goTo(heroCTA[1].url)"
        >
          {{ heroCTA[1].text }}
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
import router from "../../router";

const props = defineProps({
  title: String,
  uri: String,
});

const heroData = ref();
const heroCTA = ref();

axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`).then((resp) => {
  heroData.value = resp.data[0][0];
  heroCTA.value = resp.data[1];
  console.log("text : ", resp.data[1]);
});


function goTo(url) {
  //router.push(url)
  window.location.replace(url)
}


</script>