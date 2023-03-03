<template>
  <div
    class="flex flex-col lg:flex-row lg:justify-around lg:m justify-center items-center bg-secondary mt-5 h-56"
  >
    <div
      class="bg-red-200 h-2/4 flex flex-col justify-center items-center gap-5"
    >
      <h2 class="font-title text-titleSmall font-bold">Chambre standard :</h2>
      <p class="font-content text-titleSmall font-bold flex">
        70€ <span class="font-content">&nbsp;/pers</span>
      </p>
    </div>
    <div class="bg-blue-200"><h3>Nombre(s) de personne(s) :</h3></div>
    <div class="bg-yellow-200">
      <img src="#" alt="image" />
      <a href="http://">Détails</a>
    </div>
    <div class="bg-red-200">
      <p>140 € pour 1 nuit</p>
      <button>Réserver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingFetch",
};
</script>
<script setup></script>
