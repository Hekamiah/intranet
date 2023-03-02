<template>
  <div class="ui icon message" v-if="loading">
    <i class="notched circle loading icon"></i>
    <div class="content">
      <div class="header">{{ t("alert.searching") }}</div>
      <p>{{ t("alert.wait") }}</p>
    </div>
  </div>
  <div class="ui message" v-else>
    <div class="header">{{ header }}</div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps({
  header: { type: String, required: false },
  message: { type: String, required: false },
  loading: { type: Boolean, required: false, default: false },
});
</script>
