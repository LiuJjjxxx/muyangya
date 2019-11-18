<template>
    <div>
        <el-button  @click="goBack()" class="back"><i class="el-icon-back"></i></el-button>
        <router-link to="/Index/Bank">
                <el-button size="small" >兑换</el-button>
            </router-link>
            <router-link to="/Index/Exchange">
                <el-button size="small">借贷</el-button>       
        </router-link>
        <br>
        开发人员正在开发中哦
    </div>
</template>
<script>
export default {
    methods:{
          goBack(){    
            this.$router.back(-1)
        },
    }
}
</script>
<style scoped>

</style>