<template>
  <div></div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
userStore.updateName("李四");
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
