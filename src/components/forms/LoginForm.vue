<template>
  <section
    id="login"
    class="static mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw] accent-primary"
    :style="{
      backgroundImage: 'url(' + ')',
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >

    <div class="flex flex-col justify-center items-center bg-secondary">
      <h2 class="font-title text-titleBase md:text-titleMed mt-[4vw] mb-[2vw]">
        {{ dico[langStore.lang].login }}
      </h2>

      <form class="mb-[2vw] tracking-wider">
        <div class="flex gap-[2vw] mb-[3vw]">
          <div class="flex flex-col items-center">
            <label for="pseudo" class="block mb-4">{{
              dico[langStore.lang].username
            }}</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              v-model="pseudo"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="Email, pseudo"
            />
          </div>

          <div class="flex flex-col items-center">
            <label for="password" class="block mb-4">{{
              dico[langStore.lang].password
            }}</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="password"
              class="border border-primary py-2 px-4 bg-secondary"
              placeholder="***"
              @keypress.enter="connect"
            />
          </div>
        </div>

        <div class="flex flex-col items-center gap-[1.2vw]">
          <span class="font-content text-red-600">{{ connectionError }}</span>
          <button
            type="button"
            v-on:click="lostPW"
            class="text-sm underline cursor-pointer tracking-wider"
          >
            {{ dico[langStore.lang].forgotpassword }}
          </button>
          <button
            type="button"
            v-on:click="connect"
            class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase bg-[length:1000px] bg-left hover:bg-center transition-all duration-300
            bg-gradient-to-r from-transparent via-[rgba(255,255,254,0.001)] via-[rgba(255,255,254,0.01)] via-[rgba(255,255,254,0.01)] via-white/50 to-transparent"
          >
            {{ dico[langStore.lang].connect }}
          </button>
          <button
            type="button"
            v-on:click="goSignup"
            class="bg-primary flex justify-center items-center w-64 h-9 text-base tracking-wider text-secondary font-semibold font-content uppercase hover:underline"
          >
            {{ dico[langStore.lang].register }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "../../router";
import { log, warn } from "../../utils/console";
import { useLangStore } from "../../stores/lang";
import { i18n } from "../../utils/i18n";

const pseudo = ref("");
const password = ref("");
const connectionError = ref(null);
const langStore = useLangStore();
const dico = i18n;

const emit = defineEmits({ connectionStatus: {} });

const connect = function () {
  //log("try connection")
  if (pseudo.value && password.value) {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/user/login`, {
        pseudo: pseudo.value,
        email: pseudo.value,
        password: password.value,
      })
      .then((response) => {
        console.log(response.data)
        window.sessionStorage.setItem("token", response.data.token);
        window.sessionStorage.setItem('user', response.data.user_id);
        window.sessionStorage.setItem('customer', response.data.customer_id);
        emit("connectionStatus", {
          token: response.data.token,
          role: response.data.role,
        });
        return response.data.role;
      })
      .then(() => {
        pseudo.value = "";
        password.value = "";
      })
      .catch((err) => {
        log("connection error :", err);
        connectionError.value = err.response.data.message
      });
  } else {
    warn("Missing input");
  }
};

const goSignup = function () {
  router.push("/signup");
};
</script>
