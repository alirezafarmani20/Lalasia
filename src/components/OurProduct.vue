<script setup>
import Container from "@/layouts/Container.vue";
const items = [
  {
    id: "1",
    number: "20+",
    text: "Years Experience",
  },
  {
    id: "2",
    number: "483",
    text: "Happy Client",
  },
  {
    id: "2",
    number: "150+",
    text: "Project Finished",
  },
];
</script>

<template>
  <div class="w-full my-10 sm:my-4 md:mt-[150px]">
    <Container>
      <div class="flex items-center justify-between">
        <div class="flex flex-col justify-between w-full gap-5 sm:w-[545px]">
          <!--text box-->
          <span class="text-secondary-1 capitalize text-[16px] sm:text-[18px] font-medium"
            >our product</span
          >
          <h2 class="text-warp font-bold text-[24px] sm:text-[34px] md:text-[38px] text-title-1">
            Crafted by talented and high quality material
          </h2>
          <p class="text-paragraph-1">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
            adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui
            tincidunt pulvinar
          </p>
          <button class="border w-[170px] h-[54px] bg-primary-1 text-white rounded capitalize">
            learn more
          </button>
          <img
            src="../assets/images/wood.png"
            alt="wood image"
            class="w-full sm:w-[595px] h-[260px]"
          />
        </div>
        <div class="flex flex-col justify-between">
          <!--image box-->
          <div class="flex justify-between items-center">
            <div v-for="item in items" :key="item.id" class="">
              <h3 class="">{{ item.number }}</h3>
              <h3>{{ item.text }}</h3>
            </div>
          </div>
          <div class="">
            <!--image section-->
            <img src="" alt="" class="" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
