<template>
  <footer class="footer">
    <div class="borderless inverted menu">
      <div class="ui container">
        <div class="right menu">
          <a href="#" @click="changeLanguage('pt')"><i class="pt flag"></i></a>
          <a href="#" @click="changeLanguage('en')"
            ><i class="gb uk flag"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
function changeLanguage(lang: string) {
  locale.value = lang;
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #efefefff;
}
h4 {
  color: #1e53a3ff;
}
</style>
