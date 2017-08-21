<template>
    <transition name="fade">
        <div v-bind:class="classObject" v-show="show">
            <mo-mask :show="show"></mo-mask>
            <div class="alert-dialog">
                <img :src="occupied" class="alert-occupied" v-if="occupied">
                <h4 class="alert-title" v-html="title"></h4>
                <p class="alert-content" v-if="content">
                    {{content}}
                </p>
                <div class="alert-content" v-else>
                    <slot></slot>
                </div>
                <div class="alert-btn-wrapper">
                    <button class="alert-btn" v-on:click.prevent="clickRightBtn">{{button}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import Mask from '../Mask/index';
export default {
    components:{
        'mo-mask': Mask
    },
    data () {
        return {
            destroy: false,
            show: true,
            title: '提示',
            content: '',
            theme: '',
            button: '',
            confirmCallBack: null,
            platform: null,
            occupied: ''
        }
    },
    watch:{
        destroy: function(val) {
            if (val) {
                this.destroyElement();
            }
        },
        show: function (val) {
            this.show = val;
            if(!this.isPushState && this.show == true){
                this.isPushState = true;
                this.historyLength = history.length
                try {
                    history.pushState('alert-show', null , null);
                } catch (error) {

                }
            }
            if(this.isPushState && this.show == false){
                if(history.state == 'alert-show'){
                    this.isPushState = false;
                    history.back();
                }
            }
            window.addEventListener('popstate', this.pushStateHandler)
        }
    },
    computed:{
        device:function (){
            if(this.platform){
                return this.platform;
            }else{
                return navigator.userAgent.match('Android') ? 'android':'ios'
            }
        },
        classObject:function (){
            var o = {
                'alert':true,
                'alert-ios':this.device == 'ios',
                'alert-android':this.device == 'android'
            };

            if(this.theme){
                var theme = `alert-theme-${this.theme}`;
                o[theme] = true;
            }
            return o
        },
    },
    methods:{
        pushStateHandler : function (){
            if(this.isPushState){
                this.$emit('update:show', false)
                this.isPushState = false;
                this.$emit('cancel');
                window.removeEventListener('popstate', this.pushStateHandler);
            }
        },
        clickRightBtn:function (){
            this.destroy = true;
            return this.confirmCallBack();
        },
        destroyElement() {
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);
        },
    }
}
</script>
<style scoped lang="scss">
    .alert {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 6;
        .alert-btn {
            appearance: none;
            border: none;
            background-color: transparent;
            font-size: 32px;
            color: #3c6df7;
        }
        .alert-dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            right: 0;
            z-index: 100;
            transform: translate(-50%, -50%);
            background-color: rgba(255,255,255,0.94);
            overflow: hidden;
        }
        .alert-title {
            font-weight: normal;
        }
        .alert-content {
            padding: 30px 55px;
            font-size: 26px;
            line-height: 36px;
            color: #969696;
        }
        .alert-occupied {
            display: block;
            margin: 116px auto 30px;
            max-width: 50%;
        }
        .alert-btn {
            font-size: 32px;
            transition: background-color 100ms ease-in;
            margin: 0;
            &:active,
            &:focus {
                outline: none;
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
        &.alert-android {
            .alert-dialog {
                padding: 20px;
                width: 560/750*100 + %;
            }
            .alert-title {
                padding: 30px 30px 0;
                font-size: 32px;
                line-height: 1.5;
                color: #787878;
            }
            .alert-btn-wrapper {
                text-align: right;
            }
            .alert-btn {
                padding: 20px;
            }
            .alert-btn-left {
                color: #5a5a5a;
            }
        }
        &.alert-ios {
            .alert-dialog {
                width: 610/750*100+%;
                border-radius: 14px;
                background-color: rgba(255,255,255,0.94);
                border-radius: 16px;
            }
            .alert-title {
                line-height: 1.18;
                text-align: center;
                font-size: 38px;
                margin-top: 80px;
                color: #1e1e1e;
            }
            .alert-btn-wrapper {
                border-top: solid 1px #f0f0f0;
            }
            .alert-btn {
                display: block;
                box-sizing: border-box;
                width: 100%;
                padding: 31px 20px;
            }
            .alert-btn-left {
                border-right: solid 1px #f0f0f0;
                color: #5a5a5a;
            }
            .alert-content {
                text-align: center;
                padding: 30px 45px;
                font-weight: normal;
                >h4{
                    line-height: 1.18;
                    font-size: 28px;
                    font-weight: 500;
                    margin-bottom: 10px;
                }
                >p{
                    line-height: 1.18;
                    font-size: 26px;
                    margin-bottom: 10px;
                }
            }
            .alert-occupied{
                + .alert-title{
                    margin-top: 40px;
                }
            }
            &.alert-theme-blue {
                .alert-dialog {
                    background-color: #3660f6;
                }
                .alert-btn{
                    background-color: #2e53d6;
                    color: #fff;
                }
                .alert-btn-wrapper{
                    background: none;
                    border-top: none;
                }
                .alert-title{
                    color: #fff;
                }
                .alert-content{
                    color: rgba(255,255,255,.4);
                }
            }
        }
    }
</style>
