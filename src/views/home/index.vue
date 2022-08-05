<template>
  <div class="home-page">
    <van-tabs>
      <van-tab :key="item.id" v-for="item in myChannels" :title="item.name">
        内容 {{ item.id }}
      </van-tab>
    </van-tabs>
    <!-- 按钮 -->
    <div class="btn-wrapper">
      <geek-icon name="search"></geek-icon>
      <geek-icon name="channel"></geek-icon>
    </div>
  </div>
</template>
<script>
/**
 * 完成tab使用，改造样式布局，获取频道数据，渲染即可
 *
 *
 */
import GeekIcon from '@/components/geek-icon'
import request from '@/utils/request'
export default {
  name: 'HomePage',
  components: { GeekIcon },
  data () {
    return {
      myChannels: []
    }
  },
  async created () {
    const [err, res] = await request({ url: 'v1_0/channels' })
    if (err) console.log('失败', err.message)
    else console.log('成功', res.data)
    this.myChannels = res.data.data.channels
  }
}
</script>
<style scoped lang="less">
.home-page {
  :deep(.van-tabs) {
    height: 100%;
    display: flex;
    flex-direction: column;

    .van-tabs__line {
      background-color: @geek-color;
      height: 2px;
      width: 32px;
    }

    .van-tab {
      color: #9EA1AE;
    }

    .van-tab--active {
      font-size: 18px;
      color: #333;
    }

    .van-tab__wrap {
      padding-right: 86px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .van-tabs__content {
      flex: 1;
      overflow: hidden;
    }

    .van-tab__pane {
      height: 100%;
    }
  }

  .btn-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: 86px;
    height: 44px;
    background: #fff;
    display: flex;
    align-items: center;

    .geek-icon {
      flex: 1;
      text-align: center;
      font-size: 18px;
    }

    &::before {
      content: '';
      width: 20px;
      height: 44px;
      position: absolute;
      left: -20px;
      top: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
    }
  }
}
</style>
