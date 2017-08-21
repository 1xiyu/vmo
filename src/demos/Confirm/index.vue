<template>
  <div>
    <mo-button
      :text = " 'test confirm' " 
      @click.native = "test"
      fix-direction="bottom"
    ></mo-button>
  </div>
</template>
<script>
  import Button from '@/components/Button'
  import Confirm from '@/components/Confirm'
  export default {
    name: 'confirm',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'mo-confirm': Confirm,
      'mo-button': Button
    },
    methods: {
      test () {
        this.$confirm({
          title: '111111',
          cancelText: 'cancel',
          confirmText: 'ok',
          isWrapTap: true,
          confirmCallBack () {
            console.log('ok')
          },
          cancelCallBack () {
            console.log('cancel')
          } 
        })
      }
    }
  }
</script>

