<template>
  <div
    v-show="modalActive"
    class="absolute backdrop-blur-md fixed -top-12 left-0 z-90 w-full h-full flex flex-col justify-center items-center overflow-hidden"
  >
    <div class="bg-white">
      <!-- Modal Content (slot)-->
      <slot />
    </div>

    <!-- <button @click="$emit('close')">fermer</button> -->
  </div>
</template>

<script setup>
const props = defineProps({
  modalActive: false,
});
</script>
