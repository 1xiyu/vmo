<template>
  <div>
    <button style="font-size: 50px; background:#ff0000" @click="test">
       show or hidden
    </button>
  </div>
</template>

<script>
  import Message from '@/components/ShowTip'
  export default {
    name: 'app',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'show-tip': Message
    },
    methods: {
      test () {
        this.showTip('This is a test')
      }
    }
  }
</script>

