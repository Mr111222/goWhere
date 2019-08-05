<template>
  <div>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in arrs2" :key="index">
          <img :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="iconlist">
      <iconList />
    </div>
    <div class="hotlist">
      <hotList />
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import iconList from '@/components/common/iconlist'
  import hotList from '@/components/common/hotlist'
    export default {
      name: "Swiperdetails",
      data() {
        return {
          swiperOption: {
            autoplay: {
              autoplay: 1500,
              disableOnInteraction: false,//放置触摸后自动轮播停止
            },
            pagination: {
              el: '.swiper-pagination',
              paginationType: 'bullets'
            },
            loop:true,
          },
          arrs2:[require('@/assets/imgs/1.jpg'), require('@/assets/imgs/2.jpg'), require('@/assets/imgs/3.jpg'), require('@/assets/imgs/4.jpg')],
        }
      },
      components: {
        iconList,
        hotList
      }
    }
</script>

<style scoped>
  .iconlist{
   background: #fff;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
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
  .swiper-slide img{
    width: 100%;
    height: auto;
  }
</style>
