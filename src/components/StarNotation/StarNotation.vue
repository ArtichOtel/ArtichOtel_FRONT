<template>
  <component :is="nOfStar > 0 ? FilledStar : EmptyStar"/>
  <component :is="nOfStar > 1 ? FilledStar : EmptyStar"/>
  <component :is="nOfStar > 2 ? FilledStar : EmptyStar"/>
  <component :is="nOfStar > 3 ? FilledStar : EmptyStar"/>
  <component :is="nOfStar > 4 ? FilledStar : EmptyStar"/>
</template>

<script>
export default {
  name: "StarNotation"
}
</script>


<script setup>

import {ref} from "vue";

import FilledStar from "./filledStar.vue"
import EmptyStar from "./emptyStar.vue"

const props = defineProps({
  nOfStar: Number
})



</script>