<template>
  <div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
          <!-- row 1 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>{{ user.id }}</td>
            <td>
              {{ user.username }}
              <br />
              <span class="badge badge-ghost badge-sm">{{
                user.password
              }}</span>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const users = ref([]);
fetch("https://fakestoreapi.com/users")
  .then((res) => res.json())
  .then((json) => (users.value = json));
</script>
<style scoped></style>
