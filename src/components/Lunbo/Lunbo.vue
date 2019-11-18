<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img height="100%" width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574080803532&di=6cc4583bcf9e2d6ce2c8f7427700f628&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk3%2FM0A%2F7B%2FEB%2FQkbae91D159C1De6b7D18a18992922ba75.jpg">
          </div>
          <div class="swiper-slide">
            <img height="100%" width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574080863103&di=172c5318ce25c5e1bf91333eb279d854&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180704%2F4f735c72b640452b85f443b2a19ca3eb.jpeg">
          </div>
          <div class="swiper-slide">
            <img height="100%" width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574675652&di=aa3b9bc3086cf9211dd04050c6cbb2eb&imgtype=jpg&er=1&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2019%2F04%2F05%2F090616_5ca6aa083c1d9.jpg">
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
        }
    },
    props:['item'],
  mounted() {
    new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })        
  }
    
}
</script>
<style scoped>

.swiper-container {
/* Specify Swiper's Size: */
width: 95%;
height: 10rem;
border-radius: 20px;
}
.swiper-slide {
/* Specify Slides's Size: */
width: 100%;
height: 100%;
}
</style>