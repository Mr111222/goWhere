<template>
  <div class="box">
    <van-cell-group>
      <van-field
        v-model="username"
        v-validate="'required|user'" 
        name="username"
        :error-message="errors.first('username')"
        :error="errors.has('username')"
        clearable
        label="用户名"
        placeholder="请输入用户名"
        right-icon="question-o"
        @click-right-icon="$toast('user name')"
      />
      <br>
      <br>
      <br>
      <van-field
        v-model="password"
        v-validate="'required|pass'" 
        name="password"
        :error-message="errors.first('password')"
        :error="errors.has('password')"
        type="password"
        label="密码"
        placeholder="请输入密码"
        right-icon="question-o"
        @click-right-icon="$toast('password')"
      />
      <br>
      <br>
      <br>
    </van-cell-group>
    <br>
    <br>
    <br>
    <!-- <van-button type="primary" size="large" @click="submit">登录</van-button> -->
    <van-button type="primary" size="large" @click.native="onSubmit">登录xxxx</van-button>
    <van-loading size="24px" v-if="isLoad" type="spinner"  style="text-align:center;">加载中...</van-loading>  
  </div>
</template>
<script>
import './validate'
export default {
  data(){
    return {
      username:'',
      password:'',
      contactPhone:'',
      isLoad: false
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            user:  this.username,
            pass: this.password
          }
          this.$http.post('/api/login', data).then(res=>{
            if(res.data.err === 0){
              this.isLoad = true
              setTimeout(()=>{
                this.$store.dispatch('setUser', this.username)
                this.$router.push({path: '/home'})
                this.isLoad = false
              },2000)
            }else{
              this.$toast(res.data.message);
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .box{
    width:600px;
    height:300px;
    margin:200px auto;
    background: #fff;
  }
</style>