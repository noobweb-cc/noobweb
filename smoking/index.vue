<template>
    <div>
        <p>
            <nw-button>前端小白？？</nw-button>
        </p>
        {{msg}}
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

<style lang="less" scoped>

</style>

