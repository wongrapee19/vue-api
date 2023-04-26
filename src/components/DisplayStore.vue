<script setup>
import { store } from "../stores/store";
</script>
<template>
  <div class="container py-6">
    <h2>Show Data in Store</h2>
    <br />
    {{ store.state.food }} <br />
    {{ store.state.sport }}
  </div>
</template>

<style scoped></style>
