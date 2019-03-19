<template>
    <div class="header_box">
        <div class="bar_box" ref="Elebar">
            <div class="logo" ref="Elelogo"></div>
            <div class="drop iconfont icon-liebiao" ref="Eledrop" click='drop'></div>
        </div>
        <div 
            v-text="title" 
            class="banner" 
            v-if="flag" 
            :style="{backgroundImage:`url(${bgImg})`}"></div>
        <div class="mask" ref="Elemask">
            <div class="close">
                <i class="iconfont icon-guanbi" ref="Eleicon"></i>
            </div>
            <ul class="menu">      
                <li @click="jump('/new')">首页</li>
                <li @click="jump('/profile')">公司简介</li>
                <li @click="jump('/management')">管理团队</li>
                <li @click="jump('/honour')">公司荣誉</li>
                <li @click="jump('/mediareport')">媒体报道</li>
                <li @click="jump('/contact')">联系我们</li>
            </ul>
        </div>     
    </div>
</template>

<script>
    export default {
        props:{
            bgImg:{
                default:''
            },
            flag:{
                default:true
            },
            title:{
                default:''
            }
        },
        mounted(){
            console.log(111);
            console.log(this.props.flag);
        },
        data() {
            return {
                Elebar:'',
                Elelogo:'',
                Eledrop:'',
                Elemask:'',
                Eleicon:''
            }
        },
        mounted() {
            // 获取需要操作的元素
            this.Elebar = this.$refs.Elebar;
            this.Elelogo = this.$refs.Elelogo;
            this.Eledrop = this.$refs.Eledrop;
            this.Elemask = this.$refs.Elemask;
            this.Eleicon = this.$refs.Eleicon;
            // 给指定元素绑定事件
            this.Eledrop.onclick = ()=>{
                console.log('transform-drop');
                this.Elemask.style.top = '0';
            }
            this.Eleicon.onclick = ()=>{
                console.log('transform-up');
                this.Elemask.style.top = '-20rem';
            }
            window.onscroll = ()=>{
                let st = document.documentElement.scrollTop || document.body.scrollTop;
                if (st >= 80) {
                    this.Elebar.style.backgroundColor = 'white';
                    this.Elelogo.className ='logo changeLogo';
                    this.Eledrop.className = 'drop iconfont icon-liebiao changeDrop';
                } else if(st >=20){
                    this.Elebar.style.backgroundColor = 'rgba(104, 138, 240, 0.3)';
                    this.Elelogo.className ='logo';
                    this.Eledrop.className = 'drop';
                } else{
                    this.Elebar.style.backgroundColor = 'transparent';
                    this.Elelogo.className ='logo';
                    this.Eledrop.className = 'drop iconfont icon-liebiao';
                }
            }
        },
        methods: {
            jump(str){
                let hashStr =location.hash.replace('#', '');
                console.log(hashStr, str, str===hashStr);
                if (str !== hashStr) {
                    this.$router.push(str);
                } else{
                    this.Elemask.style.top = '-20rem';
                }
            }
        }
    }
</script>

<style scoped lang='less'>
    .header_box{
        position: relative;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .banner{
            width: 100%;
            height: 4.5rem;
            line-height: 4.5rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            font-size: 0.56rem;
            color: white;
            text-align: center;
        }
        .bar_box{
            position: fixed;
            top: 0;
            width: 100%;
            background-color:transparent;
            .logo{
                float: left;
                width: 2rem;
                height: 1.173rem;
                line-height: 1.173rem;
                margin: 0 0 0 0.2rem;
                background: url('../assets/images/new_header_logo.png') no-repeat left;
                background-size: 100% 100%;
            }
            .changeLogo{
                background: url('../assets/images/new_header_logo2.png') no-repeat left;
                background-size: 100% 100%;
            }
            .drop{
                float: right;
                height: 1.173rem;
                line-height: 1.173rem;
                color: white;
                font-size: 0.7rem;
                margin-right: 0.2rem;
            }
            .changeDrop{
                color: black;
            }
        }
        .mask{
            position: fixed;
            top: -20rem;
            left: 0;
            // transform: translateY(-20rem);
            width: 100%;
            height: 100%;
            background-color: #001335;
            opacity: 0.95;
            color: white;
            transition: transform 0.5s;
            .close{
                width: 100%;
                height: 1.5rem;
                line-height: 1.5rem;
                text-align: right;
                i{
                    display: inline-block;
                    width: 1.5rem;
                    height: 100%;
                }
            }
            .menu{
                margin: auto;
                width: 8rem;
                li{
                    width: 100%;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    text-align: left;
                    border-bottom:0.01rem solid rgba(255, 255, 255, 0.5);
                }
                li:after{
                    position: absolute;
                    display: block;
                    content:"";
                    width:0;
                    height: 0;
                    margin: -0.85rem 0 0 8rem;
                    border-style: solid;
                    border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
                }
            }
        }
    }
    
</style>