<template>
    <div class="profile">
        <header-new></header-new>
        <div class="banner">公司简介</div>
        <div class="content">
            <ul class="list">
                <li class="item">
                    <h2 class="title">关于狐狸金服</h2>
                    <div class="group"></div>
                    <p>狐狸金服金融科技集团是搜狐（NASDAQ：SOHU）旗下的金融科技集团，起步于2014年4月成立的网络借贷信息中介服务平台“搜易贷”。目前狐狸金服已经布局网贷信息中介平台搜易贷、信用借款咨询平台小狐分期、聚焦中小微企业融资服务的狐狸普惠等业务，并获得了互联网小贷、企业征信、商业保理、融资租赁等牌照，打造基于大数据和人工智能技术的全生命周期智能风控系统“风刃”为狐狸金服集团旗下各项业务提供全流程风控管理，形成庞大的以科技为驱动的金融服务体系。</p>
                </li>
                <li class="item">
                    <h2 class="title">品牌使命</h2>
                    <div class="group"></div>
                    <h3 class="subTitle">让金融更简捷</h3>
                    <p>狐狸金服的使命是致力于通过大数据、人工智能、机器学习等领先科技进行金融服务创新，提升金融服务的运营效率和用户体验，让所有普通的个人用户和小微商户都能享受公平、高效和便捷的金融服务，共享金融科技的成果。</p>
                </li>
                <li class="item">
                    <h2 class="title">品牌愿景</h2>
                    <div class="group"></div>
                    <p>狐狸金服的愿景是在满足员工物质和精神两方面幸福的同时，成为中国最大、用户体验最好的个人及中小企业的互联网金融服务平台，推动中国金融服务行业的市场化、平民化和高效化。</p>
                </li>
                <li class="item">
                    <h2 class="title">企业价值观</h2>
                    <div class="group"></div>
                    <div class="value_box">
                        <valueItem v-for="item in profileList" :key="item.id" :data='item'></valueItem>
                    </div>
                </li>
            </ul>
        </div>
        <footer>
            <p>Copyright@2019 Fox Fintech Group. All Rights Reserved.</p>
            <p>狐狸金服公司 版权所有 京ICP备16056530号-2</p>
        </footer>
    </div>
</template>
<script>
import headerNew from '@/common/Header_new.vue';
import valueItem from './Profile_value_item.vue';
export default {
    created() {
        this.$store.dispatch('getProfileList');
    },
    computed: {
        profileList(){
            return this.$store.state.profileList;
        }
    },
    components:{
        headerNew, valueItem
    }
}
</script>

<style scoped lang='less'>
.profile{
    position: relative;
    background-color: #f3f5f8;
    .banner{
        width: 100%;
        height: 4.5rem;
        line-height: 4.5rem;
        background: url("../assets/images/banner_profile.png") no-repeat center center;
        background-size: cover;
        font-size: 0.56rem;
        color: white;
        text-align: center;
    }
    .content{
        position: relative;
        .list{
            .item{
                position: relative;;
                z-index: 5;
                width: 9.2rem;
                top: -1.5rem;
                box-sizing: border-box;
                padding: 0.6rem;
                border-radius: 0.2rem;
                margin: 0.4rem auto;
                background-color: white;
                box-shadow: 0 0.1rem 0.5rem 0 rgba(3, 92, 194, 0.1);
                animation: move 1s linear 0 1 forwards;
                transition: top 1s;
                .title{
                    font-size: 0.4rem;
                    font-weight: 400;
                    color: #333;
                    text-align: left;
                    margin-bottom:0.13333333rem;
                }
                .subTitle{
                    font-size: 0.37333rem;
                    font-weight: 400;
                    line-height: 0.72rem;
                    text-align: left;
                    color: #333;
                }
                .group{
                    height: .03rem;
                    width: .66666667rem;
                    background: #245af0;
                }
                p{
                    margin-top: 0.4rem;
                    font-size: 0.3733rem;
                    color: #666;
                    line-height: 0.72rem;
                    text-align: justify;
                }
            }
            .item2{
                top: 5rem;
            }
            .item2{
                top: 15rem;
            }
            .item2{
                top: 20rem;
            }
        }
    }
    footer{
        position: absolute;
        width: 100%;
        font-size: .26666667rem;
        color: #999;
        bottom: -0.4rem;
        margin-bottom: 0.4rem;
    }
}
@keyframes move{
    0% {
        top:0
    }
    100% {
        top:-1.25rem;
    }
}
@-webkit-keyframes move{
    0% {
        top:0
    }
    100% {
        top:-1.25rem;
    }
}
</style>