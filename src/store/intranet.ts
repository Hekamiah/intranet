import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

export const useIntranetStore = defineStore("intranet", () => {
  const displayName = useStorage("displayName", "Tiago Santos");
  const company = ref("MO");

  return { displayName, company };
});
