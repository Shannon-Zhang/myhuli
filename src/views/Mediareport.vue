<template>
    <div>
        <header-new :bgImg='banner_bg' title="媒体报道"></header-new>
        Mediareport page
    </div>
</template>

<script>
import headerNew from '@/common/Header_new.vue'
import banner_pic from "../assets/images/banner_media.png"
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