<template>
  <div id="app">
    <div id="header">头部</div>
    <div class="main">
      <router-view />
    </div>

    <div class="footer">
      <div
        class="icon"
        v-for="(item) in tabs"
        :key="item.name"
        @click="changeTabs(item.path)"
      >
        <van-icon :name="item.icon" color="#fff" size="0.533333rem" />
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
          isclick: true,
          path: "/mine"
        }
      ]
    };
  },
  methods: {
    changeTabs(path) {
      window.console.log(this.$router);

      this.$router.push(path);
    }
  },
  components: {
    // Home,Mine
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
  height: 1.786667rem;
  display: flex;
  justify-content: center;
}
.footer .icon {
  height: 0.96rem;
  width: 0.973333rem;
  text-align: center;
  line-height: 1.2rem;
  background-color: #69b076;
  border-radius: 50% 50%;
}
.icon:nth-child(1) {
  margin-right: 0.853333rem;
}
</style>
