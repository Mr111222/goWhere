<template>
  <div class="citys" >
    <!-- html 布局比较凌乱 -->
    <div class="hotCity" style="clear:both; margin-top:20px; postion:relative;">
      <h6>当前城市</h6>
      <div class="activeCity">
        <span>{{defaultCity}}</span>    
        <!-- <button @click='add'>+++++</button><b>{{num}}</b><button @click="del">————</button>   -->
      </div>
      <h6>热门城市</h6>
      <div class="hotCity">
        <span v-for="item in list" :key="item.key" :ref="item.key" @click="choiceCity(item.name)">{{item.name}}</span>    
      </div>
    </div>
    <cityAll :list="list" :citys="citys" :isKeys="cityVal"/>  <!-- 此处为锚点链接渲染组件 -->
    <Mao :list="citys" @changeAddress="getAddressFn"/>  <!-- 此处为锚点链接组件 -->
  </div>
</template>
<script>
import Mao from '@/components/common/mao'
import cityAll from '@/components/common/cityall'
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      list: null,
      citys: null,
      cityVal: null
    }
  },
  created () {
    this.getRes()
    this.getCity()
  },
  computed:{
    ...mapGetters(['num', 'defaultCity'])  // 计算属性会被缓存，倘若数据没有变化，则会直接取来自缓存的
  },
  components: {
    Mao,
    cityAll
  },
  methods: {
    ...mapActions(['choiceCity', 'add', 'del']),
    async getRes(){
      let data = await this.$http('/hotCity')
      this.list = data.data.data
    },
    async getCity(){
      let data = await this.$http('/city')
      let datas = data.data.data
      let res = []
      for(var i in datas){
        res.push({
          key:i,
          source:datas[i]
        })
      }
      this.citys = res
    },
    getAddressFn (val) {
      this.cityVal = val
    },
  }
}
</script>

<style lang="scss" scoped>
  .citys{
    position:fixed;
    top:80px;
    background: #666;
    width:100%;
    height:100%;
    z-index:999;
    .hotCity {
      height:240px;
      h6{
        clear: both;
        margin:10px 0; 
      }
      span{
        padding:5px 10px;
        border:1px solid #432cab;
        border-radius: 5px;
        margin:10px;
        display: inline-block;

      }
    }
  }
</style>
