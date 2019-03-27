<template>
    <div class="header_companyIntro">
        <span class="back" @click="$router.go(-1)" ></span>
        <h1 class="title">{{title}}</h1>
        <router-link class="toHome" to="/home"></router-link>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style scoped lang='less'>
.header_companyIntro{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.173333rem;
    line-height: 1.173333rem;
    background-color: white;
    border-bottom: 0.0133333rem solid #f0f0f0;
    .back,.toHome{
        position: absolute;
        top: 0.25rem;
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
    }
    .back{
        background: url('../assets/images/header_companyIntro_arrow.png') no-repeat;
        background-size: contain;
        left: 0.4rem;
    }
    .toHome{
        background: url('../assets/images/home_logo.png') no-repeat;
        background-size: contain;
        right: 0.4rem;
    }
    .title{
        font-size: 0.453333rem;
        font-weight: 400;
        color:rgb(102, 102, 102);
    }
}
</style>