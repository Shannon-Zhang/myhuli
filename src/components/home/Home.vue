<template>
  <div class="home">
      <header>
        <div class="bar_box" ref="eleBar">
            <span class="logo" ref="eleLogo"></span>
            <router-link to="{path:'/login',query:{backurl:`home`}}" class="login" ref='eleLogin'>登录</router-link>
            <router-link to="/register" class="register" ref="eleRegister">/注册</router-link>
            <a href="https://events.souyidai.com/static/appGeneralize/index.html" class="download" ref="eleDownload">下载APP</a>
        </div>
      </header>
      <div class="swiper_box">
        <Swiper :list='bannerList'></Swiper>
        <!-- <Swiper :list='banner'></Swiper> -->
      </div>
      <div class="register_immediately">
        <h1 class="title">立即注册</h1>
        <div class="inp">
          <input type="text" class="phone" placeholder="请输入您的手机号">
        </div>
        <div class="inp">
          <input type="text" class="validCode" placeholder="请输入图片验证码">
        </div>
        <a href="javascript:;" class="regiter_btn">注册立享专属福利</a>
      </div>
      <div class="middle">
        <h2 class="text">精彩项目推荐</h2>
      </div>
      <div class="content">
        <h2>快速了解狐狸慧赚</h2>
        <ul class="about">
          <li v-for="item in contentList" :class="item.class" @click="$router.push(`/${item.class}`)" :key="item.id">
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
        <div class="knowMore">
          <a href="javascript:;">了解更多</a>
        </div>
      </div>
      <footer>
        <p>市场有风险，投资需谨慎</p>
        <p>Copyright@2019 Fox Fintech Group. All Rights Reserved.</p>
        <p>狐狸金服公司 版权所有 京ICP备16056530号-2</p>
      </footer>
      <Index/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue';
import Swiper from '@/common/Swiper.vue';
export default {
  data() {
    return {
      eleBar:'',
      eleLogo:'',
      eleLink:'',
      eleLogin:'',
      eleRegister:'',
      eleDownload:'',
      banner:[]
    }
  },
  created() {
    this.$store.dispatch('getHomeBannerList', (data)=>{
      console.log('home-data:',data);
      this.banner = data;
    });
    this.$store.dispatch('getHomeContentList');
  },
  mounted() {
    this.eleBar = this.$refs.eleBar;
    this.eleLogo = this.$refs.eleLogo;
    this.eleLogin = this.$refs.eleLogin;
    this.eleRegister = this.$refs.eleRegister;
    this.eleDownload = this.$refs.eleDownload;
    console.log(this.eleRegister, this.eleLogin); // 获取到的是两个vue对象
    window.onscroll = ()=>{
      // console.log(this);
      let st = document.body.scrollTop || document.documentElement.scrollTop;
      if (st<=95) {
        this.eleLogo.className = 'logo';
        this.eleLogin.$el.className = 'login';
        this.eleRegister.$el.className = 'register';
        this.eleDownload.className = 'download';
        this.eleBar.style.backgroundColor = `rgba(63, 128, 226, ${(1/95)*st})`;
      } else{
        this.eleBar.style.backgroundColor = '#fff';
        this.eleLogo.className = 'logo changeLogo';
        this.eleLogin.$el.className = 'changeLink';
        this.eleRegister.$el.className = 'changeLink';
        this.eleDownload.className = 'download changeDownload';
      }
    }
  },
  computed: {
    bannerList(){
      return this.$store.state.homeBannerList;
    },
    contentList(){
      return this.$store.state.homeContentList;
    }
  },
  components: {
    Index,Swiper
  }
}
</script>
<style scoped lang="less">
 .home{
   position:relative;
   width: 100%;
   padding-bottom: 1.6rem;
   background-color: #f3f5f7;
   .bar_box{
      position: fixed;
      top: 0;
      z-index: 10;
      width: 100%;
      box-sizing: border-box;
      height: 1.173rem;
      line-height: 1.173rem;
      vertical-align: baseline;
      background-color: rgba(63, 128, 226, 0);
      .logo{
          display: inline-block;
          width: 3.8rem;
          height: 0.4rem;
          margin: 0.4rem 1rem 0 -0.2rem;
          background: url('../../assets/images/home_header_logo.png') no-repeat;
          background-size: 100% 100%;
      }
      .changeLogo{
          background: url('../../assets/images/home_header_logo2.png') no-repeat;
          background-size: 100% 100%;
      }
      .login,.register{
        color: #fff;
      }
      .changeLink{
        color: #666;
      }
      .download{
        display: inline-block;
        width: 2rem;
        height: 0.7rem;
        line-height: 0.7rem;
        margin:0 0 0.1rem 1.2rem;
        background: transparent;
        border-radius: 0.1rem;
        color: white;
      }
      .changeDownload{
        background: #3f80e2;
      }
   }
   .swiper_box{
     width: 100%;
     height: 4.5rem;
   }
   .register_immediately{
     position:relative;
     top:0;
     width:8.2rem;
     margin:0 auto 0.4rem;
     padding:0.6rem 0.6rem;
     background-color: #fff;
     border-radius: 0.15rem;
     box-shadow:0 0 0.26666667rem 0 rgba(0,0,0,.08);
     .title{
       margin:0 auto 0.6rem;
       font-size:0.56rem;
       font-weight:500;
     }
     .inp{
       width: 100%;
       height: 1rem;
       margin-bottom: 0.5rem;
       input{
         width: 100%;
         height: 100%;
         outline-color: #eee;
       }
     }
      .regiter_btn{
        display: inline-block;
        width: 100%; 
        height: 1rem;
        line-height: 1rem;
        padding: 0.1rem;
        background-color: #ff6948;
        text-align: center;
        color: #fff;
        font-size: 0.48rem;
        font-weight: 500;
      }
   }
   div.middle{
     .text{
      width: 100%;
      margin-bottom: 0.4rem;
      padding: 0.3rem 0;
      text-align: center;
      color: #ff6948;
      font-size: .42666667rem;
      font-family: PingFangSC-Regular;
      font-weight: 500;
      background-color: white;
      &:before,&:after{
        display: inline-block;
        content: "";
        width: 2.06667rem;
        height: 0.13333rem;
        line-height: 0.13333rem;
        background-size: cover;
      }
      &:before{
        background: url('../../assets/images/home_middle_0.png') no-repeat 90%;
        margin-right: 0.6rem;
      }
      &:after{
        background: url('../../assets/images/home_middle_1.png') no-repeat 11.5%;
        margin-left: 0.6rem;
      }
    }
   }
    .content{
      h2{
        position: relative;
        width: 100%;
        padding: 0.6rem 0;
        text-align: center;
        color: #3f80e2;
        font-size: .42666667rem;
        font-weight: normal;
        font-family: PingFangSC-Regular;
        background-color: white;
      }
      h2:before,h2:after{
        display: inline-block;
        content: "";
        width: 1.8rem;
        height: 0.13333rem;
        line-height: 0.13333rem;
        background-size: cover;
      }
      h2:before{
        background: url('../../assets/images/home_middle_3.png') no-repeat 90%;
        margin-right: 0.6rem;
      }
      h2:after{
        background: url('../../assets/images/home_middle_4.png') no-repeat 9.5%;
        margin-left: 0.6rem;
      }
      ul.about{
        background-color: white;
        width: 100%;
        border-top: 0.04rem solid #ececec;
        border-bottom: 0.04rem solid #ececec;
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
                margin:0 0.5rem;
                vertical-align: baseline;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                float: left;
                text-align: left;
                border-bottom: 0.04rem solid #ececec;
                .title{
                    font-size: 0.4rem;
                    font-weight: normal;
                    margin: 0 0 .08rem;
                }
                .desc{
                    width: 7rem;
                    font-size: 0.32rem;
                    color: #666;
                    margin: 0 .4rem .46666667rem 0;
                }
                &:last-child{
                    border-bottom: none;  
                }
            }
        }
      }
      .knowMore{
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        background-color: white;
        a{
          color: #333;
          font-size: 0.4rem;
        }
      }
    }
    footer{
      width: 100%;
      background-color: #f3f5f7;
      font-size: .26666667rem;
      color: #999;
      padding: 0.4rem 0 0;
    }
 } 
</style>