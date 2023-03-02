<template>
  <sales-loading-alert v-if="isLoading" :loading="true"></sales-loading-alert>
  <div class="ui container ordersTable" v-else>
    <sales-table
      :data="tableData"
      :fields="tableFields"
      :footer="false"
    ></sales-table>
  </div>
</template>

<script lang="ts" setup>
import SalesTable from "@/components/TheTable.vue";
import SalesLoadingAlert from "@/components/TheAlert.vue";
import { onBeforeMount, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { useIntranetStore } from "@/store/intranet";

const props = defineProps({
  customerId: { type: String, required: true },
  storeId: { type: String, required: true },
});

const store = useIntranetStore();
const isLoading = ref(true);
const tableFields = ref([
  t("sales.salesOfcustomerTable.fields.saleNumber"),
  t("sales.salesOfcustomerTable.fields.saleDate"),
  t("sales.salesOfcustomerTable.fields.desiredDeliverDate"),
  t("sales.salesOfcustomerTable.fields.isReadyToDeliver"),
  t("sales.salesOfcustomerTable.fields.deliveryStatus"),
  t("sales.salesOfcustomerTable.fields.saleType"),
  t("sales.salesOfcustomerTable.fields.type"),
  t("sales.salesOfcustomerTable.fields.status"),
  t("sales.salesOfcustomerTable.fields.amount"),
]);
const tableData = ref([]);

onBeforeMount(async () => {
  tableData.value = await store.getCustomerOrders(
    props.customerId,
    props.storeId
  );
  isLoading.value = false;
});
</script>

<style scoped>
.ordersTable {
  max-height: 200px;
  overflow-x: scroll;
}
</style>
