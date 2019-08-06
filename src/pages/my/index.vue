
<template>
  <div>
    <button @click="isShow = !isShow">显示隐藏</button>
    <transition enter-active-class='bounceIn' leave-active-class='bounceOut' :duration="400">
      <p v-if="isShow">测试动画</p>
    </transition>
    <!-- vue transtions api -->
    <!-- 
      enter-active-class  进入时候的动画类， 可以引入第三方动画库进行添加
      leave-active-class  离开时候的动画类
      duration 统一设置入场和离场的动画执行时长 :duration="{enter:400, leave: 600}", 传个对象分别设置入场和离场动画执行时长
     -->

    
     <RenBtn type="danger" text="render"></RenBtn>

    
  </div>
</template>
<script>
import RenBtn from '@/components/common/render'
export default {
  data () {
    return {
      isShow: false,
      content: [{id:1, name:'ps1'},{id:2, name:'ps3'},{id:3, name:'ps3'},{id:4, name:'ps4'}]
    }
  },
  created (){
    if(!window.localStorage.getItem('pss')){
        window.localStorage.setItem('pss', JSON.stringify(this.content))
    }
  },
  components: {
    RenBtn
  }
}
</script>
<style lang="css">
  .v-enter,
  .v-leave-to{
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active{
    transition:all .4s ease-in;
  }
</style>