<template>
    <div class="management">
        <header-new></header-new>
        <div class="banner">管理团队</div>
        <div class="content">
            <ul class="list">
                <li class="item" v-for="data in manageList" :key="data.id">
                    <div class="picture">
                        <img :src="data.avatar" alt="">
                    </div>
                    <h2 class="name">{{data.name}}</h2>
                    <h3 class="position">{{data.position}}</h3>
                    <p>{{data.desc}}</p>
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
import headerNew from '@/common/Header_new.vue'
export default {
    created() {
        this.$store.dispatch('getManageList');
    },
    computed: {
        manageList(){
            return this.$store.state.manageList;
        }
    },
    components:{
        headerNew
    }
}
</script>

<style scoped lang='less'>
.management{
    position: relative;
    background-color: #f3f5f8;
    .banner{
        width: 100%;
        height: 4.5rem;
        line-height: 4.5rem;
        background: url("../assets/images/banner_management.png") no-repeat center center;
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
                .picture{
                    width: 2rem;
                    height: 2rem;
                    margin: auto;
                    border-radius: 50%;
                    text-align: center;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .name{
                    font-size: 0.4533rem;
                    font-weight: 400;
                    color: #333;
                    text-align: center;
                    margin-bottom:0.13333333rem;
                }
                .position{
                    font-size: 0.32rem;
                    font-weight: 400;
                    line-height: 0.72rem;
                    text-align: center;
                    color: #333;
                }
                p{
                    margin-top: 0.2667rem;
                    font-size: 0.3733rem;
                    color: #666;
                    line-height: 0.72rem;
                    text-align: justify;
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