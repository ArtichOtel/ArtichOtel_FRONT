<template>
  <div class="bg-black text-white md:py-8 md:px-16">
    <div class="font-bitter">{{title}}</div>
    <div v-if="reviews.length" class="flex flex-col md:flex-row">
      <div v-for="review in reviews" v-bind:key="review.id" >
        <div>{{review.title}}</div>
        <div>{{review.note}}</div>
        <div>{{review.user}}</div>
        <div>{{review.description}}</div>
      </div>
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

const reviews = ref([])

axios({
  method: "get",
  url: `http://127.0.0.1:8000/api${props.uri}`
})
    .then((response) => {
      console.log("sections", response.data)
      reviews.value = response.data
    })
    .catch((err)=> {
      console.log("BUG :", err)
    })



</script>