<template>
  <div>
     <el-switch 
      :value.sync="checked" 
      :sync="true" 
      :color="'#000000'"
      @change="switchOpen">
    </el-switch>
  </div>
</template>

<script>
  import Switch from '@/components/Switch/index'
  import Message from '@/components/ShowTip'
  export default {
    name: 'switch',
    data() {
        return {
          checked: true
        }
    },
    components: {
      'el-switch': Switch,
      Message
    },
    methods: {
      switchOpen (val) {
        this.$showTip(val);
      }
    }
  }
</script>

