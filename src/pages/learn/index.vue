
<template>
  <div>
    <p>learn css scoped and module diffcult</p>
    <h2>它的特殊之处以及和 scoped 样式不一样的地方就在于所有创建的类可以通过这个组件的 $style 对象获取</h2>
    <h3>通过 ---> :class="$style.uls"  来使用</h3>
    <ul :class="$style.uls">
      <li>测试cssmodule</li>
    </ul>
      <br>
      <br>
    <form style="width:200px; margin: auto;">
      <input type="hidden" name="id" v-model="id">
      姓名: <input type="text" name="name" v-model="name">
      <br>
      <br>
      年龄: <input type="text" name="age" v-model="age">
      <input type="button" value="提交" @click="getSend">
    </form>
    <table border="1" width="300" style="margin:40px auto">
      <thead>
        <tr>
          <td>id</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listAll" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td style="width:70px;"><a href="javascript:;" @click="mod(item)">修改</a>|<a href="javascript:;" @click="del(item.id)">删除</a></td>
        </tr>
      </tbody>   
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listAll: null,
      name: '',
      age: '',
      id: ''
    }
  },
  created () {
    this.getFnAll()
  },
  methods: {
    async getFnAll () {
      let data = await this.$http(`/api/all`)
      this.listAll = data.data.data
    },
    async getSend () {
      if(!this.id){
        const datas = {
          name: this.name,
          age:this.age
        }
        let res = await this.$http.post('/api/newAdd', datas)
        if(res.data.err === 0){
          this.getRes()
        }
      }else{
        const datas = {
          name: this.name,
          age:this.age,
          id:this.id
        }
        let res = await this.$http.post('/api/update', datas)
        if(res.data.err === 0){
          this.getRes()
        }
      }
      
    },
    getRes () {
      this.getFnAll()
      this.name = ''
      this.age = ''
      this.id = ''
    },
    mod (item) {
      let {name, age, id} = item
      this.name = name
      this.age = age
      this.id = id
    },
    async del (id){
      let data = await this.$http(`/api/del/${id}`)
      if(data.data.err === 0){
        this.getFnAll()
      }
    }
  }
}
</script>


<style lang="scss" module>
  table{
    td{
      text-align: center;
      tr{
        text-align: center;
      }
    }
  }
  .uls{
    li{
      color:red;
    }
  }
</style>