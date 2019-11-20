<template>
    <el-container style="height:100%">
        <el-header height="40px">
            <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>
        </el-header>
        <el-main style="width:100%;">
            <div style="background:white">
                <img width="90%" height="200px" :src="GoodsInfo.image_url">
            </div>
            <div style="background: beige;text-align:left">
                <span style="padding: 0 55px;color: burlywood;">梅山小学自营</span>
                <span style="padding: 0 25px;color: burlywood;">100%正版</span>
            </div>
            <div class="GoodsInfo_msg">
                <div style="text-align:left;font-size:20px">{{GoodsInfo.name}}
                    <span style="font-size: 13px;background: beige;padding: 2px;">{{GoodsInfo.prize_classification}}</span>
                </div>
                <div style="text-align: left;padding-top:10px">
                    <p>商品描述</p>
                    {{GoodsInfo.prize_info | info}}
                </div>
                <div style="color:red;text-align:left;padding-top:15px">
                    <p>商品价格 ¥{{GoodsInfo.prize_fraction}}</p>
                </div>
                <div style="color:red;text-align:left;padding-top:15px">
                    商品规格:{{GoodsInfo.prize_specifications}}
                </div>
                <div style="color:red;text-align:left;padding-top:15px"> 
                    <p>商品剩余:{{GoodsInfo.prize_number}}</p>
                </div>
            </div>
        </el-main>
        <el-footer>
            <el-button type="danger" @click="buy"  round>购买</el-button>
        </el-footer> 
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            GoodsInfo:[],
            token:'',
            buydata:[],
        }
    },
    filters:{
        info:(val)=>{
            if(val === false)
                val = '暂无描述'
            return val
        }
    },
    methods:{
        goBack(){    
            this.$router.back(-1)
        },
        buy(){
            this.buydata ={
                token:this.token,
                p_id:this.$route.params.id,
                s_id:this.$store.state.userInfo.id,
                number:'1'
            }
            if(this.$store.state.userInfo.identity == '学生')
                this.$http.goodsExchange(this.buydata).then(data=>{
                    if(!data.state){
                        this.GoodsInfo.prize_number--
                        this.$store.state.userInfo.student_fraction -=this.GoodsInfo.prize_fraction
                        this.$message({
                                showClose: true,
                                message: data,
                                type: 'success',
                                center: true
                                })
                    }
                    else
                        this.$message({
                                    showClose: true,
                                    message: '您的金币不足,只有'+this.$store.state.userInfo.student_fraction+',请努力赚取金币吧～',
                                    type: 'error',
                                    center: true
                                    })
                })
            else
                this.$message({
                            showClose: true,
                            message: '您没有权限购买',
                            type: 'error',
                            center: true
                            })
            
        }
    },
    mounted() {
        var _this = this
         this.$http.getToken().then(data=>{
             _this.token = data
             _this.$http.getGoodsInfo({
                 "token":data,
                 "p_id":_this.id
                 }).then(data=>{
                     _this.GoodsInfo = data[0]
                 })
         })
    },
}
</script>
<style scoped>
.GoodsInfo_msg{
    margin: 10px
}
p{
    margin:10px 0px
}
</style>