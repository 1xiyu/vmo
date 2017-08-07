
<template>
    <a :class="btnClassObj" :href="href" :style="styleObj">
        <img v-if="url" class="btn-img" :src="url" alt="seo">
        {{text}}
    </a>
</template>

<script>

    export default {
        props: {
            url: {
                type: String
            },
            text: {
                type: String,
                required: true,
            },
            width: {
                type: Number
            },
            show: {
                default: true
            },
            href: {
                default: 'javascript:'
            },
            block: {
                default: false
            },
            stress: {
                default: 'primary'
            },
            fixDirection: {
                default: false
            }
        },
        computed: {
            btnClassObj() {
                return {
                    'button': true,
                    'button-block': this.block,
                    'button-primary': this.stress === 'primary',
                    'button-black': this.stress === 'black',
                    'fix-bottom': this.fixDirection === 'bottom',
                    'fix-top': this.fixDirection === 'top',
                    'btn-img': this.url,
                }
            },
            styleObj() {
                if (!this.width)  return;
                return {
                    width: this.width + 'px'
                }
            }
        },
        methods: {
            click: function () {
                this.$emit('click');
            }
        }
    }
</script>
<style scoped lang="scss">  
    $primary-bgc:#3462ff;
    $primary-color:#fff;
    $gray-bgc:#f0f0f0;
    $gray-color:#5a5a5a;
    
    .button {
        display: inline-block;
        height: 88px;
        line-height: 88px;
        font-size: 28px;
        text-align: center;
        box-sizing: border-box;
        appearance: none;
        width: 100%;
    }
    
    .button-block {
        display: block;
    }
    
    .button-primary {
        background-color: $primary-bgc;
        color: $primary-color;
    }
    
    .button-black {
        background-color: rgba(0, 0, 0, 0.85);
        color: $primary-color;
        border: 2px solid #979797;
    }
    

    .fix-bottom {
        position: fixed;
        bottom: 0;
    }
    .fix-top {
        position: fixed;
        top: 0;
    }
    .btn-img {
        margin-right: 13px;
        vertical-align: text-top;

    }
</style>
