<template>
  <div>
     <el-switch 
      :value="checked" 
      :sync="true" 
      @change="switchOpen">
    </el-switch>
  </div>
</template>

<script>
  import Switch from '@/components/Switch/index'
  export default {
    name: 'switch',
    data() {
        return {
          checked: true,
          showLoading: true
        }
    },
    components: {
      'el-switch': Switch
    },
    methods: {
      test () {
        this.showTip('124')
      },
      switchOpen () {
        console.log('This is a test')
      }
    }
  }
</script>

