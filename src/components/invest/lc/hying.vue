<template>
    <div class="hying">
        <div class="selection">
            <div class="selectItem" :class="{current:index===1}" @click="index=1">
                默认
                <div class="line"></div>    
            </div>
            <div class="selectItem" :class="{current:index===2}" @click="index=2">
                年利率
                <div class="triangle">
                    <span class="up"></span>
                    <span class="down"></span>
                </div>
                <div class="line line2"></div>
            </div>
            <div class="selectItem expire" :class="{current:index===3}" @click="index=3">
                期限
            </div>
        </div>
        <div class="clearInfo">
            <img src="../../../assets/images/lc_clearInfo.png" alt="">
            <p>更多优质项目 敬请期待</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            index:1
        }
    },
}
</script>

<style scoped lang='less'>
.hying{
    .selection{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 0.04rem solid #ececec;
        display: flex;
        background-color: white;
        .selectItem{
            position: relative;
            flex: 1;
            color:#999;
            &.current{
                color: #3f80e2;
            }
            .triangle{
                position: relative;
                display: inline-block;
                bottom: 0.2rem;
                .up{
                    position: absolute;
                    top: 0.15rem;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0.1rem;
                    border-color: #999 transparent transparent transparent;
                }
                .down{
                    position: absolute;
                    top: -0.15rem;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0.1rem;
                    border-color: transparent transparent#999 transparent;
                }
            }
            .line{
                position: absolute;
                top: 0.3rem;
                right: 0;
                display: inline-block;
                width: 0.01rem;
                height: 0.4rem;
                background-color: #999; 
                }
            .line2{
                position: absolute;
                top: 0.3rem;
                right: 0;
                display: inline-block;
                width: 0.01rem;
                height: 0.4rem;
                background-color: #999; 
            }
        }
        .expire{
            position: relative;
            &:before{
                position: absolute;
                top:0.24rem;
                right:1rem ;
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0.1rem;
                border-color: transparent transparent #999 transparent;
            }
            &:after{
                position: absolute;
                top: 0.52rem;
                right: 1rem;
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0.1rem;
                border-color: #999 transparent transparent transparent;
            }
        }
    }
    .clearInfo{
        width: 100%;
        height: 5rem;
        img{
            margin: 1.6rem auto 0.266667rem;
            display: block;
            width: 3.386667rem;
            height: 2.66667rem;
        }
        p{
            font-size: 0.32rem;
            height: 0.44rem;
            line-height: 0.44rem;
            color: #999;
        }
    }
}
</style>