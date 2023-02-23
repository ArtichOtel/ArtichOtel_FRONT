<template>
  <header class="fixed w-full z-50">
    <div
      class="relative w-full flex flex-wrap items-center justify-between py-3 bg-primary text-secondary shadow-lg navbar navbar-expand-lg"
    >
      <div
        class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
      >
        <div
          class="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <!-- Left links -->
          <!-- <img src="https://picsum.photos/80/80" alt="" /> -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="flex items-center relative gap-10">
          <div class="flex gap-5">
            <a class="font-content" href="contact:info@hotelartichaut.fr">
              <img src="/src/assets/icons/sms.svg" alt="logo-email-artichotel" class="float-left mr-3 svg-secondary"/>
              <span> info@hotelartichaut.fr</span>
            </a>
          </div>
          <div class="flex gap-5">
            <a class="font-content" href="tel:+33475000000">
              <img src="/src/assets/icons/call.svg" alt="logo-telephone-artichotel" class="float-left mr-3 svg-secondary"/>
              <span>(+33) 4 75 00 00 00</span>
            </a>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
};
</script>
<script setup></script>

<style scoped></style>
