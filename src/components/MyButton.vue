<template>
  <div class="my-btn-container">
    <div class="icon">
      <span class="iconfont">
        <slot name="icon"></slot>
      </span>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '文本',
    },
  },
};
</script>

<style lang="less" scoped>
.my-btn-container{
  font-size: .25rem;
  height: .4rem;
  width: 1.2rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .2rem;
  border-radius: .1rem;
  background: #cdcc;
  .iconfont{
    color: #008c8c;
    font-size: .46rem;
  }
  .text{
    font-size: .32rem;
  }
}
</style>
