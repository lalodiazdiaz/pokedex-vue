import { reactive, toRefs, readonly } from "vue";

const state = reactive({
  isAuthenticated: false,
  email: "",
});

export default function useAuth() {
  const login = (email, password) => {
    if (password !== "Secret123") {
      return false;
    }
    state.email = email;
    state.isAuthenticated = true;
    return true;
  };

  const logout = () => {
    state.email = "";
    state.isAuthenticated = false;
  };

  return { ...toRefs(readonly(state)), login, logout };
}
