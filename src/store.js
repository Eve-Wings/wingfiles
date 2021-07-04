import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerNav: '1',
    classical: [
      {
        id: 0,
        title: '图文专区-学习资料'
      },
      {
        id: 1,
        title: '图文专区-文学类'
      },
      {
        id: 2,
        title: '图文专区-艺术类'
      },
      {
        id: 3,
        title: '图文专区-工具书'
      },
      {
        id: 4,
        title: '视听专区-纪录片'
      },
      {
        id: 5,
        title: '视听专区-电影'
      },
      {
        id: 6,
        title: '视听专区-教学视频'
      },
      {
        id: 7,
        title: '视听专区-音频'
      },
      {
        id: 8,
        title: '论坛帖子'
      }
    ],
    allUsers: [],
    allPosts: [],
    allTags: [],
    allPostsDetail: [],
    allUsersReady: false,
    allPostsReady: false,
    allTagsReady: false,
    allPostsDetailReady: false
  },
  mutations: {
    setAllUsers (state, allUsers) {
      state.allUsers = allUsers
      state.allUsersReady = true
      console.log('the allUsers is ready')
    },
    setAllPosts (state, allPosts) {
      state.allPosts = allPosts
      state.allPostsReady = true
      console.log('the allPosts is ready')
    },
    setAllTags (state, allTags) {
      state.allTags = allTags
      state.allTagsReady = true
      console.log('the allTags is ready')
    },
    setAllPostsDetail (state, allPostsDetail) {
      state.allPostsDetail = allPostsDetail
      state.allPostsDetailReady = true
      console.log('the allPostsDetailReady is ready')
    },
    setHeaderNav (state, page) {
      state.headerNav = 'page'
    }
  },
  getters: {
    getLMPosts: state => {
      return state.allPosts.filter(post => post.classical === 0)
    },
    getLTPosts: state => {
      return state.allPosts.filter(post => post.classical === 1)
    },
    getArtsPosts: state => {
      return state.allPosts.filter(post => post.classical === 2)
    },
    getRBPosts: state => {
      return state.allPosts.filter(post => post.classical === 3)
    },
    getDMPosts: state => {
      return state.allPosts.filter(post => post.classical === 4)
    },
    getFilmsPosts: state => {
      return state.allPosts.filter(post => post.classical === 5)
    },
    getTVPosts: state => {
      return state.allPosts.filter(post => post.classical === 6)
    },
    getAFPosts: state => {
      return state.allPosts.filter(post => post.classical === 7)
    },
    getAllHotList: state => {
      return state.allPosts.sort((a, b) => b.hot - a.hot)
    },
    getDailyHotList: state => {
      return state.allPosts.sort((a, b) => b.dailyHot - a.dailyHot)
    },
    getWeekHotList: state => {
      return state.allPosts.sort((a, b) => b.weekHot - a.weekHot)
    },
    getMonthHotList: state => {
      return state.allPosts.sort((a, b) => b.monthHot - a.monthHot)
    },
    getRankingDailyList: state => {
      let tempDailyList = state.allPosts.sort((a, b) => b.dailyHot - a.dailyHot)
      let tempLength = tempDailyList.length < 10 ? tempDailyList : 10
      return tempDailyList.slice(0, tempLength)
    },
    getRankingWeekList: state => {
      let tempWeekList = state.allPosts.sort((a, b) => b.weekHot - a.weekHot)
      let tempLength = tempWeekList.length < 10 ? tempWeekList : 10
      return tempWeekList.slice(0, tempLength)
    },
    getRankingMonthList: state => {
      let tempMonthList = state.allPosts.sort((a, b) => b.monthHot - a.monthHot)
      let tempLength = tempMonthList.length < 10 ? tempMonthList : 10
      return tempMonthList.slice(0, tempLength)
    }
  }
})
