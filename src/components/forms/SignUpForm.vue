<template>
  <section
    id="signup"
    class="relative mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw]"
    :style="{
      backgroundImage: 'url(' + ')',
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >

    <div class="flex flex-col justify-center items-center bg-secondary">
      <h2 class="font-title text-titleBase sm:text-titleMed mt-[4vw] mb-[2vw]">
        {{ dico[langStore.lang].registration }}
      </h2>

      <form class="mb-[2vw] tracking-wider">
        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw] ">
          <div class="flex flex-col items-center max-w-min">
            <label
              for="last"
              class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600"
              >{{ dico[langStore.lang].lastname }}</label
            >
            <input
              type="text"
              id="last"
              name="last"
              v-model="data.last.val"
              class="border border-primary py-2 px-4 bg-secondary"
              :placeholder="[dico[langStore.lang].lastname]"
            />
            <span class="font-content text-red-600 text-center">{{ data.last.err.display }}</span>
          </div>

          <div class="flex flex-col items-center max-w-min">
            <label
              for="first"
              class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600"
              >{{ dico[langStore.lang].firstname }}</label
            >
            <input
              type="text"
              id="first"
              name="first"
              v-model="data.first.val"
              class="border border-primary py-2 px-4 bg-secondary"
              :placeholder="[dico[langStore.lang].firstname]"
            />
            <span class="font-content text-red-600 text-center">{{ data.first.err.display }}</span>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center max-w-min">
            <label
              for="email"
              class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600"
              >{{ dico[langStore.lang].email }}</label
            >
            <input
              type="text"
              id="email"
              name="email"
              v-model="data.email.val"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="email@exemple.com"
            />
            <span class="font-content text-red-600 text-center">{{ data.email.err.display }}</span>
          </div>

          <div class="flex flex-col items-center max-w-min">
            <label for="pseudo" class="block mb-4">{{
              dico[langStore.lang].pseudo
            }}</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              v-model="data.pseudo.val"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="Pseudo"
            />
            <span class="font-content text-red-600 text-center">{{ data.pseudo.err.display }}</span>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center max-w-min">
            <label
              for="password"
              class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600"
              >{{ dico[langStore.lang].password }}</label
            >
            <input
              type="password"
              id="password"
              name="password"
              v-model="data.password.val"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="***"
            />
            <span class="font-content text-red-600 text-center">{{ data.password.err.display }}</span>
          </div>

          <div class="flex flex-col items-center max-w-min">
            <label
              for="confirm"
              class="block mb-4 after:content-['*'] after:ml-1 after:text-red-600"
              >{{ dico[langStore.lang].verifpassword }}</label
            >
            <input
              type="password"
              id="confirm"
              name="confirm"
              v-model="data.confirm.val"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="***"
            />
            <span class="font-content text-red-600 text-center">{{ data.confirm.err.display }}</span>
          </div>
        </div>

        <div class="mb-[3vw] text-sm text-center">
          <input type="checkbox" id="terms" v-model="data.terms.val" />
          <label for="terms" class="ml-1">{{ dico[langStore.lang].generalterms }}</label>
          <div class="font-content text-red-600">{{ data.terms.err.display }}</div>
        </div>

        <div class="flex flex-col items-center gap-4">
          <button
            type="button"
            v-on:click="signup"
            class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
          >
            {{ dico[langStore.lang].confirm }}
          </button>
          <button
            type="button"
            v-on:click="goLogin"
            class="bg-primary flex justify-center items-center w-64 h-9 text-base tracking-wider text-secondary font-semibold font-content uppercase"
          >
            {{ dico[langStore.lang].alreadyregistered }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, toRaw } from "vue";
import axios from "axios";
import router from "../../router";
import { log, warn } from "../../utils/console";
import { i18n } from "../../utils/i18n";
import { useLangStore } from "../../stores/lang";
const langStore = useLangStore();
const dico = i18n;

const data = ref({
  first: {
    val: null,
    err: {
      ifEmpty: "Veuillez entrer vote nom",
      ifBad: "Le nom ne peut contenir que des lettres",
      display: null,
    },
  },
  last: {
    val: null,
    err: {
      ifEmpty: "Veuillez entrer vote prénom",
      ifBad: "Le prénom ne peut contenir que des lettres",
      display: null,
    },
  },
  pseudo: {
    val: null,
    err: {
      ifEmpty: null,
      ifBad: null,
      display: null,
    },
  },
  email: {
    val: null,
    err: {
      ifEmpty: "Veuillez entrer vote email",
      ifBad: "L'email ne semble pas correct",
      display: null,
    },
  },
  confirm: {
    val: null,
    err: {
      ifEmpty: "Veuillez confirmer votre mot de passe",
      ifBad: "Erreur de confirmation",
      display: null,
    },
  },
  password: {
    val: null,
    err: {
      ifEmpty: "Veuillez entrer un mot de passe",
      ifBad:
        "Le mot de passe doit contenir 8 caractères dont au moins 1 spécial",
        display: null,
    },
  },
  terms: {
    val: null,
    err: {
      ifEmpty: "Vous devez accepter les conditions d'utilisations.",
      ifBad: null,
      display: null,
    },
  },
});

const lettersREGEX = /^[A-Za-z]+$/
const emailREGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const pwdREGEX = /^(?=.{8,})(?=.*[?!@#$%^&*=|£²³`"'ø§€])/

const checkInputs = function () {
  let nbValidatedInputs = 0

  for (const [key, element] of Object.entries(data.value)) {
    element.err.display = null // resetting err display
    // checking errors
    if (element.val !== null) {
      switch (key) {

        case 'last':
        case 'first':
          if (!element.val.match(lettersREGEX)) {
            element.err.display = element.err.ifBad

          } else { nbValidatedInputs++ }
          break;

        case 'terms':
        case 'pseudo':
          nbValidatedInputs++
          break;

        case 'email':
          if (!element.val.match(emailREGEX)) {
            element.err.display = element.err.ifBad

          } else { nbValidatedInputs++ }
          break;

        case 'password':
          if (!(element.val.match(pwdREGEX))) {
            element.err.display = element.err.ifBad

          } else { nbValidatedInputs++ }
          break;

        case 'confirm':
          if (element.val !== data.value.password.val) {
            element.err.display = element.err.ifBad

          } else { nbValidatedInputs++ }
          break;
      
        default:
          break;
      }
    } else {
      if (key === 'pseudo') { nbValidatedInputs++ } // optionnal pseudo handling

      element.err.display = element.err.ifEmpty // display empty error msg
    }
  }

  return nbValidatedInputs === Object.keys(data.value).length
};


const signup = function () {
  console.log("signing up")
  if (checkInputs()) { // checking unpits
    console.log('checkInputs passed')
    // json body for request POST
    let bodyJSON = {
      last_name: data.value.last.val,
      first_name: data.value.first.val,
      email: data.value.email.val,
      password: data.value.password.val,
      lang: langStore.lang,
    }
    if (data.value.pseudo.val) { bodyJSON.pseudo = data.value.pseudo.val }
    console.log(bodyJSON)

    // Request POST to register
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/user/register`, bodyJSON)
      // confirmation and return to login page
      .then(() => {
        alert("Merci de votre inscription !\nNous vous avons envoyé un e-mail de confirmation.")
        // TODO : Go login
      })
      // error handling
      .catch((e) => {
        console.log("register error:", e)
      })

  }
}

const goLogin = function () {
  router.push("/login");
};
</script>
