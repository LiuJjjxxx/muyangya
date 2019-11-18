<template>
<div>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :on-error="handleError"
  :with-credentials="true"
  name="upfile"
  :limit="2">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<el-button @click="push()"></el-button>
</div>
</template>
<script>
var post ={
    'data':'bbbb',
    'dataaaaa':'bcccc'
}
import Axios from 'axios'
import qs from 'qs';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.transformRequest = [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]
export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        imgData:{}
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(response,file, fileList){
          var formData = new FormData();
          Axios.post('http://172.16.15.228:8069/dmr/get_contents/',qs.stringify(formData)).then(function(data){
          console.log(data)
    })
      },
    handleError(response,file, fileList){
          console.log('上传失败')
    },
    post(){
          Axios.post('http://172.16.15.228:8069/dmr/get_contents/',post).then(function(data){
          console.log(data)
    })
    }
  },
  mounted() {
    // this.post()
  },
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>