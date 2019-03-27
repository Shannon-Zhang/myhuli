<template>
    <div class="lc">
        <div class="sub_router">
            <router-link to="/invest/lc/zr">转让</router-link>
            <router-link to="/invest/lc/hying">慧盈</router-link>
            <router-link to="/invest/lc/hyou">慧优</router-link>
            <router-link to="/invest/lc/hb">慧保</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>

<style scoped lang='less'>
.lc{
    background-color: #f3f5f7;
    .sub_router{
        width: 100%;
        height: 1.173rem;
        line-height: 1.173rem;
        display: flex;
        background-color: white;
        a{
            flex:1;
            color: #666;
            border-bottom: 0.04rem solid #dedede;
        }
        .router-link-active{
            color:#3f80e2;
            border-bottom-color: #3f80e2;
        }
    }

}
</style>