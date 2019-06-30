<template>
    <div>
        {{msg}}
        <p>
            <nw-button :type="'info'">万物</nw-button>
            <nw-button v-for="item of nwOjb" :key="item" :type="'danger'" :circle="true">
                {{item}}
            </nw-button>
            <nw-button :type="'info'">皆按钮</nw-button>
        </p>
    </div>
</template>
<script>
import NwButton from '@/packages/button/index.js'

export default {
    beforeCreate () {
        NwButton.install()
    },
    data () {
        return {
            msg: '冒烟测试',
            nwOjb: 'web前端小白'.split('')
        }
    }
}
</script>
<style>
/* body {
    background-color: #ff6400;
} */
</style>



