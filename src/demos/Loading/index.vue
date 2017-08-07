<template>
  <div>
    <loading 
      :show="showLoading"
      :isFixed="true">
    </loading>
    <button style="font-size: 50px; background:#ff0000" @click="test">
       show or hidden
    </button>
  </div>
</template>

<script>
  import Loading from '@/components/Loading'
  export default {
    name: 'app',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'loading': Loading
    },
    methods: {
      test () {
        this.showLoading = !this.showLoading;
      }
    }
  }
</script>

