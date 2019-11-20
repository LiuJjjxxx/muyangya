<template>
    <div class="Home">
        <div class="Home-header">
            <img src="../../../static/u25.png" >
        </div>
        <Lunbo :item="4"></Lunbo>
        <div class="Home-bar">
                <router-link 
                 v-if="$store.state.userInfo.identity != '学生'" 
                 class="router-hover link"
                 tag="div" to="/Index/Evaluate"
                 >
                    <p class="linkp">学生评价</p>
                    <i class="el-icon-arrow-right " style="font-size:40px;flex:2"></i>

                </router-link>
                <router-link class="router-hover link" tag="div"
                  to="/Index/Bank">
                    <p class="linkp">梅花银行</p>
                    <i class="el-icon-arrow-right" style="font-size:40px;flex:2"></i>
                </router-link>

                <router-link class="router-hover link" tag="div"
                  to="/Index/Event">
                    <p class="linkp">评价排名</p>
                    <i class="el-icon-arrow-right" style="font-size:40px;flex:2"></i>
                </router-link>
        </div>
       
    </div>

</template>
<script>
 import Lunbo from '@/components/Lunbo/Lunbo'
export default {
    data(){
        return{
            goodList:[]
        }
    },
    components:{
        Lunbo
    }
}
</script>
<style lang="scss" scoped>

p{
    padding: 0;
    margin: 0;
}
.router-hover:hover{
    background:rgba($color: #686868, $alpha: 0.2)
}
.Home-header{
    text-align:left;
    padding: 10px 0px;
    height: 150px;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
    background: linear-gradient(#369bff, #1d5f8c);
    img{
        padding: 5px 7px;
        width: 150px;
    }
}
</style>