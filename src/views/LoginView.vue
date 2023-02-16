<template>
  <HeaderSection />

  <div class="h-screen flex flex-col justify-center items-center">
    <form @submitValidForm="(event) => connect"
        @submit.prevent="validForm(pseudo, password)"

          class="m-8 mb-24">
      <label for="pseudo" class="block">pseudo</label>
      <input type="text" id="pseudo" name="pseudo" v-model="pseudo" class="border">

      <label for="password" class="block">password</label>
      <input type="password" id="password" name="password" v-model="password" class="border">
      <br/>
      <button type="submit">LOGIN</button>
    </form>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
  </div>

  <FooterSection />
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<script setup>
import axios from "axios";
import {ref} from "vue";

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";

let pseudo = ref("")
let password = ref("")

const emit = defineEmits({
// Validate submit event
  submitValidForm: ({ pseudo, password }) => {
    console.log("test")
    if (pseudo && password) {
      console.log("ok")
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  },
  connectionStatus: {}
})

function validForm(pseudo, password) {
  console.log("click login")

  emit('submitValidForm', {pseudo, password})

}

const connect = function () {
  console.log("axios")
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`,
      {pseudo: pseudo.value, password: password.value})
      .then((response)=>{
        console.log(response.data)
        window.sessionStorage.setItem('token', response.data.token)
        emit("connectionStatus", {
          token: response.data.token,
          role: response.data.role
        })
      })
      .catch((err)=> {
        console.log("connection error :", err)
      })
}


</script>
