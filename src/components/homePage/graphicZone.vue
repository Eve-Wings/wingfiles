<template>
  <div class="plate mt-4">
    <!-- 板块的标题 -->
    <div class="plateTitle p-2 pl-3" style="color: green;">
      <h5 class="mb-0" style="display: inline;">{{graphicPlateInfo.plateName}}</h5>
      <span class="moderator">版主：<a :href="graphicPlateInfo.plateAdminUrl" style="font-weight: normal;" class="moderatorName">{{graphicPlateInfo.plateAdmin}}</a></span>
    </div>
    <div class="py-2">
      <el-row class="platePartition" style="display: flex;flex-wrap: wrap;" >
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="graphicClassical of graphicClasses" :key="graphicClassical.className" style="display:flex; border: 1px solid #DEE2E6; margin-top: 5px;">
          <el-row class="partitionsBody">
            <el-col :span="10"><div style="padding: 4px; border: 1px solid #eeeeee; border-radius: 15px;"><el-image :src="graphicClassical.classImgUrl"  fit="cover" style="height: 130px; max-height:130px;border-radius: 15px;" ></el-image></div></el-col>
            <el-col :span="14" style="padding: 0 15px;overflow: hidden;text-overflow: ellipsis;" class="classBody">
              <router-link :to="{path:'/home/classicalPage',query:{classID: graphicClassical.classid}}" class="graphicClassName hidden-xs-only" style="color: black;">{{graphicClassical.className}}</router-link>
              <router-link :to="{path:'/home/classicalPage',query:{classID: graphicClassical.classid}}" class="graphicClassName hidden-sm-and-up" style="color: black; position: absolute; top:40%;">{{graphicClassical.className}}</router-link>
              <router-link class="hidden-xs-only" :to="{path:'/postDetailPage', query:{postID:classPost.id}}" :key="classPost.title" v-for="classPost of graphicClassical.lastPost">
                  <p>{{classPost.title}}</p>
                </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import partitionImg1 from '@/assets/首页大背景.jpg'

export default{
  name: 'graphicZone',
  data () {
    return {
      graphicPlateInfo: {
        plateName: '文学专区',
        plateAdmin: '星空音',
        plateAdminUrl: ''
      },
      graphicClasses: [
        {
          className: '学习资料',
          classid: 0,
          classImgUrl: partitionImg1,
          lastPost: []
        },
        {
          className: '文学类',
          classid: 1,
          classImgUrl: partitionImg1,
          lastPost: []
        },
        {
          className: '艺术类',
          classid: 2,
          classImgUrl: partitionImg1,
          lastPost: []
        },
        {
          className: '工具书',
          classid: 3,
          classImgUrl: partitionImg1,
          lastPost: []
        }
      ]
    }
  },
  created () {
    let tempPosts = this.$store.getters.getLMPosts
    let tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.graphicClasses[0].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getLTPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.graphicClasses[1].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getArtsPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.graphicClasses[2].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getRBPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.graphicClasses[3].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
  }
}
</script>

<style>
.graphicClassName{
  font-size: 17px!important;
  font-weight: bold;
}
.graphicClassName:hover{
  color: green!important;
}
.classBody p{
  margin-top: 10px;
}
</style>
