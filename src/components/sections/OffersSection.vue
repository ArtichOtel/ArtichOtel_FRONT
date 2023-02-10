<template>
  <section class="px-[calc(8.6vw)] py-[calc(9vw)]">

    <div class="flex flex-row justify-between gap-[calc(9.6vw)]">

      <div class="flex flex-col gap-1">

        <h2 class="font-title">{{ title }}</h2>
        <span class="font-content">{{ offer.description }}</span>

      </div>
      <div class="flex flex-col items-center gap-1">

        <img :src="offer.url_image" alt="">
        <button class="w-1/3">Réservez maintenant</button>

      </div>

    </div>

  </section>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';

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
    console.log("offers", response.data)
    offer.value = response.data[0]
  })
  .catch((error) => {
    console.log('Error: ', error)
  })

</script>

<style scoped>

</style>