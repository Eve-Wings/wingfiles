<template>
  <div v-loading.fullscreen.lock = "!dataReady" element-loading-text="加载中——Loading" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
    <div id="detailPage" v-if="dataReady">
      <headerNav></headerNav>
      <div style="width: 80%;" class="mx-auto mt-5">
        <div style="background-color: white;border-radius: 15px;" class="mt-1 pt-1 pb-2">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-3" style="line-height: 2.5rem; font-size: 1rem;">
            <el-breadcrumb-item><router-link to="/home">首页</router-link></el-breadcrumb-item>
            <el-breadcrumb-item>
              <router-link :to="{path:'/home/classicalPage',query:{classID: allPosts[postID].classical}}">
                {{$store.state.classical[allPosts[postID].classical].title}}
              </router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{allPosts[postID].title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <el-card class="box-card mt-4" style="border-radius: 15px;">
          <div slot="header" class="clearfix">
            <div style="font-size: 1.5rem; font-weight: bold;">{{allPosts[postID].title}}
              <i style="float: right; cursor: pointer;" class="bi bi-bookmark-star-fill" :class="{mark:ismark}" @click="ismark = !ismark"></i>
            </div>
          </div>
          <div>
            <el-row :gutter="40">
              <el-col :md="24" :lg="12">
                <el-image :src="$store.state.allPostsDetail[postID].coverImgUrl" style="border-radius: 15px;"></el-image>
              </el-col>
              <el-col :md="24" :lg="12">
                <ul class="pr-0 border-0 postDetailList">
                  <li>上传时间:{{allPosts[postID].updataDate}} {{allPosts[postID].updataTime}}</li>
                  <li>上传者:
                    <router-link :to="$store.state.allUsers[allPosts[postID].updataUserID].url">
                      {{$store.state.allUsers[allPosts[postID].updataUserID].name}}
                    </router-link>
                  </li>
                  <li>作者：{{$store.state.allPostsDetail[postID].Author}}</li>
                  <li>总字数：{{$store.state.allPostsDetail[postID].totalNum}}</li>
                  <li>文件大小：{{$store.state.allPostsDetail[postID].fileMemory}}</li>
                  <li>下载量：{{$store.state.allPostsDetail[postID].downloadNum}}</li>
                  <li>在线阅读量：{{$store.state.allPostsDetail[postID].readOnlineNum}}</li>
                  <li class="hidden-md-and-down">标签：<tag v-for="tagID of allPosts[postID].tags" :key="$store.state.allTags[tagID].label" :label="$store.state.allTags[tagID].label" :nums="' '"></tag></li>
                  <!-- md以上 -->
                  <li class="mt-3 hidden-md-and-down ml-2">
                    <el-button type="primary" style="width: 8rem; height: 3rem;">开始观看</el-button>
                    <el-button type="info" class="ml-4" style="width: 8rem; height: 3rem;">
                      <i class="bi bi-download"></i>下载
                    </el-button>
                  </li>
                  <!-- md及以下 -->
                  <li class="mt-3 hidden-lg-and-up">
                    <el-button type="primary" style="width: 8rem; height: 3rem;">开始观看</el-button>
                  </li>
                  <li class="mt-3 hidden-lg-and-up">
                    <el-button type="info" style="width: 8rem; height: 3rem;">
                      <i class="bi bi-download"></i>下载
                    </el-button>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-card>

        <div class="mt-4 py-3" style="background-color: white; border-radius: 15px; margin-bottom: 100px;">
          <el-row :gutter="40">
            <!-- md以上 -->
            <el-col :span="17" class="hidden-md-and-down" style="border-right: 3px dashed #bbb;">
              <el-tabs class="mx-3">
                <el-tab-pane label="简介">
                  <div style="line-height: 1.8rem;">{{$store.state.allPostsDetail[postID].maxBI}}</div>
                </el-tab-pane>
                <el-tab-pane label="章节">
                  <div class="block ml-2">
                    <el-timeline>
                      <el-timeline-item v-for="(chap, index) in getShowChapPage(chapPage)" :key="index" size="large" style="cursor: pointer;">
                        {{chap.title}}
                      </el-timeline-item>
                    </el-timeline>
                    <div class="mt-2 ml-auto" align="right">
                      <el-pagination background layout="prev, pager, next" :total="chapAllPage * 10" @current-change="chapCurrentChange()"></el-pagination>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="评论">
                  <div class="ml-2">
                    <div v-for="(comment, index) of getShowCommentPage(commentPage)" :key="index" class="py-2" style="border-bottom: 2px solid #ccc;">
                      <el-row :gutter="20">
                        <el-col :span="4">
                          <div style="border: 1px solid #ccc; width: 85%; border-radius: 15px;" class="p-2">
                            <el-image :src="$store.state.allUsers[comment.userID].HPurl" style="width: 100%; height: 100px; border-radius: 15px;"></el-image>
                          </div>
                          <div style="text-align: center; width: 85%;" class="mt-2"><router-link :to="$store.state.allUsers[comment.userID].url">{{$store.state.allUsers[comment.userID].name}}</router-link></div>
                        </el-col>
                        <el-col :span="20">
                          <div class="mt-2 ml-2">{{$store.state.allUsers[comment.userID].HPurl}}</div>
                          <div class="mt-2 ml-2">{{comment.content}}</div>
                          <div class="commentTime">{{comment.date}} {{comment.time}}</div>
                          <div class="comment-reply">回复</div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="mt-2 ml-auto" align="right">
                      <el-pagination background layout="prev, pager, next" :total="commentsAllPage * 10" @current-change="commentCurrentChange()"></el-pagination>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="相关推荐" disabled></el-tab-pane>
              </el-tabs>
            </el-col>
            <!-- md及以下 -->
            <el-col :span="24" class="hidden-lg-and-up">
              <el-tabs class="mx-3">
                <el-tab-pane label="简介">
                  <div style="line-height: 1.8rem;">{{$store.state.allPostsDetail[postID].maxBI}}</div>
                </el-tab-pane>
                <el-tab-pane label="章节">
                  <div class="block ml-2">
                    <el-timeline>
                      <el-timeline-item v-for="(chap, index) in getShowChapPage(chapPage)" :key="index" size="large" style="cursor: pointer;">
                        {{chap.title}}
                      </el-timeline-item>
                    </el-timeline>
                    <div class="mt-2 ml-auto" align="right">
                      <el-pagination background layout="prev, pager, next" :total="chapAllPage * 10" @current-change="chapCurrentChange()"></el-pagination>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="评论">
                  <div class="ml-2">
                    <div v-for="(comment, index) of getShowCommentPage(commentPage)" :key="index" class="py-2" style="border-bottom: 2px solid #ccc;">
                      <el-row :gutter="20">
                        <el-col :span="4">
                          <div style="border: 1px solid #ccc; width: 85%; border-radius: 15px;" class="p-2">
                            <el-image :src="$store.state.allUsers[comment.userID].HPurl" style="width: 100%; height: 100px; border-radius: 15px;"></el-image>
                          </div>
                          <div style="text-align: center; width: 85%;" class="mt-2"><router-link :to="$store.state.allUsers[comment.userID].url">{{$store.state.allUsers[comment.userID].name}}</router-link></div>
                        </el-col>
                        <el-col :span="20">
                          <div class="mt-2 ml-2">{{$store.state.allUsers[comment.userID].HPurl}}</div>
                          <div class="mt-2 ml-2">{{comment.content}}</div>
                          <div class="commentTime">{{comment.date}} {{comment.time}}</div>
                          <div class="comment-reply">回复</div>
                        </el-col>
                      </el-row>
                    </div>
                    <div class="mt-2 ml-auto" align="right">
                      <el-pagination background layout="prev, pager, next" :total="commentsAllPage * 10" @current-change="commentCurrentChange()"></el-pagination>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="相关推荐" disabled></el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="7" class="hidden-md-and-down">
              <div class="mt-2 pb-2 rank" v-for="singleRanking of rankings" :key="singleRanking.subListName" style="margin: auto 0; width: 95%;">
                <h4 style="border-bottom: 1px solid #ccc;" class="py-2 pl-2">{{singleRanking.subListName}}</h4>
                <ul style="list-style: none;">
                  <li  v-for="(post, index) of singleRanking.posts" :key="post.title" style="line-height: 2rem;overflow: hidden; text-overflow: ellipsis;white-space: nowrap;">
                    <span @click="rankingClick(post)" class="rankingPosts ml-2" style="cursor: pointer;">
                      <i>{{index + 1}}</i>
                      {{post.title}}
                    </span>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <foot class="hidden-md-and-down"></foot>
      <btmNav class="hidden-lg-and-up"></btmNav>
    </div>
    <template>
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </template>
  </div>
</template>

<script>
import headerNav from '../components/header/headerNav.vue'
import foot from '../components/foot/footer.vue'
import btmNav from '../components/foot/buttomNav.vue'
import tag from '../components/classicalPage/tag.vue'
export default {
  name: 'postDetailPage',
  data () {
    return {
      ismark: false,
      postID: -1,
      allPosts: [],
      chapPage: 1,
      chapAllPage: 0,
      chapNum: 0,
      chapters: [],
      commentPage: 1,
      commentsAllPage: 0,
      commentsNum: 0,
      dataReady: false,
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
  },
  components: {
    headerNav,
    foot,
    btmNav,
    tag
  },
  created () {
    this.postID = Number(this.$route.query.postID)
    console.log(this.$store.state.allPosts[this.postID])
    let temp = this.$store.state.allPosts
    temp = temp.sort((a, b) => a.id - b.id)
    this.allPosts = temp
    this.dataReady = true
    this.commentsNum = this.$store.state.allPostsDetail[this.postID].comments.length
  },
  methods: {
    rankingClick (post) {
      console.log(post.id)
      console.log(this.allPosts[post.id])
      this.postID = post.id
      this.$router.push({path: '/postDetailPage', query: {postID: post.id}})
    },
    // 章节-分页器页数变动
    chapCurrentChange (newPage) {
      this.chapPage = newPage
    },
    // 根据页数显示章节
    getShowChapPage (currentPage) {
      this.chapNum = this.$store.state.allPostsDetail[this.postID].chapters.length
      let chapList = this.$store.state.allPostsDetail[this.postID].chapters
      this.chapAllPage = Math.ceil(chapList.length / 25)
      let start = (currentPage - 1) * 25
      let end = currentPage * 25
      let showChap = chapList.slice(start, end)
      return showChap
    },
    commentCurrentChange (newPage) {
      this.commentPage = newPage
    },
    getShowCommentPage (currentPage) {
      this.commentsNum = this.$store.state.allPostsDetail[this.postID].comments.length
      let commentList = this.$store.state.allPostsDetail[this.postID].comments
      this.commentsAllPage = Math.ceil(this.commentsNum / 25)
      let start = (currentPage - 1) * 25
      let end = currentPage * 25
      let showComment = commentList.slice(start, end)
      return showComment
    }
  }
}
</script>

<style>
.mark{
  color: gold;
}
.postDetailList{
  list-style: none;
  line-height: 2.5rem;
}
#detailPage .el-tabs__nav .el-tabs__item{
  font-size: 1.2rem;
}
.rankingPosts{
  color: black;
}
.rankingPosts:hover{
  color: #87CEEB;
}
.rankingPosts i {
  display: inline-block;
  margin-right: 10px;
  width: 2.2vh;
  height: 2.2vh;
  line-height: 2.2vh;
  text-align: center;
  font-size: 1.5vh;
  color: #fff;
  background: #ccc;
  text-shadow: 0 -1px 1px rgb(0 0 0 / 25%);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
}
.rank ul li:first-of-type i{
  background-color: red;
}
.rank ul li:nth-of-type(2) i{
  background-color: gold;
}
.rank ul li:nth-of-type(3) i{
  background-color: greenyellow;
}

.el-pager{
  display: inline-block!important;
}
.el-pager li{
  display: inline-block;
}

.commentTime{
  position: absolute;
  bottom: 2rem;
  right: 15px;
}
.comment-reply{
  position: absolute;
  bottom: 0;
  right: 15px;
  cursor: pointer;
  color: #282828;
}
.comment-reply:hover{
  color: #0593ff;
}
</style>
