<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.id">
                <img :src="item.pic" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    props:['list'],
    updated() {
        console.log("props.list:", this.list);
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    },
}
</script>

<style scoped lang='less'>
    .swiper-container{
        height: 100%;
        z-index: 1;
        // .swiper-pagination-bullet{
        //     background:white;
        //     opacity: 1;
        // }
        // .swiper-pagination-bullet-active{
        //     background: rgb(55, 199, 243);
        // }
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>