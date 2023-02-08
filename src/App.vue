<template>
  <h1 class="text-3xl font-bold underline">
  Click to get users
</h1>
  <GetUsers @receiveList="getUsers" />
  <UsersList :allUsers="allUsers"/>
  <br><br>
  <GetReviews @receiveList="getReviews" />
  <ReviewsList :allReviews="allReviews"/>
  <br><br>
  <RouterView/>
</template>

<script>
import GetUsers from './components/GetUser.vue'
import UsersList from "./components/UsersList.vue";
import GetReviews from './components/GetReview.vue'
import ReviewsList from "./components/ReviewsList.vue";
import {RouterLink, RouterView} from "vue-router";
import {ref} from "vue";

export default {
  name: "App",
  components: {
    GetUsers,
    UsersList,
    GetReviews,
    ReviewsList
  },
  setup() {

    window.sessionStorage.clear()


    let allUsers = ref([])
    let allReviews = ref([])
    const getUsers = function (data) {
      allUsers.value = data
    }

    const getReviews = function (data) {
      allReviews.value = data
    }

    return {
      getUsers,
      allUsers,
      getReviews,
      allReviews
    }
  }

}
</script>
