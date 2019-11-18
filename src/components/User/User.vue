<template>
    <el-container style="height:100%">
        <el-main>
            <div class="userheader">
                <p style="margin:0;padding-top:30px;color:white">我的</p>
                <p style="padding-top:5px;color:white">{{$store.state.userInfo.name}}</p>
            </div>
                <el-avatar :size="110" :src="$store.state.userInfo.image_url" style="margin-top: -20%;"></el-avatar>
            <div class="usermsg">
                <p style="padding-top:10px">身份:{{$store.state.userInfo.identity}}</p>
                <hr  style="background-color:#525db5a8;height: 1px;width:90%;border: none;">
            </div>
        </el-main>

    </el-container>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.userheader{
    background-image: linear-gradient(#9CECFB,#65C7F7,#0052D4);
    width:100%;
    height:180px;
    border-bottom-right-radius: 35%;
    border-bottom-left-radius: 35%;
}
.usermsg{
    border-radius: 30px;
    height: 250px;
    width: 95%;
    margin: auto;
    box-shadow: 0 5px 20px -15px black;
    background: white;
}
</style>