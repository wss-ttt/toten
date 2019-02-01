<template>
  <div>
    <div v-for="item in lst">
      <span>编号:{{item.id}}</span>
      <p>{{item.name}}</p>
    </div>
    <el-button @click="get">获取所有的数据</el-button>
  </div>
</template>
<script>
export default {
  name: 'user',
  data() {
    return {
      lst: [{
          'id': 1,
          'name': '乔峰'
        },
        {
          'id': 2,
          'name': '小龙女'
        }
      ]
    }
  },
  methods:{
    get(){
      this.$http.get('/sys/user/list').then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    }
  }
}

</script>
<style>
ul,
li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

</style>
