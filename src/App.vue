<template>
  <the-navbar></the-navbar>
  <div class="ui container main-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/navigation/TheNavbar.vue";
</script>

<style scoped>
.main-container {
  padding-top: 2rem;
  position: relative;
  min-height: 100vh;
}
</style>
