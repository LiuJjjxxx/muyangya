<template>
 <el-container style="height:100%">
        <el-header class="header" height="100px">
            <el-button  @click="goBack()" class="back"><i style="color:white" class="el-icon-back"></i></el-button>
            <div class="title">{{Infomsg.name}}</div>
        </el-header>
        <el-main style="width:100%;">
            <div class="img" style="background:white">
                <img width="90%" height="200px" :src="Infomsg.image_url">
            </div>
            <div style="text-align:left;padding-left: 1rem;letter-spacing: 6px;">
                {{Infomsg.consultation}}
            </div>
        </el-main>
        <el-footer>
        </el-footer> 
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            Infomsg:[],
            id:this.$route.params.id
        }
    },
    methods:{
        goBack(){    
            this.$router.back(-1)
        },
    },
    mounted() {
                var _this = this
         this.$http.getToken().then(data=>{
             _this.token = data
             _this.$http.getInfomsg({
                 "token":data,
                 "id":_this.id
                 }).then(data=>{
                     _this.Infomsg = data[0]
                 })
         })
    },
}
</script>
<style scoped>
.header{
    color: white;
    background: linear-gradient(#369bff, #1d5f8c);
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
}
.title{
    padding-top: 40px;
    font-size:1.3rem;
    white-space:nowrap;
}
.img{
    box-shadow: -2px 0px 7px 1px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #b9b9b9; 
    background: white;
}

</style>