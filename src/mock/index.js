// 依赖导入
// const path = require('path')
// const fs = require('fs')
// const json5 = require('json5')
const Mock = require('mockjs')
const Random = require('mockjs').Random

// 随机用户数
let randomUsers = Math.round(Math.random() * (300 - 100) + 100)
// 随机标签数
let randomTags = Math.round(Math.random() * (100 - 10) + 10)
// 随机帖子/文件数
let randomPosts = Math.round(Math.random() * (200 - 100) + 100)

module.exports = function (app) {
  // 获取全部用户列表
  app.get('/user/allUsers', function (rep, res) {
    let allUsers = {
      list: []
    }
    for (let i = 0; i < randomUsers; i++) {
      let user = {
        id: i,
        name: '@cname()',
        postID: [],
        url: '',
        HPurl: Random.image('150x150', '#258bf7', '头像'),
        BI: '@cparagraph(1,3)'
      }
      allUsers.list.push(user)
    }
    var json = allUsers
    res.json(Mock.mock(json))
  })
  // 获取所有标签
  app.get('/post/allTags', function (rep, res) {
    let allTags = {
      list: []
    }
    for (let i = 0; i < randomTags; i++) {
      let tag = {
        id: i,
        label: '@ctitle(1,10)',
        posts: []
      }
      allTags.list.push(tag)
    }
    var json = allTags
    res.json(Mock.mock(json))
  })

  // 获取全部帖子列表
  app.get('/post/allPosts', function (rep, res) {
    let allPosts = {
      list: []
    }
    for (let p = 0; p < randomPosts; p++) {
      let post = {
        id: p,
        classical: Math.round(Math.random() * (8 - 0) + 0),
        tags: [],
        title: '@ctitle(1, 21)',
        BI: '@cparagraph(0, 5)',
        updataUserID: Math.round(Math.random() * (randomUsers - 100) + 100),
        updataDate: '@date(yyyy-MM-dd)',
        updataTime: '@time(HH:mm:ss)',
        url: '',
        hot: Math.round(Math.random() * (9999999 - 0) + 0),
        dailyHot: Math.round(Math.random() * (9999 - 0) + 0),
        weekHot: Math.round(Math.random() * (99999 - 0) + 0),
        monthHot: Math.round(Math.random() * (999999 - 0) + 0)
      }
      let postTags = Math.round(Math.random() * (10 - 1) + 1)
      for (let n = 0; n < postTags; n++) {
        post.tags.push(Math.round(Math.random() * (randomTags - 1 - 0) + 0))
      }
      allPosts.list.push(post)
    }
    var json = allPosts
    res.json(Mock.mock(json))
  })

  // 所有帖子的详细信息
  app.get('/post/allPostDetailInfo', function (rep, res) {
    let allPostDetailInfo = {
      list: []
    }
    for (let i = 0; i < randomPosts; i++) {
      let post = {
        id: i,
        coverImgUrl: Random.image('800x600', '#4A7BF7', '封面'),
        Author: '@cname()',
        totalNum: Math.round(Math.random() * (10000000 - 5000) + 5000),
        fileMemory: Math.round(Math.random() * (1023 - 1) + 1) + 'M',
        downloadNum: Math.round(Math.random() * (10000 - 0) + 0),
        readOnlineNum: Math.round(Math.random() * (100000 - 0) + 0),
        maxBI: '@cparagraph(0, 20)',
        chapters: [],
        comments: []
      }
      let chaptersNum = Math.round(Math.random() * (100 - 1) + 1)
      for (let n = 0; n < chaptersNum; n++) {
        let chap = {
          title: '第' + (n + 1) + '章：' + '@cparagraph(1)'
        }
        post.chapters.push(chap)
      }
      let commentsNum = Math.round(Math.random() * (100 - 0) + 0)
      for (let n = 0; n < commentsNum; n++) {
        let comment = {
          userID: Math.round(Math.random() * (randomUsers - 0) + 0),
          content: '@cparagraph(0, 5)',
          date: '@date(yyyy-MM-dd)',
          time: '@time(hh:MM:ss)'
        }
        post.comments.push(comment)
      }
      allPostDetailInfo.list.push(post)
    }
    var json = allPostDetailInfo
    res.json(Mock.mock(json))
  })
}
