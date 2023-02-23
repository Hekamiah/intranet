<template>
  <the-navbar></the-navbar>
  <div class="ui container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/navigation/TheNavbar.vue";
</script>
