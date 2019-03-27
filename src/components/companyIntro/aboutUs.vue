<template>
    <div class="aboutUs">
        <headerCom :title="'关于我们'"></headerCom>
        <div class="tab">
            <div class="tab_item" @click="flag=true">
                <div class="text" :class="{current:flag}">公司简介</div>
                <div class="line" v-show="flag"></div> 
            </div>
            <div class="tab_item" @click="flag=false">
                <div class="text" :class="{current:!flag}">公司文化</div> 
                <div class="line" v-show="!flag"></div> 
            </div>
        </div>
        <component :is="flag?'intro':'culture'"></component>
    </div>
</template>

<script>
import headerCom from '@/common/Header_companyIntro.vue';
import intro from './intro.vue';
import culture from './culture.vue';
export default {
    data() {
        return {
            flag:true
        }
    },
    components:{
        headerCom, intro, culture
    }
}
</script>

<style scoped lang='less'>
.aboutUs{
    background-color: #f3f5f8;
    padding-top: 1.173333rem;
    .tab{
        display: flex;
        background-color: white;
        height: 1.1rem;
        line-height: 1.1rem;
        .tab_item{
            flex: 1;
            .text{
                font-size: 0.3733333rem;
                color: #666;
                margin-bottom: 0.1rem;
                &.current{
                    color: #3f80e2;
                }
            }            
            .line{
                width: 1.2rem;
                height: 0.02rem;
                margin: -0.15rem auto 0;
                background-color: #3f80e2;
            }
        }
    }
}
</style>