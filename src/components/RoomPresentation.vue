<template>
  <div class="bg-primary text-secondary text-titleBase p-[2.6vw]
                flex flex-row justify-between">
    <h2 class="font-title">Chambre Standard</h2>

    <button class="svg-secondary">
      <img :src="iconURL + '/closeBtn.svg'" alt="">
    </button>
  </div>
  
  <div class="p-[2.6vw] font-content">
    <div class="flex flex-col md:flex-row justify-items-start h-[20.8vw]">
      <img :src="imgUrl + '/roomView.jpg'" alt="">
      
      <div class="py-[1vw] mx-[3.9vw] border-b border-b-black">
        <h3 class="font-title text-titleBase">Chambre Standard</h3>

        <div class="mt-[2.1vw]">
          Lorem ipsum dolor sit amet consectetur. Mattis libero scelerisque morbi elit senectus semper
          egestas. Ultrices nibh id sit metus mattis pretium ultrices orci. Purus penatibus sollicitudin augue
          quis purus sagittis lacus. Scelerisque elementum eget varius turpis in massa ut.
        </div>

        <div class="pt-[4.2vw] flex flex-row place-items-end">
          <img :src="iconURL + '/timer.svg'" alt="">
          <span class="ml-3">Arrivée entre 13h00 et 18h00</span>
        </div>

      </div>
    </div>

    <div class="pt-[2.6vw] flex flex-row justify-between">
      <div>
        <h3 class="text-titleBase">Détails</h3>

        <div>
          <div class="flex flex-row place-items-end">
            <img :src="iconURL + 'shower-head.svg'" alt="">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>

          <div class="flex flex-row place-items-end">
            <img :src="iconURL + 'bed-king.svg'" alt="">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>

          <div class="flex flex-row place-items-end">
            <img :src="iconURL + 'smoking-off.svg'" alt="">
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          
        </div>
      </div>

      <div class="flex flex-col">
        <h3 class="text-titleBase">Aménagements</h3>

        <div class="flex flex-row">
          <div>
            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'shower-head.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'bed-king.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'smoking-off.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>

          <div>
            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'shower-head.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'bed-king.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'smoking-off.svg'" alt="">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';

  const imgUrl = ref(
    import.meta.env.VITE_API_IMG_URL)
  const iconURL = ref(
    import.meta.env.VITE_API_ICON_URL)
</script>