<template>
  <div class="max-w-[1024px]">
    <div
      class="bg-primary text-secondary text-titleBase p-[2.6vw] flex flex-row justify-between items-start"
    >
      <h2 class="font-title">Chambre Standard</h2>

      <button class="svg-secondary" @click="$emit('close')">
        <img :src="iconURL + '/closeBtn.svg'" alt="" />
      </button>
    </div>

    <div class="p-[2.6vw] font-content text-tertiary flex flex-col">
      <div class="flex flex-col md:flex-row place-items-center">
        <img
          :src="imgUrl + '/roomView.jpg'"
          alt=""
          class="h-[20.8vw] hidden md:block"
        />
        <div
          class="block md:hidden w-full p-16 bg-cover bg-no-repeat bg-center"
          :style="'background-image: url(' + imgUrl + 'roomView.jpg);'"
        ></div>

        <div class="py-[1vw] mx-[3.9vw] self-start">
          <h3 class="font-title text-titleBase">Chambre Standard</h3>
          <div class="mt-[2.1vw] flex-1">
            Lorem ipsum dolor sit amet consectetur. Mattis libero scelerisque
            morbi elit senectus semper egestas. Ultrices nibh id sit metus
            mattis pretium ultrices orci. Purus penatibus sollicitudin augue
            quis purus sagittis lacus. Scelerisque elementum eget varius turpis
            in massa ut.
          </div>

          <div
            class="flex flex-row place-items-end border-b border-b-tertiary pb-2 pt-[2.1vw]"
          >
            <img :src="iconURL + '/timer.svg'" alt="" />
            <span class="ml-3">Arrivée entre 13h00 et 18h00</span>
          </div>
        </div>
      </div>

      <div
        class="pt-[2.6vw] md:h-full flex flex-wrap md:flex-row justify-between gap-10"
      >
        <div>
          <h3 class="text-titleBase font-title">Détails</h3>

          <div class="pt-5 flex flex-col gap-5">
            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'shower-head.svg'" alt="" />
              <span class="pl-3">Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'bed-king.svg'" alt="" />
              <span class="pl-3">Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div class="flex flex-row place-items-end">
              <img :src="iconURL + 'smoking-off.svg'" alt="" />
              <span class="pl-3">Lorem ipsum dolor sit amet consectetur.</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-titleBase font-title">Aménagements</h3>

          <div class="flex flex-wrap pt-5 gap-5">
            <div class="pb-5 md:pb-0 flex flex-col gap-5">
              <div class="flex flex-row place-items-end">
                <img :src="iconURL + 'tv.svg'" alt="" class="py-[7.5px]" />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>

              <div class="flex flex-row place-items-end">
                <img
                  :src="iconURL + 'refregirator.svg'"
                  alt=""
                  class="px-[9px]"
                />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>

              <div class="flex flex-row place-items-end">
                <img :src="iconURL + 'room-service.svg'" alt="" />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>
            </div>

            <div class="flex flex-col gap-5">
              <div class="flex flex-row place-items-end">
                <img :src="iconURL + 'cloakroom.svg'" alt="" class="p-[5px]" />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>

              <div class="flex flex-row place-items-end">
                <img :src="iconURL + 'hair-dryer.svg'" alt="" />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>

              <div class="flex flex-row place-items-end">
                <img
                  :src="iconURL + 'handicaped.svg'"
                  alt=""
                  class="px-[10px] py-[5.5px]"
                />
                <span class="pl-3"
                  >Lorem ipsum dolor sit amet consectetur.</span
                >
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';

  const imgUrl = ref(import.meta.env.VITE_API_IMG_URL)
  const iconURL = ref(import.meta.env.VITE_API_ICON_URL)

</script>