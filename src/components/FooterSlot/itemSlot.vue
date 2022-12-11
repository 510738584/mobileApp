<template>
  <div class="footer-slot footer-item-container">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'MobileIndex',
};
</script>

<style lang="less" scoped>
.footer-item-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  color: #ccc;
  &.active{
    color: #31c27c;
  }
  .iconfont{
    font-size: .5rem;
  }
  .name{
    font-size: .28rem;
  }
}
</style>
