<template>
  <div>
    <loading 
      :show="showLoading"
      :isFixed="true">
    </loading>
    <el-button
      :text = " 'show or hidden' " 
      @click.native = "test"
      fix-direction="bottom"
    >
    </el-button>
  </div>
</template>

<script>
  import Button from '@/components/Button'
  import Loading from '@/components/Loading'
  export default {
    name: 'app',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      'loading': Loading,
      'el-button': Button
    },
    methods: {
      test () {
        this.showLoading = !this.showLoading;
      }
    }
  }
</script>

