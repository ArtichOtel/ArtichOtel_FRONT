<template @load="getSections">
  <RouterView :sections="sections" />
  sections :
  {{sections}}
</template>

<script>

import {ref} from "vue";
import axios from "axios";

export default {
  name: "App",
  setup(props, ctx) {
    let sections = ref([])

    const getSections = function () {
      console.log("get sections")

      axios({
        method: "get",
        url: 'https://127.0.0.1:8000/api/sections'
      })
          .then((response) => {
            sections.value = response.data
            ctx.emit("receiveSections", sections.value)
          })
    }

    return {
      getSections,
      sections
    }

  },
  components: {
  }

}
</script>
