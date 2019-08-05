<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div v-for="(items, index) in list1" :key="index" class="ps">
          <img src="@/assets/logo.png" alt="">
          <p>{{items.title}}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div v-for="(items, index) in list2" :key="index" class="ps">
          <img src="@/assets/logo.png" alt="">
          <p>{{items.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div> 
    </swiper> 
   
  </div>
</template>
<script>
export default {
  name: 'iconList',
  data () {
    return {
      list1: null,
      list2: null,
      list3: {},
      swiperOption: {
        autoplay: {
          autoplay: 1500,
          disableOnInteraction: false,//放置触摸后自动轮播停止
        },
        pagination: {
          el: '.swiper-pagination',
          paginationType: 'bullets'
        },
        loop:false,
      },
    }
  },
  methods: {
    async getFn () {
      const len = 8
      var data = await this.$http('/icon')
      this.list1 = data.data.data.splice(0, len)
      this.list2 = data.data.data
    }
  },
  created () {
    this.getFn()
  },
}
</script>
<style lang="scss" scoped>
  .ps{
    width:25%;
    float: left;
    img{
      width:25%;
      height: auto;
      margin:0 auto;
      display: inherit;
      margin-top:10px;
    }
    p{
      text-align: center;
    }
  }
  .Product-details{
    width:100%;
    height: 5.66rem;
  }
  swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    font-size: .12rem;
    left:45%;
    bottom: 5%;
    width: 60px;
    height: 30px;
    filter:Alpha(opacity=70);
    color: white;
    line-height: 30px;
    border-radius: 25px;
  }
</style>


