<template>
  <div class="bg-black text-white md:py-8 md:px-16 border border-red-600">
    <div class="font-bitter">{{title}}</div>
    <div v-if="data.length" class="flex flex-col md:flex-row">
      <video-embed src={{data.url}}></video-embed>
    </div>
  </div>
</template>



<script setup>

import {ref} from "vue";
import axios from "axios";


const props = defineProps({
  title: String,
  uri: String
})

const data = ref([])

axios({
  method: "get",
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
    .then((response) => {
      data.value = response.data
    })
    .catch((err)=> {
      console.log("BUG :", err)
    })

</script>