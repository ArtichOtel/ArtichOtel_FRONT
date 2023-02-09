<template>
  Liste des avis :
<ul>
  <li v-for="review in allReviews" v-bind:key="review.id">{{review.title}}</li>
</ul>
</template>

<script>
export default {
  name: "ReviewsList",
}
</script>