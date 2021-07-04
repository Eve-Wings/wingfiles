<template>
  <div>
    <div style="background-color: white;border-radius: 15px;" class="mt-1 pt-1 pb-2">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-3" style="line-height: 2.5rem; font-size: 1rem;">
        <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.classical[classid].title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 便签选择区 -->
    <div style="background-color: white; border-radius: 15px;" class="mt-3 pt-2 pb-3">
      <el-collapse style="width: 95%;" class="mx-auto">
        <el-collapse-item title="标签选择">
          <!-- tag组件 -->
          <tag v-for="tag of tags" :key="tag.label" :label="tag.label" :nums="tag.posts.length" @click.native="tagChoose(tag.id)" :istagActive="isActive(tag.id)"></tag>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 帖子展示区 -->
    <div class="mt-4 pt-2 pb-3" style="background-color: white; border-radius: 15px;">
      <!-- poster组件 -->
      <poster v-for="post of getShowPost(page)" :key="post.title" :post="post" :user="allUsers[post.updataUserID]"></poster>
      <!-- 分页器 -->
      <div class="mt-2 ml-auto" align="right">
        <el-pagination :hide-on-single-page="true" background layout="prev,pager,next" :total="Allpage*10" style="display: inline-block;" @click.native="toTop()" @current-change="handleCurrentChange" ></el-pagination>
      </div>
      <div v-if="Allpage === 1" align="center">
        <span style="color: rgb(150, 150, 150); font-style: italic;">没有更多了....</span>
      </div>
    </div>
  </div>
</template>

<script>
import tag from '../components/classicalPage/tag.vue'
import poster from '../components/classicalPage/poster.vue'
export default{
  name: 'classicalPage',
  components: {
    tag,
    poster
  },
  data () {
    return {
      classid: 0,
      tagsChoose: -1,
      Allpage: 0,
      page: 1,
      allPosts: [],
      tags: [],
      allUsers: []
    }
  },
  methods: {
    // 当标签被选择时，获取当前所选择的标签
    tagChoose (id) {
      if (this.tagsChoose === id) {
        this.tagsChoose = -1
      } else {
        this.tagsChoose = id
      }
      this.page = 1
    },
    // 当页面改变时，获取当前的页数
    handleCurrentChange (newPage) {
      this.page = newPage
    },
    // 根据所选标签得到帖子列表
    getPostList () {
      let postListTemp = []
      if (this.tagsChoose === -1) {
        postListTemp = this.allPosts
      } else {
        let tagchoose = this.tagsChoose
        postListTemp = this.tags[tagchoose].posts.map(postID => this.allPosts[postID])
      }
      this.Allpage = Math.ceil(postListTemp.length / 20)
      return postListTemp
    },
    // 根据当前页数展示帖子
    getShowPost (currentPage) {
      let postList = this.getPostList()
      let tempArr = []
      for (let n = postList.length - 1; n >= 0; n--) {
        tempArr.push(postList[n])
      }
      postList = tempArr
      let start = (currentPage - 1) * 20
      let end = currentPage * 20
      let showPost = postList.slice(start, end)
      return showPost
    },
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    },
    isActive (id) {
      return this.tagsChoose === id
    },
    // 获取 学习资料板块所拥有的文件标签
    gettags (allTags) {
      // 获取标签拥有的帖子
      let postsTagsList = this.allPosts.map(post => post.tags)
      let tempTagCount = []
      let tempTagList = []
      allTags.forEach(tag => {
        tempTagCount[tag.id] = 0
        tag.posts = []
      })
      for (let n = 0; n < postsTagsList.length; n++) {
        for (let m = 0; m < postsTagsList[n].length; m++) {
          allTags[postsTagsList[n][m]].posts.push(n)
          if (tempTagCount[postsTagsList[n][m]] === 0) {
            tempTagList.push(postsTagsList[n][m])
            tempTagCount[postsTagsList[n][m]]++
          }
        }
      }
      tempTagList.sort((a, b) => a - b)
      tempTagList.forEach(tagID => this.tags.push(allTags[tagID]))
      this.tags.forEach((tag, index) => { tag.id = index })
    }
  },
  created () {
    this.classid = this.$route.query.classID
    this.allPosts = this.$store.state.allPosts.filter(post => post.classical === Number(this.classid))
    let tempAllTags = this.$store.state.allTags
    this.gettags(tempAllTags)
    this.allUsers = this.$store.state.allUsers
  }
}

</script>

<style>
 .clearfix{
   zoom: 1;
 }
.clearfix:after{
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}
.el-collapse-item__header{
  font-size: 16px;
  font-weight: bold;
}
</style>
