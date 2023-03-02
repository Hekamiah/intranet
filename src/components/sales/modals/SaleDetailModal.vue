<template>
  <the-modal :show="show">
    <div class="ui container">
      <div class="scrolling content">
        <form class="ui form">
          <div class="fields">
            <div class="eight wide field">
              <label>{{ t("sales.saleDetailForm.firstName") }}</label>
              <input type="text" readonly :value="customerData.firstName" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.lastName") }}</label>
              <input type="text" readonly :value="customerData.lastName" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.customerID") }}</label>
              <input type="number" readonly :value="customerData.customerId" />
            </div>
            <div class="two wide field">
              <label>{{ t("sales.saleDetailForm.store") }}</label>
              <input type="number" readonly :value="customerData.storeId" />
            </div>
          </div>
          <div class="fields">
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.birthDate") }}</label>
              <input type="text" readonly :value="customerData.birthDate" />
            </div>
            <div class="thirteen wide field">
              <label>{{ t("sales.saleDetailForm.address") }}</label>
              <input type="text" readonly :value="customerData.street" />
            </div>
          </div>
          <div class="fields">
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.city") }}</label>
              <input type="text" readonly :value="customerData.city" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.postalCode") }}</label>
              <input type="text" readonly :value="customerData.zip" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.country") }}</label>
              <input type="text" readonly :value="customerData.country" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.fiscalNumber") }}</label>
              <input type="text" readonly :value="customerData.fiscalNumber" />
            </div>
          </div>
          <div class="fields">
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.job") }}</label>
              <input type="text" readonly :value="customerData.profession" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.healthCareSystem") }}</label>
              <input
                type="text"
                readonly
                :value="customerData.healthcareSystem"
              />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.telephone") }}</label>
              <input type="text" readonly :value="customerData.phoneNumber1" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.cellphone") }}</label>
              <input type="text" readonly :value="customerData.phoneNumber2" />
            </div>
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.fax") }}</label>
              <input type="text" readonly :value="customerData.phoneNumber3" />
            </div>
          </div>
          <div class="fields">
            <div class="three wide field">
              <label>{{ t("sales.saleDetailForm.title") }}</label>
              <input type="text" readonly :value="customerData.academicTitle" />
            </div>
            <div class="six wide field">
              <label>{{ t("sales.saleDetailForm.email") }}</label>
              <input type="text" readonly :value="customerData.email" />
            </div>
          </div>
        </form>
        <sales-table
          :customerId="customerData.customerId"
          :storeId="customerData.storeId"
        ></sales-table>
      </div>
      <div class="actions">
        <div class="ui cancel button" @click="tryClose" @keydown.esc="tryClose">
          {{ t("sales.saleDetailForm.close") }}
        </div>
      </div>
    </div>
  </the-modal>
</template>

<script lang="ts" setup>
import TheModal from "@/components/TheModal.vue";
import SalesTable from "@/components/sales/SalesDetailTable.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps({
  show: { type: Boolean, required: true },
  customerData: { type: Object, required: true },
});
const emit = defineEmits(["close"]);

function tryClose() {
  emit("close");
}
</script>

<style scoped>
.ui.cancel.button {
  margin-top: 12px;
}
</style>
