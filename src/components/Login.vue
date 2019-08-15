<!--
 * @Author: theman
 * @Date: 2019-08-15 15:59:38
 * @LastEditors: theman
 * @LastEditTime: 2019-08-15 17:55:49
 * @Description: 
 -->
<template>
  <div class="login">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="8">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="22%"
          class="demo-ruleForm"
        >
        
          <el-form-item label="公司" prop="company">
            <el-input  v-model="ruleForm.company" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
          alert("submit!");
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
<style scoped>

</style>
