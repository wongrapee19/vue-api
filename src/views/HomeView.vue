<script setup>
import Banner from "../components/Banner.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="text-white">
    <Banner />
  </div>
  <RouterView />
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
li a {
  text-align: left;
}
</style>
