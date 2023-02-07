<template>
  <form @submit.prevent="fetch">
    <button type="submit" class="bg-red-200 hover:bg-red-400">
      get users
    </button>
  </form>
</template>


<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "GetUsers",
  setup(props, ctx) {
    let data = ref([])

    const fetch = function () {
      console.log("get users with axios")

      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/users',
        headers : {
          'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        }
      })
          .then((response) => {
            console.log(response.data)
            data.value = response.data
            ctx.emit("receiveList", data.value)
          })
    }

    return {
      fetch,
      data
    }
  }


}

</script>


