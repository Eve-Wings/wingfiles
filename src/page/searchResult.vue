<template>
  <div>
    <headerNav :menuItemIsActive="5" class="hidden-md-and-down"></headerNav>
      <div style="width: 80%; margin: 50px auto;">
        <div class="Logo"></div>
        <!-- md屏及以上 -->
        <el-form v-model="newSearchForm" style="width: 50vw;" class="mx-auto hidden-sm-and-down">
          <el-form-item>
            <el-select v-model="newSearchForm.optionId" style="display: inline-flex; width: 22%; float: left;">
              <el-option v-for="option of options" :key="option.label" :label="option.label" :value="option.value"></el-option>
            </el-select>
            <el-input style="display: inline-flex; width: 55%; float: left;" v-model="newSearchForm.content" type="text" placeholder="在 站内 搜索,请输入您想搜索的内容"></el-input>
            <el-button @click="search()" style="width: 23%;float: left;" :disabled="newSearchForm.content.trim().length === 0">搜索 <i class="bi bi-search ml-2"></i></el-button>
          </el-form-item>
        </el-form>
        <!-- md以下 -->
        <el-form v-model="newSearchForm" style="width: 70vw;" class="mx-auto hidden-md-and-up">
          <el-form-item>
            <el-select v-model="newSearchForm.optionId" style="display: inline-flex; width: 22%; float: left;">
              <el-option v-for="option of options" :key="option.label" :label="option.label" :value="option.value"></el-option>
            </el-select>
            <el-input style="display: inline-flex; width: 55%; float: left;" v-model="newSearchForm.content" type="text" placeholder="在 站内 搜索,请输入您想搜索的内容"></el-input>
            <el-button @click="search()" style="width: 23%;float: left;" :disabled="newSearchForm.content.trim().length === 0">搜索 <i class="bi bi-search ml-2"></i></el-button>
          </el-form-item>
        </el-form>
        <div class="mt-5">
          <div style="background-color: white; border: white; border-radius: 15px;">
            <div v-if="oriSearchForm.optionId !== 4">
              <div style="width: 95%; border-bottom: 1px solid #ccc;" class="mx-auto mt-4 pb-2 pt-3">一共搜索到 {{showSearchResult.length}} 个相关帖子</div>
              <div style="width: 95%; border-bottom: 1px solid #ccc;" class="mx-auto mt-4 pb-3" v-for="post of getShow()" :key="post.title">
                <router-link :to="post.url"><h5>{{post.title}}</h5></router-link>
                <div style="word-break: break-all;">{{post.BI}}</div>
                <div class="mt-4" style="text-align: right; font-size: 0.9rem;">所属分类:<router-link :to="classical[post.classical].url">{{classical[post.classical].title}}</router-link></div>
                <div class="mt-1" style="text-align: right;">上传人:<router-link :to="allUsers[post.updataUserID].url">{{allUsers[post.updataUserID].name}}</router-link><span style="font-size: 13px;" class="ml-3">上传时间:{{post.updataDate}} {{post.updataTime}}</span></div>
              </div>
              <div style="width: 95%; text-align: center; " class="mx-auto mt-3 pb-3" v-if="(oriSearchForm.optionId < 4 && getShow().length < 10) || (oriSearchForm.optionId === 4 && getShow().length < 15)">已经没有更多了</div>
              <!-- 分页器 -->
              <div class="mt-2 ml-auto pb-3" align="right">
                <el-pagination background layout="prev,pager,next"  @click.native="toTop()" :total="Allpage*10" @current-change="currentPageChange" :hide-on-single-page="true"></el-pagination>
              </div>
            </div>
            <div v-if="oriSearchForm.optionId === 4">
              <div style="width: 95%; border-bottom: 1px solid #ccc;" class="mx-auto mt-4 py-3">一共搜索到了 {{showSearchResult.length}} 个相关用户</div>
              <div style="width:95%;" class="mx-auto">
                <div style="width: 29%; border: 1px solid #ccc; border-radius: 5px; display: inline-flex;" class="mt-4 p-2 mx-3" v-for="user of getShow()" :key="user.name">
                  <router-link :to="user.url">
                    <el-row :gutter="5">
                      <el-col :span="10"><el-image style=" border-radius: 10px; width: 100%;" :src="user.HPurl"></el-image></el-col>
                      <el-col :span="14" class="pl-3">
                        <div class="my-4">
                          <p>{{user.name}}</p>
                          <p style="font-size: 0.7rem;width: 100%;overflow: hidden; text-overflow: ellipsis; color: #363636;">{{user.BI}}</p>
                        </div>
                      </el-col>
                    </el-row>
                  </router-link>
                </div>
                <div style="width: 95%; text-align: center; " class="mx-auto mt-3 pb-3" v-if="(oriSearchForm.optionId < 4 && getShow().length < 10) || (oriSearchForm.optionId === 4 && getShow().length < 15)">已经没有更多了</div>
                <!-- 分页器 -->
                <div class="mt-2 ml-auto pb-3" align="right">
                  <el-pagination background layout="prev,pager,next"  @click.native="toTop()" :total="Allpage*10" @current-change="currentPageChange" :hide-on-single-page="true"></el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <foot class="hidden-md-and-down"></foot>
  </div>
</template>

<script>
import headerNav from '../components/header/headerNav.vue'
import foot from '../components/foot/footer.vue'
export default{
  name: 'searchResult',
  components: {
    headerNav,
    foot
  },
  data () {
    return {
      // 当前页数
      page: 1,
      // 总页数
      Allpage: 0,

      options: [
        {
          value: 0,
          label: '综合'
        },
        {
          value: 1,
          label: '图文专区'
        },
        {
          value: 2,
          label: '视听专区'
        },
        {
          value: 3,
          label: '论坛帖子'
        },
        {
          value: 4,
          label: '用户'
        }
      ],

      oriSearchForm: {
        optionId: -1,
        content: ''
      },
      newSearchForm: {
        optionId: 0,
        content: ''
      },
      // 用于计数
      postSortCount: [],
      // 临时保存匹配到的帖子的ID
      tempSortList: [],
      // 用于保存经过筛选后的帖子
      allPostsExcluded: [],
      // 用于保存符合检索的用户名
      usersRetrieval: [],
      // 所有检索结果
      allSearchResult: [],
      // 输出序列
      showSearchResult: [],
      allPosts: [],
      allUsers: [],
      classical: [],
      tags: []
    }
  },
  methods: {
    getShow () {
      let allResult = this.showSearchResult
      if (this.oriSearchForm.optionId !== 4) {
        let start = (this.page - 1) * 10
        let end = (this.page) * 10
        let showResult = allResult.slice(start, end)
        return showResult
      } else {
        let start = (this.page - 1) * 15
        let end = this.page * 15
        let showResult = allResult.slice(start, end)
        return showResult
      }
    },
    currentPageChange (newPage) {
      this.page = newPage
    },
    search () {
      if (this.newSearchForm.optionId === this.oriSearchForm.optionId && this.newSearchForm.content === this.oriSearchForm.content) {
        return
      }
      if (this.newSearchForm.optionId !== this.oriSearchForm.optionId && this.newSearchForm.content === this.oriSearchForm.content) {
        this.page = 1
        if (this.oriSearchForm.optionId === 4) {
          this.tempSortList = []
          this.showSearchResult = []
          this.oriSearchForm.optionId = this.newSearchForm.optionId
          this.oriSearchForm.content = this.newSearchForm.content
          this.searchOn()
        }
        this.showSearchResult = []
        this.oriSearchForm.optionId = this.newSearchForm.optionId
        this.getShowResult()
      }
      if (this.newSearchForm.content !== this.oriSearchForm.content) {
        this.page = 1
        this.tempSortList = []
        this.showSearchResult = []
        this.oriSearchForm.optionId = this.newSearchForm.optionId
        this.oriSearchForm.content = this.newSearchForm.content
        this.searchOn()
      }
    },

    getSearchForm () {
      // if (this.$route.query.searchForm.optionId === undefined) {
      //   this.$router.push('/search')
      // }
      // if (this.$route.params.searchForm.optionId === undefined) {
      //   this.$router.push('/search')
      // }
      // this.oriSearchForm = this.$route.query.searchForm
      this.oriSearchForm = this.$route.params.searchForm
    },
    // 执行检索
    searchOn () {
      if (this.oriSearchForm.optionId === 4) {
        this.usersMatching()
        this.getShowResult()
      } else {
        this.tagMatching()
        this.postsMatching()
        this.usersMatching()
        if (this.usersRetrieval.length > 0) {
          this.getUsersPosts()
        }
        this.searchResultSort()
        this.getAllsearchResult()
        this.getShowResult()
      }
    },
    // 将帖子数据按照tag分类
    tagsPostsInventory () {
      let tempTagList = this.allPosts.map(post => post.tags)
      for (let i = 0; i < tempTagList.length; i++) {
        for (let j = 0; j < tempTagList[i].length; j++) {
          this.tags[tempTagList[i][j]].posts.push(i)
        }
      }
    },
    // 将tempSortList 中已经存储的帖子 从 allPosts 中排除
    postsFilter () {
      this.allPostsExcluded = this.allPosts.filter(post => this.postSortCount[post.id] === 0)
    },
    // 将 searchForm 中的 content 与 tags中的label匹配
    tagMatching () {
      // 初始化
      for (let n = 0; n < this.allPosts.length; n++) {
        this.postSortCount[n] = 0
      }
      this.tags.filter(tag => this.oriSearchForm.content.toLowerCase().indexOf(tag.label.toLowerCase()) !== -1).map(tag => tag.posts).forEach(posts => posts.forEach(postID => {
        if (this.postSortCount[postID] === 0) {
          this.postSortCount[postID]++
          this.tempSortList.push(postID)
        }
      }))
      this.postsFilter()
    },
    // 将剩余帖子的title、BI 与 search.content进行匹配
    postsMatching () {
      this.allPostsExcluded.filter(post => (post.title.toLowerCase().indexOf(this.oriSearchForm.content.toLowerCase()) !== -1) || (post.BI.toLowerCase().indexOf(this.oriSearchForm.content.toLowerCase()) !== -1)).forEach(post => {
        this.postSortCount[post.id]++
        this.tempSortList.push(post.id)
      })
      this.postsFilter()
    },
    // 检索匹配的用户名
    usersMatching () {
      this.usersRetrieval = this.allUsers.filter(user => user.name.toLowerCase().indexOf(this.oriSearchForm.content.toLowerCase()) !== -1)
    },
    // 将符合条件的用户的帖子存入tempSortList
    getUsersPosts () {
      this.usersRetrieval.forEach(user => {
        if (user.postID.length !== 0) {
          user.postsID.forEach(postID => {
            if (this.postSortCount[postID] === 0) {
              this.tempSortList.push(postID)
              this.postSortCount[postID]++
            }
          })
        }
      })
      this.postsFilter()
    },
    // 将筛选得到的结果的序列从大到小排序，以优先输出最新的帖子
    searchResultSort () {
      this.tempSortList = this.tempSortList.sort((a, b) => b - a)
    },
    // 得到所有检索结果
    getAllsearchResult () {
      this.allSearchResult = this.tempSortList.map(n => this.allPosts[n])
    },
    // 得到输出结果
    getShowResult () {
      switch (this.oriSearchForm.optionId) {
        case 0 : {
          this.showSearchResult = this.allSearchResult
          this.Allpage = this.showSearchResult.length / 10
          break
        }
        case 1 : {
          this.showSearchResult = this.allSearchResult.filter(post => post.classical < 4)
          this.Allpage = this.showSearchResult.length / 10
          break
        }
        case 2 : {
          this.showSearchResult = this.allSearchResult.filter(post => post.classical >= 4 && post.classical < 8)
          this.Allpage = this.showSearchResult.length / 10
          break
        }
        case 3 : {
          this.showSearchResult = this.allSearchResult.filter(post => post.classical === 8)
          this.Allpage = this.showSearchResult.length / 10
          break
        }
        case 4 : {
          this.showSearchResult = this.usersRetrieval
          this.Allpage = this.showSearchResult.length / 15
          break
        }
      }
    },
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },
  created () {
    this.getSearchForm()
    this.allPosts = this.$store.state.allPosts
    this.allUsers = this.$store.state.allUsers
    this.classical = this.$store.state.classical
    this.tags = this.$store.state.allTags
    this.tagsPostsInventory()
    this.searchOn()
    // 为什么不可以直接 this.newSearchForm = this.oriSearchForm ?
    // 因为对象是地址传值……会导致两者同步修改……
    this.newSearchForm.optionId = this.oriSearchForm.optionId
    this.newSearchForm.content = this.oriSearchForm.content
  }
}

</script>

<style>
.Logo::before {
  content: '羽翼文件|搜索'
}
.Logo {
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  color: skyblue;
  margin: 6vh auto;
}
a{
  color:rgb(0,162,253)
}
a:hover{
  color:#0000bc
}
</style>
<style src='../assets/css/bootstrap-icons.css'></style>
<style src='../assets/css/backgroundImg.css'></style>
