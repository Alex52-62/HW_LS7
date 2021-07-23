<template>
  <button @click="onClick">Clicked {{ counter }}</button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    onClick() {
      this.counter++;
    }
  },
  // Данные компонента
  beforeCreate() {
    console.log("beforeCreate");
    this.counter = 1;
  },
  created() {
    console.log("created");
  },
  //

  //Визуальная часть
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },

  //Разрушение компонента
  beforeDestroy(){},
  destroyed(){}
};
</script>

<style></style>
