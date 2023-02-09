<template>
  <RouterView v-if="sections.length" :sections="sections" />
</template>

<script setup>

import {ref} from "vue";
import axios from "axios";

const sections = ref([])

  axios({
    method: "get",
    url: 'http://127.0.0.1:8000/api/sections'
  })
      .then((response) => {
        console.log("sections", response.data)
        sections.value = response.data
      })
      .catch((err)=> {
        console.log("BUG :", err)
      })


</script>
