<template>
  <div class="bg-black text-white md:py-8 md:px-16">
    <div class="font-bitter">{{section.title}}</div>
    <div class="flex flex-col md:flex-row">
      <div v-for="review in allReviews" v-bind:key="review.id">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsSection",
  props: {
    allReviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>