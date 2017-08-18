<template>
  <div>
    <tab :activeIndex="activeIndex">
      <tab-item  v-for="(item,index) in tabs" 
        :key="item.id"
        @click.native="switchTab(index)">
          {{ item.text }}
      </tab-item>
    </tab>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
    <p>this is a test</p>
  </div>
</template>

<script>
  import Tab from '@/components/Tab'
  import TabItem from '@/components/TabItem'
  export default {
    components: {
      'tab': Tab,
      'TabItem': TabItem,
    },
    data(){
      return {
        activeIndex: '0',
        tabs: [
          { 
              id: '1',
              text: '附近人气榜'
          },
          {
              id: '2',
              text: '周人气榜'
          },
            {
            id: '3',
            text: '上周人气榜'
          },
          {
              id: '4',
              text: '总人气榜'
          },
        ]
      }
    },
    methods: {
      switchTab (val) {
        this.activeIndex = val;
      }
    }
  }
</script>

<style scoped>
  .tab-content-container{
    width: 100%;
    height: 100%;
    margin: 0px auto;
  }
  p {
    margin: 150px 0;
  }
</style>
