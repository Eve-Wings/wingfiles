<template>
  <div class="plate mt-4">
    <div class="plateTitle p-2 pl-3" style="color: red;">
      <h5 class="mb-0" style="display: inline;">{{mAPlateInfo.plateName}}</h5>
      <span class="moderator">版主：<a :href="mAPlateInfo.plateAdminUrl" style="font-weight: normal;" class="moderatorName">{{mAPlateInfo.plateAdmin}}</a></span>
    </div>

    <div class="py-2">
      <el-row class="platePartition" style="display: flex;flex-wrap: wrap;">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="mAClassical of mAClasses" :key="mAClassical.className" style="display:flex; border: 1px solid #DEE2E6; margin-top: 5px;">
          <el-row class="partitionsBody">
            <el-col :span="10"><div style="padding: 4px; border: 1px solid #eeeeee; border-radius: 15px;"><el-image :src="mAClassical.classImgUrl" fit="cover" style="height: 130px; max-height:130px;border-radius: 15px;" ></el-image></div></el-col>
            <el-col :span="14" style="padding: 0 15px; overflow: hidden;text-overflow: ellipsis;" class="classBody">
              <a :href="mAClassical.classUrl" class="mAClassName" style="color: black; position: absolute;top: 40%;">{{mAClassical.className}}</a>
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
  name: 'mAZone',
  data () {
    return {
      mAPlateInfo: {
        plateName: '管理协会',
        plateAdmin: '星空音',
        plateAdminUrl: ''
      },
      mAClasses: [{
        className: '用户反馈',
        classUrl: '',
        classImgUrl: partitionImg1
      },
      {
        className: '加入我们',
        classUrl: '',
        classImgUrl: partitionImg1
      },
      {
        className: '公告/友链',
        classUrl: '',
        classImgUrl: partitionImg1
      },
      {
        className: '举报',
        classUrl: '',
        classImgUrl: partitionImg1
      }]
    }
  }
}
</script>

<style>
  .mAClassName{
    font-size: 17px!important;
    font-weight: bold;
  }
  .mAClassName:hover{
    color: red!important;
  }
</style>
