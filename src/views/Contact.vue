<template>
    <div class="contact">
        <header-new></header-new>
        <div class="banner">联系我们</div>
        <div class="content">
            <div class="hotline">
                <div class="text">
                    <p class="title">服务热线</p>
                    <p class="tel">400-817-8877</p>
                    <p class="time">周一至周日9:00-18:00</p>
                </div>
                <div class="img">
                    <img src="../assets/images/contact_logo.png" alt="">
                </div>
            </div>
            <div class="companyInfo">
                <div class="logo"></div>
                <div class="map">
                    <img src="../assets/images/contact_map.png" alt="">
                </div>
                <dl>
                    <dt>公司名称：</dt>
                    <dd>狐狸金服（北京）信息科技有限公司</dd>
                    <dt class="address">公司地址：</dt>
                    <dd>北京市海淀区丹棱街1号院1号楼互联网金融中心8层</dd>
                    <dt>邮政编码：</dt>
                    <dd>100080</dd>
                    <dt>联系电话：</dt>
                    <dd>010-56372888 010 56372889</dd>
                    <dt>客服邮箱：</dt>
                    <dd>kefu@huli.com</dd>
                    <dt>举报邮箱：</dt>
                    <dd>hotline@huli.com</dd>
                </dl>
            </div>
        </div>
        <footer>
            <p>Copyright@2019 Fox Fintech Group. All Rights Reserved.</p>
            <p>狐狸金服公司 版权所有 京ICP备16056530号-2</p>
        </footer>
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
.contact{
    position: relative;
    background-color: #f3f5f8;
    .banner{
        width: 100%;
        height: 4.5rem;
        line-height: 4.5rem;
        background: url("../assets/images/banner_contact.png") no-repeat center center;
        background-size: cover;
        font-size: 0.56rem;
        color: white;
        text-align: center;
    }
    .content{
        position: relative;
        width: 100%;
        .hotline{
            position: relative;
            top: -1.3rem;
            width: 9.2rem;
            height: 2.93333rem;
            box-sizing: border-box;
            padding: 0.6rem 0.5333rem 0.3rem;
            margin:0 auto;
            background-color: white;
            border-radius: 0.1rem;
            overflow: hidden;
            box-shadow: 0 0.1rem 0.5rem 0 rgba(3, 92, 194, 0.1);
            .text{
                float: left;
                text-align: left;
                font-size: 0.32rem;
                .tel{
                    line-height: 0.86667rem;
                    font-size: 0.613333rem;
                    color: #333;
                }
                .time{
                    color: #999;
                }
            }
            .img{
                float: right;
                width: 2.7rem;
                height: 1.8rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .companyInfo{
            background-color: white;
            padding: 0.2rem 0.4rem 0.6rem;
            box-sizing: border-box;
            margin-top:-0.8rem;
            .logo{
                width: 4rem;
                height: 1.2rem;
                margin: 0.5rem auto;
                background:url('../assets/images/new_header_logo2.png') no-repeat center;
                background-size: contain;
            }
            .map{
                height: 2.5rem;
                margin-bottom: 0.4rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dl{
                text-align: justify;
                line-height: 0.6rem;
                dt{
                    display: inline-block;
                    text-align: left;
                }
                .address{
                    vertical-align:top;
                }
                dd{
                    display: inline-block;
                    width: 7.3rem;
                }
            }
        }
    }
    footer{
        position: absolute;
        width: 100%;
        background-color: #f3f5f8;
        font-size: .26666667rem;
        color: #999;
        padding-top: 0.4rem;
        margin-bottom: 0.4rem;
    }
}
</style>