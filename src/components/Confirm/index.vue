<template>
    <transition name="msgbox-fade">
        <el-mask @click="clickWrap">
            <div class="mm-confirm-wrapper">
                <div class="mm-confirm-box">
                    <h3 class="mm-confirm-title">
                        {{title}}
                    </h3>
                    <div class="mm-confirm-content" v-if="!!message">
                        {{message}}
                    </div>
                    <div class="mm-confirm-foot">
                        <span class="confirm-foot-item" @click="cancel">{{cancelText}}</span>
                        <span class="confirm-foot-item confirm" @click="confirm">{{confirmText}}</span>
                    </div>
                </div>
            </div>
        </el-mask>
    </transition>
</template>
<script>
    import Mask from '../Mask/index';
    export default {
        name: 'confirm',
        data() {
            return {
                closed: false,
                title: '',
                message: '',
                confirmText: '',
                cancelText: '',
                confirmCallBack: null,
                cancelCallBack: null,
                isWrapTap: false
            }
        },
        components: {
            'el-mask': Mask,
        },
        watch: {
            closed(newVal) {
                if (newVal) {
                    this.destroyElement();
                }
            }
        },
        methods: {
            close() {
                this.closed = true;
            },
            destroyElement() {
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
            },
            cancel(prop) {
                this.close();
                return this.cancelCallBack();
            },
            confirm() {
                this.close();
                return this.confirmCallBack();
            },
            clickWrap() {
                if (this.isWrapTap) {
                    this.close();
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .mm-confirm-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        .mm-confirm-box {
            display: block;
            width: 610px;
            border-radius: 16px;
            -webkit-backdrop-filter: blur(19.6px);
            background-color: rgba(255, 255, 255, 0.94);
            .mm-confirm-title {
                height: 38px;
                width: 100%;
                padding: 50px 0;
                font-size: 32px;
                font-weight: 500;
                line-height: 1.19;
                text-align: center;
                color: #1e1e1e;
            }
            .mm-confirm-content {
                padding: 0 80px 50px 80px;
                font-size: 30px;
                text-align: center;
                color: #646464;
            }
            .mm-confirm-foot {
                height: 100px;
                border-top: 1px solid #f0f0f0;
                &:before {
                    clear: both;
                    display: block;
                    content: '';
                    height: 0;
                }
                .confirm-foot-item {
                    float: left;
                    height: 100%;
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 32px;
                    color: #5a5a5a;
                    &.confirm {
                        color: #3462ff;
                        box-sizing: border-box;
                       border-left: 1px solid #f0f0f0;
                    }
                }
            }
        }
    } 
    .msgbox-fade-leave-active {
        animation: msgbox-fade-out .3s
    }
    
    @keyframes msgbox-fade-in {
        0% {
            transform: translate3d(0, -20px, 0);
            opacity: 0
        }
        100% {
            transform: translate3d(0, 0, 0);
            opacity: 1
        }
    }
    
    @keyframes msgbox-fade-out {
        0% {
            transform: translate3d(0, 0, 0);
            opacity: 1
        }
        100% {
            transform: translate3d(0, -20px, 0);
            opacity: 0
        }
    }
</style>
