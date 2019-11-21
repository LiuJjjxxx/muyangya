<template>
    <div class="Info" name="Info">
        <router-link :to="'/Index/Info/'+index.id" tag="div" class="Infomsg" v-for="index in Infolist" :key="index.id">
            <div class="title">{{index.name}}</div>
            <div class="img">
                <img class="imgInfo" :src="index.image_url">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Infolist:[]
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
.Infomsg{
    border-bottom: 1px solid #efe8e8;
    margin: 10px;
    display: flex;
}
.title{
    flex: 6;
    padding-top: 10px;  
}
.img{
    flex: 4
}
.imgInfo{
    width: 100px;
    height: 50px;
}

</style>