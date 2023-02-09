<template>
  <RouterView :sections="sections" />
  sections :
  {{sections}}
</template>

<script setup>

import {ref, watchEffect} from "vue";
import axios from "axios";

const sections = ref([])

watchEffect(async () => {
  console.log("get sections")

  axios({
    method: "get",
    url: 'https://127.0.0.1:8000/api/sections'
  })
      .then((response) => {
        console.log("sections", response.data)
        sections.value = response.data
        //ctx.emit("receiveSections", sections.value)
      })
})


</script>
