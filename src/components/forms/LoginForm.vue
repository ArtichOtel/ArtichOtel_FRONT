<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <form class="m-8 mb-24">
      <label for="pseudo" class="block">pseudo</label>
      <input type="text" id="pseudo" name="pseudo" v-model="pseudo" class="border">

      <label for="password" class="block">password</label>
      <input type="password" id="password" name="password" v-model="password" class="border">
      <br/>
      <button type="button" v-on:click="connect">LOGIN</button>
    </form>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
}
</script>


<script setup>
import {ref} from "vue";
import axios from "axios";

let pseudo = ref("")
let password = ref("")

const emit = defineEmits(
    {'connectionStatus': {}}
)


const connect = function () {
  if (pseudo.value && password.value) {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`,
        {pseudo: pseudo.value, password: password.value})
        .then((response)=>{
          //console.log(response.data)
          window.sessionStorage.setItem('token', response.data.token)
          emit('connectionStatus', {token: response.data.token, role:response.data.role})
        })
        .then(() => {
          pseudo.value=""
          password.value=""
        })
        .then(()=> {
          // go to admin panel !! (push history)
        })
        .catch((err)=> {
          console.log("connection error :", err)
        })
  } else {
    console.warn("Missing input")
  }


}


</script>