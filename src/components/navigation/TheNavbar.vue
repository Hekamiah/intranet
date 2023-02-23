<template>
  <div id="gv_navbar">
    <div class="ui top attached borderless menu">
      <div class="ui container">
        <a class="header item">
          <img
            class="ui logo"
            src="../../assets/images/logoGV.png"
            alt="../../assets/images/grandvision.png"
          />
        </a>
        <div class="left menu">
          <RouterLink class="ui item" to="Sales">{{
            t("sales.link")
          }}</RouterLink>
        </div>
        <div class="right menu">
          <a class="ui item">{{ store.displayName }}</a>
          <a class="ui item">{{ t("nav.logout") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const store = useAuthStore();
</script>

<style scoped>
.ui.menu .item {
  color: rgb(30, 83, 163);
}
.ui.menu .logo {
  height: 30px;
}
</style>
