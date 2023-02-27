<template>
  <div class="h-screen flex justify-center items-center">
<!-- here is the form -->
    <form v-if="loaded" class="m-8 mb-24">
      <label for="title" class="block">Titre</label>
      <input type="text" id="title" name="title" v-model="title" class="border mb-4"
             @input="setWysiwyg('title', title)">

      <label for="subtitle" class="block">Sous titre</label>
      <input type="text" id="subtitle" name="subtitle" v-model="subtitle" class="border mb-4"
             @input="setWysiwyg('subtitle', subtitle)">

      <label for="url_image" class="block">URL Image</label>
      <input type="text" id="url_image" name="url_image" v-model="url_image" class="border mb-4">

      <fieldset class="border p-4 mb-4">
        <legend>Call to action 1</legend>
        <label for="cta1_text" class="block">Texte</label>
        <input type="text" id="cta1" name="cta1_text" v-model="cta1_text" class="border mb-4">

        <label for="cta1_url" class="block">Lien</label>
        <input type="text" id="cta1" name="cta1_url" v-model="cta1_url" class="border mb-4">
      </fieldset>

      <fieldset class="border p-4 mb-4">
        <legend>Call to action 2</legend>
        <label for="cta2_text" class="block">Texte</label>
        <input type="text" id="cta2" name="cta2_text" v-model="cta2_text" class="border mb-4">

        <label for="cta2_url" class="block">Lien</label>
        <input type="text" id="cta2" name="cta2_url" v-model="cta2_url" class="border mb-4">
      </fieldset>

      <button type="button" v-on:click="save" class="border bg-green-600/50 px-4 py-2 mr-6">Enregistrer</button>
      <button type="reset" class="border bg-red-600/50 px-4 py-2" >EFFACER</button>
    </form>

<!-- here is WYSIWYG -->
    <div v-if="loaded" class="border p-1 bg-black">
      <heroSection v-bind:wysiwygHero="wysiwygHero"
                   v-bind:wysiwygCTA1="wysiwygCTA1"
                   v-bind:wysiwygCTA2="wysiwygCTA2"
                   v-bind:title="''"
                   v-bind:uri="''"

      />
    </div>

  </div>
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

// from database
const title = ref("")
const subtitle = ref("")
const url_image = ref("")
const cta1_id = ref("")
const cta1_text = ref("")
const cta1_url = ref("")
const cta2_id = ref("")
const cta2_text = ref("")
const cta2_url = ref("")

const wysiwygHero = ref({title:"", subtitle:"", url_image:""})
const wysiwygCTA1 = ref({text:""})
const wysiwygCTA2 = ref({text:""})

const loaded = ref(false)


function getPlaceholders() {
  console.log("axios : get initial data")
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/hero`)
      .then((response) => {
        //console.log(response.data)

        title.value = response.data[0][0].title
        wysiwygHero.value.title = response.data[0][0].title
        subtitle.value = response.data[0][0].subtitle
        wysiwygHero.value.subtitle = response.data[0][0].subtitle
        url_image.value = response.data[0][0].url_image
        wysiwygHero.value.url_image = response.data[0][0].url_image

        cta1_id.value = response.data[1][0].id
        //wysiwygCTA1.value.cta1_id = response.data[1][0].id
        cta1_text.value = response.data[1][0].text
        wysiwygCTA1.value.text = response.data[1][0].text
        cta1_url.value = response.data[1][0].url
        //wysiwygCTA1.value.cta1_url = response.data[1][0].url

        cta2_id.value = response.data[1][1].id
        //wysiwygCTA2.value.cta2_id = response.data[1][1].id
        cta2_text.value = response.data[1][1].text
        wysiwygCTA2.value.text = response.data[1][1].text
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
      url: cta1_url.value
    },
    cta2:{
      text: cta2_text.value,
      url: cta2_url.value
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
  wysiwyg.value[element] = value
}



</script>


<!--

    <div class="flex-1">
      <img :src="url_image" alt="alt" class="p-1 border">
    </div>

-->