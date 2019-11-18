<template>
<div>
<input type="file" id="id" name="image" class="getImgUrl_file" @change="shangc($event)" accept="image/jpg,image/jpeg,image/png">
<button @click="push()"></button>
</div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
    return{
      datas:{
         patient_name:"刘嘉祥",
          patient_sex:"1",
          patient_age:"18",
          patient_phone:"15992320144",
          agent_name:"肖清辉",
          agent_phone:"13530592565",
          duplication_reason:"1",
          relationship:"7",
          duplication_content:[1,2],
          duplication_mode:{
            mode:"1",  
            address:"None"
            },
        faceBase64:[]
      }
    }
  },
  methods:{
    shangc(e){
            let files = document.getElementById('id').files[0]
            let name = document.getElementById('id').files[0].name
            let arr = name.split('.')
            console.log(arr);
            let fileSize = 0;
            let fileMaxSize = 10240;//1M
            if(files){
                fileSize =files.size;          
                if (fileSize > 10*1024*1024) {
                    alert("文件大小不能大于10M！");
                    file.value = "";
                    return false;
                }else if (fileSize <= 0) {
                    alert("文件大小不能为0M！");
                    file.value = "";
                    return false;
                }
            }else{
                return false;
            }
	   //转码base64
            let reader = new FileReader();
            let imgFile
            // let that = this
            reader.readAsDataURL(files)
            reader.onload = e => {
                imgFile = e.target.result;
                let arr = imgFile.split(',')
                this.datas.faceBase64.push(arr[1])
                // console.log(imgFile)
                // console.log(this.datas.faceBase64)
            }
        },  
        push(){
                       Axios.post('http://172.16.15.228:8069/dmr/get_contents/',this.datas).then(function(data){
                            console.log(data)
                })
        }
  },
  mounted() {
   
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