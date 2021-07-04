<template>
  <div style="background-color: white; border-radius: 15px; margin-bottom: 80px;">
    <div class="pt-4 p-3" >
      <el-collapse class="mb-3 pb-3">
        <el-collapse-item title="分区选择">
          <div class="py-3" v-for="(rank, index) of rankings" :key="rank.label" style="text-align: center;cursor: pointer;" @click="pSelect(index)" :class="{isActive:isShow === index}">{{rank.label}}</div>
        </el-collapse-item>
      </el-collapse>
      <div >
        <div v-for="post of rankings[isShow].posts" :key="post.title" style="padding: 10px; border-bottom: 2px solid #ccc;">
          <el-row :gutter="20">
            <el-col :span="7" class="pt-2">
              <div style="padding: 3px; border: 1px solid #ccc; border-radius: 15px;">
                <el-image style="border-radius: 15px; width: 100%;" :src="$store.state.allPostsDetail[post.id].coverImgUrl"></el-image>
              </div>
            </el-col>
            <el-col :span="17" style="height: 35vh;">
              <router-link :to="{path:'/postDetailPage', query:{postID: post.id}}" class="postTitle">
                <h5 class="pt-3">{{post.title}}</h5>
              </router-link>
              <p class="pb-4">{{post.BI}}</p>
              <div style="position: absolute; right: 10px; bottom: 0;">
                <span><i class="bi bi-star"></i>热度: {{post.hot}}</span>
                <span style="font-size: 13px;" class="ml-3">上传时间:{{post.updataDate}} {{post.updataTime}}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default{
  name: 'rank',
  data () {
    return {
      isShow: 0,
      allUsers: [],
      rankings: [
        {
          label: '全部',
          posts: []
        },
        {
          label: '学习资料',
          posts: []
        },
        {
          label: '文学类',
          posts: []
        },
        {
          label: '艺术类',
          posts: []
        },
        {
          label: '工具书',
          posts: []
        },
        {
          label: '纪录片',
          posts: []
        },
        {
          label: '电影',
          posts: []
        },
        {
          label: '教学视频',
          posts: []
        },
        {
          label: '音频',
          posts: []
        }
      ]
    }
  },
  created () {
    let tempList = this.$store.getters.getAllHotList
    this.allUsers = this.$store.state.allUsers
    this.rankings[0].posts = tempList.slice(0, 10)
    for (let n = 0; n < this.rankings.length - 1; n++) {
      this.rankings[n + 1].posts = tempList.filter(post => post.classical === n + 1).slice(0, 10)
    }
  },
  methods: {
    pSelect (index) {
      this.isShow = index
    }
  }
}
</script>

<style>
.isActive{
  font-size: 1.2rem;
  color: #0000BC;
  padding: 3px;
  border: 2px solid #ccc;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #888888;
}
.postTitle{
  color: #00A2FD;
}
.postTitle:hover{
  color: #0000BC;
}
.el-collapse-item__header{
  font-size: 1.2rem;
}
</style>
