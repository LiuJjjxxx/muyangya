<template>
    <el-main>
        <div>
            <h1 class="School-header">校园动态</h1>
            <h4 class="School-header-en">Campus Dynamic</h4>
        </div>
        
        <div class="Info" name="Info">
            <router-link :to="'/Index/Info/'+index.id" tag="div" class="Infomsg"  v-for="index in Infolist" :key="index.id">
                <div class="title">
                    <p style="margin:0px">{{index.name}}</p>
                    <p class="msg" >{{index.consultation | rough}}</p>
                </div>
                <div class="img">
                    <img class="imgInfo" :src="index.image_url">
                </div>
            </router-link>
        </div>
    </el-main>
</template>
<script>
export default {
    data(){
        return{
            Infolist:[]
        }
    },
    filters:{
        rough:(val)=>{
             val = val.slice(0,15)+'....'
             return val
        }
    },
    mounted() {
        var _this =this
        this.$http.getToken().then(data=>{
            _this.$http.getInfo(data).then(data=>{
                _this.Infolist = data
                }
              )
        });
    },
}
</script>
<style scoped>
.Info{
    margin-top: 2.1rem;
}
.Infomsg{
    border-bottom: 1px solid #efe8e8;
    margin: 10px;
    display: flex;
    margin-top: 2.1rem;
}
.title{
    text-align: left;
    flex: 6;
    margin-top: -0.3rem;
}
.img{
    flex: 4
}
.imgInfo{
    width: 100px;
    height: 50px;
}
.School-header{
    font-family: cursive;
    text-align: left;
    padding-left: 1rem;
    margin: 10px 0;
}
.School-header-en{
    text-align: left;
    padding-left: 1rem;
    margin: 10px 0px;
    color: #afadad;
}
.msg{
    margin-top: 1.15rem;
    margin-bottom: 0px;
    font-size:10px;
    color: #969696;
}
</style>