<template>
  <section id="offers" class="px-[8.6vw] py-[9vw]">

    <div class="flex flex-col md:flex-row justify-between gap-[9.6vw]">

      <div class="flex flex-col text-tertiary">
        <h2 class="font-title text-titleBase md:text-titleMed mb-[4vw]">{{title}}</h2>
        <span class="font-content">{{ offer.description }}</span>

      </div>
      <div class="flex flex-col items-center gap-1">

        <img :src="offer.url_image" alt="">
        <button class="bg-accent rounded-lg py-2 px-12 text-2xl text-tertiary font-content">
          Réservez maintenant
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import {log} from "../../utils/console";

const offer = ref({})
const props = defineProps({
  title: String,
  uri: String
})

axios({
  method: 'get',
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
  .then((response) => {
    //log("offers", response.data)
    offer.value = response.data[0]
  })
  .catch((error) => {
    log('Error: ', error)
  })

</script>