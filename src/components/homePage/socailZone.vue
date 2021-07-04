<template>
  <div class="plate mt-4">
    <!-- 板块的标题 -->
    <div class="plateTitle p-2 pl-3" style="color: pink;">
      <h5 class="mb-0" style="display: inline;">{{plateInfo.plateName}}</h5>
      <span class="moderator">版主:
        <a :href="plateInfo.plateAdminUrl" style="font-weight: normal;" class="moderatorName">{{plateInfo.plateAdmin}}</a>
      </span>
    </div>
    <!-- 板块的内容 -->
    <div class="py-2 partitionsBody" v-for="partition of partitions" :key="partition.partitionName">
      <el-row class="ml-2 platePartition media">
        <el-col :span="8">
          <div style="padding: 4px; border: 1px solid #eeeeee; border-radius: 15px;">
            <el-image width="100%" :src="partition.partitionImgUrl" style="height: 125px; max-height: 125px; border-radius: 15px;" >
            </el-image>
          </div>
        </el-col>
        <el-col :xs="7" :sm="7" :md="6" :lg="6" :xl="6" class="media-body my-auto" style="text-align: center;">
          <a :href="partition.partitionUrl" class="partitionName">{{partition.partitionName}}</a>
          <p style="margin: 0;font-size: 1.5vh;">已有帖子:{{partition.partitionPostNum}}</p>
        </el-col>
        <el-col :xs="1" :sm="1" :md="4" :lg="4" :xl="4" class="media-body my-auto hidden-md-and-down" style="text-align: center;font-size: 1vh;">
          <span>{{partition.lastDate}}</span>
          <span>{{partition.lastTime}}</span>
        </el-col>
        <el-col :xs="9" :sm="9" :md="9" :lg="6" :xl="6" class="media-body my-auto px-2" style="text-align: center;overflow: hidden;">
          <a :href="partition.lastPost[0].url">{{partition.lastPost[0].title}}</a>
          <a :href="partition.lastPost[1].url">{{partition.lastPost[1].title}}</a>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>

import partitionImg1 from '@/assets/首页大背景.jpg'
export default{
  name: 'socailZone',
  data () {
    return {
      plateInfo: {
        plateName: '社交专区',
        plateAdmin: '星空音',
        plateAdminUrl: ''
      },
      partitions: [{
        partitionName: '新人报到',
        partitionUrl: '',
        partitionImgUrl: partitionImg1,
        partitionPostNum: 233,
        lastTime: this.getTime(),
        lastDate: this.getDate(),
        lastPost: [{
          title: '【新人报到】这里是素章，请多指教',
          url: ''
        },
        {
          title: '【新人报到】原来还有这个网站啊',
          url: ''
        }]
      },
      {
        partitionName: '论坛交流',
        partitionUrl: '',
        partitionImgUrl: partitionImg1,
        partitionPostNum: 333,
        lastTime: this.getTime(),
        lastDate: this.getDate(),
        lastPost: [{
          title: '【新人报到】这里是素章，请多指教',
          url: ''
        },
        {
          title: '【新人报到】原来还有这个网站啊',
          url: ''
        }]
      },
      {
        partitionName: '聊天室',
        partitionUrl: '',
        partitionImgUrl: partitionImg1,
        partitionPostNum: 433,
        lastTime: this.getTime(),
        lastDate: this.getDate(),
        lastPost: [{
          title: '【新人报到】这里是素章，请多指教',
          url: ''
        },
        {
          title: '【新人报到】原来还有这个网站啊',
          url: ''
        }]
      }]
    }
  },
  methods: {
    getTime () {
      let Da = new Date()
      let time = (Da.getHours()) + ':' + (Da.getMinutes()) + ':' + (Da.getSeconds())
      return time
    },
    getDate () {
      let Da = new Date()
      let date = '20' + (Da.getYear() - 100) + '-' + (Da.getMonth() + 1) + '-' + Da.getDate()
      return date
    }
  }
}
</script>

<style>
.plate{
  background-color: white;
  border-radius: 15px;
  border: 1px solid #dee2e6;
}
.plateTitle{
  border-bottom: 1px solid #dee2e6;
  font-weight: bold;
}

.moderator{
  float: right;
}
.moderatorName{
  color: #007bFF;
  text-decoration: none;
}
.moderatorName:hover{
  color: #0056b3;
  text-decoration: underline;
}

.platePartition{
  position: relative;
  display: -ms-flexbox;
  display: flex;
  align-items: flex-start;
}
.partitionName{
  font-size: 3vh!important;
  color: black!important;
}
.partitionName:hover{
  color: pink!important;
}
.partitionsBody a{
  color: #a2a2a2;
  font-size: 1.5vh;
  max-width: 170px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.partitionsBody a:hover{
  color: skyblue;
}

.partitionsBody{
  width: 100%;
  border-bottom: 1px solid #dee2e6;
}
.partitionsBody:last-of-type{
  border: 0;
}
.partitionsBody .media-body:last-of-type{
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
