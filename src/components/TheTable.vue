<template>
  <table
    class="ui selectable inverted striped table"
    :class="{ blue: store.company === 'MO', green: store.company === 'GO' }"
  >
    <thead>
      <tr>
        <th v-for="col in fields" :key="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in data"
        :key="row"
        data-toggle="modal"
        :data-target="'#' + modal"
      >
        <td v-for="item in row" :key="item">{{ item }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th :colspan="columns">
          {{ rows }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useIntranetStore } from "@/store/intranet";

const store = useIntranetStore();
const { t } = useI18n();

const props = defineProps({
  fields: { type: Array, required: true },
  data: { type: Array, required: true },
  openModalOnClick: {
    type: Boolean,
    required: false,
    default: true,
  },
  modal: {
    type: String,
    required: false,
    default: "",
  },
});
const rows = computed(() => {
  if (props.data.length > 1) {
    return props.data.length + " " + t("table.records");
  } else {
    return props.data.length + " " + t("table.record");
  }
});
const columns = computed(() => {
  return props.fields.length;
});
</script>
