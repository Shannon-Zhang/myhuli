<template>
    <div>
        <router-link to="/invest/wd">网贷</router-link>
        <router-link to="/invest/lc">理财</router-link>
        <router-link to="/invest/rry">活期</router-link>
        <router-view></router-view>
        <div>Invest page</div>
        <Index/>
    </div>
</template>

<script>
import Index from '@/components/Index.vue'
    export default {
        components:{
            Index
        }
    }
</script>

<style scoped>

</style>