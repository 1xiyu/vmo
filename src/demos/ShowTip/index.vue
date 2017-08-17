<template>
  <div>
    <mo-button
      :text = " 'test showtip' " 
      @click.native = "test"
      fix-direction="bottom"
    ></mo-button>
  </div>
</template>
<script>
  import Button from '@/components/Button'
  import Message from '@/components/ShowTip'
  export default {
    name: 'showtip',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'show-tip': Message,
      'mo-button': Button
    },
    methods: {
      test () {
        this.$showTip('This is a test')
      }
    }
  }
</script>

