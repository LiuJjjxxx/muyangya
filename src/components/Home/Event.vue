<template>
    <div>
    <el-main >
        <div class="Top-header">
            <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>
                <el-select v-model="clickValue" filterable placeholder="班级选择" @change="clickid(clickValue)" >
                    <el-option
                    v-for="item in options"
                    :key="item.class_id"
                    :label="item.class_name"
                    :value="item.class_name">
                    </el-option>
                </el-select>
            <div >
                <div>
                    <p style="margin:0;color:white;font-size: 2rem;">排行榜</p>
                    <div class="Top3">
                        <div class="top" style="margin-top: 5%;">
                            <el-avatar :size="80" src="/static/1.jpg"></el-avatar>
                            <div class="width">
                                <span class="medal" style="border: 1px solid #9d9d9d;background:#d5d5d5;color:#787878">2</span>
                                <p class="m5">{{fdata[1].name}}</p>
                                <p class="m0">💰{{fdata[1].count}}</p>
                            </div>
                        </div>
                        <div class="top">
                            <el-avatar :size="80" src="/static/1.jpg"></el-avatar>
                            <div class="width">
                                <span class="medal" style="border: 1px solid #dd641d;background:#fec849;color:#e16122">1</span>
                                <p class="m5">{{fdata[0].name}}</p>
                                <p class="m0">💰{{fdata[0].count}}</p>
                            </div>
                        </div>
                        <div class="top" style="margin-top: 5%;">
                            <el-avatar :size="80" src="/static/1.jpg"></el-avatar>
                            <div class="width">
                                <span class="medal" style="border: 1px solid #a6603e;background:#f28b4e;color:#a6603e">3</span>
                                <p class="m5">{{fdata[2].name}}</p>       
                                <p class="m0">💰{{fdata[2].count}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
    </div>
            <div v-for="(index,item) in fdata" v-if="item >= 3" :key="index.name" class="down-div">
                <td style="width:15%;font-size:30px;transform: translateY(-10px);">{{item}}</td>
                <td style="width:15%">
                    <el-avatar :size="50" src="/static/1.jpg"></el-avatar>
                </td>
                <td style="width:50%;text-align: left;padding-left: 15px;">{{index.name}}</td>
                <td :class="{'goods':index.count>750}" style="width:20%;font-weight:900;font-size:1.3rem;letter-spacing:1px">
                    <span style="font-size: 0.8rem;letter-spacing: -0.4rem;">💰</span>
                    {{index.count}}</td>
            </div>
    </el-main>

    </div>

</template>
<script>
export default {
    data(){
        return{
            fdata:[
                {name:'刘嘉祥',count:'3000'},
                {name:'李讯络',count:'2000'},
                {name:'田志强',count:'1000'},
                {name:'谢文健',count:'955'},
                {name:'肖清辉',count:'800'},
                {name:'黄进明',count:'731'},
                ],
            options: null,
            clickValue: '',
            data:[],
            token:null
            }
    },
    mounted() {
        var _this = this
         this.$http.getToken().then(data=>{
             _this.$http.getClass({"token":data}).then(data=>_this.options = data)
         })
    },
    methods:{
        //返回上一个页面
        goBack(){    
            this.$router.back(-1)
        },
        clickid(val){
             var _this = this
             this.$http.getToken().then(data=>{
             _this.$http.getStudent({
                 "token":data,
                 "class_name":_this.clickValue,
             }).then(data=>_this.data = data)
         })
        }
    }
}
</script>
<style scoped>
.Top-header{
    width: 100%;
    height: 260px;
    background: linear-gradient(#4daae9, #2e94da);
}
.Top3{
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
}
.m5{
    margin-top: 5px;
    margin-bottom: 0px;
}
.m0{
    font-weight: 900;
    margin: 0px;
}
.top{
    width: 33%;
    height: 100px;
}
.width{
    margin-top: -10%;
    width: 100%;
    height: 30px;
    text-align: center;
}
.medal{
    padding: 5px 12px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
.down-div{
    border-bottom:1px solid #dadada;
    margin: 5px;
    padding-bottom:6px
}   
.goods{
    color: #f46701;
}
</style>