<template>

  <section class="bg-tertiary text-secondary">
    <div class="px-[8.6vw] py-[9vw] flex flex-col gap-[8vw]">
      <h2 class="font-title text-titleBase">{{ title }}</h2>
      <div class="">
        <div class="flex flex-col gap-[2.4vw]">
          <div class="flex flex-col md:flex-row justify-between gap-[2.4vw]">

            <div class="flex flex-col gap-1">
              <img src="https://via.placeholder.com/640x480.png/009988?text=1" alt="">
              <span class="font-content">{{ advantages.description }}</span>
            </div>

            <div class="flex flex-col gap-1">
              <img src="https://via.placeholder.com/640x480.png/009988?text=2" alt="">
              <span class="font-content">{{ advantages.description }}</span>
            </div>

          </div>

          <div class="flex flex-col md:flex-row justify-between gap-[2.4vw]">

            <div class="flex flex-col gap-1">
              <img src="https://via.placeholder.com/640x480.png/009988?text=3" alt="">
              <span class="font-content">{{ advantages.description }}</span>
            </div>

            <div class="flex flex-col gap-1">
              <img src="https://via.placeholder.com/640x480.png/009988?text=4" alt="">
              <span class="font-content">{{ advantages.description }}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';

const advantages = ref([])
const props = defineProps({
  title: String,
  uri: String
})

axios({
  method: 'get',
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
  .then((response) => {
    console.log('advantages', response.data)
    advantages.value = response.data
  })
  .catch((error) => {
    console.log('Error: ', error)
  })

</script>

<style scoped>

</style>