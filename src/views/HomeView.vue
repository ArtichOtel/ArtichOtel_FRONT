<template >
  <main>
    <HeaderSection />
    <HeroSection :sections="sections"/>
    <OffersSection />
    <AdvantagesSection />
    <NewsInfoSection />
    <RoomsTypesSection />
    <VideoSection />
    <ReviewsSection :sections="sections"/>
    <FooterSection />

  </main>
</template>


<script>
import HeaderSection from "../components/sections/Header.vue";
import HeroSection from "../components/sections/Hero.vue";
import FooterSection from "../components/sections/Footer.vue";
import ReviewsSection from "../components/sections/Reviews.vue";
import VideoSection from "../components/sections/Video.vue";
import OffersSection from "../components/sections/Offers.vue";
import AdvantagesSection from "../components/sections/Advantages.vue";
import RoomsTypesSection from "../components/sections/RoomsTypes.vue";
import NewsInfoSection from "../components/sections/NewsInfo.vue";

export default {
  components: {
    HeaderSection,
    HeroSection,
    FooterSection,
    ReviewsSection,
    VideoSection,
    OffersSection,
    AdvantagesSection,
    RoomsTypesSection,
    NewsInfoSection
  },
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  setup() {

    return
  }
}


</script>


