<template>
  <page-container 
    class="page-sty"
    ref="page-container" 
    :swipe-left="swipeLeft" 
    :swipe-right="swipeRight" 
    :scroll="scroll">
    <div style="height: 120%;">
      <p>请移动鼠标向左滑动 </p>
      <p>请移动鼠标向右滑动 </p>
      <p>请移动鼠标滚轮滑动 </p>
    </div>
  </page-container>
</template>
<script>
  import PageContainer from '@/components/PageContainer'
  export default {
    name: 'pagecontainer',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      PageContainer
    },
    methods: {
      scroll () {
        console.log('scroll');
      },
      swipeLeft () {
        console.log('swipe left');
      },
      swipeRight () {
        console.log('swipe right');
      }
    }
  }
</script>
<style scoped>
  .page-sty {
    width: 100%;
    height: 100%;
  }
  p {
    text-align: center;
    margin:150px 0;
  }
</style>

