<template>
  <the-alert
    :message="t('sales.alerts.searchAlert.message')"
    :header="t('sales.alerts.searchAlert.header')"
  ></the-alert>
</template>

<script lang="ts" setup>
import TheAlert from "@/components/TheAlert.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
