<template >
    <transition name="el-tip-fade">
        <div class="common-tip" v-show="visible">
            {{ message }}
        </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                visible: true,
                message: '',
                duration: 2000,
                type: 'info',
                iconClass: '',
                customClass: '',
                showClose: false,
                closed: false,
                timer: null
            };
        },
        watch: {
            closed(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },

        methods: {
            destroyElement() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },

            close() {
                this.closed = true;
            },

            clearTimer() {
                clearTimeout(this.timer);
            },

            startTimer() {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close();
                        }
                    }, this.duration);
                }
            }
        },

        mounted() {
            this.startTimer();
        }
    };
</script>
<style scoped>
    .common-tip {
        height: 30px;
        position: fixed;
        font-size: 28px;
        left: 50%;
        right: 0;
        top: 50%;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        border-radius: 12px;
        padding: 50px 20px;
        line-height: 30px;
        background: rgba(0, 0, 0, .7);
        transform: translate(-50%, -50%);
        z-index: 100;
    }
    
    .el-tip-fade-enter,
    .el-tip-fade-leave-active {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
</style>
