<template>
    <el-container class="Evaluate" style="height:100%">
        <el-header>
            <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>
                <el-select v-model="clickValue" filterable placeholder="请选择班级" @change="clickid(clickValue)" >
                    <el-option
                    v-for="item in options"
                    :key="item.class_id"
                    :label="item.class_name"
                    :value="item.class_name">
                    </el-option>
            </el-select>
        </el-header>
        <el-main height="100px" width="100px">
        <div class="Evaluate-form">
            <div :class="['Evaluate-div',{'click':index.id === clickdata.s_id}]" v-for="index in data" :key="index.id" @click="clickme(index.name,index.id)">
                <el-avatar v-if="index.image != false" :size="50" :src="index.image"></el-avatar>
                <el-avatar v-else :size="50" src="/static/1.jpg"></el-avatar>
                <p>{{index.name}}</p>
            </div>
        </div>
        </el-main>
        <el-footer v-if="clickdata.s_id != null" style="height:15px;border-top: 1px solid #c7c7c7;">
            <div class="click_msg">
                <p class="user-msg">姓名:{{clickdata.clickname}}</p>
                <p class="user-msg">学号:{{clickdata.s_id}}</p>
            </div>
            <div>
                
                <p><i class="el-icon-medal"></i>评语</p>
                <textarea style="box-shadow: 1px 13px 12px -12px black;"  rows='5' cols="40" placeholder="请输入您的评价" v-model="clickdata.p"></textarea>
                <div>
                <thead class="tabs">
                    <td :class="['w33',{ 'choosed':clickdata.l_id.indexOf(index.id)!= -1}]" v-for="index in evaluate" :key="index.id">
                        <div :class="['el-icon-check']" @click="clickLabel(index.id)"></div>
                        <div>{{index.name}}</div>
                        </td>
                </thead>
                </div>
                <el-button @click="push()">提交</el-button>
            </div>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            data:[],//学生列表
            options: [],//班级列表
            clickValue: '',//选中的班级
            evaluate:[],
            clickdata:{
                token:'',
                clickname:'',
                s_id:null,
                l_id:[],
                p:'',
                t_id:this.$store.state.userInfo.id
            }
            }
    },
    
    methods:{
        //返回上一个页面
        goBack(){    
            this.$router.back(-1)
        },
        clickid(val){
             var _this = this
             this.$http.getToken().then(data=>{
             _this.clickdata.token = data
             _this.$http.getStudent({
                 "token":data,
                 "class_name":_this.clickValue,
             }).then(data=>{_this.data = data
             })
         })
        },
        clickme(name,id){
            if(this.clickdata.clickname === name){
                this.clickdata.clickname = ''
                this.clickdata.s_id = ''
            }
            else{
                this.clickdata.clickname = name
                this.clickdata.s_id = id
            }
            
            
        },
        push(){
            var _this = this
            if(_this.clickdata.s_id === null){
                    this.$message({
                            showClose: true,
                            message: '请选择要评论的学生',
                            type: 'error',
                            center: true
                            })
                            }
                else{
                _this.$http.pushEvaluate(_this.clickdata).then(data=>{
                    if(data.state === 'Success')
                        this.$message({
                            showClose: true,
                            message: '评价成功',
                            type: 'success',
                            center: true
                            })
                    else
                        this.$message({
                            showClose: true,
                            message: data.information,
                            type: 'error',
                            center: true
                            })
                })
            }
        },
        clickLabel(id){
            var local =this.clickdata.l_id.indexOf(id)
            if(local != -1){
                this.clickdata.l_id.splice(local,1)
                }
            else{
            this.clickdata.l_id.push(id)
                }
        }   
    },
     mounted() {
        var _this = this
         this.$http.getToken().then(data=>{
             _this.$http.getClass({"token":data}).then(data=>_this.options = data)
         })
        this.$http.getToken().then(data=>{
             _this.$http.getEvaluateLabel(data).then(data=>{_this.evaluate = data
             })
         })

    },
}
</script>
<style scoped>
    .w33{
        box-shadow: 3px -3px 13px -10px black;
        border: 1px solid black;
        margin: 0px 5px;
        border-radius: 20px;
        padding: 0px 17px;
    }
    .el-icon-check{
        font-size: 50px;
    }
    .tabs{
        margin: 20px 0;
        width: 100%;
        overflow-x: scroll;
        display: -webkit-box;
        display: flex;
        -webkit-flex-wrap:nowrap;
        flex-wrap:nowrap;
        -webkit-justify-content:space-between;
        justify-content:space-between;
    }
    .click{
    background:linear-gradient(#ffffff, #b5bec4);
    }
    .user-msg{
        display: inline-block;
        width: 45%;
        margin: 0;
    }
    .choosed{
        background: linear-gradient(#9CECFB,#65C7F7,#0052D4);
    }
    .click_msg{
        margin: 10px;
        background: #3499fa;
        border-radius: 10px;
    }
</style>