<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
let isActive = ref(false)
const menuIsActive = () => {
    isActive.value = !isActive.value
}
</script>

<template>
    <!--dectiop menu-->
    <nav class="hidden sm:flex items-center gap-[2rem] capitalize text-black">
        <RouterLink to="/product">product</RouterLink>
        <RouterLink to="/services">services</RouterLink>
        <RouterLink to="/articles">articel</RouterLink>
        <RouterLink to="/about">about us</RouterLink>
    </nav>
    <!--mobile menu-->
    <div class="flex sm:hidden flex-col gap-2">
        <button @click="menuIsActive" class="flex items-center">
            <img src="../assets/icons/menu.png" alt="drop down menu">
        </button>
        <nav v-if="isActive" class="flex flex-col">
            <RouterLink to="/product">product</RouterLink>
            <RouterLink to="/services">services</RouterLink>
            <RouterLink to="/articles">articel</RouterLink>
            <RouterLink to="/about">about us</RouterLink>
        </nav>
    </div>
</template>