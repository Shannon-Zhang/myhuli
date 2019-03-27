<template>
    <div class="honour">
        <header-new></header-new>
        <div class="banner">公司荣誉</div>
        <div class="content">
            <ul class="list">
                <li class="item">
                    <h2 class="year">2018</h2>
                    <div class="group"></div>
                    <ul class="dot_box">
                        <li class="dot" v-for="item in [1,2,3]" :key="item"></li>
                        <li class="line"></li>
                        <li class="dot" v-for="item in [4,5,6]" :key="item"></li>
                    </ul>
                    <ul class="event_box">
                        <li class="monthly_event">
                            <h3 class="month">7月</h3>
                            <p class="desc">7月19日，以“开启新时代中国经济新征程”为主题的“第七届中国财经峰会”在北京举行，狐狸金服创始人兼CEO何捷被评为金融科技行业“2018影响力人物”。</p>
                        </li>
                        <li class="monthly_event">
                            <h3 class="month">6月</h3>
                            <p class="desc">6月28日，由中关村互联网金融研究院、中国互联网金融三十人论坛（CIF30）与国培机构联合主办的“第二届金融科技与金融安全峰会”在北京举行。狐狸金服凭借在金融科技智能化发展领域的突出表现，获颁人工智能领域“2018中国金融科技竞争力企业奖”。</p>
                        </li>
                        <li class="monthly_event">
                            <h3 class="month">1月</h3>
                            <p class="desc">1月12日，狐狸金服在第七届金铃奖暨中国大数据应用新典范大奖颁奖典礼，获颁企业创新“管理增效”大奖。</p>
                        </li>
                    </ul>
                </li>
                <li class="item item2">
                    <h2 class="year">2017</h2>
                    <div class="group"></div>
                    <ul class="dot_box">
                        <li class="dot" v-for="item in [1,2,3]" :key="item"></li>
                        <li class="line"></li>
                        <li class="dot" v-for="item in [4,5,6]" :key="item"></li>
                    </ul>
                    <ul class="event_box">
                        <li class="monthly_event">
                            <h3 class="month">12月</h3>
                            <p class="desc">12月26日，狐狸金服上榜“2017中关村高成长企业TOP100”，该评选由北京中关村高新技术企业协会主办。</p>
                            <p class="desc">12月21日，狐狸金服凭借首创的智能风控系统“风刃”为代表的科技创新体系，在2018中关村互联网金融论坛暨第五届普惠金融论坛上，斩获“2017年度金融科技最佳技术创新奖”。</p>
                            <p class="desc">12月11日，狐狸金服强势入围德勤“2017年亚太区高科技高成长500强。</p>
                            <p class="desc">12月6日，凭借在金融科技领域的突出成就与贡献，经21世纪亚洲金融年会组委会评选，狐狸金服创始人兼CEO何捷获得“2017 年度金融科技杰出人物”大奖。</p>
                            <p class="desc">12月6日，毕马威发布2017年暨第二届中国领先金融科技50企业榜单，狐狸金服连续第二年荣耀登榜。</p>
                        </li>
                        <li class="monthly_event">
                            <h3 class="month">11月</h3>
                            <p class="desc">11月21日，狐狸金服在由《中国经营报》主办的2017中国企业竞争力年会暨卓越表现企业颁奖典礼上，凭借独创的智能风控技术、业务模式以及在输血小微企业助力实体经济方面的卓越表现荣获“最具金融创新奖”年度大奖。 </p>
                            <p class="desc">11月9日，被视为“高科技发展趋势榜”的德勤中国高科技高成长50强报告发布，狐狸金服以“科技创新”为企业标签高票入选德勤主办的“2017中国高科技高成长50强”榜单。</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <footer>
                <p>Copyright@2019 Fox Fintech Group. All Rights Reserved.</p>
                <p>狐狸金服公司 版权所有 京ICP备16056530号-2</p>
            </footer>
        </div>
    </div>
</template>

<script>
import headerNew from '@/common/Header_new.vue'
export default {
    components:{
        headerNew
    }
}
</script>

<style scoped lang='less'>
.honour{
    position: relative;
    background-color: #f3f5f8;
    .banner{
        width: 100%;
        height: 4.5rem;
        line-height: 4.5rem;
        background: url("../assets/images/banner_honour.png") no-repeat center center;
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
                top: -1.65rem;
                box-sizing: border-box;
                padding: 0.6rem;
                border-radius: 0.2rem;
                margin: 0.4rem auto;
                background-color: white;
                box-shadow: 0 0.1rem 0.5rem 0 rgba(3, 92, 194, 0.1);
                animation: move 1s linear 0 1 forwards;
                transition: top 1s;
                .year{
                    font-size: 0.45333rem;
                    font-weight: 400;
                    color: #333;
                    text-align: left;
                    margin-bottom:0.266rem;
                }
                .group{
                    height: .03rem;
                    width: .66666667rem;
                    background: #245af0;
                }
                .dot_box{
                    position: absolute;
                    height: 75%;
                    .dot{
                        width: 0.07rem;
                        height: 0.07rem;
                        margin: 0.15rem 0 0.05rem 0.08rem;
                        border-radius: 50%;
                        background-color: rgba(36, 90, 240, 0.2);
                    }
                    .line{
                        width: 0.04rem;
                        height: 100%;
                        margin: 0 0 0 0.08rem;
                        background-color: rgba(36, 90, 240, 0.2);
                    }
                }
                .event_box{
                    .monthly_event{
                        margin-left: 0.5rem;
                        margin-top: 0.5rem;
                        text-align: justify;
                        &:before{
                            display: inline-block;
                            content: "";
                            background-color: rgba(3, 92, 194, 0.2);
                            margin-left: -0.46rem;
                            margin-bottom: -0.5rem;
                            width: 0.15rem;
                            height: 0.15rem;
                            border-radius: 50%;
                        }
                        .month{
                            font-size: 0.37333rem;
                            color: #333;
                            font-weight: 400; 
                            margin-bottom: 0.2rem;
                        }
                        .desc{
                            font-size: 0.32rem;
                            color: #666;
                            font-weight: 400;
                        }
                    }
                }
            }
            .item2{
                .dot_box{
                    height: 83%;
                }
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
</style>