<template>
  <section id="hero"
           v-if="heroData"
           class="relative h-[calc(100vh-48px)] mt-12 bg-tertiary/40"
           :style="{backgroundImage: 'url(' + heroData.url_image + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
  >
    <NavBar />

    <div class="flex flex-col w-full h-full">
      <div class="m-auto text-center">
        <h1 class="text-7xl font-title text-secondary">
          {{ heroData.title[langStore.lang] }}
        </h1>
        <h2 class="text-5xl font-title text-secondary">
          {{ heroData.subtitle }}
        </h2>
      </div>
      <div
        v-if="heroCTA.length"
        class="m-auto flex-col md:flex-row text-center lg:justify-between gap-5 flex md:w-6/12 h-auto w-9/12 tracking-wider"
      >
        <button
          class="bg-primary rounded-lg py-2 px-12 text-2xl tracking-wider text-secondary font-content"
          role="link" v-on:click="goTo(heroCTA[0].url)"
        >
          {{ heroCTA[0].text}}
        </button>
        <button
          class="bg-accent rounded-lg py-2 px-12 text-2xl tracking-wider text-texts font-content"
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
import {reactive, ref} from "vue";
import { useLangStore } from "../../stores/lang";
import {log} from "../../utils/console";
import NavBar from "../NavBar.vue";

const props = defineProps({
  title: String,
  uri: String,
  wysiwygHero: {},
  wysiwygCTA1: {},
  wysiwygCTA2: {}
});

const langStore = useLangStore();

const heroData = ref();
const heroCTA = ref();

/*
const styleObject = reactive({
  backgroundImage: 'url(' + heroData.value.url_image + ')',
})
*/

if (props.uri !== '') {
  axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`)
      .then((resp) => {
        heroData.value = resp.data[0][0];
        heroCTA.value = resp.data[1];
  });
} else {
  // if data are provided in wysiwyg mode
  log("HERO WYSIWYG")
  heroData.value = {title: props.wysiwygHero.title, subtitle: props.wysiwygHero.subtitle, url_image: props.wysiwygHero.url_image}
  heroCTA.value[0] = {text: props.wysiwygCTA1.text }
  heroCTA.value[1] = {text: props.wysiwygCTA2.text }
}


function goTo(url) {
  //router.push(url)
  window.location.replace(url)
}

function updateValues() {

}


</script>


<!--


         :style="!!wysiwyg ? `background: url(${wysiwyg.url_image})` : `background: url(${heroData.url_image})` "

    :style="{background: 'url(' + heroData.url_image + ')'}"


-->