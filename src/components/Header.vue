<template>
  <div class="header-container">
    <img src="@/assets/images/logo.png" alt="" class="logo" />
    <span class="iconfont icon-search"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 1rem;
  background: #31c27c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
  img {
    width: 3rem;
  }
  span {
    display: block;
    font-size: 0.8rem;
    color: #fff;
  }
}
</style>
