<template>
  <section id="hero"
           v-if="loaded"
           class="relative mt-12 bg-tertiary/50"
           :style="{backgroundImage: 'url(' + heroData.url_image + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
  >
    <NavBar />

    <div class="flex flex-col w-full h-full">

<!--  title + sub    -->
      <div class="mx-auto my-24 md:my-36 lg:my-[12vw] text-center">
        <h1 class="text-7xl font-title text-secondary">
          {{ heroData.title[langStore.lang] }}
        </h1>
        <h2 class="mt-12 text-5xl font-content text-secondary">
          {{ heroData.subtitle[langStore.lang] }}
        </h2>
      </div>

<!--   ctas   -->
      <div class="mx-auto flex flex-col text-center lg:justify-between gap-5 tracking-wider mb-12">

<!--   2 date pickers     -->
        <div class="flex flex-col justify-center items-center bg-tertiary/60 p-4">
          <div class="flex flex-col md:flex-row justify-center items-center text-secondary-light mb-4">

            <!--    left picker        -->
            <DatePicker v-bind:title="'Arrivée'"
                        v-bind:boundary="'start'"
                        v-bind:svgColor="'svg-secondary-light'"
            />

            <!--    right picker        -->
            <DatePicker v-bind:title="'Départ'"
                        v-bind:boundary="'end'"
                        v-bind:svgColor="'svg-secondary-light'"
            />

          </div>
          <button
              class="bg-tertiary rounded-lg py-2 px-12 text-3xl tracking-wider text-accent font-content uppercase"
              role="link" v-on:click="goTo(heroCTA[0].url)"
          >
            {{ heroCTA[0].text[langStore.lang] }}
          </button>
        </div>


        <button
          class="bg-primary rounded-lg py-2 px-12 text-2xl tracking-wider text-secondary font-content"
          role="link" v-on:click="goTo(heroCTA[1].url)"
        >
          {{ heroCTA[1].text[langStore.lang] }}
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
import {ref} from "vue";
import { useLangStore } from "../../stores/lang";
import {error, log} from "../../utils/console";
import NavBar from "../blocks/NavBar.vue";
import DatePicker from "../blocks/DatePicker.vue";
import {useQueryDatesStore} from "../../stores/queryDates";
import router from "../../router";

const props = defineProps({
  title: Object,
  uri: String,
  wysiwygHero: {},
  wysiwygCTA1: {},
  wysiwygCTA2: {}
});

const langStore = useLangStore();

const heroData = ref();
const heroCTA = ref();
const loaded = ref(false)

const queryDateStore = useQueryDatesStore()


if (props.uri !== '') {
  axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`)
      .then((resp) => {
        heroData.value = resp.data[0][0];
        heroCTA.value = resp.data[1];
      })
      .then(()=> {
        loaded.value = true
      }).catch((err) => {
        error(err)
  })
} else {
  // if data are provided in wysiwyg mode
  log("HERO WYSIWYG")
  heroData.value = {title: props.wysiwygHero.title, subtitle: props.wysiwygHero.subtitle, url_image: props.wysiwygHero.url_image}
  heroCTA.value[0] = {text: props.wysiwygCTA1.text }
  heroCTA.value[1] = {text: props.wysiwygCTA2.text }
}


function goTo(url) {
  router.push(url)
}

function updateValues() {

}


</script>


<!--


         :style="!!wysiwyg ? `background: url(${wysiwyg.url_image})` : `background: url(${heroData.url_image})` "

    :style="{background: 'url(' + heroData.url_image + ')'}"


-->