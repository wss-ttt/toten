<template>
  <div>
    <div class="login">
      <el-form>
        <el-form-item :data="tableData" ref="form">
          <el-input v-model="tableData.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="tableData.pwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">确定</el-button>
          <el-button type="danger">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
    	<el-button type="success" @click="goUser">用户管理</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      tableData: {
        userName: '', // 用户名
        pwd: '' // 密码
      }
    }
  },
  methods: {
    login() {
      this.$http.post('/sys/login').then(res => {
        console.log(res);
        // 保存token			
        localStorage.setItem('token', res.data.token);
        // 跳转页面
        this.$router.push({ name: 'User' });
      }).catch(err => {
        console.log(err);
      });
    },
    goUser() {
      this.$router.push({ name: 'User' });
    }
  }
}

</script>
<style scoped>
.login {
  width: 400px;
}

</style>
