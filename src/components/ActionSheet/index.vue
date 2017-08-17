<template>
    <div :class="classObject">
        <el-mask :show="show" @click.native="clickMask" v-show="show" transition="fade"></el-mask>
        <div class="slide-wrapper">
        <div class="slide-up-menu" v-bind:style="styleObject" v-show="show" transition="slide-up">
            <h4 class="slide-up-header" v-html="title" v-if="title"></h4>
            <ul :class="['slide-up-list',{'slide-up-list-no': this.title}]">
                <li class="slide-up-item" v-for="item in list">
                    <a v-html="item.text" @click.stop="itemClick(item)"></a>
                </li>
            </ul>
            <div class="slide-up-tail" v-if="showTail">
                <a v-on:click.stop="tailClick" v-html="tail"></a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    import Mask from '../Mask/index';

    export default {
        components: {
            'el-mask': Mask
        },
        data () {
            return {
                list: [],
                title: '',
                tail: '取消',
                show: true,
                platform: '',
                styleObject: {
                    marginTop: 0
                },
                callback: null
            }
        },
        computed: {
            device () {
                if(this.platform){
                    return this.platform;
                }else{
                    return navigator.userAgent.match('Android') ? 'android':'ios'
                }
            },
            classObject () {
               return {
                    'ios-alert-option':this.device == 'ios',
                    'android-alert-option':this.device == 'android'
                };
            },
            showTail () {
                return this.device == 'ios' ? true : false;
            }
        },
        watch: {
            show (val) {
                if (!val) {
                    this.destroyElement();
                }
            }
        },
        methods: {
            itemClick (val) {
                this.show =false;
                return this.callback(val);
            },
            clickMask () {
                this.show = false;
            },
            tailClick () {
                this.show = false;
            },
            destroyElement() {
                this.$destroy();
                this.$el.parentNode.removeChild(this.$el);
            },
        }
    }

</script>
<style lang="scss" scoped>
    $border-color :#ececeb;
    $header-color: #969696;
    $header-height: 96px;
    $header-fz: 30px;
    $header-padding:0 30px;
    $menu-bgc:#f9f9f9;
    $item-height:110px;
    $item-fz:36px;
    $item-padding:0 30px;
    .ios-alert-option {
        .slide-wrapper {
            padding: 0 20px;
        }
        .slide-up-menu {
            position: fixed;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 0px);
            margin: 0 auto;
            z-index: 999;
            border-radius: 8px;
            background-color: transparent;
            width: 94.66666667%;
            text-align: center;
            border: none;
        }
        .slide-up-header {
            box-sizing: border-box;
            padding: $header-padding;
            font-weight: normal;
            background-color: rgba(255, 255, 255, .94);
            border-bottom: solid 1px #4d4d4d;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            height: 90px;
            line-height: 90px;
            font-size: 26px;
            color: #8f8e94;
            +.slide-up-list {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        .slide-up-item {
            height: 116px;
            box-sizing: border-box;
            height: $item-height;
            line-height: $item-height;
            padding: $item-padding;
            font-weight: normal;
            background-color: rgba(255, 255, 255, .94);
            backdrop-filter: blur(10px);
            border-bottom: solid 1px #4d4d4d;
            >a {
                font-size: 36px;
                color: #3462ff;
                display: block;
            }
            &:last-child {
                border-bottom: 0;
                border-bottom-right-radius: 20px;
                border-bottom-left-radius: 20px;
            }
            &:first-child {
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }
        }
        
        .slide-up-list {
            overflow: hidden;
            background: none;
            margin-bottom: 16px;
        }
        
        .slide-up-list-no {
            .slide-up-item {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        
        .slide-up-tail {
            margin-bottom: 18px;
            border-radius: 24px;
            background-color: #ffffff;
            height: $item-height;
            font-weight: 600;
            line-height: $item-height;
            >a {
                letter-spacing: 0.4px;
                font-size: 40px;
                display: block;
                color: #007aff;
            }
        } 
    }
    .android-alert-option {
        .slide-up-menu {
            position: fixed;
            top: 50%;
            left: 50%;
            margin: 0;
            z-index: 999;
            width: 83.33333333%;
            border: 1px solid $border-color;
            border-radius: 8px;
            background-color: $menu-bgc;
            padding-bottom: 50px;
            transform: translate(-50%, -50%)
        }
        
        .slide-up-header {
            box-sizing: border-box;
            padding: $header-padding;
            height: $header-height;
            line-height: $header-height;
            font-size: $header-fz;
            color: $header-color;
            font-weight: normal;
            border-bottom: solid 1px #f0f0f0;
        }
        
        .slide-up-list {
           border-bottom: solid 1px #f0f0f0;
        }
        
        .slide-up-item {
            box-sizing: border-box;
            height: $item-height;
            line-height: $item-height;
            padding: $item-padding;
           border-bottom: solid 1px #f0f0f0;
            >a {
                display: block;
            }
            &:last-child {
                border-bottom: none;
            }
        }
    }  
</style>