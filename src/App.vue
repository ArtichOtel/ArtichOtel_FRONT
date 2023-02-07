<template>
  <h1 class="text-3xl font-bold underline">
  Click to get users
</h1>
  <GetUsers @receiveList="getUsers" />
  <UsersList :allUsers="allUsers"/>
  <br><br>
  <RouterView/>
</template>

<script>
import GetUsers from './components/GetUser.vue'
import UsersList from "./components/UsersList.vue";
import {RouterLink, RouterView} from "vue-router";
import {ref} from "vue";

export default {
  name: "App",
  components: {
    GetUsers,
    UsersList
  },
  setup() {

    window.sessionStorage.clear()


    let allUsers = ref([])
    const getUsers = function (data) {
      allUsers.value = data
    }
    return {
      getUsers,
      allUsers
    }
  }

}
</script>
