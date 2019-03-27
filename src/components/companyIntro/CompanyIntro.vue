<template>
    <div class="companyIntro">
        <headerCom :title="'狐狸慧赚-公司介绍'"></headerCom>
        <ul class="menu">      
            <li class="aboutUs" @click="jump('/aboutUs')">关于我们</li>
            <li class="team" @click="jump('/team')">管理团队</li>
            <li class="media" @click="jump('/media')">媒体报道</li>
            <li class="company" @click="jump('/companyIntro')">安全保障</li>
            <li class="address" @click="jump('/address')">联系我们</li>
        </ul>
    </div>
</template>

<script>
import headerCom from '@/common/Header_companyIntro.vue'
export default {
    components:{
        headerCom
    },
    methods: {
        jump(str){
            this.$router.push(str);
        }
    },
}
</script>

<style scoped lang='less'>
.companyIntro{
    position: relative;
    background-color: #f3f5f7;
    padding-top: 1.3rem;
    li{
        width: 9.25rem;
        height: 2.7rem;
        line-height: 2.7rem;
        margin: 0.2rem auto;
        text-align: center;
        font-size: 0.453333rem;
        color: white;
    }
    .aboutUs{
        background: url('../../assets/images/about_01.png') no-repeat;
        background-size: cover;
    }
    .team{
        background: url('../../assets/images/about_02.png') no-repeat;
        background-size: cover;
    }
    .media{
        background: url('../../assets/images/about_03.png') no-repeat;
        background-size: cover;
    }
    .company{
        background: url('../../assets/images/about_04.png') no-repeat;
        background-size: cover;
    }
    .address{
        background: url('../../assets/images/about_05.png') no-repeat;
        background-size: cover;
    }
}
</style>