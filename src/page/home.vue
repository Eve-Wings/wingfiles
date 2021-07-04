<template>
  <div  v-loading.fullscreen.lock = "!$store.state.allPostsReady" element-loading-text="加载中——Loading" element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <headerNav class="hidden-md-and-down"></headerNav>
    <headerNavMd class="hidden-lg-and-up"></headerNavMd>
    <el-main v-if="$store.state.allPostsReady">
      <!-- 欢迎语 -->
      <div id="welcomeTitle" style="margin-top: 120px;">
        <h2 class="font-weight-bold text-light">欢迎来到羽翼文件存储中心！</h2>
        <h3 class="text-light">Knowledge is power. ————Francis Bacon</h3>
      </div>
      <el-row :gutter="10" class="mt-5">
        <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17">
          <router-view></router-view>
        </el-col>
        <el-col :span="7" class="hidden-md-and-down">
          <asidePlate></asidePlate>
        </el-col>
      </el-row>
    </el-main>
    <foot class="hidden-md-and-down"></foot>
    <btmNav class="hidden-lg-and-up"></btmNav>
  </div>
</template>

<script>
import headerNav from '../components/header/headerNav.vue'
import headerNavMd from '../components/header/headerNavMd.vue'
import asidePlate from '../components/asidePlate.vue'
import foot from '../components/foot/footer.vue'
import btmNav from '../components/foot/buttomNav.vue'
export default {
  name: 'home',
  components: {
    headerNav,
    headerNavMd,
    asidePlate,
    foot,
    btmNav
  }
}
</script>

<style>
.el-header{
  padding: 0;
}
.el-main{
  width: 85%;
  margin: auto;
}
.text-light{
  color: #f8f9fa;
}
.font-weight-bold{
  font-weight: 700;
}
</style>
