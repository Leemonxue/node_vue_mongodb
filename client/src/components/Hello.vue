<template>
  <div class="hello">
    <button @click="test">Test</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods:{
    test:function(){
      var url = this.HOST 
      this.$http.post(url).then(res => {
      console.log(res.data)
    },res => {
      console.info('调用失败');
    });
    }
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
