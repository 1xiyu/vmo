<template>
    <div v-bind:class="classObject">
        <a href="javascript:" class="text">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                active: false
            }
        },
        computed: {
            classObject () {
                return {
                    'tab-item': true,
                    'active-item': this.active
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .tab-item {
        display: flex;
        width: 250px;
        align-self: stretch;
        justify-content: center;
        .text {
            display: block;
            box-sizing: border-box;
            margin: auto 0;
            text-align: center;
            font-size: 28px;
            color: #828282;
            
        }
        &.active-item {
            .text {
                font-weight: bold;
                color: #323333;
            }
        }
    }
</style>
