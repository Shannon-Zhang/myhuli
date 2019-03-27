<template>
    <div class="linkTo">
        <router-link class="menuLink" tag='div' to="/home">
            <div class="icon-home"></div>
            首页
        </router-link>
        <router-link class="menuLink" tag='div' to="/invest">
            <div class="icon-chart"></div>            
            投资理财
        </router-link>
        <router-link class="menuLink" tag='div' to="/companyIntro">
            <div class="icon-about"></div>
            关于我们
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
.linkTo{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    background-color: #fff;
    overflow: hidden;
    padding-top: 0.1rem;
    box-sizing: border-box;
    display: flex;
    .menuLink{
        flex: 1;
        width: 33.33%;
        text-align: center;
        font-size: 0.32rem;
        color: #999;
        .icon-home,.icon-chart,.icon-about{
            width:0.7rem;
            height: 0.7rem;
            text-align: center;
            margin: 0 auto -0.45rem;
        }
        .icon-home{
            background: url('../assets/images/home_icon_home_00.png') no-repeat center center;
            background-size: contain;
        }
        &.router-link-active{
            color: #3f80e2;
            .icon-home{
                background: url('../assets/images/home_icon_home_01.png') no-repeat center center;
                background-size: contain;
            }
            .icon-chart{
                background: url('../assets/images/home_icon_chart_01.png') no-repeat center center;
                background-size: contain;
            }
        }
        .icon-chart{
            background: url('../assets/images/home_icon_chart_00.png') no-repeat center center;
            background-size: contain;
        }
        .icon-about{
            background: url('../assets/images/home_icon_about_00.png') no-repeat center center;
            background-size: contain;
        }
    }
}
</style>