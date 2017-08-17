<template>
    <div class="list-container">
        <slot name='list'></slot>
        <div class="list-donetip" v-show='!isLoading&& isDone'>
            <slot name='doneTip'>已加载全部</slot>
        </div>
        <div class="list-loading" v-show='isLoading'>
            <slot name='loadingTip'>
                <div class="page-loading">
                    <img class="page-loading-icon" src="https://s.momocdn.com/w/u/img/03/10/1457603892170-ic_loading.png?_bid=1090" alt="">
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
    const getScrollview = function (el) {
        let currentNode = el;
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
            let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
            if (overflowY === 'scroll' || overflowY === 'auto') {
                return currentNode;
            }
            currentNode = currentNode.parentNode;
        }
        return window;
    };

    export default {
        mounted() {
            console.log(this.$el)
            this.$nextTick(() => {
                this.init()
            })
        },
        data() {
            return {
                isLoading: false, //是否正在加载
                isDone: false,  //是否加载完毕
            }
        },
        props: {
            //一旦触发到底部执行的事件函数
            onInfinite: {
                type: Function,
                require: true
            },
            //滚动到底部的距离
            distance: {
                default: 100,
                validator(val) {
                    return /^\d*$/.test(val);
                }
            }
        },
        methods: {
            debounce  (func, wait) {
                var timeout;
                return function () {
                    var context = this;
                    var args = arguments;

                    clearTimeout(timeout)
                    timeout = setTimeout(function () {
                        func.apply(context, args)
                    }, wait);
                }
            },
            scrollHandler() {
                console.log(22)

                if (this.isLoading || this.isDone) return;
                let baseHeight = this.scrollview == window ? document.body.offsetHeight : this.scrollview.offsetHeight
                let moreHeight = this.scrollview == window ? document.body.scrollHeight : this.scrollview.scrollHeight;
                let scrollTop = this.scrollview == window ? document.body.scrollTop : this.scrollview.scrollTop

                if (baseHeight + scrollTop + this.distance > moreHeight) {
                    this.isLoading = true;
                    this.onInfinite()
                }
                if (!this.scrollview) {
                    console.warn('Can\'t find the scrollview!');
                    return;
                }
            },
            init() {
                this.scrollview = getScrollview(this.$el);
                this.scrollview.addEventListener('scroll', this.debounce(this.scrollHandler,100), false);
                this.$on('load', () => {
                    this.isLoading = false;
                });
                this.$on('loadDone', () => {
                    this.isLoading = false;
                    this.isDone = true;
                });
            }
        },
        destroyed() {
            this.scrollview.removeEventListener('scroll', this.debounce(this.scrollHandler,100));
        }

    }
</script>
<style> 
    .page-loading {
        text-align: center;
    }
    .page-loading-icon{
            vertical-align: middle;
            width: 32px;
            height: 32px;
            animation: rotate 1s ease-in-out infinite;
            border-radius: 0.0625rem;
            font-weight: 700;
            margin: 15px 0;
    } 
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }  
    .list-donetip {
        text-align: center;
        height: 90px;
        line-height: 90px;
        font-size: 28px;
    }
    .list-container {
        height: 100%;
        overflow: auto;
    }
</style>
