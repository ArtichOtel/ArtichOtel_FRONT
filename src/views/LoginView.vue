<template>
  <form @submit.prevent="connect">
    <label for="pseudo" class="block underline">pseudo</label>
    <input type="text" name="pseudo" v-model="pseudo" class="border">

    <label for="password" class="block underline">password</label>
    <input type="password" name="password" v-model="password" class="border">
  <br/>
    <button type="submit">LOGIN</button>
  </form>
  <br><br>
  <RouterLink to="/">accueil</RouterLink>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "LoginView",
  setup(props, ctx) {
    let pseudo = ref("")
    let password = ref("")

    const connect = function () {

      axios.post('http://127.0.0.1:8000/api/user/login',
          {pseudo: pseudo.value, password: password.value})
          .then((response)=>{
            //console.log(response.data.token)
            window.sessionStorage.setItem('token', response.data.token)
            ctx.emit("")
          })
    }

   return {
     pseudo,password, connect
   }

  }
}
</script>