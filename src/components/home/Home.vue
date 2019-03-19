<template>
  <div class="home">
      Home page
      <Index/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'
export default {
  name: 'home',
  components: {
    Index
  }
}
</script>
