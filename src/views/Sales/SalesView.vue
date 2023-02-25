<template>
  <section>
    <search-form></search-form>
  </section>
  <section class="tableSection">
    <customer-table :fields="tableHeader" :data="tableData"></customer-table>
  </section>
  <div class="modals"></div>
</template>

<script lang="ts" setup>
import CustomerTable from "@/components/TheTable.vue";
import SearchForm from "@/components/sales/SearchForm.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const tableHeader = ref([
  t("sales.table.fields.firstName"),
  t("sales.table.fields.lastName"),
  t("sales.table.fields.birthDate"),
  t("sales.table.fields.store"),
]);
const tableData = ref([
  {
    [t("sales.table.fields.firstName")]: "Tiago",
    [t("sales.table.fields.lastName")]: "Santos",
    [t("sales.table.fields.birthDate")]: "09-11-1984",
    [t("sales.table.fields.store")]: "5014",
  },
  {
    [t("sales.table.fields.firstName")]: "Ana",
    [t("sales.table.fields.lastName")]: "Silva",
    [t("sales.table.fields.birthDate")]: "11-09-1999",
    [t("sales.table.fields.store")]: "5001",
  },
]);
</script>

<style scoped>
.tableSection {
  padding-top: 2rem;
}
</style>
