<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './page/home.vue'
export default {
  name: 'App',
  components: {
    home
  },
  created () {
    this.axios.get('/user/allUsers')
      .then(res => {
        this.$store.commit('setAllUsers', res.data.list)
        this.toHome()
      })
      .catch(err => {
        console.log(err)
      })
    this.axios.get('/post/allTags')
      .then(res => {
        this.$store.commit('setAllTags', res.data.list)
        this.toHome()
      })
      .catch(err => {
        console.log(err)
      })
    this.axios.get('/post/allPosts')
      .then(res => {
        this.$store.commit('setAllPosts', res.data.list)
        this.toHome()
      })
      .catch(err => {
        console.log(err)
      })
    this.axios.get('/post/allPostDetailInfo')
      .then(res => {
        this.$store.commit('setAllPostsDetail', res.data.list)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    toHome () {
      if (this.$store.state.allUsersReady && this.$store.state.allPostsReady && this.$store.state.allTagsReady) {
        this.$router.push({path: '/home'})
      }
    }
  }
}
</script>

<style>
/* 滚动条样式 */
::-webkit-scrollbar{
  width: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 6px rgba(0,0,0,0.3);
  border-radius: 5px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background: rgba(0,0,0,0.7);
  -webkit-box-shadow: inset 6px rgba(0,0,0,0.5);
}
/* 滚动条非激活窗口 */
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(225, 77, 2, 0.4);
}
</style>
<style src="@/assets/css/bootstrap-icons.css"></style>
<style src="@/assets/css/common.css"></style>
