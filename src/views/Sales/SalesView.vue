<template>
  <section>
    <search-form @seacrhCustomer="seacrhCustomer"></search-form>
  </section>
  <section class="tableSection">
    <search-alert v-if="!isTableLoaded && !isLoading"></search-alert>
    <loading-alert
      :loading="true"
      v-else-if="!isTableLoaded && isLoading"
    ></loading-alert>
    <customer-table
      :fields="tableHeader"
      :data="tableData"
      openModalOnClick
      modal="saleDetail"
      @itemClicked="handleItemClicked"
      v-else-if="isTableLoaded && !isLoading"
    ></customer-table>
  </section>
  <div class="modals">
    <sale-detail-modal
      :show="isModalVisible"
      @close="closeModal"
      :customerData="customerData"
    ></sale-detail-modal>
  </div>
</template>

<script lang="ts" setup>
import CustomerTable from "@/components/TheTable.vue";
import LoadingAlert from "@/components/TheAlert.vue";
import SearchAlert from "@/components/sales/alerts/SearchAlert.vue";
import SearchForm from "@/components/sales/SearchForm.vue";
import SaleDetailModal from "@/components/sales/modals/SaleDetailModal.vue";
import { useIntranetStore } from "@/store/intranet";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useIntranetStore();
const tableHeader = ref([
  t("sales.customerTable.fields.firstName"),
  t("sales.customerTable.fields.lastName"),
  t("sales.customerTable.fields.birthDate"),
  t("sales.customerTable.fields.store"),
]);
const tableData = ref();
const customerData = ref();

const isModalVisible = ref(false);
const isTableLoaded = ref(false);
const isLoading = ref(false);

function closeModal() {
  isModalVisible.value = false;
}

function openModal() {
  isModalVisible.value = true;
}

async function handleItemClicked(item: never) {
  customerData.value = await store.getCustomerDataById(
    item["customerID"],
    item[t("sales.customerTable.fields.store")]
  );
  openModal();
}

function formValidation(formData) {
  return (
    formData.firstName !== "" ||
    formData.lastName !== "" ||
    formData.date !== "" ||
    formData.fiscalNumber !== ""
  );
}

async function seacrhCustomer(customerData) {
  if (!formValidation(customerData)) {
    return;
  }
  isTableLoaded.value = false;
  isLoading.value = true;
  tableData.value = await store.getCustomers(
    customerData.firstName,
    customerData.lastName,
    customerData.date,
    customerData.fiscalNumber
  );
  isTableLoaded.value = true;
  isLoading.value = false;
}
</script>

<style scoped>
.tableSection {
  padding-top: 2rem;
}
</style>
