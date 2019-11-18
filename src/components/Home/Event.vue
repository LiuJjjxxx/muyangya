<template>
    <div>
        <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>

        <template>
            
            <el-select v-model="clickValue" filterable placeholder="请选择" @change="clickid(clickValue)" >
                <el-option
                v-for="item in options"
                :key="item.class_id"
                :label="item.class_name"
                :value="item.class_name">
                </el-option>
            </el-select>
        </template>
        <tr v-for="index in data" :key="index.name">
            
            <td>
                <el-avatar :size="60" :src="index.image"></el-avatar>
            </td>
            <td>{{index.name}}</td>
            <td>分数:{{index.student_fraction}}</td>
        </tr>
    </div>

</template>
<script>
export default {
    data(){
        return{
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

</style>