<template>
  <div>
      <input v-model="propComp" />
      <button @click="onSave">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "TestVuexComponent",
    data(){
      return {
        propComp: ''
      }
    },
    methods: {
      ...mapActions([
        'addData'
      ]),
      onSave(){
        const {propComp} = this
        this.addData(propComp)
      }
    }
}
</script>

<style>

</style>