import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const displayName = ref("Tiago Santos");

  return { displayName };
});
