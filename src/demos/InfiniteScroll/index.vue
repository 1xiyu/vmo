<template>
    <div class="infinite-scroll">
      <div class="scroll-desc">无限加载</div>
      <div class="scroll-container1">
        <infinite-scroll :on-infinite='loadMore' ref='infinite1'>
            <div slot='list'>
                <h1 v-for='item in list1'>{{item}}</h1>
            </div>
        </infinite-scroll>
      </div>
      <div class="scroll-desc">有限加载</div>
      <div class="scroll-container2">
        <infinite-scroll :on-infinite='loadDone' ref='infinite2'>
            <div slot='list'>
                <h1 v-for='item in list2'>{{item}}</h1>
            </div>
        </infinite-scroll>
      </div>
    </div>
</template>
<script>
import InfiniteScroll from '@/components/InfiniteScroll'
var list = [
    'i am a test list',
    'i am a test list',
    'i am a test list',
    'i am a test list',
    'i am a test list',
    'i am a test list',
    'i am a test list',
    'i am a test list'
]
export default {
    created() {
        this.list1 = list;
        this.list2 = list;
    },
    data() {
        return {
            list1: [],
            list2: []
        }
    },
    components: {
        InfiniteScroll
    },
    methods: {
        loadMore() {
           console.log(1)
            setTimeout(() => {
              this.list1 = [...this.list1, ...list]
              this.$refs.infinite1.$emit('load')
            }, 2000)
        },
        loadDone () {
         // console.log(this.$refs)
          setTimeout(() => {
            this.list2 = [...this.list2, ...list]
            this.$refs.infinite2.$emit('loadDone')
          }, 2000)
        }
    }
}
</script>
<style scoped>
  .infinite-scroll {
    width: 100%;
    height:100%;
  }
  .scroll-container1, .scroll-container2 {
    width: 100%;
    height: 45%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .scroll-desc {
    height: 5%;
    line-height: 2;
    text-align: center;
  }
  h1 {
    padding: 80px;
    background-color: #ffffff;
  }
</style>