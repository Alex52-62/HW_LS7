<template>
  <button class="btn">Hover</button>
</template>

<script>
export default {
  name: "ButtonHover",
  methods: {
    onMouseOver() {
      console.log("Hovered on Button");
    }
  },
  // Данные компонента
  beforeCreate() {
    console.log("beforeCreate");
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
    if (this.$el) {
      this.$el.addEventListener("mouseover", this.onMouseOver);
    }
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },

  //Разрушение компонента
  beforeDestroy() {
      this.$el.removeEventListener('mouseover', this.onMouseOver)
  },
  destroyed() {
      
  }
};
</script>

<style></style>
