<script setup>
import Container from "@/layouts/Container.vue";
import SearchBox from "./SearchBox.vue";
</script>

<template>
  <div class="w-full my-5 sm:my-7 md:my-10">
    <Container>
      <div class="w-full flex flex-col justify-center items-center">
        <div class="flex items-center sm:w-[320px] md:w-[544px]">
          <h2
            class="text-wrap text-[26px] sm:text-[30px] md:text-[40px] text-center font-bold capitalize"
          >
            descpver furniro with high quality wood
          </h2>
          <img
            src="../assets/icons/star.png"
            alt="star shap"
            class="w-[24px] h-[24px] sm:w-[51px] sm:h-[51px] relative top-[20px] right-[40px] sm:top-[35px] sm:right-[55px]"
          />
        </div>
        <div class="flex w-full sm:w-[320px] md:w-[544px] my-3 sm:my-8 md:my-7">
          <img
            src="../assets/icons/Vector.png"
            alt="vectoe shape"
            class="w-[47px] h-[44px] sm:w-[60px] sm:h-[132px] relative left-[10px] top-[-60px] sm:left-0 sm:right-[90px] sm:top-[-20px]"
          />
          <p class="text-wrap text-center sm:font-medium text-title-2">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
            adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt
            aliquam adipiscing tempor.
          </p>
        </div>
      </div>
      <div class="my-3 sm:my-5 md:my-6">
        <!--search box-->
        <SearchBox />
      </div>
    </Container>
  </div>
</template>
