import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = useStorage("auth", false);
  function makeLogin() {
    isLoggedIn.value = true;
  }

  function makeLogout() {
    isLoggedIn.value = false;
  }

  return { isLoggedIn, makeLogin, makeLogout };
});
