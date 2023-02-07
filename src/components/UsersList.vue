<template>
  Liste des utilisateurs :
<ul>
  <li v-for="user in allUsers" v-bind:key="user.id">{{user.pseudo}}</li>
</ul>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    allUsers: {
      type: Array,
      required: true
    }
  }
}
</script>