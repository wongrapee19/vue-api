<template>
  <div>
    <form @submit="Onsubmit" class="">
      <div
        class="container modal-box flex flex-col justify-center items-center"
      >
        <div class="form-control">
          <label class="label">
            <span class="label-text">ID</span>
          </label>
          <label class="input-group">
            <span>ID</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="id"
              readonly
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Firstname</span>
          </label>
          <label class="input-group">
            <span>Fname</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="fname"
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Lastname</span>
          </label>
          <label class="input-group">
            <span>Lname</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="lname"
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <label class="input-group">
            <span>uname</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="username"
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <label class="input-group">
            <span>Pword</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="password"
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <label class="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
              v-model="email"
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Avatar</span>
          </label>
          <label class="input-group">
            <span>avatar</span>
            <input
              type="text"
              placeholder=""
              class="input input-bordered"
              v-model="avatar"
            />
          </label>
        </div>

        <br />

        <button class="btn btn-warning px-10" type="submit">Update</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import router from "../router";

const route = useRoute();

const id = ref(route.params.id);

const fname = ref("");
const lname = ref("");
const username = ref("");
const password = ref("");
const email = ref("");
const avatar = ref("");

const fetchData = () => {
  fetch("https://www.melivecode.com/api/users/" + id.value)
    .then((res) => res.json())
    .then((result) => {
      fname.value = result.user.fname;
      lname.value = result.user.lname;
      username.value = result.user.username;
      password.value = result.user.password;
      email.value = result.user.email;
      avatar.value = result.user.avatar;
    });
};
fetchData();
const Onsubmit = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id.value,
    fname: fname.value,
    lname: lname.value,
    username: username.value,
    password: password.value,
    email: email.value,
    avatar: avatar.value,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://www.melivecode.com/api/users/update", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      if (result.status === "ok") {
        router.push({ name: "home" }); // navigate to homepage route
      }
      fetchData();
    })
    .catch((error) => console.log("error", error));
};
</script>
<style scoped>
.con-form {
  display: flex;
  min-width: 400px;
  background-color: rgb(80, 80, 80);
}
</style>
