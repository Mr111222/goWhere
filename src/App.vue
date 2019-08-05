<template>
  <div id="app" class="app">
    <div class="header">
      <headers />
    </div>
    <div class="routers">
     <router-view />
    </div>
    <div class="footer">
       <footers />
    </div>
  </div>
</template>

<script>
import Headers from '@/components/common/header'
import Footers from '@/components/common/footer'
export default {
  name: 'App',
  components: {
    Headers,
    Footers
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height:100%;
  .header{
    height:44px;
  }
  .routers{
    flex:1;
    overflow:auto
  }
  .footer{
    height:44px;
  }
}
</style>
