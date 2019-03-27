<template>
    <div class="new_box">
        <header-new :flag='flag'></header-new>
        <div class="swiper_box">
            <Swiper :list='bannerList'></Swiper>
        </div>
        <div class="content">
            <ul class="product">
                <li v-for="item in newAry" :class="item.class" @click="$router.push(`/${item.class}`)" :key="item.id">
                    <div class="left">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="right">
                        <h3 class="title">{{item.title}}</h3>
                        <p class="desc">
                            {{item.desc}}
                        </p>
                    </div>
                </li>
            </ul>
            <div class="trustHuli">
                <h2 class="banner">
                    <span class="before"></span>
                    <span class="title">信任狐狸金服</span> 
                    <span class="after"></span>
                </h2>
                <ul class="trust">
                    <li v-for="item in newAry2" :key="item.id">
                        <div class="left">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="right">
                            <p class="title">{{item.title}}</p>
                            <p class="desc">
                                {{item.desc}}
                                <br/>
                                {{item.desc2}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <footer>
                <div class="contact">
                    <div class="left">
                        <img src="../assets/images/new_content2_06.png" alt="">
                    </div>
                    <div class="right">
                        <p class="service_title">服务时间：周一至周日(9:00-18:00)</p>
                        <p class="tel">400-817-8877</p>
                        <p class="warning">市场有风险 选择需谨慎</p>
                    </div>
                </div>
                <div class="copyright">
                    <p class="company">狐狸金服（北京）信息科技有限公司</p>
                    <p class="contact">联系电话：010-56372888 010-56372889</p>
                    <p class="copyright">Copyright@2019 Fox Fintech Group. All Rights Reserved.</p>
                    <p class="register">京ICP备16056530号-2</p>
                </div>
            </footer>
        </div> 
    </div>
</template>
<script>
// ../assets/images/new_content_01.png
import headerNew from '@/common/Header_new.vue';
import Swiper from '@/common/Swiper.vue';
export default {
    data() {
        return {
            flag:false
        }
    },
    created() {
        this.$store.dispatch('getNewAry');
        this.$store.dispatch('getNewAry2');
        this.$store.dispatch('getBannerList');
    },
    computed: {
        bannerList(){
            return this.$store.state.bannerList;
        },
        newAry(){
            return this.$store.state.newAry;
        },
        newAry2(){
            return this.$store.state.newAry2;
        }
    },
    components:{
        headerNew, Swiper
    }
}
</script>

<style scoped lang='less'>
    .new_box{
        width: 100%;
        .swiper_box{
            width: 100%;
            height: 7.5rem;
        }
        .content{
            width: 100%;
            ul.product{
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
            .trustHuli{
                width: 100%;
                background-color: #eee;
                padding-top: 0.4rem;
                .banner{
                    background: #fff;
                    height: 1.86666667rem;
                    line-height: 1.86666667rem;
                    width: 100%;
                    text-align: center;
                }
                span.title{
                    display: inline-block;
                    font-size: .45333333rem;
                    color: #245af0;
                    margin: 0 0.2rem;
                    font-weight: 500;
                }
                span.before{
                    display: inline-block;
                    width: 1rem;
                    height: 0.4rem;
                    background: url('../assets/images/new_content2_logo1.png') no-repeat;
                    background-size: contain;
                }
                span.after{
                    display: inline-block;
                    width: 0.8rem;
                    height: 0.4rem;
                    background: url('../assets/images/new_content2_logo2.png') no-repeat;
                    background-size: cover;
                }
                ul.trust{
                    background-color: white;
                    width: 100%;
                    li{
                        width: 100%;
                        overflow: hidden;
                        vertical-align: middle;
                        padding: 0.2rem 0;
                        .left{
                            float: left;
                            width: 1.5rem;
                            height: 1.5rem;
                            line-height: 1.5rem;
                            margin:0 0.7rem;
                            vertical-align: baseline;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .right{
                            float: left;
                            text-align: left;
                            border-bottom: 1px solid #f3f5f8;
                            .title{
                                font-size: 0.4rem;
                                margin: 0 0 .08rem;
                            }
                            .desc{
                                font-size: 0.32rem;
                                color: #666;
                                margin: 0 .4rem .46666667rem 0;
                            }
                        }
                    }
                }
            }
        }
        footer{
            background-color: #f3f5f8;
            div.contact{
                width: 100%;
                height: 2.30667rem;
                line-height: 0.5rem;
                padding: 0.4rem 0;
                box-sizing: border-box;
                .left{
                    float: left;
                    width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    margin:0 0.7rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    float: left;
                    text-align: left;
                    color:#666;
                    .service_title{
                        font-size: 0.32rem;
                    }
                    .tel{
                        font-size: 0.48rem;
                    }
                    .warning{
                        font-size: 0.32rem
                    }
                }
            }
            div.copyright{
                border:1px solid #e0e2e6;
                text-align: left;
                padding: 0.4rem 0 0.05rem 0.7rem;
                font-size: .26666667rem;
                color: #999;
            }
        }
    }
</style>