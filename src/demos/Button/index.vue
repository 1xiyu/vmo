<template>
	<div>
		<el-button 
			stress="primary" 
			text="固定在上按钮" 
			:height="60" 
			@click.native="test"
			fix-direction="top"
			:url="link"> 
		</el-button>
		<el-button 
			stress="primary" 
			text="下一步" 
			:height="60" 
			@click.native="test"
			fix-direction="bottom"
			:url="link"> 
		</el-button>
	</div>
</template>

<script>
  import Button from '@/components/Button'
  export default {
    name: 'button',
    data() {
        return {
          link: 'https://s.momocdn.com/w/u/img/2016/11/01/1477997325088-share.png?_bid=1090'
        }
    },
    components: {
      'el-button': Button
    },
    methods: {
      test () {
        console.log('This is a test')
      }
    }
  }
</script>

