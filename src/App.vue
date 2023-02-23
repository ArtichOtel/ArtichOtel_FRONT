<template class="font-content scroll-smooth">
  <LoginButton @logoutRequest="logout" v-bind:isLogged="isLogged" />
  <RouterView v-bind:sections="data" v-on:login="setLogged" />
</template>

<script setup>
import { ref } from "vue";
import LoginButton from "./components/LoginButton.vue";
import axios from "axios";
import router from "./router";

const connectionStatus = ref({
  connected: false,
  role: null,
});

const data = ref([]);
const isLogged = ref(false);

axios
  .get(`${import.meta.env.VITE_API_BASE_URL}/sections`)
  .then((response) => {
    data.value = response.data;
  })
  .catch((err) => {
    console.log("BUG :", err);
  });

function logout() {
  console.log("logout");
  axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        alert("Vous êtes correctement déconnecté");
      }
    })
    .catch((err) => {
      alert("Il y a eu une erreur lors de la déconnexion");
      console.log(err);
    });

  isLogged.value = false;
  window.sessionStorage.clear();
  router.push("/");
  //window.document.location.reload()
}

function setLogged() {
  console.log("app knows that you are logged");
  isLogged.value = true;
}

function checkIfLogged() {
  if (window.sessionStorage.getItem("token")) {
    setLogged();
  }
}
checkIfLogged();
</script>
