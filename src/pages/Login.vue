<template>
  <el-form
ref="ruleForm2"
:model="ruleForm2"
status-icon
:rules="rules2"
label-width="100px"
class="demo-ruleForm">
  <el-form-item
label="账号"
prop="name">
    <el-input
v-model="ruleForm2.name"
type="name"
auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item
label="密码"
prop="pass">
    <el-input
v-model="ruleForm2.pass"
type="password"
auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button
type="primary"
@click="submitForm('ruleForm2')">登录</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  name: 'Login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        name: '',
        pass: ''
      },
      rules2: {
        name: [{ validator: validateName, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.$store.dispatch('loginByUserName', {
            name: _this.ruleForm2.name,
            pass: _this.ruleForm2.pass
          }).then(() => {
            _this.$router.push({
              path: '/'
            })
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
