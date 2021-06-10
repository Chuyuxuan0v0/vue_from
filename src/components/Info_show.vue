<template>
  <div>
    <h1>信息展示界面</h1>

    <el-table :data="tableData" border :stripe="true">
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column label="性别" width="120">
        <template slot-scope="scope">
          <!-- 三元表达式改值 -->
          {{ scope.row.sex == "man" ? "男" : "女" }}
        </template> 
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120"> </el-table-column>
      <el-table-column label="操作"  width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button >
          <el-button @click="open(scope.row, scope.$index)" type="text" size="small" >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 ，通过disabled来查看和编辑-->
    <el-dialog title="输入" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="tempdata" label-width="100px" :disabled="look">
        <el-form-item label="姓名">
          <el-input v-model="tempdata.name" style="width: 250px" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="tempdata.sex" style="width: 250px" placeholder="请选择性别">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="tempdata.age" style="width: 250px" controls-position="right" :min="1" :max="100"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="push" >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  methods: {
    handleClick(row) {
      this.tempdata = row;
      this.look = true;
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    open(row, index) {
      this.tempdata = row;
      this.index = index;
      this.dialogFormVisible = !this.dialogFormVisible;
      this.look = false;
    },
    push(){
      if(!this.look){
        let arr = JSON.parse(localStorage.getItem("array")); //把字符串改成对象，local storage中存储的是字符串
        arr.splice(this.index,1,{...this.tempdata});//从倒数第一个删除一个数组，并把改好的添加过去 这里使用了扩展运算符
        localStorage.setItem("array",JSON.stringify(arr));//添加到localstorage
        this.$message({
            message: '修改数据成功',
            type: 'success'
        });
      }
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  data() {
    return {
      look:false,
      index:-1,
      tempdata: {},
      dialogFormVisible:false,
      tableData: JSON.parse(localStorage.getItem("array")), //数据展示
    };
  },
};
</script>