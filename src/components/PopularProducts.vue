<script setup>
// import layouts
import Container from "@/layouts/Container.vue";
</script>

<template>
  <div class="w-full">
    <Container>
      <div class="flex flex-col items-center w-full my-3 sm:my-6 md:my-10">
        <div
          class="flex flex-col items-center justify-center w-full sm:w-[556px] md:w-[656px] gap-3 sm:gap-5"
        >
          <!--text box-->
          <span
            class="text-secondary-1 capitalize text-[16px] sm:text-[18px] font-medium text-center"
            >product</span
          >
          <h2
            class="text-wrap text-center text-title-1 capitalize font-bold text-[24px] sm:text-[34px]"
          >
            our popular product
          </h2>
          <p class="text-wrap text-title-2 text-center text-[14px] sm:text-[19px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure in cum ullam nam,
            corporis placeat! Quae, amet error!
          </p>
        </div>
      </div>
    </Container>
    <!--show product-->
    <div class="flex sm:flex w-full overflow-hidden">
      <!--product box-->
    </div>
  </div>
</template>
