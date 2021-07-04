<template>
  <div>
    <div id="FCWindow" class="mt-3 mx-4 p-2" style="border-radius: 15px; background-color: white;max-height: 300px; overflow: hidden;">
      <h5 class="p-2 pl-3" style="border-bottom: 1px dashed rgba(96,96,96,0.6);color: gray;font-size: 1.3rem;font-weight: bold;">友情链接</h5>
      <div id="friendChains" style="height: 110px; overflow: auto;">
        <el-tag v-for="fC of friChans" :key="fC.label" effect="dark" style="font-size: 12px;margin:4px;">
          <div @click="friChansClick()" class="fChian" style="color: white;cursor: pointer;">{{fC.label}}<i class="bi bi-link-45deg ml-2"></i></div>
        </el-tag>
      </div>
      <div class="p-2 mt-2" style="border-top: 1px dashed rgba(96,96,96,0.6); text-align: right;">
        <span style="cursor: pointer;" @click="friChansClick()" id="toFCMore">More>></span>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'friendChainsWindow',
  data () {
    return {
      friChans: [{
        label: 'aki怀旧风1',
        url: ''
      },
      {
        label: 'aki怀旧风2',
        url: ''
      },
      {
        label: 'aki怀旧风3',
        url: ''
      },
      {
        label: 'aki怀旧风4',
        url: ''
      },
      {
        label: 'aki怀旧风5',
        url: ''
      },
      {
        label: 'aki怀旧风6',
        url: ''
      },
      {
        label: 'aki怀旧风7',
        url: ''
      },
      {
        label: 'aki怀旧风8',
        url: ''
      }]
    }
  },
  methods: {
    friChansClick () {
      this.$notify.info({
        title: '功能尚未完成',
        message: '友链功能尚未实装'
      })
    }
  }
}
</script>

<style>
#friendChains .el-tag--dark:hover{
  background-color: #336699;
}
.fChian:hover{
  color: white;
}
#toFCMore{
  color: #99ccff;
}
#toFCMore:hover{
  color: #036;
}
</style>
