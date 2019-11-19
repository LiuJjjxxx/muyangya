<template>
    <el-container class="Evaluate" style="height:100%">
        <el-header>
            <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>
                <el-select v-model="clickValue" filterable placeholder="请选择" @change="bb(clickValue)" >
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
        </el-header>
        <el-main height="100px" width="100px">
        <div class="Evaluate-form">
            <div :class="['Evaluate-div',{'click':index.num === clickdata.clicknum}]" v-for="index in data" :key="index.num" @click="clickme(index.name,index.num)">
                <el-avatar :size="60" :src="index.img"></el-avatar>
                <p>{{index.name}}</p>
            </div>
        </div>
        </el-main>
        <el-footer style="height:15px;border-top: 1px solid #c7c7c7;">
            <div>
                <p class="user-msg">姓名:{{clickdata.clickname}}</p>
                <p class="user-msg">学号:{{clickdata.clicknum}}</p>
            </div>
            <div>
                
                <p>评语</p>
                <textarea  rows='5' cols="40" placeholder="请输入您的评价" v-model="clickdata.msg"></textarea>
                <thead style="width:100%;display:flex">
                    <td class="w33">
                        <div :class="[{'choosed':clickdata.one},'el-icon-check']" @click="clickdata.one =!clickdata.one"></div>
                        <div>认真听讲</div>
                        </td>
                    <td class="w33">
                        <div :class="[{'choosed':clickdata.two},'el-icon-check']" @click="clickdata.two =!clickdata.two"></div>
                        <div>积极回答</div>
                        </td>
                    <td class="w33">
                        <div :class="[{'choosed':clickdata.three},'el-icon-check']" @click="clickdata.three =!clickdata.three"></div>
                        <div>活动奖励</div>
                    </td>
                </thead>
                <el-button @click="push()">提交</el-button>
            </div>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            options: [{
                value: '101',
                label: '一年级一班'
                }, {
                value: '102',
                label: '一年级二班'
                }, {
                value: '103',
                label: '一年级三班'
                }, {
                value: '104',
                label: '一年级四班'
                }, {
                value: '105',
                label: '一年级五班'
            }],
            clickValue: '',
            data:[{
                img:'/static/1.jpg',
                name:'刘嘉祥',
                num:'1001'
            },{
                img:'/static/1.jpg',
                name:'李讯络',    
                num:'1002',
            },{
                img:'/static/1.jpg',
                num:'1003',
                name:'田志强',    
            },{
                img:'/static/1.jpg',
                num:'1004',
                name:'谢文健'  
            },{
                img:'/static/1.jpg',
                num:'1005',
                name:'肖清辉'    
            },{
                img:'/static/1.jpg',
                num:'1006',
                name:'黄进明'    
            },{
                img:'/static/1.jpg',
                num:'1007',
                name:'王花花'    
            },{
                img:'/static/1.jpg',
                num:'1008',
                name:'木哈哈'    
            },{
                img:'/static/1.jpg',
                num:'1004',
                name:'谢文健'  
            },{
                img:'/static/1.jpg',
                num:'1005',
                name:'肖清辉'    
            },{
                img:'/static/1.jpg',
                num:'1006',
                name:'黄进明'    
            },{
                img:'/static/1.jpg',
                num:'1007',
                name:'王花花'    
            },{
                img:'/static/1.jpg',
                num:'1008',
                name:'木哈哈'    
            },{
                img:'/static/1.jpg',
                num:'1004',
                name:'谢文健'  
            },{
                img:'/static/1.jpg',
                num:'1005',
                name:'肖清辉'    
            },{
                img:'/static/1.jpg',
                num:'1006',
                name:'黄进明'    
            },{
                img:'/static/1.jpg',
                num:'1007',
                name:'王花花'    
            },{
                img:'/static/1.jpg',
                num:'1008',
                name:'木哈哈'    
            },],
            clickdata:{
                one:false,
                two:false,
                three:false,
                clickname:'',
                clicknum:'',
                msg:''
            }
            }
    },
    
    methods:{
        //返回上一个页面
        goBack(){    
            this.$router.back(-1)
        },
        bb(val){
            this.data =this.$http.ClassInfo(val)
        },
        clickme(name,num){
            this.clickdata.clickname = name
            this.clickdata.clicknum = num
        },
        push(){
            var _this = this
            _this.$http.getUser().then(data=>console.log(data))
        }
    }
}
</script>
<style scoped>
    .w33{
        width: 33.3%;
    }
    .el-icon-check{
        font-size: 50px;
    }
    .choosed{
        color: red
    }
    .click{
    background:linear-gradient(#ffffff, #b5bec4);
    }
    .user-msg{
        display: inline-block;
        width: 45%;
        margin: 0;
    }
</style>