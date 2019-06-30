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

<style>
.is-circle {
    width: 32px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    outline: none;
    font-size: 16px;
    border-radius: 50%;
}
.nw-button {
    border: none;
    background: none;
    border-width: 0;
    height: 32px;
    box-sizing: border-box;
}
.nw-button--danger {
    background: #000;
    color: red;
    font-weight: bold;
}
.nw-button--info {
    height: 32px;
    padding: 0 15px;
    font-size: 14px;

    border-radius: 4px;
    outline: none;

    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
}
.nw-button--defulte {
    background: #fff;
    color: #808184;
    border: 1px solid #ccc;
}
</style>

