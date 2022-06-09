import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: "user", // 唯一id
  state: () => {
    return {
      name: "张三",
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
