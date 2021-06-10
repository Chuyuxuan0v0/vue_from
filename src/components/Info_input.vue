<template>
  <div>
    <h1>信息输入界面</h1>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item prop="name" placeholder="请输入姓名" label="姓名">
        <el-input v-model="form.name" style="width: 250px" ></el-input>
      </el-form-item>
      <el-form-item prop="sex" label="性别">
        <el-select v-model="form.sex" style="width: 250px" placeholder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
         <el-input-number v-model="form.age" style="width: 250px"  controls-position="right" :min="1" :max="100">  </el-input-number> <font style="color:red">年龄区间为1~100</font>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reset" >清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          name: '',
          sex: '',
          age:'',
        },
        rules: {
          name: [
            { 
              //必须，不为空
              required: true, 
              //提示消息
              message: '请输入名称', 
              //鼠标移出时校验
              trigger: 'blur' 
            }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
    
      onSubmit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            //将输入的信息作为数组存储
            let arr = JSON.parse(localStorage.getItem("array"));
            if(arr == null || arr == "" || arr == "null")
            { 
              //这里是初始化，因为localStorage一开始是没有值的
              arr = [];
            }
            arr.push(this.form);  //数组后排添加数据

            localStorage.setItem("array",JSON.stringify(arr));   //存入localstrage 
            this.$message({
              message: '插入local storage成功',
              type: 'success'
            });
          } else {
            this.$message({
               message: '输入值不为空',
               type: 'warn;'
            });
            return false;
          }
        });
      },
      reset(){
        this.form ={},
        this.$message({
           message: '已清空',
          type: 'success'
         });
      }
    }
  }
</script>