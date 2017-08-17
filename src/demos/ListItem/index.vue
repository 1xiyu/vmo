<template>
  <div>
    <list-item class="list-wrapper">
      <div class="item-left" slot="item-left">left</div>
      <div calss="item-middle" slot="item-middle">middle</div>
      <div class="item-right" slot="item-right">right</div>
    </list-item>
  </div>
</template>
<script>
  import ListItem from '@/components/ListItem'
  export default {
    name: 'listitem',
    data() {
        return {
          showLoading: true
        }
    },
    components: {
      ListItem
    },
    methods: {
      test () {
        this.showTip('This is a test')
      }
    }
  }
</script>

