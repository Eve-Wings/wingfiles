<template>
  <div id="ranking" class="mt-3 mx-4 p-2" style="background-color: white; border-radius: 15px;">
    <h5 class="p-2 pl-3" style="border-bottom: 1px dashed    rgba(96,96,96,0.6);">排行榜</h5>
    <el-tabs type="card">
      <el-tab-pane v-for="singleRanking of rankings" :key="singleRanking.subListName" :label="singleRanking.subListName" style="margin: auto 0;">
        <ul style="margin-left: 10px; margin-right: 10px;">
          <li v-for="(post, index) of singleRanking.posts" :key="post.title" style="height: 5vh;overflow: hidden; text-overflow: ellipsis;">
            <router-link :to="{path:'/postDetailPage', query:{postID:post.id}}"><i>{{index + 1}}</i>{{post.title}}</router-link>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'ranking',
  data () {
    return {
      rankings: [
        {
          subListName: '日榜',
          posts: this.$store.getters.getRankingDailyList
        },
        {
          subListName: '周榜',
          posts: this.$store.getters.getRankingWeekList
        },
        {
          subListName: '月榜',
          posts: this.$store.getters.getRankingMonthList
        }
      ]
    }
  }
}
</script>

<style>

#ranking .el-tabs__nav{
  transform: translateX(30%)!important;
}
</style>
