<template>

  <section class="bg-black text-white">
    <div class="px-[calc(8.6vw)] py-[calc(9vw)] flex flex-col gap-[calc(1.09vw)]">
      <h2 class="font-title">{{ title }}</h2>
      <div class="flex flex-row gap-4 justify-between">
        <div v-for="item in advantages" class="border-2 border-white
                                              w-full">
          <span>{{ item.icon }}</span>
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