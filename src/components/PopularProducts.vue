<script setup>
import { ref, onMounted } from "vue";
import { usePopularProductStore } from "@/stores/popularProduct";
// import layouts
import Container from "@/layouts/Container.vue";

const usePopularStore = usePopularProductStore();
const data = ref([]);

onMounted(async () => {
  await usePopularStore.getData();
  data.value = usePopularStore.showData;
});
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-col items-center w-full my-3 sm:my-6 md:my-10">
        <div class="flex flex-col items-center justify-center w-full sm:w-[556px] md:w-[656px] gap-3 sm:gap-5">
          <!-- text box -->
          <span class="text-secondary-1 capitalize text-[16px] sm:text-[18px] font-medium text-center">product</span>
          <h2 class="text-wrap text-center text-title-1 capitalize font-bold text-[24px] sm:text-[34px]">
            our popular products
          </h2>
          <p class="text-wrap text-title-2 text-center text-[14px] sm:text-[19px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure in cum ullam nam,
            corporis placeat! Quae, amet error!
          </p>
        </div>
      </div>
    </Container>
    <!-- show product -->
    <div class="flex items-center justify-between gap-[20px] sm:gap-[30px] w-full overflow-x-scroll ">
      <!-- product box -->
      <div v-for="product in data" :key="product.id" class="flex flex-col gap-1 sm:w-[294px] md:w-[694px] sm:h-[244px] md:h-[344px]">
        <img :src="product.productImage" :alt="product.productTitle" class="w-[220px] h-[194px] sm:w-[] sm:h-[]">
        <span class="text-title-4 text-[12px] sm:text-[15px] font-bold ">{{ product.productType }}</span>
        <h3 class="text-[16px] sm:text-[20px] text-title-1 text-nowrap">{{ product.productTitle }}</h3>
        <h5 class="text-[14px] font-medium text-paragraph-3">{{ product.productDescription }}</h5>
        <h2 class="text-[16px] font-bold">${{ product.productPrice }}</h2>
      </div>
    </div>
  </div>
</template>