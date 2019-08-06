<script>
/*render 函数的应用场合 链接 https://www.php.cn/js-tutorial-411456.html
*一般是在html结构比较复杂而且不是写死的时候，假如不用render则会书写大量的html代码
*同时可以引入jsx语法来书写render函数
* 配置 powershell https://blog.csdn.net/appleyuchi/article/details/80155233
*/
export default {
  props:['type', 'text'],
  methods:{
    handleClick () {
      console.log(this.type, this.text)
    }
  },
  render() {
    return (
      <div
        class={{
          btn: true,
          'btn-success': this.type === 'success',
          'btn-danger': this.type === 'danger',
          'btn-warning': this.type === 'warning'
        }}
        onClick={this.handleClick}>
        {this.text}
      </div>
    )
  }
}
</script>