<template>
  <button
    class="nw-button"
    @click="handleClick"
    :class="[
      type ? 'nw-button--' + type : '',
      {
        'is-circle': circle
      }
    ]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
    name: 'NwButton',
    props: {
        type: {
            type: String,
            defulte: 'danger'
        },
        circle: {
            type: Boolean,
            defulte: true
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
}
</script>
<style>
/* @import url('./less.less'); */
</style>

<style lang="less" scoped>
// .is-circle {
//     border-radius: 50%;
// }
// .nw-button {
//     border: none;
//     background: none;
//     border-width: 0;
// }
// .nw-button--danger {
//     padding: 10px;
//     background: red;
//     color: #fff;
// }
// .nw-button--defulte {
//     background: #fff;
//     color: #808184;
//     border: 1px solid #ccc;
// }
</style>

