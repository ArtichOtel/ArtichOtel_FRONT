<template>
  <div class="flex">
    <div v-for="(section, index) in listOfSections" v-bind:key="index"
         v-on:click="$emit('clickOnBtn', index)"
         class="border m-4 px-2 py-1 cursor-pointer select-none"
    >
      {{section.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectionSelector"
}
</script>

<script setup>

const props = defineProps({
  listOfSections: Array
})


</script>