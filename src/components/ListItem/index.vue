<template>
    <div class="list-item">
        <div class="list-item-wrapper border-bottom">
            <slot class="item-left" name="item-left"></slot>
            <slot class="item-middle" name="item-middle"></slot>
            <slot class="item-right" name="item-right"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'list-item',
        props: {
           left: '',
           middle: '',
           right: ''
        },
        methods: {
            
        },
        computed: {
            
        }
    }
</script>
<style lang="scss" scoped>
    .list-item-wrapper {
        display: flex;
        .item-left, .item-middle, .item-right{
            flex: 1;
        }
    }
    .border-bottom {
         border-bottom: 1px solid #f0f0f0;
    }
</style>

