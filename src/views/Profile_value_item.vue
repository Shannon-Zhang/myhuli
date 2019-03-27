<template>
    <div class="value_item">
        <div class="pic">
            <img :src="data.pic" alt="">
        </div>
        <h2 class="title">{{data.title}}</h2>
        <p class="desc">{{data.desc}}</p>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped lang='less'>
.value_item{
    display: inline-block;
    width: 50%;
    margin-top: 0.8rem;
    text-align: center;
    overflow: hidden;
    .pic{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-bottom: 0.2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .title{
        font-size: 0.4rem;
        font-weight: 400;
        color: #333;
    }
    .desc{
        font-size: 0.3733rem;
        color: #666;
        // line-height: 0.72rem;
        text-align: center;
    }
}
</style>