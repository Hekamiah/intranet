<template>
  <button class="ui labeled icon basic button">
    <i class="icon" v-bind:class="{ search: icon === 'search' }"></i>
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: { type: String, required: true },
  haveIcon: { type: Boolean, required: false, default: false },
  icon: { type: String, required: false },
});
</script>
