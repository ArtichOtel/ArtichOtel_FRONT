<template>
  <section id="offers" class="px-[8.6vw] py-[9vw]">

    <div v-if="loaded" class="flex flex-col md:flex-row justify-between gap-[9.6vw]">

      <div class="flex flex-col text-tertiary">
        <h2 class="font-title text-titleBase md:text-titleMed mb-[4vw]">{{title[langStore.lang]}}</h2>
        <p class="font-content tracking-wider">{{ offer.description[langStore.lang] }}</p>

      </div>
      <div class="flex flex-col items-center gap-1">

        <img :src="offer.url_image" alt="">
        <button @click="$router.push('booking')"
        class="bg-accent rounded-lg py-2 px-12 text-2xl text-tertiary font-content tracking-wider bg-[length:1000px] bg-left hover:bg-center transition-all duration-300
            bg-gradient-to-r from-transparent via-[rgba(255,255,254,0.001)] via-[rgba(255,255,254,0.01)] via-[rgba(255,255,254,0.01)] via-white/50 to-transparent">
          {{ dico[langStore.lang].offersCTA }}
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useLangStore } from '../../stores/lang';
import {log} from "../../utils/console";
import { i18n } from '../../utils/i18n';

const offer = ref({})
const loaded = ref(false)
const props = defineProps({
  title: Object,
  uri: String
})
const langStore = useLangStore()
const dico = i18n

axios({
  method: 'get',
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
  .then((response) => {
    //log("offers", response.data)
    offer.value = response.data[0]
  })
    .then(() => {
      loaded.value = true
    })
  .catch((error) => {
    log('Error: ', error)
  })

</script>