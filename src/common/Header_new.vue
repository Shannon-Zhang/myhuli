<template>
    <div class="header_box">
        <div class="bar_box" ref="eleBar">
            <div class="logo" ref="eleLogo"></div>
            <div class="drop" ref="eleDrop" click='drop'>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="mask" ref="eleMask">
            <div class="close">
                <i class="iconfont icon-guanbi" ref="eleIcon"></i>
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
    data() {
        return {
            eleBar:'',
            eleLogo:'',
            eleDrop:'',
            eleMask:'',
            eleIcon:''
        }
    },
    mounted() {
        // 获取需要操作的元素
        this.eleBar = this.$refs.eleBar;
        this.eleLogo = this.$refs.eleLogo;
        this.eleDrop = this.$refs.eleDrop;
        this.eleMask = this.$refs.eleMask;
        this.eleIcon = this.$refs.eleIcon;
        // 给指定元素绑定事件
        this.eleDrop.onclick = ()=>{
            console.log('transform-drop');
            this.eleMask.style.top = '0';
        }
        this.eleIcon.onclick = ()=>{
            console.log('transform-up');
            this.eleMask.style.top = '-20rem';
        }
        window.onscroll = ()=>{
            let st = document.documentElement.scrollTop || document.body.scrollTop;
            if (st<=95) {
                this.eleBar.style.backgroundColor = `rgba(63, 128, 226, ${(1/95)*st})`;
                this.eleLogo.className ='logo';
                this.eleDrop.className = 'drop';
            } else{
                this.eleBar.style.backgroundColor = '#fff';
                this.eleLogo.className = 'logo changeLogo';
                this.eleDrop.className = 'drop changeDrop';
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
                this.eleMask.style.top = '-20rem';
            }
        }
    }
}
</script>

<style scoped lang='less'>
    .header_box{
        position: relative;
        z-index: 10;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .bar_box{
            position: fixed;
            top: 0;
            width: 100%;
            box-sizing: border-box;
            background-color:transparent;
            .logo{
                float: left;
                width: 2.35rem;
                height: 0.9rem;
                line-height: 0.9333rem;
                margin: 0.15rem 0 0 0.4rem;
                background: url('../assets/images/new_header_logo.png') no-repeat left;
                background-size: 100% 100%;
            }
            .changeLogo{
                background: url('../assets/images/new_header_logo2.png') no-repeat left;
                background-size: 100% 100%;
            }
            .drop{
                float: right;
                margin-top: 0.3rem;
                .line{
                    width: 0.45rem;
                    height: 0.05rem;
                    margin-bottom:0.12rem;
                    background-color: white;
                    margin-right: 0.4rem;
                }
            }
            .changeDrop{
                .line{
                    background-color: black;
                }
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