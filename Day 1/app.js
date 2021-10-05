const app = Vue.createApp({
  data() {
    return {
      currentTodoItem: "",
      list: [
        "Vue is really easy to learn.",
        "Or I am genius",
        "Hello watchers.",
      ],
    };
  },
  methods: {
    addItem() {
      this.list.push(this.currentTodoItem + " ");
      this.currentTodoItem = "";
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
  },
});

app.mount("#container");
