<template>
  <div id="app" class="app">
    <div class="header" v-if="isLoger">
      <headers />
    </div>
    <div class="routers">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="footer" v-if="isLoger">
       <footers />
    </div>
  </div>
</template>
<script>
import Headers from '@/components/common/header'
import Footers from '@/components/common/footer'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  created () {
    if(window.localStorage.getItem('username')){
      this.$router.push({path: '/home'})
      this.$store.dispatch('isLogFn', true)
    }else{
      this.$router.push({path: '/login'})
      this.$store.dispatch('isLogFn', false)
    }
  },
  computed:{
    ...mapGetters(['isLoger'])
  },
  components: {
    Headers,
    Footers
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height:100%;
  .header{
    height:80px;
  }
  .routers{
    flex:1;
    overflow:auto
  }
  .footer{
    height:80px;
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
// 2019-08-06T14:25:02.494340Z 1 [Note] A temporary password is generated for root@localhost: g9Ff1K5v9u*2
// If you lose this password, please consult the section How to Reset the Root Password in the MySQL reference manual.
</style>



