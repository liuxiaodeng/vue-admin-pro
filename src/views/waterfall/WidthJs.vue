<template>
  <div ref="waterfall" class="waterfall-width-js">
    <div
      class="container"
      :style="{ width: colNumbers * colWidth + 'px', margin: '0 auto' }"
    >
      <div class="image-col" v-for="(col, index) in imgList" :key="index">
        <div class="image-box" v-for="(img, indx) in col" :key="indx">
          <img :src="img.url" alt="" />
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
      console.log(this.colNumbers)
    },
    //读取图片
    loadImage() {
      this.getColNumbers()
      for (let i = 0; i < 17; i++) {
        let colIndex = i % this.colNumbers
        let image = new Image()
        let url = require(`@/assets/images/${i}.jpg`)
        image.src = url
        image.onload = () => {
          if (this.imgList[colIndex]) {
            this.imgList[colIndex].push({
              url: url
            })
          } else {
            this.$set(this.imgList, colIndex, [
              {
                url: url
              }
            ])
          }
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
.container {
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
