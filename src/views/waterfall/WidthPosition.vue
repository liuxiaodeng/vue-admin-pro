<template>
  <div ref="waterfall" class="waterfall-width-position">
    <div
      class="image-item"
      v-for="(img, index) in imgList"
      :key="index"
      :style="{ top: img.top + 'px', left: img.left + 'px' }"
    >
      <div class="image">
        <img :src="img.url" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WidthPosition',
  data() {
    return {
      colWidth: 200,
      imgList: [],
      colNumbers: 0,
      colHeight: []
    }
  },
  methods: {
    //计算图片列数
    getColNumbers() {
      let clientWidth = this.$refs.waterfall.clientWidth
      this.colNumbers = Math.floor(clientWidth / this.colWidth)
    },
    //读取图片
    loadImage() {
      this.getColNumbers()
      for (let i = 0; i < 17; i++) {
        let image = new Image()
        let url = require(`@/assets/images/${i}.jpg`)
        image.src = url
        image.onload = () => {
          this.render({
            index: i,
            url: url,
            ratio: image.width / image.height
          })
        }
      }
    },
    render(imgInfo) {
      let colIndex = imgInfo.index % this.colNumbers
      imgInfo.left = colIndex * this.colWidth
      //首行 top为 0，记录每列的高度
      if (imgInfo.index < this.colNumbers) {
        imgInfo.top = 0
        this.colHeight[colIndex] = this.colWidth / imgInfo.ratio
      } else {
        //获取高度的最小值
        let minHeight = Math.min.apply(null, this.colHeight)
        let minIndex = this.colHeight.indexOf(minHeight)
        //此图片的 top 为上面图片的高度，left 相等
        imgInfo.top = minHeight
        imgInfo.left = minIndex * this.colWidth
        //把高度加上去
        this.colHeight[minIndex] += this.colWidth / imgInfo.ratio
      }
      this.imgList.push(imgInfo)
    }
  },
  mounted() {
    this.loadImage()
  }
}
</script>
<style lang="scss" scoped>
.waterfall-width-position {
  position: relative;
  .image-item {
    position: absolute;
    width: 200px;
  }
  .image {
    padding: 5px;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
