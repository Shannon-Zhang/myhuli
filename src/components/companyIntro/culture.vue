<template>
    <div class="culture">
        <div class="cul cul1">
            <h2 class="title">
                <span></span>
                品牌使命
            </h2>
            <p>让金融更简捷</p>
            <p>狐狸金服的使命是致力于通过大数据、人工智能、机器学习等领先科技进行金融服务创新，提升金融服务的运营效率和用户体验，让所有普通的个人用户和小微商户都能享受公平、高效和便捷的金融服务，共享金融科技的成果。</p>
        </div>
        <div class="cul cul2">
            <h2 class="title">
                <span></span>
                品牌愿景
            </h2>
            <p>狐狸金服的愿景是在满足员工物质和精神两方面幸福的同时，成为中国最大、用户体验最好的个人及中小企业的互联网金融服务平台，推动中国金融服务行业的市场化、平民化和高效化。</p>
        </div>
        <div class="cul cul3">
            <h2 class="title">
                <span></span>
                企业价值观
            </h2>
            <ul class="value_box">
                <li>
                    <div class="pic pic1"></div>
                    <p class="keyword">正直</p>
                    <p class="desc">诚实直率 信守承诺</p>
                </li>
                <li class="right">
                    <div class="pic pic2"></div>
                    <p class="keyword">自燃</p>
                    <p class="desc">自我驱动 热爱工作</p>
                </li>
                <li>
                    <div class="pic pic3"></div>
                    <p class="keyword">学习</p>
                    <p class="desc">钻研创新 竞争意识</p>
                </li>
                <li class="right">
                    <div class="pic pic4"></div>
                    <p class="keyword">执行</p>
                    <p class="desc">追求极致 使命必达</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang='less'>
.culture{
    // background-color: #f3f5f8;
    padding: 0.7rem 0.4rem;
    .cul{
        .title{
            width: 100%;
            font-size: 0.456666rem;
            font-weight: normal;
            color: #333;
            text-align: left;
            padding-bottom: 0.4rem;
            margin-block-end: 0.4rem;
            border-bottom: 0.01rem solid #ececec;
            span{
                display: inline-block;
                width: 0.06rem;
                height: 0.4rem;
                background-color: #3f80e2;
            }
        }
        p{
            text-align: justify;
            line-height: 0.7rem;
        }
    }
    .cul1{
        margin-bottom: 1rem;
    }
    .cul2{
        margin-bottom: 1rem;
    }
    .cul3{
        .value_box{
            overflow: hidden;
            li{
                float: left;
                width: 4.4rem;
                height: 5.066667rem;
                box-sizing: border-box;
                margin-bottom: 0.3rem;
                border: 0.01rem solid #ececec;
                &.right{
                    margin-left: 0.4rem;
                }
                .pic{
                    width: 1.666667rem;
                    height: 1.666667rem;
                    margin: 1rem auto 0.5rem;
                }
                .pic1{
                    background: url('../../assets/images/aboutUs_value_01.png') no-repeat center;
                    background-size: contain;
                }
                .pic2{
                    background: url('../../assets/images/aboutUs_value_02.png') no-repeat center;
                    background-size: contain;
                }
                .pic3{
                    background: url('../../assets/images/aboutUs_value_03.png') no-repeat center;
                    background-size: contain;
                }
                .pic4{
                    background: url('../../assets/images/aboutUs_value_04.png') no-repeat center;
                    background-size: contain;
                }
                p{
                    text-align: center;
                }
            }
        }
    }
}
</style>