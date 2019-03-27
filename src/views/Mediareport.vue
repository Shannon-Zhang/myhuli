<template>
    <div class="mediaReport" ref="mediaReport">
        <header-new ></header-new>
        <div class="banner">媒体报道</div>
        <div class="content" ref="content">
            <ul class="list">
                <li class="item" v-for="item in mediaList" :key="item.articleId">
                    <a :href="item.detail">
                        <div class="img_box">
                            <img :src="item.path" alt="">
                        </div>
                        <div class="text_box">
                            <h2 class="title">{{item.name}}</h2>
                            <h3 class="subTitle">{{item.title}}{{item.createTime}}</h3>
                            <p class="summary">
                                {{item.description}}
                            </p>
                            <a :href="item.detail">查看详细</a>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerNew from '@/common/Header_new.vue';
export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
      this.jsonP();  
    },
    components:{
        headerNew
    },
    methods: {
        jsonP(){
            let ele = document.createElement('script');
            ele.setAttribute('src', "https://help.souyidai.com/about/media/index.json?version=1.1&callback=jsonpcallbackmedia");
            window.jsonpcallbackmedia = (data) => { // 因为创建的script标签是全局的，?后面的参数也会去全局找，因此把cb函数体写到window中
                // console.log(data);
                this.list = data;
            }
            this.$refs.mediaReport.appendChild(ele);
        }
    },
    computed: {
        mediaList(){
            return this.list;
        }
    },
    // watch: {
    //     mediaList(newV){
    //         console.log(newV)
    //     }
    // },  
}
</script>

<style scoped lang='less'>
.mediaReport{
    position: relative;
    background-color: #f3f5f8;
    .banner{
        width: 100%;
        height: 3.5333rem;
        line-height: 4.5rem;
        background: url("../assets/images/banner_media.png") no-repeat center center;
        background-size: cover;
        font-size: 0.56rem;
        color: white;
        text-align: center;
    }
    .content{
        position: relative;
        width: 100%;
        .list{
            position: relative;
            top:0;
            width: 100%;
            background-color: white;
            .item{
                position: relative;
                width: 100%;
                overflow: hidden;
                padding: 0.4rem 0.4rem 0.2rem;
                border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                .img_box{
                    float: left;
                    width: 2.5rem;
                    height: 2.5rem;
                    border: 0.01rem solid rgba(0, 0, 0, 0.1);
                    padding: 0.8rem 0;
                    box-sizing: border-box;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .text_box{
                    float: left;
                    padding-left: 0.3rem;
                    text-align: justify;
                    position: relative;
                    .title{
                        width: 6.3rem;
                        font-size: 0.4rem;
                        font-weight: 400;
                        color: #333;
                    }
                    .subTitle{
                        font-size: 0.32rem;
                        font-weight: 400;
                        color: #999;
                        margin-bottom: 0.3rem;
                    }
                    .summary{
                        font-size: 0.32rem;
                        color: #666;
                        width: 4.6rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    a{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        color: #3f80e2;
                    }
                }
                
            }
        }
    }
}
</style>