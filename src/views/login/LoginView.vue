<template>
  <div class="ui container">
    <div class="ui one column stackable center aligned page grid">
      <div class="ui raised segment">
        <form class="ui form">
          <div class="field">
            <div class="ui card">
              <div class="image">
                <img src="../../assets/images/logoGV.png" />
              </div>
              <div class="content">
                <a class="ui header center">Intranet</a>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div class="field" id="pwdfield">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button class="ui button" type="button" @click="login">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
function login() {
  authStore.makeLogin();
  router.push({ path: "/" });
}
</script>

<style scoped>
section {
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-form {
  width: 450px;
  text-align: center;
}
</style>
