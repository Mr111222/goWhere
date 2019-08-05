<template>
  <div class="mao">
    <ol>
      <li v-for="(item, index) in list" :key="index" @click="updataAddress(item.key)">{{item.key}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  props:['list'],
  methods: {
    updataAddress (val) {
     this.$emit('changeAddress', val)
    }
  }
}
</script>
<style lang="scss">
  .mao{
    position: absolute;
    right:0;
    top:140px;
    background: #ccc;
    text-align: center;
    z-index:99999999;
    ol{
      width:20px;
      height:100%;
      li{
        line-height:22px;
        color:black;
      }
    }
  }
</style>