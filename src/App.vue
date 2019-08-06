<template>
  <div id="app" class="app">
    <div class="header">
      <headers />
    </div>
    <div class="routers">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
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
  slide-fade{
    position: absolute;
    left:0;
    right: 0;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>
