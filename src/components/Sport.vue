<template>
  <div class="container py-6">
    <h2>Sport I Like</h2>
    <input
      type="text"
      class="text-center"
      name="sport"
      :value="store.state.sport"
    />
  </div>
</template>
<script setup>
import { store } from "../stores/store";
</script>
<style scoped></style>
