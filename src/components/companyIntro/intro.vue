<template>
    <div class="intro">
        <div class="item">
            <div class="logo1"></div>
            <p>狐狸慧赚是狐狸金服金融科技集团旗下的互联网综合理财平台，秉承“透明化”、“简单化”、“智能化”的发展理念，为互联网用户提供更加安全、更好收益、个性定制的综合理财服务。</p>
            <p>狐狸慧赚作为一站式互联网理财平台，已经覆盖了多个领域理财产品，未来还将增加互联网保险、互联网基金以及海外资产，并以科技驱动逐步迭代成为智能化理财平台，即通过大数据、量化金融模型以及智能算法等技术，为用户个性化定制收益与风险匹配最优的投资组合产品，帮助用户智能配置资产、分散投资风险，轻松享受理财收益。</p>
        </div>
        <div class="item">
            <div class="logo2"></div>
            <p>狐狸金服金融科技集团（以下称“狐狸金服”）是搜狐（NASDAQ：SOHU）旗下的金融科技集团，起步于2014年4月成立的网络借贷信息中介服务平台“搜易贷”。目前狐狸金服已经布局互联网综合理财平台狐狸慧赚、网络借贷平台搜易贷、消费金融小狐分期，以及大数据征信、商业保理、融资租赁等业务，首创“风刃”风控系统为基础技术支持，形成庞大的以技术为驱动的金融服务体系。</p>
            <p>狐狸金服以“让金融更简捷”为使命，秉持“尊重每一分价值”的品牌理念，致力于通过大数据、人工智能、机器学习等领先科技进行金融服务创新，提升金融服务的运营效率和用户体验，让所有普通的个人用户和小微商户都能享受公平、高效和便捷的金融服务，共享金融科技的成果。未来，狐狸金服还将在更广泛的领域进行金融科技的创新探索，与各位优秀合作伙伴一起共同推进中国金融科技行业的繁荣发展。</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang='less'>
.intro{
    padding: 0 0.4rem;
    .item{
        padding-top: 0.7rem;
        text-align: justify;
        .logo1,.logo2{
            width: 2.8rem;
            height: 1.4rem;
            margin: 0 auto 0.5rem;
            background: url('../../assets/images/aboutUs_01.png') no-repeat center center;
            background-size: contain;
        }
        .logo2{
            width: 3.8rem;
            height: 1.4rem;
            margin: 0 auto 0.5rem;
            background: url('../../assets/images/aboutUs_02.png') no-repeat center center;
            background-size: contain;
        }
        p{
            font-size: 0.3466667rem;
            line-height: 0.5866667rem;
            color: #666;
        }
    }
}
</style>