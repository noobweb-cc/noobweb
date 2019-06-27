<template>
    <div class="mathInt">
        {{test}}
        <h3 v-for="(item, index) in msg" :key="index">
            {{item.msg}}
        </h3>
    </div>
</template>
<script>
export default {
    props: ['test'],
    data () {
        return {
            msg: [
                { msg: '我是前端小白的一名成员' },
                { msg: '这是我们的noob-web组件库入口' },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.mathInt {
    background-color: #ccc;
}
</style>


