<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img height="100%" width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574760792&di=ff3199cf53a9e7dbe13eb9e253603522&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zjfc.edu.cn%2F__local%2FF%2F72%2F14%2FB36ED4C0F10793DBAE12A3770AF_597CB425_3CB9E1.jpg">
          </div>
          <div class="swiper-slide">
            <img height="100%" width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574080863103&di=172c5318ce25c5e1bf91333eb279d854&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180704%2F4f735c72b640452b85f443b2a19ca3eb.jpeg">
          </div>
          <div class="swiper-slide">
            <img height="100%" width="100%" src="http://seopic.699pic.com/photo/50037/6144.jpg_wh1200.jpg">
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
    margin-top: -28%;
}
.swiper-slide {
/* Specify Slides's Size: */
width: 100%;
height: 100%;
}
</style>