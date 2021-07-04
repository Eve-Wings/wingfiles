<template>
  <div>
    <div id="advertisingColumn" class="mt-3 mx-4 p-2" style="border-radius: 15px; background-color: white;">
      <div v-for="advert of adverts" :key="advert.name" class="advertisement">
        <a :href="advert.link">
          <el-image :src="advert.imgUrl" class="width:100%"></el-image>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import advertImg1 from '@/assets/首页大背景.jpg'
export default {
  name: 'advertisColumn',

  data () {
    return {
      adverts: [{
        name: '广告一',
        link: 'https://www.baidu.com',
        imgUrl: advertImg1
      },
      {
        name: '广告二',
        link: 'https://www.bilibili.com',
        imgUrl: advertImg1
      },
      {
        name: '广告三',
        link: ' ',
        imgUrl: advertImg1
      },
      {
        name: '广告四',
        link: ' ',
        imgUrl: advertImg1
      }]
    }
  }
}
</script>

<style>
</style>
