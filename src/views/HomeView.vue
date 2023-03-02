<template>
  <div class="relative" v-if="sections.length" >
    <HeaderSection />
    <main class="h-full w-full overflow-hidden scroll-smooth">
      <HeroSection :title="sections[0].title" :uri="sections[0].uri" />
      <OffersSection :title="sections[1].title" :uri="sections[1].uri" />
      <AdvantagesSection :title="sections[2].title" :uri="sections[2].uri" />
      <NewsInfoSection :title="sections[3].title" :uri="sections[3].uri" />
      <!--    <RoomsTypesSection :title="sections[5].title" :uri="sections[5].uri" />-->
      <ReviewsSection :title="sections[4].title" :uri="sections[4].uri" />
      <VideoSection :title="sections[6].title" :uri="sections[6].uri" />
    </main>
    <FooterSection :title="sections[7].title" :uri="sections[7].uri" />
  </div>
</template>

<script setup>
import HeaderSection from "../components/sections/HeaderSection.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import ReviewsSection from "../components/sections/ReviewsSection.vue";
import VideoSection from "../components/sections/VideoSection.vue";
import OffersSection from "../components/sections/OffersSection.vue";
import AdvantagesSection from "../components/sections/AdvantagesSection.vue";
import RoomsTypesSection from "../components/sections/RoomsTypesSection.vue";
import NewsInfoSection from "../components/sections/NewsInfoSection.vue";

const props = defineProps({
  sections: Array,
});
</script>
