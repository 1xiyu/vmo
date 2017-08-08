<template>
  <div>
    <tab class="tab-container" :adsorb="false" ref="tab-container">
      <tab-item  v-for="(item,index) in tabs" :key="item.id" @click.native="switchTab(index+1)" :active="index+1==activeTab">
          {{ item.text }}
      </tab-item>
    </tab>
  </div>
</template>
<script>
  import Tab from '@/components/Tab';
  import TabItem from '@/components/TabItem';
  export default {
    name: 'showtip',
    data() {
        return {
          activeTab: 1,
          tabs: [
            {
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
                ],
            }
          ]
        }
    },
    components: {
      'tab': Tab,
      'tab-item': TabItem
    },
    methods: {
      test () {
        this.showTip('This is a test')
      }
    }
  }
</script>

