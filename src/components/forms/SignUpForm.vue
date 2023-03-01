<template>
  <section id="signup"
           class="relative mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw]"
           :style="{backgroundImage: 'url(' + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
  >
    <nav></nav>

    <div class="flex flex-col justify-center items-center bg-secondary">

      <h2 class="font-title text-titleBase md:text-titleMed mt-[4vw] mb-[2vw]">Inscription</h2>

      <form class="mb-[2vw] tracking-wider">

        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center">
            <label for="last" class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600">Nom</label>
            <input type="text" id="last" name="last" v-model="data.last.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="Nom">
          </div>

          <div class="flex flex-col items-center">
            <label for="first" class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600">Prénom</label>
            <input type="text" id="first" name="first" v-model="data.first.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="Prénom">
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center">
            <label for="email" class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600">Email</label>
            <input type="text" id="email" name="email" v-model="data.email.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="email@exemple.com">
          </div>

          <div class="flex flex-col items-center">
            <label for="pseudo" class="block mb-4">Pseudo</label>
            <input type="text" id="pseudo" name="pseudo" v-model="data.pseudo.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="Pseudo">
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center">
            <label for="password" class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600">Mot de passe</label>
            <input type="password" id="password" name="password" v-model="data.password.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="***">
          </div>

          <div class="flex flex-col items-center">
            <label for="confirm" class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600">Confirmation</label>
            <input type="password" id="confirm" name="confirm" v-model="data.confirm.val"
                   class="border border-primary py-2 px-4 bg-secondary"
                   placeholder="***">
          </div>
        </div>

        <div class=" mb-[3vw] text-sm">
          <input type="checkbox" id="terms" v-model="data.terms.val" />
          <label for="terms">J'accepte les conditions générales d'utilisations</label>
        </div>

        <div class="flex flex-col items-center gap-4">
          <button type="button" v-on:click="signup"
                  class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
          >confirmer</button>
          <button type="button" v-on:click="goLogin"
                  class="bg-primary flex justify-center items-center w-64 h-9 text-base tracking-wider text-secondary font-semibold font-content uppercase"
          >déjà inscrit ?</button>
        </div>
      </form>

    </div>


  </section>


</template>

<script>
export default {
  name: "LoginForm"
}
</script>


<script setup>
import {ref} from "vue";
import axios from "axios";
import router from "../../router";
import {log, warn} from "../../utils/console";


const data = ref({
  first:   {val: "", err: {ifEmpty: "Veuillez entrer vote nom", ifBad: "Le nom ne peut contenir que des lettres"}},
  last:    {val: "", err: {ifEmpty: "Veuillez entrer vote prénom", ifBad:"Le prénom ne peut contenir que des lettres" }},
  pseudo:  {val: "", err: {ifEmpty: false, ifBad:false }},
  email:   {val: "", err: {ifEmpty: "Veuillez entrer vote email", ifBad:"L'email ne semble pas correct" }},
  confirm: {val: "", err: {ifEmpty: "Veuillez confirmer votre mot de passe", ifBad:"Erreur de confirmation" }},
  password:{val: "", err: {ifEmpty: "Veuillez entrer un mot de passe", ifBad:"Le mot de passe doit contenir 8 caractères dont au moins 1 spécial" }},
  terms:   {val: false, err: {ifEmpty: false, ifBad:"Vous devez accepter les conditions d'utilisations." }}
})



const checkInputs = function () {
  data.value.forEach((field, index) => {
    log(field)
  })
}

/*


const signup = function () {

    axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`,
        {pseudo: pseudo.value, password: password.value})
        .then((response)=>{
          //log(response.data)
          window.sessionStorage.setItem('token', response.data.token)
          emit('connectionStatus', {
            token: response.data.token,
            role: response.data.role
          })
          return response.data.role
        })
        .then(() => {
          pseudo.value=""
          password.value=""
        })
        .catch((err)=> {
          log("connection error :", err)
        })
  } else {
    warn("Missing input")
  }


*/



const goLogin = function () {
  router.push("/login")
}


</script>