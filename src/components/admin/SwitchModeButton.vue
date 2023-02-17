<template>
  <div v-if="role === 'admin'" class="bg-secondary text-white fixed right-0 top-32 w-10 h-10 flex justify-center items-center z-100 rounded-l-lg
  hover:invert duration-500 hover:duration-200 cursor-pointer">

    <div v-if="!isEditing">
      <RouterLink to="/login"><img src="/src/assets/icons/edit.svg" alt="login"></RouterLink>
    </div>

    <div v-if="isEditing">
      <RouterLink to="/login"><img src="/src/assets/icons/watch.svg" alt="login"></RouterLink>
    </div>


  </div>
</template>

<script>
export default {
  name: "SwitchModeButton"
}
</script>

<script setup>
// different behaviour if logged or not
// default is NOT logged


const props = defineProps({
  role: null,
  isEditing: Boolean
})

</script>