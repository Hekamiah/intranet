<template>
  <the-navbar v-if="authStore.isLoggedIn"></the-navbar>
  <div class="ui container main-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/navigation/TheNavbar.vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
</script>

<style scoped>
.main-container {
  padding-top: 2rem;
  position: relative;
  min-height: 100vh;
}
</style>
