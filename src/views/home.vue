<template>
  <div>
    <h1>首页</h1>
    <div>
      <ul>
        <li>
          <el-button type="success" @click="goUser">用户管理</el-button>
        </li>
        <li>
          <el-button type="success" @click="goDept">部门管理</el-button>
        </li>
        <li>
          <el-button type="success" @click="goRole">角色管理</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    goUser() {
      this.$router.push({ name: 'User' });
    },
    goDept() {
      this.$router.push({ name: 'Dept' });
    },
    goRole() {
      this.$router.push({ name: 'Role' });
    }
  }
}

</script>
<style scoped>
	ul,li{
		list-style-type: none;
	}
</style>
