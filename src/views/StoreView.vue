<template>
  <div class="container text-center">
    <div class="model-box">
      <Food />
      <Sport />
      <DisplayStore />

      <button class="btn btn-primary" @click="increment">
        Add Notification: {{ store.state.count }}
      </button>
    </div>
  </div>
</template>
<script setup>
import Food from "../components/Food.vue";
import Sport from "../components/Sport.vue";
import DisplayStore from "../components/DisplayStore.vue";
import { store } from "../stores/store";

// Define the method to increment the count
const increment = () => {
  // Update the count value in the store using the setCount mutation
  store.mutations.setCount(store.state.count++);
};
</script>
<style scoped></style>
