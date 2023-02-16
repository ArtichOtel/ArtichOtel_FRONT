<template>

<section class="px-[8.6vw] py-[9vw]  text-tertiary">

  <div class="flex flex-col gap-[8vw]">

    <h2 class="font-title text-titleBase">{{ title }}</h2>

    <div class="flex flex-col lg:flex-row justify-between gap-[1vw]">

      <div v-for="n in 3" v-if="newsInfos.length" class="relative">

        <div class="font-content absolute inset-x-0 bottom-0">

          <h3 class="bg-tertiary text-secondary text-xl w-fit">
            <span style="margin: 1vw;">{{ newsInfos[n].title }}</span>
          </h3>

          <p class="bg-secondary/60">
            <span style="margin: 1vw;">{{ newsInfos[n].description }}</span>
          </p>
        </div>

        <img :src="newsInfos[n].url_image" alt="">
      </div>

    </div>
  </div>
</section>

</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';


const newsInfos = ref([])

const props = defineProps({
  title: String,
  uri: String
})

axios({
  method: 'get',
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
  .then((response) => {
    console.log('newInfos', response.data)
    newsInfos.value = response.data
  })
  .catch((error) => {
    console.error('Error: ', error);
  })

</script>

<style scoped>

</style>