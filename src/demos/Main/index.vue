<template>
  <div class="router-link">
    <router-link 
      class="router-item" 
      v-for="(item, index) in list" 
      :key="index"
      :to="{path:'/'+ item.path}"> 
      {{item.text}}
    </router-link>
  </div>
</template>

<script>
  import Loading from '@/components/Loading'
  export default {
    name: 'app',
    data() {
        return {
            list: [
              {
                text: 'Loading',
                path: 'loading',
              },{
                text: 'Alert',
                path: 'alert'
              },{
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
                text: 'Button',
                path: 'button'
              },{
                text: 'InfiniteScroll',
                path: 'infinitescroll'
              },{
                text: 'Tab',
                path: 'tab'
              },{
                text: 'ListItem',
                path: 'listitem'
              },{
                text: 'PageContainer',
                path: 'pagecontainer'
              },{
                text: 'Badge',
                path: 'badge'
              },{
                text: 'Cell',
                path: 'cell'
              },{
                text: 'ActionSheet',
                path: 'actionsheet'
              }
            ],
        }
    },
    components: {
      'loading': Loading
    }
  }
</script>
<style>
    .router-link {
      background: #ffffff;
        display: flex;
        flex-direction: column;
        padding-left: 40px;
    }
   .router-item {
      display: block;
      line-height: 90px;
      height: 90px;
      flex: 1;
      text-decoration: none;
      color: #000000;
      font-size: 32px;
      border-bottom: solid 1px #eee;
      cursor: pointer;
    }
</style>
