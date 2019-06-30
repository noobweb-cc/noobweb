<template>
    <div>
        {{msg}}
        <p>
            <nw-button>内容</nw-button>
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
            msg: '冒烟测试'
        }
    }
}
</script>
<style>
/* body {
    background-color: #ff6400;
} */
</style>



