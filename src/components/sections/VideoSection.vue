<template>
  <div class="bg-black text-white md:py-8 md:px-16">
    <div class="text-red-600">{{title}}</div>
    <div v-if="data" class="flex flex-col md:flex-row">

      <iframe width="560" height="315"
              src="https://www.youtube.com/embed/p7YXXieghto"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>

      <div>
        {{data.description}}
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

const data = ref([])
//const videoId = ref(getIdFromURL("https://www.youtube.com/watch?v=24C8r8JupYY"))

axios({
  method: "get",
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`
})
    .then((response) => {
      //console.log(response.data[0])
      data.value = response.data[0]
    })
    .catch((err)=> {
      console.log("BUG :", err)
    })

/*const function ready(event) {
  this.player = event.target;
},
playing(event) {
  console.log("playing");
},
change() {
  //this.videoId = "use another video id";
},
stop() {
  this.player.stopVideo();
},
pause() {
  this.player.pauseVideo();
  console.log("paused");
},
play() {
  this.player.playVideo();
  console.log("paused");
},*/

</script>

<!--
         @ready="ready"
          @playing="playing"
-->