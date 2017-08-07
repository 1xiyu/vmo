<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
          list: [{
              text: 'Loading',
              path: 'loading',
          }, {
              text: 'Confirm',
              path: 'confirm'
          }, {
              text: 'ShowTip',
              path: 'showtip'
          }, {
              text: 'Mask',
              path: 'mask',
          }, {
              text: 'Switch',
              path: 'switch',
          }, {
              text: 'Hello',
              path: 'hello'
          }],
      }
  },
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
