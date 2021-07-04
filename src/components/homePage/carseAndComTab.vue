<template>
  <div>
    <el-row :gutter="20" class="m-1" style="background-color: white; border-radius: 15px;padding: 2rem 0;">
      <!-- 轮播器 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="block">
          <el-carousel trigger="click" height="250px">
            <el-carousel-item v-for="carouselImg of carouselImgs" :key="carouselImg.text">
              <el-image :src="carouselImg.url" fit="none" style="height: 100%;border-radius: 15px;"></el-image>
              <div class="is-center carousel-item-page" style="border-radius: 15px 15px 0 0;">{{carouselImg.text}}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <!-- 中屏以上 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="hidden-md-and-down">
        <el-tabs type="border-card">
          <el-tab-pane v-for="comTab of comTabs" :key="comTab.name" :label="comTab.name">
            <ul>
              <li v-for="(posting,index) of comTab.postingList" :key="posting.title">
                <router-link :to="{path:'/postDetailPage', query:{postID:posting.id}}"><i>{{index+1}}</i>{{posting.title}}</router-link>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 中屏即以下 -->
      <el-col class="hidden-lg-and-up mt-3">
        <el-tabs type="border-card">
          <el-tab-pane v-for="comTab of comTabs" :key="comTab.name" :label="comTab.name">
            <ul>
              <li v-for="(posting,index) of comTab.postingList" :key="posting.title">
                <router-link :to="{path:'/postDetailPage', query:{postID:posting.id}}"><i>{{index+1}}</i>{{posting.title}}</router-link>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 因为图片路径问题，需要用import的方式导入
import carouselImg1 from '@/assets/首页大背景.jpg'
export default{
  name: 'carseAndComTab',
  data () {
    return {
      // 轮播器
      carouselImgs: [
        {
          url: carouselImg1,
          text: '广告1'
        },
        {
          url: carouselImg1,
          text: '广告2'
        },
        {
          url: carouselImg1,
          text: '广告3'
        },
        {
          url: carouselImg1,
          text: '广告4'
        },
        {
          url: carouselImg1,
          text: '广告5'
        }
      ],
      // 推荐栏数据
      comTabs: [
        {
          name: '最新主题',
          postingList: []
        },
        {
          name: '最新回复',
          postingList: [
            {
              title: 'LRtest1'
            },
            {
              title: 'LRtest2'
            },
            {
              title: 'LRtest3'
            },
            {
              title: 'LRtest4'
            },
            {
              title: 'LRtest5'
            },
            {
              title: 'LRtest6'
            }
          ]
        },
        {
          name: '热门主题',
          postingList: []
        },
        {
          name: '官方推荐',
          postingList: []
        }
      ]
    }
  },
  mounted () {
    let tempAllPosts = this.$store.state.allPosts
    let tempLength = tempAllPosts.length < 6 ? tempAllPosts.length : 6
    for (let n = tempAllPosts.length - 1; n > tempAllPosts.length - 1 - tempLength; n--) {
      this.comTabs[0].postingList.push(tempAllPosts[n])
    }
    let tempHotPosts = this.$store.getters.getMonthHotList
    tempLength = tempHotPosts.length < 6 ? tempHotPosts.length : 6
    this.comTabs[2].postingList = tempHotPosts.slice(0, tempLength)
    let tempRecommends = this.$store.getters.getAllHotList
    tempLength = tempRecommends.length < 6 ? tempRecommends.length : 6
    this.comTabs[3].postingList = tempRecommends.slice(0, tempLength)
  }
}
</script>

<style>
.el-carousel__item .el-image:hover{
  opacity: 0.9;
  transform: scale(1.02);
}
/* 轮播器内部text的样式 */
.carousel-item-page{
  text-align: center;
  position: absolute;
  top: 0;
  z-index: 1000px;
  left: 0;
  margin-left: 0;
  color: white;
  background-color: rgba(30,30,30,0.6);
  width: 100%;
}
.el-tabs--border-card{
  padding: 5px;
  border-radius: 15px;
}
</style>
