<template>
    <div class="Bank">
        <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>

        <el-header class="Bank-header"> 
            
            <router-link to="/Index/Bank">
                <el-button size="small" >兑换</el-button>
            </router-link>
            <router-link to="/Index/Exchange">
                <el-button size="small">借贷</el-button>       
            </router-link>
        </el-header>
        <el-main class="Bank-main">
            <div class="Bank-shop" >
                <router-link class="Bank-shop-msg"
                             :to="'/Index/Bank/'+index.id" 
                             v-for="index in goodsInfo" :key="index.id" 
                             tag="div" >
                        <div class="box">
                        <el-image 
                        style="width: 100%; height:110px"
                        lazy
                        :src="index.image_url">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image>
                        
                            <span>{{index.name}}</span>
                            <div>
                                <div style="color:red">
                                    <span style="font-size:5px">¥</span>
                                    {{index.prize_fraction}}
                                </div>
                                <div style="color:#adadad;font-size:5px;text-align:right">剩余:{{index.prize_number}}件</div>
                            </div>
                        </div>
                </router-link>     
            </div>
            
        </el-main>
    </div>

</template>
<script>
export default {
    data(){
        return{
            goodsInfo:[],
        }
    },
    mounted() {
        var _this = this
         this.$http.getToken().then(data=>{
             _this.$http.getGoods({"token":data}).then(data=>_this.goodsInfo = data)
         })
    },
    methods:{
          goBack(){    
            this.$router.back(-1)
        },
    }
}
</script>
<style scoped>
.box{
    padding: 5px;
    width:160px;
    height: 180px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px -15px black;
}
</style>