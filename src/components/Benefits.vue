<script setup>
import { useBenefitsStore } from "@/stores/benefits";
import { onMounted, ref } from "vue";
//import layouts
import Container from "@/layouts/Container.vue";

const BenefitsStore = useBenefitsStore();
const data = ref([]);

onMounted(async () => {
  await BenefitsStore.getData();
  data.value = BenefitsStore.showData;
});
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="w-full">
        <div class="flex items-center justify-between flex-col sm:flex-row my-3 sm:my-6 md:my-10">
          <div class="flex flex-col gap-3 w-full sm:w-[321px]">
            <span class="text-secondary-1 capitalize text-[16px] sm:text-[18px] font-medium">
              benefits
            </span>
            <h2 class="text-wrap text-title-1 font-bold text-[20px] sm:text-[30px]">
              benefits when using our service
            </h2>
          </div>
          <div class="flex justify-between w-full sm:w-[321px]">
            <p class="text-wrap text-title-2 font-medium text-[15px]">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
              adipiscing mauris non purus parturient.
            </p>
          </div>
        </div>
        <div
          class="flex justify-between flex-col sm:flex-row items-center my-3 sm:my-6 md:my-10 gap-4"
        >
          <div
            v-for="benefit in data"
            :key="benefit.id"
            class="flex flex-col gap-1 sm:gap-3 md:gap-4 w-full sm:w-[400px] h-[250px] shadow-[3px_5px_5px_3px_gray] px-2 sm:px-3 py-3 sm:py-4 rounded"
          >
            <img :src="benefit.icon" :alt="benefit.title" class="w-[30px] h-[30px]" />
            <h3 class="text-title-1 text-[19px] sm:text-[22px] font-medium">{{ benefit.title }}</h3>
            <p class="text-title-2">{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
