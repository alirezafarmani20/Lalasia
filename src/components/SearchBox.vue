<script setup>
import Container from "@/layouts/Container.vue";
</script>

<template>
  <div
    class="w-full h-[150px] sm:h-[360px] rounded md:h-[460px] bg-[url(/src/assets/images/bg.png)] bg-cover my-4 sm:my-7 md:my-10"
  >
    <div
      class="flex justify-between items-center w-full h-[54px] sm:w-[750px] sm:h-[74px] md:w-[810px] md:h-[84px] bg-screen-1 rounded relative sm:left-[370px] sm:top-[-45px] px-3 sm:px-4"
    >
      <!--search box-->
      <img
        src="../assets/icons/search-normal.png"
        alt="search icon shape"
        class="w-[32px] h-[32px]"
      />
      <input type="search" value="search property" class="capitalize text-title-2 w-full px-2" />
      <button
        class="flex items-center rounded justify-center capitalize w-[100px] h-[38px] sm:w-[170px] sm:h-[54px] bg-primary-1 text-screen-1"
        type="submit"
      >
        search
      </button>
    </div>
  </div>
</template>
