<template>
    <div class="new_box">
        <header-new :flag='flag'></header-new>
        <div class="swiper"></div>
        <div class="content">
            <ul>
                <li class="syd" @click="$router.push('/syd')">
                    <div class="left">
                        <img src="../assets/images/new_content_01.png" alt="">
                    </div>
                    <div class="right">
                        <h3 class="title">网贷</h3>
                        <p class="desc">
                            搜易贷是搜狐集团（NASDAQ：SOHU）旗下的网络借贷信息中介服务平台，中国互联网金融协会理事单位，于2014年9月上线。
                            搜易贷以“让金融更简捷”为使命，通过大数据、人工智能、机器学习、区块链等领先科技进行金融服务创新，提升金融服务的
                            运营效率和用户体验，让所有普通的个人用户和小微商户都能享受公平、高效和便捷的金融服务。
                        </p>
                    </div>
                </li>
                <li class="xh" @click="$router.push('/xh')">
                    <div class="left">
                        <img src="../assets/images/new_content_02.png" alt="">
                    </div>
                    <div class="right">
                        <h3 class="title">消费分期 信用借款</h3>
                        <p class="desc"> 
                            狐狸金服金融科技集团旗下的信用借款咨询服务平台，通过人工智能、大数据风控技术进行金...
                        </p>
                    </div>
                </li>
                <li class="hlph" @click="$router.push('/hlph')">
                    <div class="left">
                        <img src="../assets/images/new_content_03.png" alt="">
                    </div>
                    <div class="right">
                        <h3 class="title">融资服务</h3>
                        <p class="desc">       
                            狐狸金服金融科技集团旗下的综合融资信息服务平台，致力于用科技创新手段，为用户提供透...
                        </p>
                    </div>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
import headerNew from '@/common/Header_new.vue'
    export default {
        data() {
            return {
                flag:false
            }
        },
        components:{
            headerNew
        }
    }
</script>

<style scoped lang='less'>
    .new_box{
        width: 100%;
        .swiper{
            width: 100%;
            height: 6rem;
            background: url('../assets/images/new_banner01.png') no-repeat;
            background-size:cover;
        }
        .content{
            width: 100%;
            ul{
                width: 9.3rem;
                margin: 0.4rem auto;
                li{
                    width: 100%;
                    height: 3rem;
                    overflow: hidden;
                    box-shadow: 0.001rem 0.002rem 0.01rem 0.01rem rgba(0, 0, 0, 0.2);
                    margin-bottom: 0.4rem;
                    .left{
                        float: left;
                        width: 3rem;
                        height: 3rem;
                        line-height: 3rem;
                        background-image:linear-gradient(-180deg,#6d91ff,#688af0); 
                        vertical-align: middle;
                        margin-right: 0.2rem;
                        img{
                            display: inline-block;
                            margin-top: 1rem;
                            width: 100%;
                            height: 1rem;
                            line-height: 1rem;
                        }
                    }
                    .right{
                        float:right;
                        width: 6rem;
                        height: 3rem;
                        text-align: left;
                        .title{
                            font-weight: normal;
                            font-size: 0.453rem;
                            margin: 0.2rem 0 0.2rem 0; 
                        }
                        .title:after{
                            display: block;
                            content:'';
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-color:transparent transparent transparent rgba(0, 0, 0, 0.2);
                            margin:-0.35rem 0 0 5.5rem;
                        }
                        .desc{
                            // height: 100%;
                            font-size: 0.347rem;
                            color: #666;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp:4;
                            overflow: hidden;
                        }
                    }
                }
                li.xh .left{
                    background-image:linear-gradient(-180deg,#ff9732,#ff813a); 
                }
                li.hlph .left{
                    background-image:linear-gradient(-180deg,#0066c4,#005bae);                     
                }
            }
        }
    }
</style>