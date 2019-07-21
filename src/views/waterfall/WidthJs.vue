<template>
  <div ref="waterfall" class="waterfall-width-js">
    <div ref="container" class="container">
      <div class="image-col" v-for="(col, index) in imgList" :key="index">
        <div class="image-box" v-for="img in col" :key="img">
          <img :src="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { throttle } from '@/utils/utils'
export default {
  name: 'WidthJs',
  data() {
    return {
      resizeRender: null,
      colWidth: 200,
      imgList: [],
      colNumbers: 0
    }
  },
  methods: {
    //计算图片列数
    getColNumbers() {
      let clientWidth = this.$refs.waterfall.clientWidth
      this.colNumbers = Math.floor(clientWidth / this.colWidth)
      this.$refs.container.style.marginLeft =
        (clientWidth - this.colWidth * this.colNumbers) / 2 + 'px'
    },
    //读取图片
    loadImage() {
      this.getColNumbers()
      for (let i = 0; i < 17; i++) {
        let colIndex = i % this.colNumbers
        let url = require(`@/assets/images/${i}.jpg`)
        if (this.imgList[colIndex]) {
          this.imgList[colIndex].push(url)
        } else {
          this.$set(this.imgList, colIndex, [url])
        }
      }
    },
    resize() {
      this.imgList = []
      this.loadImage()
    }
  },
  mounted() {
    this.loadImage()
    this.resizeRender = throttle(this.resize, 200)
    window.addEventListener('resize', this.resizeRender)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeRender)
  }
}
</script>
<style lang="scss" scoped>
.waterfall-width-js {
  margin: 0 auto;
  overflow: hidden;
}
.image-col {
  float: left;
  width: 200px;
  .image-box {
    margin: 10px 5px;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
