<template>

  <section id="advantages" class="bg-tertiary text-secondary">
    <div class="px-[8.6vw] py-[9vw] flex flex-col gap-[8vw]">
      <h2 class="font-title text-titleBase">{{ title }}</h2>

      <div class="">
        <div  v-if="advantages.length" class="flex flex-col md:flex-row sm:gap-[4vw]">
          <div v-for="n in 2" v-bind:key="n" class="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-[4vw]">

            <div v-for="m in 2" v-bind:key="m" class="flex flex-col justify-center gap-[2vw]
                                                      border border-secondary
                                                      border-b-8 border-b-accent rounded-b-md
                                                      w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] md:w-[20vw] md:h-[20vw]
                                                      mb-[4vw]">


              <img :src="apiIconURL + advantages[n-1+(m-1)*2].icon + '.svg'"
                  :alt="advantages[n-1+(m-1)*2].icon"
                  class="m-20">
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
const apiIconURL = ref(import.meta.env.VITE_ICON_URL)


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