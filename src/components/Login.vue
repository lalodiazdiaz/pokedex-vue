<template>
  <div class="container" style="height: 100vh">
    <div
      class="row justify-content-center align-items-center"
      style="height: 100%"
    >
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h3 class="h3 mb-3 font-weight-normal">Login</h3>
            <label for="inputEmail" class="sr-only">Email Address</label>
            <input
              v-model="email"
              type="text"
              name=""
              id="inputEmail"
              class="form-control my-3"
              placeholder="Email address"
              required
            />
            <label for="inputPassword" class="sr-only"> Password</label>
            <input
              v-model="password"
              id="inputPassword"
              type="password"
              class="form-control my-3"
              placeholder="Password"
              required
            />
            <button
              @click="triggerLogin()"
              class="btn btn-primary btn-lg btn-block"
            >
              Sign in
            </button>
            <p class="mb-3 mt-5 text-muted">&copy; RukoDex 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useAuth from "../store/auth";
import router from "@/router";
export default {
  name: "Login",
  setup() {
    let email = ref("");
    let password = ref("");

    const { login } = useAuth();

    const triggerLogin = () => {
      const success = login(email.value, password.value);
      if (success) {
        router.push("/");
      }
    };

    return { email, password, triggerLogin };
  },
};
</script>
