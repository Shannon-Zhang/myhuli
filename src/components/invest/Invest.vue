<template>
    <div class="invest">
        <div class="router">
            <router-link class="menuLink" to="/invest/wd">网贷</router-link>
            <router-link class="menuLink" to="/invest/lc">理财</router-link>
            <router-link class="menuLink" to="/invest/rry">活期<em>New</em></router-link>
        </div>
        <router-view></router-view>
        <Index/>
    </div>
</template>
<script>
import Index from '@/components/Index.vue';
    export default {
        components:{
            Index
        }
    }
</script>

<style scoped lang='less'>
.invest{
    padding: 1.2rem 0 0;
    .router{
        position: fixed;
        top: 0;
        width: 100%;
        height: 1.173rem;
        line-height: 1.173rem;
        background-color: #3f80e2;
        .menuLink{
            position: relative;
            margin:0 0.55rem;
            font-size: 0.453333rem;
            color:hsla(0,0%,100%,.5);
            em{
                position: absolute;
                top: -0.2rem;
                left: 0.7rem; 
                width: 0.773333rem;
                height: 0.4rem;
                line-height: 0.4rem;
                border-radius: 0.1rem;
                background-color: white;
                text-align: center;
                font-size: 0.2666rem;
                color: #3f80e2;

            }
        }
        .router-link-active{
            color: white;
        }
    }
}
</style>