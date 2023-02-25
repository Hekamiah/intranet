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
          <a class="ui item" @click="logout">{{ t("nav.logout") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIntranetStore } from "@/store/intranet";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const store = useIntranetStore();

const router = useRouter();
const authStore = useAuthStore();

function logout() {
  authStore.makeLogout();
  router.push({ path: "/login" });
}
</script>

<style scoped>
.ui.menu .item {
  color: #1e53a3ff;
}
.ui.menu .item:hover {
  color: #1e53a3ff;
  font-weight: bold;
  background-color: white;
}
.ui.menu .logo {
  height: 30px;
}
</style>
