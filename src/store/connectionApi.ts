import { defineStore } from "pinia";
import { useIntranetStore } from "@/store/intranet";
import { ref } from "vue";

export const useConnectionStore = defineStore("connectionApi", () => {
  const store = useIntranetStore();
  const serverIP = ref("10.57.1.54");
  const serverPort = ref("8085");

  function getUrl() {
    return "http://" + serverIP.value + ":" + serverPort.value;
  }

  async function getCustomers(
    firstName: string,
    lastName: string,
    date: string,
    fiscalNumber: number
  ) {
    try {
      const response = await fetch(getUrl() + "/read/getcustomers", {
        method: "POST",
        body: JSON.stringify({
          customer_first_name: firstName,
          customer_last_name: lastName,
          customer_birth: date,
          fiscal_number: fiscalNumber,
          company: store.company,
        }),
      });
      return response.json();
    } catch (e) {
      // TODO
    }
  }

  async function getCustomerDataById(customerId: string, storeId: string) {
    try {
      const response = await fetch(getUrl() + "/read/getcustomerbyid", {
        method: "POST",
        body: JSON.stringify({
          customer_id: customerId,
          store_id: storeId,
        }),
      });
      return response.json();
    } catch (e) {
      // TODO
    }
  }

  async function getCustomerOrders(customerId: string, storeId: string) {
    try {
      const response = await fetch(getUrl() + "/read/getcustomerorders", {
        method: "POST",
        body: JSON.stringify({
          customer_id: customerId,
          company: store.company,
          store_id: storeId,
        }),
      });
      return response.json();
    } catch (e) {
      // TODO
    }
  }

  return { serverIP, getCustomers, getCustomerDataById, getCustomerOrders };
});
