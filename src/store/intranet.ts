import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useConnectionStore } from "@/store/connectionApi";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export const useIntranetStore = defineStore("intranet", () => {
  const { t } = useI18n();
  const apiStore = useConnectionStore();
  const displayName = useStorage("displayName", "Tiago Santos");
  const company = ref("MO");
  const companysMap = ref({
    MO: ["5"],
    GO: ["4", "6"],
  });

  function parseDate(date) {
    return (
      date.substring(6, 8) +
      "-" +
      date.substring(4, 6) +
      "-" +
      date.substring(0, 4)
    );
  }

  async function getCustomers(
    firstName: string,
    lastName: string,
    date: string,
    fiscalNumber: number
  ) {
    const sales = await apiStore.getCustomers(
      firstName,
      lastName,
      date,
      fiscalNumber
    );
    const parsedCustomerData: any[] = [];
    for (const key in sales) {
      if (
        company.value === "MO" &&
        !companysMap.value["MO"].includes(sales[key].storeID.substring(0, 1))
      ) {
        continue;
      } else if (
        company.value === "GO" &&
        !companysMap.value["GO"].includes(sales[key].storeID.substring(0, 1))
      ) {
        continue;
      }
      const sale = {
        id: key,
        [t("sales.customerTable.fields.customerID")]: sales[key].clientID,
        [t("sales.customerTable.fields.firstName")]: sales[key].name,
        [t("sales.customerTable.fields.lastName")]: sales[key].lastName,
        [t("sales.customerTable.fields.store")]: sales[key].storeID,
        [t("sales.customerTable.fields.birthDate")]: parseDate(
          sales[key].birthDate
        ),
      };
      parsedCustomerData.push(sale);
    }
    return parsedCustomerData;
  }

  async function getCustomerDataById(customerId: string, storeId: string) {
    const customerDataResponse = await apiStore.getCustomerDataById(
      customerId,
      storeId
    );
    return {
      customerId: customerDataResponse[0].CustomerNo,
      storeId: customerDataResponse[0].StoreID,
      firstName: customerDataResponse[0].FirstName,
      lastName: customerDataResponse[0].LastName,
      birthDate: parseDate(customerDataResponse[0].BirthDate),
      street: customerDataResponse[0].Street,
      zip: customerDataResponse[0].zip,
      city: customerDataResponse[0].City,
      country: customerDataResponse[0].country,
      profession: customerDataResponse[0].Profession,
      healthcareSystem: customerDataResponse[0].HealthcareSystem,
      phoneNumber1: customerDataResponse[0].PhoneNumber1,
      phoneNumber2: customerDataResponse[0].PhoneNumber2,
      phoneNumber3: customerDataResponse[0].PhoneNumber3,
      teleFax3: customerDataResponse[0].TeleFax3,
      academicTitle: customerDataResponse[0].AcademicTitle,
      email: customerDataResponse[0].Email,
      fiscalNumber: customerDataResponse[0].NIF,
    };
  }

  async function getCustomerOrders(customerId: string, storeId: string) {
    const customerOrdersResponse = await apiStore.getCustomerOrders(
      customerId,
      storeId
    );

    const customersOrders = [] as any;

    for (const key in customerOrdersResponse) {
      const order = {
        CustomerNo: customerOrdersResponse[key].CustomerNo,
        [t("sales.salesOfcustomerTable.fields.isReadyToDeliver")]:
          customerOrdersResponse[key].DateOrderStatusReady,
        [t("sales.salesOfcustomerTable.fields.desiredDeliverDate")]:
          customerOrdersResponse[key].DateOrderStatusReadyEst,
        [t("sales.salesOfcustomerTable.fields.saleDate")]:
          customerOrdersResponse[key].EDIDate,
        [t("sales.salesOfcustomerTable.fields.saleType")]:
          customerOrdersResponse[key].FlagNearFar,
        ID: customerOrdersResponse[key].ID,
        [t("sales.salesOfcustomerTable.fields.saleNumber")]:
          customerOrdersResponse[key].OrderNo,
        [t("sales.salesOfcustomerTable.fields.deliveryStatus")]:
          customerOrdersResponse[key].OrderStatus === "AB"
            ? t("sales.salesOfcustomerTable.yes")
            : t("sales.salesOfcustomerTable.no"),
        [t("sales.salesOfcustomerTable.fields.type")]:
          customerOrdersResponse[key].OrderType,
        [t("sales.salesOfcustomerTable.fields.status")]:
          customerOrdersResponse[key].OrderStatus,
        [t("sales.salesOfcustomerTable.fields.amount")]:
          customerOrdersResponse[key].SalesPrice,
        StoreNo: customerOrdersResponse[key].StoreNo,
      };
      customersOrders.push(order);
    }
    return customersOrders;
  }

  return {
    displayName,
    company,
    getCustomers,
    getCustomerDataById,
    getCustomerOrders,
  };
});
