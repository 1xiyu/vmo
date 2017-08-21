<template>
	<div>
        <count-down
          holder-text="请输入短信验证码"
          :countTime="5"
          :vericode.sync="code">
        </count-down>
        <el-button 
            stress="primary" 
            text="固定在下按钮" 
            :height="60" 
            @click.native="prift"
            fix-direction="bottom"> 
        </el-button>
	</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  import Button from '@/components/Button';
  import Alert from '@/components/Alert/index'
  export default {
    data() {
        return {
          code: ''
        }
    },
    components: {
    	'count-down': CountDown,
        'el-button': Button
    },
    methods: {
      prift () {
        this.$alert({
            content: this.code ? this.code : '请输入验证码',
            button: '确认',
            confirmCallBack: function(){
                console.log(1)
            },
        })
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

