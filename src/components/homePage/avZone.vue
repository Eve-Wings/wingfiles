<template>
  <div class="plate mt-4">
    <div class="plateTitle p-2 pl-3" style="color: gold;">
      <h5 class="mb-0" style="display: inline;">{{avPlateInfo.plateName}}</h5>
      <span class="moderator">版主:<a :href="avPlateInfo.plateAdminUrl" style="font-weight: normal;" class="moderatorName">{{avPlateInfo.plateAdmin}}</a></span>
    </div>

    <div class="py-2">
      <el-row class="platePartition" style="display: flex;flex-wrap: wrap;">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="avClassical of avClasses" :key="avClassical.className" style="display:flex; border: 1px solid #DEE2E6; margin-top: 5px;">
          <el-row class="partitionsBody">
            <el-col :span="10"><div style="padding: 4px; border: 1px solid #eeeeee; border-radius: 15px;"><el-image :src="avClassical.classImgUrl" fit="cover" style="height: 130px; max-height:130px; border-radius: 15px;" ></el-image></div></el-col>
            <el-col :span="14" style="padding: 0 15px;overflow: hidden;text-overflow: ellipsis;" class="classBody">
              <router-link :to="{path:'/home/classicalPage',query:{classID: avClassical.classid}}" class="avClassName hidden-xs-only" style="color: black;">{{avClassical.className}}</router-link>
              <router-link :to="{path:'/home/classicalPage',query:{classID: avClassical.classid}}" class="avClassName hidden-sm-and-up" style="color: black;position: absolute; top: 40%;">{{avClassical.className}}</router-link>
              <router-link class="hidden-xs-only" :to="{path:'/postDetailPage', query:{postID:classPost.id}}" :key="classPost.title" v-for="classPost of avClassical.lastPost">
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
  name: 'avZone',
  data () {
    return {
      avPlateInfo: {
        plateName: '视听专区',
        plateAdmin: '星空音',
        plateAdminUrl: ''
      },
      avClasses: [{
        className: '纪录片',
        classid: 4,
        classImgUrl: partitionImg1,
        lastPost: []
      },
      {
        className: '电影',
        classid: 5,
        classImgUrl: partitionImg1,
        lastPost: []
      },
      {
        className: '教学视频',
        classid: 6,
        classImgUrl: partitionImg1,
        lastPost: []
      },
      {
        className: '音频',
        classid: 7,
        classImgUrl: partitionImg1,
        lastPost: []
      }]
    }
  },
  created () {
    let tempPosts = this.$store.getters.getDMPosts
    let tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.avClasses[0].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getFilmsPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.avClasses[1].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getTVPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.avClasses[2].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
    tempPosts = this.$store.getters.getAFPosts
    tempLength = tempPosts.length < 4 ? tempPosts.length : 4
    for (let n = 0; n < tempLength; n++) {
      this.avClasses[3].lastPost.push(tempPosts[tempPosts.length - 1 - n])
    }
  }
}

</script>

<style>
.avClassName{
  font-size: 17px!important;
  font-weight: bold;
}
.avClassName:hover{
  color: gold!important;
}
.classBody p{
  margin-top: 10px;
}
</style>
