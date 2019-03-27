<template>
    <div class="media" ref="media">
        <headerCom :title="'媒体报道'"></headerCom>
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
import headerCom from '@/common/Header_companyIntro.vue';
export default {
   data() {
       return {
           list:[]
       }
   }, 
   components:{
       headerCom
   },
   mounted() {
       this.jsonP();
   },
   methods: {
       jsonP(){
           let ele = document.createElement('script');
           ele.setAttribute('src', "https://help.souyidai.com/about/media/index.json?version=1.1&callback=jsonpcallbackmedia");
           window.jsonpcallbackmedia = (data)=>{
               this.list = data;
           }
           this.$refs.media.appendChild(ele);
       }
   },
   computed: {
       mediaList(){
           return this.list;
       }
   },
}
</script>

<style scoped lang='less'>
.media{
    position: relative;
    background-color: #f3f5f8;
    padding-top: 1.5rem;
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