<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

let isActive = ref(false);
let selected = ref("home");

const menuIsActive = () => {
  isActive.value = !isActive.value;
};
const productIsSelected = () => {
  selected.value = "product";
  console.log("product page");
};
const servicesIsSelected = () => {
  selected.value = "services";
  console.log("services page");
};
const articelIsSelected = () => {
  selected.value = "articel";
  console.log("articel page");
};
const aboutIsSelected = () => {
  selected.value = "about";
  console.log("about page");
};
const homeIsSelected = () => {
  selected.value = "home";
  console.log("home page");
};
</script>

<template>
  <!-- desktop menu -->
  <nav class="hidden sm:flex items-center gap-[2rem] capitalize text-black font-medium">
    <RouterLink
      to="/"
      :style="selected == 'home' ? { color: '#518581', fontSize: '18px' } : {}"
      @click="homeIsSelected"
      >Home</RouterLink
    >
    <RouterLink
      to="/product"
      :style="selected == 'product' ? { color: '#518581', fontSize: '18px' } : {}"
      @click="productIsSelected"
      >product</RouterLink
    >
    <RouterLink
      to="/services"
      :style="selected == 'services' ? { color: '#518581', fontSize: '18px' } : {}"
      @click="servicesIsSelected"
      >services</RouterLink
    >
    <RouterLink
      to="/articles"
      :style="selected == 'articel' ? { color: '#518581', fontSize: '18px' } : {}"
      @click="articelIsSelected"
      >article</RouterLink
    >
    <RouterLink
      to="/about"
      :style="selected == 'about' ? { color: '#518581', fontSize: '18px' } : {}"
      @click="aboutIsSelected"
      >about us</RouterLink
    >
  </nav>
  <!-- mobile menu -->
  <div class="flex sm:hidden flex-col gap-2">
    <button @click="menuIsActive" class="flex items-center">
      <img src="../assets/icons/menu.png" alt="drop down menu" />
    </button>
    <nav v-if="isActive" class="flex flex-col">
      <RouterLink to="/product" @click="menuIsSelected">product</RouterLink>
      <RouterLink to="/services">services</RouterLink>
      <RouterLink to="/articles">article</RouterLink>
      <RouterLink to="/about">about us</RouterLink>
    </nav>
  </div>
</template>
