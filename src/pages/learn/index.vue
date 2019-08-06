
<template>
  <div>
    <p>learn css scoped and module diffcult</p>
    <h2>它的特殊之处以及和 scoped 样式不一样的地方就在于所有创建的类可以通过这个组件的 $style 对象获取</h2>
    <h3>通过 ---> :class="$style.uls"  来使用</h3>
    <ul :class="$style.uls">
      <li>测试cssmodule</li>
    </ul>
  </div>
</template>

<style lang="scss" module>

  .uls{
    li{
      color:red;
    }
  }
</style>