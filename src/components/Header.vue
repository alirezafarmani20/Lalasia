<script setup>
import Container from "@/layouts/Container.vue";
import Navigation from "./Navigation.vue";
</script>

<template>
  <header class="w-full border-b-[2px] border-[#bbbaba]">
    <Container>
      <div class="flex items-center justify-between py-3 sm:p-5">
        <div class="flex items-center">
          <!--logo section-->
          <RouterLink to="/">
            <img
              src="../assets/images/logo.png"
              alt="site logo"
              class="w-[99px] h-[32px] sm:w-[130px] sm:h-[42px]"
            />
          </RouterLink>
        </div>
        <div class="flex items-center">
          <!--menu sectio-->
          <Navigation />
        </div>
        <div class="hidden sm:flex items-center gap-[2rem]">
          <!--register box-->
          <img src="../assets/icons/bag-2.png" alt="shopping bag" class="w-[30px] h-[30px]" />
          <img src="../assets/icons/user.png" alt="user image" class="w-[30px] h-[30px]" />
        </div>
      </div>
    </Container>
  </header>
</template>
