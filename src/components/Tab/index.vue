<template>
    <div class="postion-fix" :class="isSupportSticky ? tabClassObj : {}">
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
    import FastClick from 'fastclick';
    // sitcky TODO
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
                    adsorb: this.adsorb ? 1==1 ? true : false : false,
                },
                tabFlotageStyleObj: {
                    width: 0,
                    transform: '',
                    left: 0
                },
                isSupportSticky: 1==1 ? true : false
            }
        },
        mounted: function () {
            Vue.nextTick(function () {
                console.log(this.$el.parentNode)
                this.tabOriginalOffsetTop = this.$el.offsetTop;
                this.tabPlaceholderStyleObj.height = this.$el.clientHeight + 'px';

                this.calcFlotageWidth(this);
                this.calcFlotageLeft(this);

                if (!this.isSupportSticky) {
                    window.addEventListener('scroll', this.adsorbListener);
                }
            }.bind(this));

            FastClick.attach(this.$el);

            this.activeState();
        },
        watch: {
            activeIndex: function () {

                this.activeState();

                setTimeout(function () {

                    this.calcFlotageWidth(this);
                    this.calcFlotageLeft(this);
                }.bind(this), 60);
            }
        },
        methods: {
            activeState () {
                this.$children.forEach(function (item, index) {
                    console.log(item)
                    item.active = index == this.activeIndex ? true : false;
                }.bind(this));
            },
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
                    tabItemWidth = this.$el.parentNode.clientWidth / this.$children.length - BASE_OFFSET * 50;
                } else {
                    tabItemWidth = this.$el.parentNode.clientWidth / this.$children.length;
                }
                this.tabFlotageStyleObj.width = tabItemWidth + 'px';
            },
            calcFlotageLeft: function () {
                var tabItemWidth = this.$el.parentNode.clientWidth / this.$children.length;
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
    .tab {
        display: flex;
        position: relative;
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -ms-sticky;
        position: sticky;
        top: 0;
        width: 100%;
        height: 82px;
        flex: 0 0 auto;
        justify-content: space-around;
        border-bottom: solid 1px #f0f0f0;
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
        background-color: #323333;
        transition: transform 0.25s ease;
        bottom: 0;
    }
</style>
