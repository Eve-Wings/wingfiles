<template>
  <div>
    <div style="width: 85%; text-align: center;" class="mx-auto pt-3">
      <div class="Logo"></div>
      <!-- 中屏以上 -->
      <el-form v-model="searchForm" style="width: 60vw; text-align: center;" class="mx-auto hidden-md-and-down">
        <el-form-item >
          <el-select v-model="searchForm.optionId" style="display: inline-flex; width: 22%; float: left;">
            <el-option v-for="option of options" :key="option.label" :label="option.label" :value="option.value"></el-option>
          </el-select>
          <el-input style="display: inline-flex;width: 55%; float: left;" v-model="searchForm.content" type="text" placeholder="在 站内 搜索,请输入您想搜索的内容" ></el-input>
          <el-button style="width: 23%; float: left;" @click="search()" :disabled="searchForm.content.trim().length === 0" >搜索<i class="bi bi-search ml-2"></i></el-button>
        </el-form-item>
      </el-form>
      <!-- 中屏以下 -->
      <el-form v-model="searchForm" style="width: 75vw; text-align: center;" class="mx-auto hidden-lg-and-up">
        <el-form-item >
          <el-select v-model="searchForm.optionId" style="display: inline-flex; width: 22%; float: left;">
            <el-option v-for="option of options" :key="option.label" :label="option.label" :value="option.value"></el-option>
          </el-select>
          <el-input style="display: inline-flex;width: 55%; float: left;" v-model="searchForm.content" type="text" placeholder="在 站内 搜索,请输入您想搜索的内容" ></el-input>
          <el-button style="width: 23%; float: left;" @click="search()" :disabled="searchForm.content.trim().length === 0" >搜索<i class="bi bi-search ml-2"></i></el-button>
        </el-form-item>
      </el-form>
      <!-- sm及以下 -->
      <div class="mt-5 mx-auto hidden-md-and-up" style="width: 75vw;">
        <div class="hotsearch mt-3" style="background-color: white; border-radius: 15px;">
          <div id="hotSearchTitle">
              <i class="bi bi-heart"></i>
              <span>热门搜索</span>
              <small class="ml-2">Daily Hot</small>
            </div>
            <div>
              <ul id="top10">
                <li v-for="(post, index) of hotSearchTopTen" :key="post.title"><router-link :to="{path:'/postDetailPage', query:{postID:post.id}}"><i>{{index + 1}}</i><span>{{post.title}}</span></router-link></li>
              </ul>
            </div>
          </div>
      </div>

      <!-- sm以上 -->
      <el-row :gutter="20" class="mt-5 mx-auto hidden-sm-and-down" style="width:60vw;">
        <el-col :xs="24" :sm="24" :md="14">
          <div class="hotsearch mt-3" style="background-color: white; border-radius: 15px;">
            <div id="hotSearchTitle">
              <i class="bi bi-heart"></i>
              <span>热门搜索</span>
              <small class="ml-2">Daily Hot</small>
            </div>
            <el-row :gutter="10">
              <el-col :xs="24" :sm="24" :md="12">
                <ul id="top10">
                  <li v-for="(post, index) of hotSearchTopTen" :key="post.title"><router-link :to="{path:'/postDetailPage', query:{postID:post.id}}"><i>{{index + 1}}</i><span>{{post.title}}</span></router-link></li>
                </ul>
              </el-col>
              <el-col :span="12" class="hidden-sm-and-down">
                <ul>
                  <li v-for="(post, index) of hotSearchTop20" :key="post.title"><router-link :to="{path:'/postDetailPage', query:{postID:post.id}}"><i>{{index + 11}}</i>{{post.title}}</router-link></li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10" class="hidden-sm-and-down">
          <div class="searchhistory mt-3 ml-2" style="background-color: white; border-radius: 15px; position: relative;">
            <div id="searchHistoryTitle">
              <i class="bi bi-clock"></i>
              <span>搜索记录</span>
              <small class="ml-2">History</small>
            </div>
            <div id="clearHistory" style="position: absolute;right: 10px; bottom: 10px;">
              <div>
                <i class="bi bi-trash"></i>
                删除记录
              </div>
            </div>
            <ul>
              <li v-for="history of searchHistory" :key="history.label"><router-link :to="history.url">{{history.label}}</router-link></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default{
  name: 'searchForm',
  data () {
    return {
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
      searchForm: {
        optionId: 0,
        content: ''
      },
      hotSearchTopTen: [],
      hotSearchTop20: [],
      searchHistory: [
        {
          label: '',
          url: ''
        }
      ]
    }
  },
  methods: {
    search () {
      // this.$router.push({path: '/searchResult', query: {searchForm: this.searchForm}})
      this.$router.push({name: 'searchResult', params: {searchForm: this.searchForm}})
    }
  },
  created () {
    let tempList = this.$store.getters.getAllHotList
    this.hotSearchTopTen = tempList.slice(0, 10)
    this.hotSearchTop20 = tempList.slice(10, 20)
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
  color: white;
  margin: 6vh auto;
}

.el-input__inner{
  height: 7vh;
  line-height: 7vh;
  font-size: 1rem;
}
.el-button{
  height: 7vh;
  line-height: 7vh;
  font-size: 1.2rem;
  padding: 0;
}
#hotSearchTitle,#searchHistoryTitle{
  margin-left: 10px;
  text-align: left;
}
#hotSearchTitle>i,#searchHistoryTitle>i{
  font-size: 1.5rem;
  color: rgb(230,107,147);
}
#hotSearchTitle>span,#searchHistoryTitle>span{
  font-size: 1.5rem;
}
#hotSearchTitle>small,#searchHistoryTitle>small{
  font-size: 0.8rem;
}

.hotsearch ul,.searchhistory ul{
  list-style: none;
  padding: 5px;
  padding-top: 15px;
}
.hotsearch li,
.searchhistory li {
  text-align: left;
  height: 1.8rem;
  line-height: 1.8rem;
  font-size: 0.9rem;
  border-bottom: 1px dotted #eee;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
.hotsearch,
.searchhistory {
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px 10px 20px 10px;
}
.hotsearch li i{
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
  padding: 1px;
}
#top10 li:first-of-type i{
  background-color: red;
}
#top10 li:nth-of-type(2) i{
  background-color: gold;
}
#top10 li:nth-of-type(3) i{
  background-color: greenyellow;
}
.hotsearch li a{
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #9a9a9a;
}
.hotsearch li a:hover{
  color: #121212;
  text-decoration: underline;
}

#clearHistory{
  color: #aaa;
  font-size: 0.9rem;
  cursor: pointer;
}
#clearHistory:hover{
  color: #232323;
}
</style>
