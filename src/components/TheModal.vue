<template>
  <teleport to="body">
    <div v-if="show" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <section>
          <slot></slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
defineProps({
  show: { type: Boolean, required: true },
});
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
  position: fixed;
  top: 10vh;
  left: 10%;
  z-index: 100;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  overflow-y: auto;
  background-color: white;
}
section {
  padding: 1rem;
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
@media (max-width: 1024px) {
  dialog {
    left: calc(50% - 40rem);
    width: 80rem;
    height: 37rem;
    overflow-y: scroll;
  }
}
@media (min-width: 1025px) {
  dialog {
    left: calc(50% - 40rem);
    width: 80rem;
  }
}
</style>
