<template>
    <div class="Home">
        <div class="Home-header">
            <img src="../../../static/u25.png" >
        </div>
        <Lunbo :item="4"></Lunbo>
        <div class="Home-bar">
                <router-link 
                 v-if="$store.state.userInfo.leave != '学生'" 
                 class="router-hover link" 
                 style="background:linear-gradient(#0e96f5,#007AD4)"
                 tag="div" to="/Index/Evaluate"
                 >
                    <p class="linkp">学生评价</p>
                    <i class="el-icon-star-on " style="font-size:40px;flex:2"></i>

                </router-link>
                <router-link class="router-hover link" tag="div"
                style="background:linear-gradient(#e75743,#ce1801)"
                  to="/Index/Bank">
                    <p class="linkp">梅花银行</p>
                    <i class="el-icon-s-shop" style="font-size:40px;flex:2"></i>
                </router-link>

                <router-link class="router-hover link" tag="div"
                style="background:linear-gradient(#B64FF9,#9511EA)" 
                  to="/Index/Event">
                    <p class="linkp">评价报表</p>
                    <i class="el-icon-s-data" style="font-size:40px;flex:2"></i>
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
    background: linear-gradient(#4daae9, #2e94da);
    img{
        padding: 0px 5px;
        width: 150px;
    }
}
</style>