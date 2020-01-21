<template>
  <div id="app">
    <div id="header">头部</div>
    <div class="main">
      <router-view />
    </div>

    <div class="footer">
      <div
        class="icon"
        :class="item.path===$router.history.current.fullPath?'act':''"
        v-for="(item) in tabs"
        :key="item.name"
        @click="changeTabs(item.path)"
      >
        <van-icon
          :name="item.icon"
          color="#fff"
          :size="item.path===$router.history.current.fullPath?'0.613333rem':'0.48rem'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tabs: [
        {
          name: "首页",
          icon: "wap-home",
          isclick: true,
          path: "/home"
        },
        {
          name: "个人中心",
          icon: "manager",
          isclick: false,
          path: "/mine"
        }
      ]
    };
  },
  methods: {
    changeTabs(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scope>
html,
body,
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
}
.main {
  flex: 1;
  overflow-y: auto;
}
.footer {
  height: 2.32rem;
  display: flex;
  justify-content: center;
  line-height: 2.32rem;
}
.footer .icon {
  height: 0.96rem;
  width: 0.973333rem;
  text-align: center;
  line-height: 1.2rem;
  background-color: #69b076;
  border-radius: 50% 50%;
  align-self: center;
}
.icon:nth-child(1) {
  margin-right: 0.853333rem;
}
.footer .act {
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.5rem;
}
</style>
