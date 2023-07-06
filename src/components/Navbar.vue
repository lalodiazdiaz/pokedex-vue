<template>
  <nav
    class="navbar navbar-expanded-md navbar-light px-4"
    style="background-color: lightslategrey"
  >
    <router-link to="/" class="navbar-brand">
      <img
        src="https://quizizz-destination-bkt.s3.amazonaws.com/new/3aaaf4ba-4f88-44a8-b6ef-e3480aeba7e3.png?w=200&h=200"
        alt=""
        class="mr-2"
        width="50"
        height="50"
      />
    </router-link>
    <img
      src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
      alt=""
      width="200"
      height="80"
    />
    <div class="ml-auto">
      <router-link
        v-if="!isAuthenticated"
        to="/login"
        class="btn btn-danger my-2 my-sm-0 btn-lg"
        >Login</router-link
      >

      <button
        v-else
        class="btn btn-danger my-2 my-sm-0 btn-lg"
        @click="logout()"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import useAuth from "@/store/auth";
export default {
  name: "Navbar",
  setup() {
    const { isAuthenticated, logout } = useAuth();

    return { isAuthenticated, logout };
  },
};
</script>

<style></style>
