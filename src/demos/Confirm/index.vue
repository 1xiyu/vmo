<template>
  <div>
    
    <button style="font-size: 50px; background:#ff0000" @click="test">
       show or hidden
    </button>
  </div>
</template>

<script>
  import Confirm from '@/components/Confirm'
  export default {
    name: 'app',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'mo-confirm': Confirm
    },
    methods: {
      test () {
        Confirm.open({
           title: '111111',
          cancelText: 'cancel',
          confirmText: 'ok',
          confirmCallBack () {
            console.log('ok')
          },
          cancelCallBack () {
            console.log('cancel')
          } 
        }
         
        )
      }
    }
  }
</script>

