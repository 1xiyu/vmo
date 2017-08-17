<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'grid-col',
    data () {
      return {
        gutter: 0
      }
    },
    props: {
      span: '',
      order: '',
      offset: '',
      push: '',
      pull: '',
      className: ''
    },
    computed: {
        classes () {
          let classList = [
              {
                [`span-${this.span}`]: this.span,
                [`order-${this.order}`]: this.order,
                [`offset-${this.offset}`]: this.offset,
                [`push-${this.push}`]: this.push,
                [`pull-${this.pull}`]: this.pull,
                [`${this.className}`]: !!this.className
              }
          ];
          return classList;
        },
        styles () {
          let style = {};
          if (this.gutter !== 0) {
              style = {
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px'
              };
          }
          return style;
        },
        methods: {
          updateGutter () {
            this.$parent.updateGutter(this.$parent.gutter);
          }
        },
        mounted () {
          this.updateGutter();
        },
        beforeDestroy () {
          this.updateGutter();
        }
    }
  }
</script>
<style>
 
</style>