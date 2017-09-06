<template>
  <div class="hello">
    <button @click="test">Test</button>
    <P>亲爱的用户 {{username}} ，欢迎您！</P>
    <p>您的账号是 {{ID}} ~</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      username:'',
      ID:''
    }
  },
  methods:{
    test:function(){
      alert('欢迎'+this.username)
    }
  },
  mounted(){
    this.$http.post().then(res => {
    this.username = res.data.name
    this.ID = res.data.id
    },res => {
      console.info('调用失败');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
