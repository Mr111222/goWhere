<template>
  <div class="hot">
    <p class="title">热门推荐</p>
    <div class='list' v-for="(item,index) in list" :key="index">
      <img src="@/assets/logo.png" alt="">
      <div class="content">
        <p>{{item.title}}</p>
        <p>{{item.desc| getxx}}</p>
        <p class="detail"><router-link :to="'/home/hot/'+item.id">查看详情</router-link></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: null
    }
  },
  filters: {
    getxx (val) {
      if(val.length && val.length>8){
        return val.substr(0,10)+'....'
      }
    }
  },
  created () {
    this.getFn()
  },
  methods: {
    async getFn () {
      let data = await this.$http('/week')
      this.list = data.data.data
    }
  }
}
</script>

<style lang="scss">
  .hot{
    background: #fff;
    height:100%;
    .title{
      padding-top: 20px;
      margin:20px 0px 10px 10px;
    }
    .list{
      clear: both;
      height:200px;
      img{
        width:25%;
        height:auto;
        float: left;
      }
      .content{
        float: left;
        margin-left:10px;
        p{
          margin-top: 20px;
        }
        .detail{
          width:120px;
          background: orange;
          border-radius: 5px;
          text-align: center;
          a{
            color:#fff;
          }
        }
      }

    }
  }
</style>

