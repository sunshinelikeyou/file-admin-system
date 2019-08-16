<!--
 * @Author: theman
 * @Date: 2019-08-15 15:59:38
 * @LastEditors: theman
 * @LastEditTime: 2019-08-16 10:24:42
 * @Description: 
 -->
<template>
  <div class="login">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="8">
        <h1 class="title">Company Name</h1>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="22%"
          class="demo-ruleForm"
        >
          <el-form-item label="公司" prop="company">
            <el-input  v-model="ruleForm.company" autocomplete="off" ></el-input>
            <i class="icon el-icon-s-home"></i>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
            <i class="icon el-icon-user-solid"></i>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            <i class="icon el-icon-s-cooperation"></i>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="end">
              <el-col>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        company: "",
        username: "",
        pass: ""
      },
      rules: {
        company: [{ required:true,message:'请输入公司名称', trigger: "blur" }],
        username: [{required:true,message:'请输入用户名', trigger: "blur" }],
        pass: [{required:true,message:'请输入密码', trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
      this.$router.push({path:'/home'})
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .title{
    margin-left: 22%;
  }
  .el-input__inner{
    position: relative;
    padding: 0 20px!important;
  }
  .icon{
    position: absolute;
    top: 0;
    left: 5px;
    height: 100%;
    line-height: 40px!important;
  }
  .login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.el-row{
  width: 100%;
}
</style>
