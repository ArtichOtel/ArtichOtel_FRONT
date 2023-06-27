<template>
  <LoginButton @logoutRequest="logout" v-bind:isLogged="isLogged" />

  <SwitchModeButton v-if="role === 'admin'" v-bind:isEditing="isEditing" />

  <RouterView
    v-bind:sections="data"
    v-on:login="setLogged"
    v-on:isAdmin="setIsAdmin"
  />
</template>

<script setup>
import { ref } from "vue";
import LoginButton from "./components/blocks/LoginButton.vue";
import axios from "axios";
import router from "./router";
import SwitchModeButton from "./components/admin/SwitchModeButton.vue";
import { log } from "./utils/console";
import { useContactStore } from "./stores/contact";
import { useFooterStore } from "./stores/sections";

/*
const connectionStatus = ref({
  connected: false
})
*/
// const useLang = useLangStore();
//i18n.locale = useLang.lang;

const data = ref([]);
const isLogged = ref(false);
const role = ref("");
const isEditing = ref(true);
const contactStore = useContactStore();
const footerStore = useFooterStore();

axios
  .get(`${import.meta.env.VITE_API_BASE_URL}/sections`)
  .then((response) => {
    data.value = response.data;

    return response.data;
  })
  .then((data) => {
    const linksURI = data[7].uri;

    return axios.get(`${import.meta.env.VITE_API_BASE_URL}${linksURI}`);
  })
  .then((response) => {
    const footers = response.data;
    footerStore.set(footers);
    contactStore.setContact(footerStore.getLinks().slice(4,7));
  })
  .catch((err) => {
    log("BUG :", err);
  });

function logout() {
  log("logout");
  role.value = "";

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
      log(err);
    });

  isLogged.value = false;
  window.sessionStorage.clear();
  router.push("/");
  //window.document.location.reload()
}

function setLogged() {
  log("app knows that you are logged");
  isLogged.value = true;
}

function checkIfLogged() {
  if (window.sessionStorage.getItem("token")) {
    setLogged();
  }
}
checkIfLogged();

function setIsAdmin() {
  window.sessionStorage.setItem("role", "admin");
  checkIfAdmin();
}
function checkIfAdmin() {
  if (window.sessionStorage.getItem("role") === "admin") {
    log("setting admin powers");
    role.value = "admin";
  }
}
</script>

<!--


  -->
