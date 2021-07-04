<template>
  <div>
    <div id="tagWindow" class="mt-3 mx-4 p-2" style="border-radius: 15px;background-color: white;">
      <h5 class="p-2 pl-3"
        style="border-bottom: 1px dashed rgba(96,96,96,0.6); color:gray;font-size: 1.3rem; font-weight: bold;">标签</h5>
      <div id="tags" style="height: 250px; overflow: auto">
        <el-tag v-for="tag of tags" :key="tag.label" :color="tag.type" :effect="tag.effect"
          style="font-size: 14px; margin: 4px;">
          <div @click="tagWindowClick()" style="cursor: pointer;" :style="{color:tag.fontColor}" @mouseover="changeTagColor(tag)"
            @mouseout="recoveryTagColor(tag)" :ref="tag.label">{{tag.label}}<i class="ml-2 bi bi-tags"></i></div>
        </el-tag>
      </div>
      <div class="p-2 mt-2" style="border-top: 1px dashed rgba(96,96,96,0.6); text-align: right;">
        <span @click="tagWindowClick()" style="cursor: pointer;" id="toTagsMore">More>></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'tagWindow',
  methods: {
    changeTagColor (tag) {
      let temp = tag.type
      tag.type = tag.fontColor
      tag.fontColor = temp
    },
    recoveryTagColor (tag) {
      let temp = tag.type
      tag.type = tag.fontColor
      tag.fontColor = temp
    },
    tagWindowClick () {
      this.$notify.info({
        title: '功能尚未完成',
        message: '标签功能尚未实装'
      })
    }
  },
  data () {
    return {
      tags: [{
        effect: 'dark',
        // dark\light\plain
        label: '日本',
        type: 'rgb(255,255,255)',
        fontColor: 'rgb(255,0,0)',
        url: ''
      },
      {
        effect: 'light',
        label: '基督教',
        type: 'rgb(64,158,255)',
        fontColor: 'white',
        url: ''
      },
      {
        effect: 'plain',
        label: '北欧',
        type: 'rgb(78, 255, 255)',
        fontColor: '#6699CC',
        url: ''
      },
      {
        effect: 'light',
        label: '唐风',
        type: 'gold',
        fontColor: '#FFFFFF',
        url: ''
      },
      {
        effect: 'dark',
        label: '宋朝',
        type: 'firebrick',
        fontColor: '#CCCCCC',
        url: ''
      },
      {
        effect: 'light',
        label: '法律',
        type: 'rgb(255, 0, 4)',
        fontColor: '#333333',
        url: ''
      },
      {
        effect: 'plain',
        label: '现代经济',
        type: 'goldenrod',
        fontColor: '#006699',
        url: ''
      },
      {
        effect: 'plain',
        label: '赛博朋克',
        type: 'yellow',
        fontColor: '#003399',
        url: ''
      },
      {
        effect: 'dark',
        label: '中古',
        type: 'gray',
        fontColor: '#FFFFCC',
        url: ''
      },
      {
        effect: 'light',
        label: '克苏鲁',
        type: 'rgb(0, 29, 111)',
        fontColor: '#6666FF',
        url: ''
      },
      {
        effect: 'light',
        label: 'IT从入门到放弃',
        type: 'rgb(0, 29, 111)',
        fontColor: '#6666FF',
        url: ''
      },
      {
        effect: 'dark',
        label: '地理',
        type: '#009966',
        fontColor: '#FFFF00',
        url: ''
      },
      {
        effect: 'light',
        label: '美食',
        type: '#9999CC',
        fontColor: '#FFCCCC',
        url: ''
      },
      {
        effect: 'plain',
        label: '法国',
        type: '#0000FF',
        fontColor: '#CCFFFF',
        url: ''
      },
      {
        effect: 'dark',
        label: '少女',
        type: '#CC3399',
        fontColor: '#FF99CC',
        url: ''
      }
      ]
    }
  }
}
</script>

<style>
  .el-tag div {
    text-decoration: none;
    outline: none;
    color: #000;
  }

  #toTagsMore {
    color: #99CCFF;
  }

  #toTagsMore:hover {
    color: #003366;
  }
</style>
