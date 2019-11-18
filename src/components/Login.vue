<template>
    <el-container class="Loginform">
        <el-main>
            <div class="head">
                <el-avatar :size="150" src="/static/1.jpg"></el-avatar>
            </div>
            <el-form :inline="true" :model="indexInfo">
                <el-form-item>
                    <h3>用户名</h3>
                    <el-input v-model="indexInfo.user" class="form-input" required placeholder="请输入用户名"></el-input>
                </el-form-item>
                <br>
                <el-form-item>
                    <h3>密码</h3>
                    <el-input v-model="indexInfo.password" required placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button round @click="login">登陆</el-button>
            <br>
            <br>
            <el-button round>注册</el-button>
        </el-main>
        <el-footer>
            <hr>
             <el-divider><i class="el-icon-mobile-phone"></i><span>忘记密码?</span></el-divider>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            indexInfo:{
                user:'',
                password:''
            }
        }
    },
    methods:{
        login(){            
            if( this.indexInfo.user == "" || this.indexInfo.password == ""){
                this.$message({
                    message:'账号或者密码不能为空',
                    center:true,
                    offset: 50, 
                })
                return false
            }
            if(this.indexInfo.user=="jiaxiang" && this.indexInfo.password=="jiaxiang"){
                fetch('../../static/api/UserInfo.json',{
                    method:'get'
                }).then(rs=>{
                    return rs.json()
                }).then(data=>{
                    this.$store.commit('getUser',data)
                    this.$router.push('/Index')
                })
                return false
            }
            
            if(this.indexInfo.user=="binjie" && this.indexInfo.password=="binjie"){
                fetch('../../static/api/UserInfog.json',{
                    method:'get'
                }).then(rs=>{
                    return rs.json()
                }).then(data=>{
                    this.$store.commit('getUser',data)
                    this.$router.push('/Index')
                })
                return false
            }
            else{
                this.$message({
                    message:'账号或者密码错误',
                    center:true,
                    offset: 50, 
                })

            }
        },
    },
    mounted() {

    },
}
</script>
<style scoped>
hr{
    border-color: rgba(255,255,255,.2);
}
h3{
    margin: 0;
}
span{
    color: white
}
</style>