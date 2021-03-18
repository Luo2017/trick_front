<template>
    <div>
    <cube-tab-bar v-model="selectedLabel" show-slider>
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>
    
    <!--vue的过渡组件-->
    <transition
      :duration="{ enter: 100, leave: 100 }"
      mode="out-in"
    >
    <!--vue的动态组件,通过is选择组件-->
      <component
        :chapter-list="chapterList"
        :is="selectedLabel==='简介'?'Summary':'Catalog'"
        :video-info="videoInfo"
      ></component>
    </transition>
  </div>
</template>

<script>
import Summary from './Summary'
import Catalog from './Catalog'

export default {
    components:{
        Summary,
        Catalog
    },
    props:{
        videoInfo:{
            type: Object,
            required: true
        },
        chapterList:{
            type: Array,
            required: true
        },
        // 最后的逗号可加可不加
    },
    data(){
        return {
            selectedLabel: '简介',
            tabs: [
                {
                    label: '简介'
                },
                {
                    label: '目录'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>