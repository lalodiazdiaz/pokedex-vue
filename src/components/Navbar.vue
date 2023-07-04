<template>
  <nav class="navbar navbar-expanded-md navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img
        src="https://quizizz-destination-bkt.s3.amazonaws.com/new/3aaaf4ba-4f88-44a8-b6ef-e3480aeba7e3.png?w=200&h=200"
        alt=""
        class="mr-2"
        width="50"
        height="50"
      />
    </router-link>
    <div class="ml-auto">
      <router-link
        v-if="!isAuthenticated"
        to="/login"
        class="btn btn-outline-primary my-2 my-sm-0"
        >Login</router-link
      >
      <button
        v-else
        class="btn btn-outline-primary my-2 my-sm-0"
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
