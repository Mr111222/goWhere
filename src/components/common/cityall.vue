<template>
  <!-- 由于html结构的影响所以单独抽出这个组件  参考链接 https://blog.csdn.net/qiqi_77_/article/details/79361413 -->
  <div class="cityBox" ref="wrapper">
    <div>
      <ul>
        <li v-for="item in citys" :key="item.key" :ref="item.key">
        <p class="title">{{item.key}}</p>
        <p class="list_icon" v-for="items in item.source" :key="items.key" @click="choiceCity(items.name)">{{items.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  props:['citys', 'isKeys'],
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  methods: {
    ...mapActions(['choiceCity']),
    getAddress (val) {
      console.log(val)
    },
  },
  watch: {
    isKeys () {
      if (this.isKeys) {
        const element = this.$refs[this.isKeys][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .cityBox{
    background: #fff;
    height:100%;
    color:#000;
    overflow: hidden;
    overflow-y:scroll; 
  }
  h6{
    clear:both;
    background: #999;
  }
  ol{
    li{
      float: left;
      padding:5px 10px;
      border:1px solid #342acd;
      border-radius:5px;
    }
  }
  ul{
    clear: both;
    overflow: hidden;

    .title{
      font-weight:bold;
      background: #999;
      line-height:44px;
    }
    .list_icon{
      line-height:40px;
    }
  }
</style>

