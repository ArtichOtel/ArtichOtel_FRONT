<template>

  <section id="advantages" class="bg-tertiary text-secondary">
    <div class="px-[8.6vw] py-[9vw] flex flex-col gap-[8vw]">
      <h2 class="font-title text-titleBase">{{ title }}</h2>
      <div class="">
        <div  v-if="advantages.length" class="flex flex-col gap-[2.4vw]">
          <div v-for="n in 2" v-bind:key="n" class="flex flex-col md:flex-row justify-between gap-[2.4vw]">

            <div v-for="m in 2" v-bind:key="m" class="flex flex-col justify-center gap-1
                                                      border-2 border-secondary
                                                      border-b-8 border-b-accent rounded-b-md
                                                      w-[31.250vw]">
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
const props = defineProps({
  title: String,
  uri: String
})
const apiIconURL = `${import.meta.env.VITE_ICON_URL}`
console.log(apiIconURL)

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