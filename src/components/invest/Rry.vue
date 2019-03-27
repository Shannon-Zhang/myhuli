<template>
    <div class="rry">
        <div class="hd"></div>
        <div class="content">
            <div class="rate">
                <p>七日年化收益率</p>
                <h1>2.7080%</h1>
                <div class="tips">
                    <span>
                        <i class="i1"></i>
                        每日复投
                    </span>
                    <span>
                        <i class="i2"></i>
                        灵活存取
                    </span>
                    <span>
                        <i class="i3"></i>
                        快速投资
                    </span>
                </div>
                <div class="interest">
                    <div class="left">
                        <p>每万份收益</p>
                        <h5>0.7110元</h5>
                    </div>
                    <div class="right">
                        <p>起投金额</p>
                        <h5>1元起投</h5>
                    </div>
                </div>
                <a href="javascript:;">暂停转入</a>
            </div>
            <div class="product">
                <h3 class="title">
                    产品详情
                    <a href="javascript:;">></a>
                </h3>
                <div class="list">
                    <div class="item">
                        <div class="pic">
                            <img src="../../assets/images/invest_pro_01.png" alt="">
                        </div>
                        <p>现在转入</p>
                    </div>
                    <div class="item">
                        <div class="pic">
                            <img src="../../assets/images/invest_pro_02.png" alt="">
                        </div>
                        <p>03月26日</p>
                        <p>产生收益</p>
                    </div>
                    <div class="item">
                        <div class="pic">
                            <img src="../../assets/images/invest_pro_03.png" alt="">
                        </div>
                        <p>03月27日</p>
                        <p>收益可见</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
.rry{
    .hd{
        width: 100%;
        height: 6.1rem;
        background: url('../../assets/images/invest_logo.png') no-repeat center center;
        background-size: 100% 100%;
    }
    .content{
        position: relative;
        background-color: #f3f5f7;
        padding-bottom: -0.5rem;
        .rate{
            position: relative;
            top: -3rem;
            width: 7.8rem;
            // box-sizing: border-box;
            padding: 0.8rem 0.6rem 1.2rem;
            margin: auto;
            border-radius: 0.10667rem;
            background-color: white;
            box-shadow:0 0 0.26666667rem 0 rgba(0,0,0,.08);
            p{
                font-size: 0.32rem;
                color: #999;
                margin-bottom: 0.05rem;
            }
            h1{
                font-size: 1.173333rem;
                font-family: DIN Alternate;
                font-weight: normal;
                color: #ff7b1a;
                height: 1.373333rem;
                line-height: 1.373333rem;
                margin: 0.3rem 0 0.4rem;
            }
            .tips{
                display: flex;
                margin-bottom: 0.7rem;
                span{
                    flex: 1;
                    font-size: 0.32rem;
                    color: #ff7b1a;
                    i{
                        width: .32rem;
                        height: .32rem;
                        display: inline-block;
                        background-size: cover;
                    }
                    .i1{
                        background-image: url('../../assets/images/invest_rry_01.png');
                    }
                    .i2{
                        background-image: url('../../assets/images/invest_rry_02.png');
                    }
                    .i3{
                        background-image: url('../../assets/images/invest_rry_03.png');
                    }
                }
            }
            .interest{
                display: flex;
                margin-bottom: 0.55rem;                
                div{
                    flex:1;
                    h5{
                        height: 0.64rem;
                        line-height: 0.64rem;
                        font-weight: normal;
                    }
                    &.left{
                        border-right: 0.01rem solid #eee;
                    }
                }
            }
            a{
                display: inline-block;
                height: 1.25333333rem;
                line-height: 1.25333333rem;
                width: 7.33333333rem;
                background: #ffe5d1;
                color: #fff;
                border-radius: .02666667rem;
                font-size: .45333333rem;
            }
        }
        .product{
            position: relative;
            top: -2.6rem;
            width: 100%;
            background-color: white;
            .title{
                height: 1.1733333rem;
                line-height: 1.173333rem;
                font-size: 0.373333rem;
                font-weight: normal;
                text-align: left;
                margin-left: 0.5rem;
                border-bottom: 0.01rem solid #ddd;
                a{
                    position: absolute;
                    top: 0;
                    right:0.2rem;
                    color: #666;
                }
            }
            .list{
                width: 100%;
                overflow: hidden;
                .item{
                    float: left;
                    width: 33.3333%;
                    margin-bottom: 0.4rem;
                    .pic{
                        width: 1rem;
                        height: 1rem;
                        margin: 0.6rem auto 0.3rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>