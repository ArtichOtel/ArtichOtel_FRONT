<template>
  <!-- here is the form -->
  <form v-if="loaded" class="h-screen m-8">
    <div class="flex flex-col justify-center items-start">
      <div class="flex justify-between w-[850px] mb-6">
        <div class="">
          <label for="title" class="block">Titre</label>
          <input type="text" id="title" name="title" v-model="title[langStore.lang]" class="border w-96"
                 @input="setWysiwyg('title', title[langStore.lang])">
          <p class="text-gray-500 mb-4">60 car. max</p>

          <label for="subtitle" class="block">Sous titre</label>
          <input type="text" id="subtitle" name="subtitle" v-model="subtitle[langStore.lang]" class="border w-96"
                 @input="setWysiwyg('subtitle', subtitle[langStore.lang])">
          <p class="text-gray-500 mb-4">60 car. max</p>

          <label for="url_image" class="block">URL Image</label>
          <input type="text" id="url_image" name="url_image" v-model="url_image" class="border w-96">
        </div>
        <div class="w-96">
          <img  alt="image choisie" :src="url_image" >
        </div>
      </div>
      <div class="flex justify-between w-[850px] mb-6">
        <fieldset class="border p-4 mb-4 w-5/12">
          <legend>Call to action 1</legend>
          <label for="cta1_text" class="block">Texte</label>
          <input type="text" id="cta1" name="cta1_text" v-model="cta1_text[langStore.lang]" class="border">
          <p class="text-gray-500 mb-4">20 car. max</p>

          <label for="cta1_url" class="block">Lien</label>
          <input type="text" id="cta1" name="cta1_url" v-model="cta1_url" class="border mb-4">
        </fieldset>

        <fieldset class="border p-4 mb-4 w-5/12">
          <legend>Call to action 2</legend>
          <label for="cta2_text" class="block">Texte</label>
          <input type="text" id="cta2" name="cta2_text" v-model="cta2_text[langStore.lang]" class="border">
          <p class="text-gray-500 mb-4">20 car. max</p>

          <label for="cta2_url" class="block">Lien</label>
          <input type="text" id="cta2" name="cta2_url" v-model="cta2_url" class="border mb-4">
        </fieldset>
      </div>

      <div class="flex justify-between w-[850px] mb-6">
        <button type="button" v-on:click="save" class="border bg-green-600/50 px-4 py-2 mr-6">Enregistrer</button>
        <button type="reset" class="border bg-red-600/50 px-4 py-2" >EFFACER</button>
      </div>

    </div>

  </form>

  <!-- here is WYSIWYG -->
<!--      <div v-if="loaded" class="border p-1 bg-black">
        <heroSection v-bind:wysiwygHero="wysiwygHero"
                     v-bind:wysiwygCTA1="wysiwygCTA1"
                     v-bind:wysiwygCTA2="wysiwygCTA2"
                     v-bind:uri="''"
        />
      </div>-->
</template>

<script>
export default {
  name: "HeroEditor"
}
</script>


<script setup>

import {ref} from "vue";
import axios from "axios";
import HeroSection from "../sections/HeroSection.vue";
import {useLangStore} from "@/stores/lang";
import {i18n} from "@/utils/i18n";

// from database
const title = ref({'fr_FR':"",'en_EN':""})
const subtitle = ref({'fr_FR':"",'en_EN':""})
const url_image = ref("")
const cta1_id = ref("")
const cta1_text = ref({'fr_FR':"",'en_EN':""})
const cta1_url = ref("")
const cta2_id = ref("")
const cta2_text = ref({'fr_FR':"",'en_EN':""})
const cta2_url = ref("")

const wysiwygHero = ref({title: "", subtitle:"", url_image:""})
const wysiwygCTA1 = ref({text:""})
const wysiwygCTA2 = ref({text:""})

const loaded = ref(false)
const langStore = useLangStore()
const dico = i18n


function getPlaceholders() {
  console.log("axios : get initial data")
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/hero`)
      .then((response) => {
        //console.log(response.data)

        title.value = response.data[0][0].title
        wysiwygHero.value.title = response.data[0][0].title[langStore.lang]
        subtitle.value = response.data[0][0].subtitle
        wysiwygHero.value.subtitle = response.data[0][0].subtitle[langStore.lang]
        url_image.value = response.data[0][0].url_image
        wysiwygHero.value.url_image = response.data[0][0].url_image

        cta1_id.value = response.data[1][0].id
        //wysiwygCTA1.value.cta1_id = response.data[1][0].id
        cta1_text.value = response.data[1][0].text
        wysiwygCTA1.value.text = response.data[1][0].text[langStore.lang]
        cta1_url.value = response.data[1][0].url
        //wysiwygCTA1.value.cta1_url = response.data[1][0].url

        cta2_id.value = response.data[1][1].id
        //wysiwygCTA2.value.cta2_id = response.data[1][1].id
        cta2_text.value = response.data[1][1].text
        wysiwygCTA2.value.text = response.data[1][1].text[langStore.lang]
        cta2_url.value = response.data[1][1].url
        //wysiwygCTA2.value.cta2_url = response.data[1][1].url

      })
      .then(()=> {
        console.log("ready to show")
        loaded.value = true
      })
      .catch((err) => {
        console.log(err)
      })
}

getPlaceholders()

function save() {
  let payload = {
    hero:{
      title: title.value,
      subtitle: subtitle.value,
      url_image: url_image.value
    },
    cta1:{
      text: cta1_text.value,
      //TODO change url validation in API to 'string'
      //url: cta1_url.value
    },
    cta2:{
      text: cta2_text.value,
      //TODO change url validation in API to 'string'
      //url: cta2_url.value
    }
  }

  // update hero
  axios.put(`${import.meta.env.VITE_API_BASE_URL}/hero/1`, payload.hero, {
    headers: {
      'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
    }
  })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
  })

  /**
   * TODO: refactor, need to keep axios get response on Array format
   */
  // update links
  axios.put(`${import.meta.env.VITE_API_BASE_URL}/link/${cta1_id.value}`, payload.cta1, {
    headers: {
      'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
    }
  })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })

  axios.put(`${import.meta.env.VITE_API_BASE_URL}/link/${cta2_id.value}`, payload.cta2, {
    headers: {
      'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
    }
  })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })



}

function setWysiwyg(element, value) {
  loaded.value = false
  wysiwygHero.value[element] = value
  loaded.value = true
}



</script>


<!--

    <div class="flex-1">
      <img :src="url_image" alt="alt" class="p-1 border">
    </div>

-->