<template>
    <div class="page-slider" ref="page">
        <slot></slot>
    </div>
</template>

<script>
    import Hammer from 'hammerjs';
    export default {
        props: {
            show: {
                default: true
            },
            'swipe-left': Function,
            'swipe-right': Function,
            'scroll': Function,
        },
        mounted() {
            this.init();
        },
        computed: {
        },
        methods: {
            init() {
                const self = this;
                const page = this.$refs.page;
                const mc = new Hammer.Manager(page);
                const Swiper = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL });
                mc.add(Swiper);
                mc.on('swipeleft', (e) => {
                    e.srcEvent.stopImmediatePropagation();
                    self.swipeLeft && self.swipeLeft();
                });
                mc.on('swiperight', (e) => {
                    e.srcEvent.stopImmediatePropagation();
                    self.swipeRight && self.swipeRight();
                });
                mc.on('swipeup', (e) => {
                    e.srcEvent.stopImmediatePropagation();
                    console.log('swipeup');
                });
                page.addEventListener('scroll', e => {
                    self.scroll && self.scroll();
                })
            }
        },
        ready() {

        },
        watch: {
        }
    }
</script>
<style scoped>
    .page-slider {
        position: relative;
        width: 100%;
        flex: 1 1 auto;
        z-index: 1;
        background: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>