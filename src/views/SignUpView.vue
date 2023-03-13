<template >
  <HeaderSection />
  <main class="h-full w-full overflow-hidden">
    <Modal
      @close="modalClose()"
      :modalActive="modalActive"
      :title="'Inscription réussie'">
        <SignedUpModal />
    </Modal>
    <SignUpForm
      @connectionStatus="(data) => {sayHello(data)}"
      @open="modalOpen()"/>
  </main>
  <FooterSection v-if="sections.length"  :title="sections[7].title" :uri="sections[7].uri" />
</template>

<script setup>

import { ref } from "vue";
import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import SignUpForm from "../components/forms/SignUpForm.vue";
import router from "../router";
import Modal from "../components/Modal.vue";
import SignedUpModal from "../components/blocks/SignedUpModal.vue";

const props = defineProps({
  sections: Array
})

const modalActive = ref(false);

const modalOpen = () => {
  console.log("modal open")
  modalActive.value = true
}

const modalClose = () => {
  router.push('/login')
}


</script>