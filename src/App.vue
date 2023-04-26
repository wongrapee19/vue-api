<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HomeView from "./views/HomeView.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div>
    <TheHeader />

    <TheFooter />
  </div>
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
