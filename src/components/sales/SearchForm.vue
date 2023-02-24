<template>
  <form class="ui form">
    <h4 class="ui dividing header">{{ t("sales.searchForm.title") }}</h4>
    <div class="fields">
      <div class="five wide field">
        <label>{{ t("sales.searchForm.firstName") }}</label>
        <input type="text" v-model="customerData.customerFirstName" />
      </div>
      <div class="five wide field">
        <label>{{ t("sales.searchForm.lastName") }}</label>
        <input type="text" v-model="customerData.customerLasttName" />
      </div>
      <div class="four wide field">
        <label>{{ t("sales.searchForm.birthDate") }}</label>
        <input type="date" v-model="customerData.customerBirthDate" />
      </div>
      <div class="four wide field">
        <label>{{ t("sales.searchForm.fiscalNUmber") }}</label>
        <input type="number" v-model="customerData.customerFiscalNumber" />
      </div>
    </div>
  </form>
  <base-button
    :text="t('sales.searchForm.search')"
    have-icon
    icon="search"
  ></base-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "@/components/ui/BaseButton.vue";
const { t } = useI18n();

const customerData = ref({
  customerFirstName: "",
  customerLasttName: "",
  customerBirthDate: "",
  customerFiscalNumber: "",
});
</script>
