<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <component
        :is="settings.name"
        :property="settings"
        @addNewPayment="eventEmmit"
      />
    </div>
    <div class="footer">
      <button @click="$modal.hide()">Close</button>
    </div>
  </div>
</template>

<script>
import AddPayment from "./AddPayment.vue";
import Calc from "./Calc.vue";
export default {
  components: { AddPayment, Calc },
  props: {
    settings: Object
  },
  methods: {
    eventEmmit(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px;
  position: absolute;
  top: 0px;
  background: #adadad;
}
</style>
