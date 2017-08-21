 <template>
    <div class="vercode-container">
        <div class="input-container">
            <input class="content-vercode" 
              :placeholder="holderText" 
              v-model="newCode">  
            <a class="get-vercode" 
              :style="stylesObj" 
              @click="countDown"> 
            {{content}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            holderText: {
                type: String,
                default: '请输入手机验证码'
            },
            initText: {
                type: String,
                default: '获取验证码'
            },
            clickText: {
                type: String,
                default: '重新获取'
            },
            countTime: {
                type: Number,
                defalut: 120 
            },
            vericode: {
                type: [Number,String]
            }
        },
        data () {
            return {
                lastTime : null,
                stylesObj: {
                    backgroundColor: '#3462ff'
                },
                newCode: this.vericode
            }
        },
        computed : {
            content () {
                if (typeof(this.lastTime) === "number") {
                    return `${this.lastTime}s后${this.clickText}`
                } else { 
                    return this.initText
                }
            },
        },
        methods : {
            countDown () {
                this.$emit('update');
                this.lastTime = this.countTime;
                this.stylesObj.backgroundColor = '#dedcda';
                let time = setInterval( () => {
                    this.lastTime --;
                    if (this.lastTime === 0) {
                        this.stylesObj.backgroundColor = '#3462ff';
                        this.lastTime = this.initText;
                        clearInterval(time)
                    }
                },1000)
            }
        },
        watch : {
            newCode (val) {
                this.$emit('update:vericode', val)
            }
        }
    }
</script>
<style scoped lang="scss">
    .input-container {
        position: relative;
        background: #ffffff;
        padding-left: 30px;
        .content-vercode {
            height: 32px;
            padding: 28px 0;
            font-size: 32px;
            color: #1e1e1e;
        }
        .get-vercode {
            position: absolute;
            right: 30px;
            top: 11px;
            height: 66px;
            line-height: 66px;
            padding: 0 30px;
            background-color: #3462ff;
            font-size: 24px;
            color: #ffffff;
            border-radius: 2px;
            text-align: center;
        }
    }
</style>
