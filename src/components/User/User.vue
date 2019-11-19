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
                <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                <p v-if="$store.state.userInfo.student_fraction != null">💰金币剩余:{{$store.state.userInfo.student_fraction}}</p>
                <p v-if="$store.state.userInfo.teacher_fraction != null">💰金币剩余:{{$store.state.userInfo.teacher_fraction}}</p>

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
    background-image:linear-gradient(#4daae9, #2e94da);
    width:100%;
    height:180px;
    border-bottom-right-radius: 35%;
    border-bottom-left-radius: 35%;
}
.usermsg{
    border: 1px solid #c3c3c3;
    border-radius: 30px;
    height: 250px;
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
    box-shadow: 0px 14px 20px -15px black;
    background: white;
}
</style>