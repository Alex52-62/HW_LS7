<template>
  <div id="app" :class="[$style.wrapper]">
    <header>
      <h1>My personal cost</h1>
    </header>
    <div class="menu">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">Not found</router-link> /
      <router-link to="/calc">Calc</router-link>
    </div>

    <test-vuex-component />
    <main>
      <div class="content-page">
        <router-view />
      </div>
    
    </main>
    <transition name="fade">
      <modal-window v-if="modalSettings.name" :settings="modalSettings"/>
    </transition>
  </div>
</template>

<script>
import TestVuexComponent from './components/TestVuexComponent.vue';
export default {
  components: { 
    TestVuexComponent
  },
  name: "App",
  data(){
    return {
      modalShown: false,
      modalSettings: {}
    }
  },
  methods:{
    onShown(settings) {
      this.modalSettings = settings
    },
    onHide(){
      this.modalSettings = {}
    }
  },
  mounted(){
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy(){
    this.$modal.EventBus.$off('shown', this.onShown)
    this.$modal.EventBus.$off('shown', this.onShown)
  }
};
</script>

<style lang="scss" module>
html, body, .app {
  width: 100%;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
