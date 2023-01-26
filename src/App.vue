<template>
  <div id="app">
    <candleBar1/>
  </div>
</template>

<script>
import candleBar1 from './components/candleBar1.vue'

export default {
  name: 'App',
  components: {
    candleBar1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
