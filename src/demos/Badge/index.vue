<template>
	<div>
	    <el-badge>
	       1
    	</el-badge>
	    <el-badge>
	       123
    	</el-badge>
    	<el-badge class="dot-sty">
    	</el-badge>
	</div>
</template>

<script>
  import Badge from '@/components/Badge'
  export default {
    name: 'badge',
    data() {
        return {
          link: 'https://s.momocdn.com/w/u/img/2016/11/01/1477997325088-share.png?_bid=1090'
        }
    },
    components: {
    	'el-badge': Badge	
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

