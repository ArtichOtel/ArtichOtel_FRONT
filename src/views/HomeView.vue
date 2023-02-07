<script setup>

import Header from "../components/sections/Header.vue";
import Hero from "../components/sections/Hero.vue";
import Footer from "../components/sections/Footer.vue";
import Reviews from "../components/sections/Reviews.vue";
import Video from "../components/sections/Video.vue";
import Offers from "../components/sections/Offers.vue";
import Advantages from "../components/sections/Advantages.vue";
import RoomsTypes from "../components/sections/RoomsTypes.vue";
import NewsInfo from "../components/sections/NewsInfo.vue";
</script>

<template>
  <main>
    <Header/>
    <Hero/>
    <Offers/>
    <Advantages/>
    <NewsInfo/>
    <RoomsTypes/>
    <Video/>
    <Reviews/>
    <Footer/>
  </main>
</template>
