<template>
    <div v-bind:class="classObject">
        <a href="javascript:" class="text">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                default: false
            },
            border: {
                default: true,
            }
        },
        computed: {
            classObject: function () {
                return {
                    'tab-item': true,
                    active: this.active,
                    border: this.border
                }
            },
        }
    }
</script>
<style>
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
            line-height: 28px;
            font-size: 28px;
            color: #828282;
        }
        &.active {
            &.border {
                border-bottom: 4px solid #323333;
            }
            .text {
                font-weight: bold;
                color: #323333;
            }
        }
    }
</style>
