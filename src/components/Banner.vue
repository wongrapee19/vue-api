<template>
  <div>
    <!-- panigation -->
    <!-- Add product form -->

    <div class="page-con py-5">
      <div class="btn-group">
        <button class="btn" :disabled="currentPage === 1" @click="prevPage">
          «
        </button>
        <button
          class="btn"
          v-for="page in pages"
          :key="page"
          :class="{ 'btn-active': page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
        <button
          class="btn"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          »
        </button>
      </div>
    </div>

    <div class="page-con py-10">
      <label
        for="my-modal"
        class="btn btn-active btn-primary px-10 flex justify-start"
        >Add Users</label
      >
    </div>
    <input type="checkbox" id="my-modal" class="modal-toggle" />

    <div class="modal">
      <div class="modal-box">
        <div class="modal-action">
          <label class="btn btn-error" for="my-modal">Close</label>
        </div>
        <!-- From add -->
        <form @submit="Onsubmit" class="">
          <div class="container flex flex-col justify-center items-center">
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

            <button class="btn btn-primary px-10" type="submit">
              Add Users
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Update -->

    <div class="overflow-x-auto w-full">
      <!-- add insert -->

      <table class="container table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Update</th>
            <th>Del</th>
          </tr>
        </thead>
        <!-- loop panigation -->
        <tbody v-for="item in displayedItems" :key="item.id">
          <!-- row 1 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>{{ item.id }}</td>
            <td>
              {{ item.fname }}
            </td>
            <td>
              {{ item.lname }}
            </td>
            <td>{{ item.username }}</td>
            <td><img :src="item.avatar" alt="" /></td>
            <th>
              <button class="btn btn-warning" @click="OnEdit(item.id)">
                Edit
              </button>
            </th>
            <th>
              <button class="btn btn-error" @click="Ondelete(item.id)">
                Delete
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import router from "../router";

// Get api
const items = ref([]);
const fetchData = () => {
  fetch("https://www.melivecode.com/api/users")
    .then((res) => res.json())
    .then((result) => {
      items.value = result;
    });
};

//table
fetchData();

// Update

const OnEdit = (id) => {
  router.push("/edit/" + id);
};

// onMounted(async () => {
//   const res = await fetch("https://www.melivecode.com/api/users");
//   items.value = await res.json();
// });

// Api Delete
const Ondelete = (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: id,
  });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://www.melivecode.com/api/users/delete", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      fetchData();
    })
    .catch((error) => console.log("error", error));
};

const fname = ref("Cat");
const lname = ref("Chat");
const username = ref("Cat.chat@gmail.com");
const password = ref("1234");
const email = ref("Cat.Chat@gmail.com");
const avatar = ref("https://www.melivecode.com/users/cat.png");

const Onsubmit = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    fname: fname.value,
    lname: lname.value,
    username: username.value,
    password: password.value,
    email: email.value,
    avatar: avatar.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://www.melivecode.com/api/users/create", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      if (result.status === "ok") {
        router.push("/");
      }
    })
    .catch((error) => console.log("error", error));
};
//Funtion panigation
const itemsPerPage = 5;
const currentPage = ref(1);

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage);
});

const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

function changePage(page) {
  currentPage.value = page;
}

function prevPage() {
  currentPage.value--;
}

function nextPage() {
  currentPage.value++;
}
</script>
<style scoped>
.card-con {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px;
  grid-row-gap: 3rem;
}

img {
  width: 150px;
  object-fit: cover;
}
.page-con {
  display: flex;
  justify-content: center;
}
input {
  padding: 20px;
  background-color: aliceblue;
  color: black;
  border-radius: 50px;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  grid-row-gap: 2rem;
}
img {
  border-radius: 100px;
}
</style>
