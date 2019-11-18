<template>
    <el-container class="Index">
        <el-main>
        <transition mode="out-in">
            <router-view/>
        </transition>
        </el-main>
        <el-footer style="border-top: 1px #96969661 solid;padding-top: 1px;">
            <thead class="Index-thead">
                    <router-link tag="td"  to="/Index/Home"><div><i class="el-icon-school"></i><p>首页</p></div></router-link>
                    <router-link tag="td"  to="/Index/Info"><div><i class="el-icon-reading"></i><p>资讯</p></div></router-link>    
                    <!-- <router-link tag="td"  to="/Index/Car"><div><i class="el-icon-shopping-cart-1"></i><p>购物车</p></div></router-link>    -->
                    <router-link tag="td"  to="/Index/User"><div><i class="el-icon-user"></i><p>我的</p></div></router-link>            
            </thead>
        </el-footer>
    </el-container>
</template>
<script>
import bb from 'axios'
import * as dd from 'dingtalk-jsapi'
export default {
    data(){
        return{
            code : null, 
      }
    },
    created(){
        var _this = this 
            dd.ready(function() {
            // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
            dd.runtime.permission.requestAuthCode({
                corpId: "dinge2641b98ea22599c35c2f4657eb6378f",
                onSuccess: function(result) {
                 _this.code = result.code
                 _this.$http.getUser(_this.code).then(data =>{ 
                     _this.$store.commit('getUser',data[0])
                     })
                },
                onFail : function(err) {}
            });
        });
    },
    methods:{
    }
}
</script>
<style>

</style>