<template>
	<div>
	    <mo-button
	      :text = " 'test alert' " 
	      @click.native = "test"
	      fix-direction="bottom"
	    ></mo-button>
	</div>
</template>

<script>
  import Alert from '@/components/Alert/index'
  import Button from '@/components/Button/index'
  export default {
    name: 'alert',
    data() {
        return {
          showFlag: false
        }
    },
    components: {
      'mo-alert': Alert,
      'mo-button': Button
    },
    methods: {
      test () {
      	console.log(this )
      	this.$alert({
            title: '111',
            content: '22444',
            theme: '',
            button: 'ok',
            confirmCallBack: function(){
            	console.log(1)
            },
      	})
      },
    }
  }
</script>

