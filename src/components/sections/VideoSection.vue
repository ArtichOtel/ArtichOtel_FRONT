<template>
  <div id="video" class="bg-white text-tertiary pt-8 px-8 pb-4 md:pb-[3vw] md:pt-[9vw] md:px-[8.6vw]">
    <div class="font-title text-titleBase md:text-titleMed">{{title}}</div>
  </div>
<!--  pexels-max-vakhtbovych-6238613.jpg-->

  <div class="bg-primary/70 text-tertiary pt-4 md:pt-[3vw] pb-8 px-8 md:pb-[9vw] md:px-[8.6vw]">
    <div v-if="data" class="flex flex-col md:flex-row">

      <iframe class="flex-1 w-1/2 aspect-4/3"
              src="https://www.youtube.com/embed/p7YXXieghto"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>

      <div class="flex-1 w-1/2 flex justify-center items-center px-[2vw]">
        <p class="text-2xl">
          {{data.description}}</p>
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