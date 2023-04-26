<template>
  <div class="container py-6">
    <h2>Food I Like</h2>
    <input
      type="text"
      class="text-center"
      name="food"
      :value="store.state.food"
    />
  </div>
</template>
<script setup>
import { store } from "../stores/store";
</script>
<style scoped></style>
