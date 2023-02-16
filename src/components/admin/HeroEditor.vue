<template>
  <div class="h-screen flex justify-center items-center">
    <form v-if="loaded" class="m-8 mb-24">
      <label for="title" class="block">Titre</label>
      <input type="text" id="title" name="title" v-model="title" class="border mb-4">

      <label for="subtitle" class="block">Sous titre</label>
      <input type="text" id="subtitle" name="subtitle" v-model="subtitle" class="border mb-4">

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
    <div class="flex-1">
      <img :src="url_image" alt="alt" class="p-1 border">
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

const title = ref("")
const subtitle = ref("")
const url_image = ref("")
const cta1_text = ref("")
const cta1_url = ref("")
const cta2_text = ref("")
const cta2_url = ref("")
const loaded = ref(false)


function getPlaceholders() {
  console.log("axios")
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/hero`)
      .then((response) => {
        console.log(response.data)

        title.value = response.data[0][0].title
        subtitle.value = response.data[0][0].subtitle
        url_image.value = response.data[0][0].url_image

        cta1_text.value = response.data[1][0].text
        cta1_url.value = response.data[1][0].url

        cta2_text.value = response.data[1][1].text
        cta2_url.value = response.data[1][1].url

      })
      .then(()=> {
        loaded.value = true
      })
      .catch((err) => {
        console.log(err)
      })
}

getPlaceholders()

function save() {

}


</script>