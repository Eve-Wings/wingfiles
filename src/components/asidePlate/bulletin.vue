<template>
  <div>
    <el-table :data="tableDate"
    stripe style="width: 85%;border-radius: 15px;" height="270" class="mx-auto mt-3">
      <el-table-column
      prop="notice"
      label="通知公告" style="width: 70%;">
      <template slot-scope="scope"><a :href="scope.row.url" style="overflow: hidden; text-overflow: ellipsis; display: block;white-space: nowrap;">{{scope.row.notice}}</a></template>
      </el-table-column>
      <el-table-column
      prop="date"
      style="width: 30%;"
      align="right">
      <template slot="header" slot-scope="scope"><a href="" id="tableMore">More>></a></template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'bulletin',
  data () {
    return {
      tableDate: [
        {
          notice: '本站版本更新',
          date: '2021-6-17',
          url: ''
        },
        {
          notice: '本站还在维护之中...',
          date: '2021-6-5',
          url: ''
        },
        {
          notice: '维护',
          date: '2021-6-2',
          url: ''
        },
        {
          notice: '儿童节快乐',
          date: '2021-6-1',
          url: ''
        },
        {
          notice: '重构项目开始',
          date: '2021-5-30',
          url: ''
        }
      ]
    }
  }
}
</script>

<style>

#tableMore{
  color: rgb(0,162,253);
}
#tableMore:hover{
  color: rgb(10, 78, 172);
}
</style>
