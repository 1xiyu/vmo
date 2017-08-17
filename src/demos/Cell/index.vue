<template>
	<div>
        <el-cell
        :avator="link"
        main="this is main"
        sup="this is sup"
        num="10:20"
        level="40"
        sex="m"
        ></el-cell>
        <el-cell
        type="1"
        :avator="link"
        main="this is main"
        sup="this is sup"
        num="10:20"
        level="40"
        sex="m"
        ></el-cell>
	</div>
</template>

<script>
  import Cell from '@/components/Cell'
  export default {
    name: 'cell',
    data() {
        return {
          link: 'http://image.bttt.la/litpic/2014/15Aug2017222936.jpg'
        }
    },
    components: {
    	'el-cell': Cell
    },
    methods: {
      test () {
        console.log('This is a test')
      }
    }
  }
</script>
<style scoped>
    .demo-badge{
        width: 42px;
        line-height: 42px;
        height: 42px;
        border-radius: 6px;
        display: inline-block;
        color: #fff;
    }
    .dot-sty {
    	height: 20px;
    	margin-left: 10px;
    }
 </style>

