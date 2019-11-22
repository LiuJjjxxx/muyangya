<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="index in imgInfo" :key="index.id">
            <img height="100%" width="100%" :src="index.image_url">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data(){
        return{
          imgInfo:[],
        }
    },
    props:['item'],
  mounted() {
        var _this =this
        this.$http.getToken().then(data=>{
            _this.$http.getLunbo(data).then(data=>{
              _this.imgInfo = data           
                }
              )
        });
      new Swiper ('.swiper-container', {
        autoplay:true,
        observer:true,
        observeParents:true,
        freeMode: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      });    

  }
    
}
</script>
<style scoped>

.swiper-container {
/* Specify Swiper's Size: */
width: 95%;
height: 10rem;
border-radius: 20px;
    margin-top: -28%;
}
.swiper-slide {
/* Specify Slides's Size: */
width: 100%;
height: 100%;
}
</style>