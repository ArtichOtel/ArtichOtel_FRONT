<template>

  <section id="advantages" class="bg-tertiary text-secondary">
    <div class="px-[8.6vw] py-[9vw] flex flex-col gap-[8vw]">
      <h2 class="font-title text-titleBase md:text-titleMed">{{title}}</h2>

      <div  v-if="advantages.length" class="flex flex-col lg:flex-row justify-betrween">
          <div v-for="n in 2" v-bind:key="n" class="flex flex-col sm:flex-row items-center justify-betwjeen flex-1">

            <div v-for="m in 2" v-bind:key="m" class="overflow-hidden relative
                                                      border border-secondary
                                                      border-b-8 border-b-accent rounded-b-md
                                                      w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] lg:w-[20vw] lg:h-[20vw]
                                                      mb-[1vw] sm:mr-[1vw]"
            :style="{paddingRight: (n===1 && m===2) ? '15 px' : '0 px' }">

<!--  fixed icon in bg          -->
              <div class="relative top-0 flex justify-center items-center w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] lg:w-[20vw] lg:h-[20vw]">
                <img :src="iconURL + advantages[n-1+(m-1)*2].icon + '.svg'"
                     :alt="advantages[n-1+(m-1)*2].icon"
                     class="w-[70vw] h-[70vw] sm:w-[35vw] sm:h-[35vw] lg:w-[17vw] lg:h-[17vw]"
                >
              </div>

<!--  swiping content          -->
              <div class="w-[80vw] h-[160vw] sm:w-[40vw] sm:h-[80vw] lg:w-[20vw] lg:h-[40vw]
              bg-transparent absolute top-0 transition-all duration-500
              hover:-top-[80vw] sm:hover:-top-[40vw] lg:hover:-top-[20vw]"
              >
                <div id="des" class="relative overflow-hidden
                 top-[80vw] sm:top-[40vw] lg:top-[20vw]
                 w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] lg:w-[20vw] lg:h-[20vw] bg-tertiary/80 flex flex-col justify-center items-center">
                    <img :src="iconURL + advantages[n-1+(m-1)*2].icon + '.svg'"
                         :alt="advantages[n-1+(m-1)*2].icon"
                         class="w-[28vw] h-[28vw] sm:w-[14vw] sm:h-[14vw] lg:w-[7vw] lg:h-[7vw]"
                    >
                  <p class="mx-2 sm:mx-4 text-center text-2xl sm:text-xl lg:text-base">
                    <span class="font-bold">{{advantages[n-1+(m-1)*2].title}}</span>
                     <br>
                    {{advantages[n-1+(m-1)*2].description}}
                  </p>

                </div>

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
import {log, trace} from "../../utils/console";

const iconURL = ref(import.meta.env.VITE_ICON_URL)
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
    //log('advantages', response.data)
    advantages.value = response.data
  })
  .catch((error) => {
    log('Error: ', error)
  })

</script>