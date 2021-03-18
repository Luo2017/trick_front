<template>
  <div class="tab">
    <!-- v-model要随便绑定一个值 -->
    <cube-tab-bar v-model="selectedLabelSlots" @click="clickHandler">
      <!-- value指的是跳转的路径，key值是唯一的所以用item.path，:icon表示绑定v-bind -->
      <cube-tab
        v-for="(item) in tabs"
        :icon="item.icon"
        :label="item.label"
        :key="item.path"
        :value="item.path"
      ></cube-tab>
    </cube-tab-bar>
  </div>
</template>

// 在js中用/来注释，在html标签中注释<!-- -->
// 通过export可以使得外部可以进行调用，由于是default可以用任意名称进行调用，即commonfooter来进行调用
<script>
export default {
  //data()指的是数据源
  data() {
    return {
      selectedLabelSlots: "/", //默认打开时的路径
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "订单",
          icon: "cubeic-mall", //可以在官方文档的style中找
          path: "/order",
        },
        {
          label: "我的",
          icon: "cubeic-person",
          path: "/personal",
        },
      ],
    };
  },
  methods: {
    clickHandler(path) {
      //this.$route.path是当前路径
      if (path !== this.$route.path) {
        this.$router.push(path); //导航到新的path，并且将新path放到历史记录中
      }
    },
  },
  created() {
    //默认路路由选择器器，⽐比如刷新⻚页⾯面，需要重新进到当前路路由
    this.selectedLabelSlots = this.$route.path;
  },
};
</script>

// <!--SCSS是⼀一种CSS预处理理语⾔言, scoped 是指这个scss样式 只作⽤用于当前组件-->
// 这说明在js文件中也可以放style文件需要注意的是.tab是针对 class属性而言的
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  font-size: 10;
  background-color: rgb(252, 252, 252);
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.cube-tab_active {
  color: #4694f9;
}
</style>