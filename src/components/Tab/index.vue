<template>
    <div :class="isSupportSticky ? tabClassObj : {}">
        <div class="tab-flotage" v-bind:style="tabFlotageStyleObj" v-if="isSupportSticky"></div>
        <slot v-if="isSupportSticky"></slot>
        <div v-else>
            <div v-bind:class="tabClassObj">
                <div class="tab-flotage" v-bind:style="tabFlotageStyleObj"></div>
                <slot></slot>
            </div>
            <div class="tab-placeholder" v-show="tabPlaceholderStyleObj.show" v-bind:style="tabPlaceholderStyleObj"></div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    // import FastClick from 'fastclick';
    // import '@fes/mo-static/js/sticky';
    const BASE_OFFSET = parseFloat(32) / 16;
    export default {
        props: {
            activeIndex: {
                default: 0
            },
            adsorb: {
                default: true
            }
        },
        data: function () {
            return {
                tabPlaceholderStyleObj: {
                    height: 0,
                    show: false
                },
                tabClassObj: {
                    tab: true,
                    adsorb: this.adsorb ? $.isSupportSticky() ? true : false : false,
                },
                tabFlotageStyleObj: {
                    width: 0,
                    transform: '',
                    left: 0
                },
                isSupportSticky: $.isSupportSticky() ? true : false
            }
        },
        compiled: function () {
            this.$children.forEach(function (item, index) {
                item.active = index == this.activeIndex ? true : false;
            }.bind(this));
        },
        ready: function () {
            Vue.nextTick(function () {
                var $el = $(this.$el);

                this.tabOriginalOffsetTop = $el.offset().top;
                this.tabPlaceholderStyleObj.height = $el.height() + 'px';

                this.calcFlotageWidth(this);
                this.calcFlotageLeft(this);

                if (!this.isSupportSticky) {
                    $(window).scroll(this.adsorbListener);
                }
            }.bind(this));

            FastClick.attach(this.$el);
        },
        events: {},
        watch: {
            activeIndex: function () {
                this.$children.forEach(function (item, index) {
                    item.active = index == this.activeIndex ? true : false;
                }.bind(this));

                setTimeout(function () {

                    this.calcFlotageWidth(this);
                    this.calcFlotageLeft(this);
                }.bind(this), 60);
            }
        },
        methods: {
            adsorbListener: function (e) {
                var $el = $(this.$el);
                var $tabPlaceholder = $el.find('.tab-placeholder');
                if (document.body.scrollTop < $tabPlaceholder.offset().top) {
                    this.tabPlaceholderStyleObj.show = false;
                    this.tabClassObj.adsorb = false;
                } else if ($el.offset().top <= document.body.scrollTop) {
                    this.tabPlaceholderStyleObj.show = true;
                    this.tabClassObj.adsorb = true;
                }
                this.tabPlaceholderStyleObj.height = $el.children('.tab').height() + 'px';
            },
            calcFlotageWidth: function () {
                var tabItemWidth;
                if (this.$children.length == 2) {
                    tabItemWidth = $(this.$el).parent().width() / this.$children.length - BASE_OFFSET * 50;
                } else {
                    tabItemWidth = $(this.$el).parent().width() / this.$children.length;
                }
                this.tabFlotageStyleObj.width = tabItemWidth + 'px';
            },
            calcFlotageLeft: function () {
                var tabItemWidth = $(this.$el).parent().width() / this.$children.length;
                var marginLeft = 0;


                if (this.$children.length == 2) {
                    this.tabFlotageStyleObj.transform = 'translate3d(' + (marginLeft + BASE_OFFSET * 25 + this.activeIndex * tabItemWidth) + 'px,0,0)';
                } else {
                    this.tabFlotageStyleObj.transform = 'translate3d(' + (marginLeft + this.activeIndex * tabItemWidth) + 'px,0,0)';
                }
            }
        }
    }

</script>
<style>
    /*@import "../../common/css/color";
    @import "../../common/css/layout";
    @import "../../common/css/component";*/
    
    .tab {
        display: flex;
        position: relative;
        width: 100%;
        height: 82px;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        background: #fff;
        z-index: 4;
        &.adsorb {
            position: fixed;
            position: sticky;
            top: 0;
            left: 0;
            z-index: 5;
        }
    }
    
    .tab-flotage {
        position: absolute;
        height: 4px;
        background-color: #3868fb;
        transition: transform 0.25s ease;
        bottom: 0;
    }
</style>
