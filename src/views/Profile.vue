<template>
    <div>
        <header-new :bgImg='banner_bg' title="公司简介"></header-new>
        Profile page
    </div>
</template>

<script>
import headerNew from '@/common/Header_new.vue'
import banner_pic from "../assets/images/banner_profile.png"
export default {
    data() {
        return {
            banner_bg:banner_pic
        }
    },
    components:{
        headerNew
    }
}
</script>

<style scoped>

</style>