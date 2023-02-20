<template>
  <div class="bg-secondary text-white fixed right-0 top-32 w-10 h-10 flex justify-center items-center z-100 rounded-l-lg
  hover:invert duration-500 hover:duration-200 cursor-pointer">

    <div v-if="!isEditing" @click="checkIfEditing">
      <RouterLink to="/admin"><img src="/src/assets/icons/edit.svg" alt="login"></RouterLink>
    </div>

    <div v-if="isEditing" @click="checkIfEditing">
      <RouterLink to="/"><img src="/src/assets/icons/screenmirroring.svg" alt="login"></RouterLink>
    </div>


  </div>
</template>

<script>
export default {
  name: "SwitchModeButton"
}
</script>

<script setup>
// when logged as admin

import {ref} from "vue";

const props = defineProps({
  role: String
})

const isEditing = ref(true)

console.log(document.location.pathname)

function checkIfEditing() {
  setTimeout(() => {
    if (document.location.pathname !== '/admin') {
      isEditing.value = false
    } else {
      isEditing.value = true
    }
  }, 100)
}


</script>