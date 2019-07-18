<template>
  <div ref="waterfall" class="waterfall-height">
    <div class="img-container">
      <div class="row" v-for="(list, index) in imgList" :key="index">
        <div class="image-box" v-for="img in imgList[index]" :key="img.url">
          <img :src="img.url" :height="img.height" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EqualHeight',
  data() {
    return {
      baseHeight: 200, //图片的基础计算高度
      imgList: [[]], //用二维数据保存每一行数据
      rowWidth: 0, //每行的图片宽度
      rowCount: 0 //每行的索引
    }
  },
  methods: {
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let image = new Image()
        image.src = require(`@/assets/images/${i}.jpg`)
        image.onload = () => {
          this.compare({
            url: require(`@/assets/images/${i}.jpg`),
            width: this.baseHeight * (image.width / image.height),
            height: this.baseHeight
          })
        }
      }
    },
    //缩放后的总图片宽度与屏幕宽度比较
    compare(image) {
      //容器宽度
      let clientWidth = this.$refs.waterfall.clientWidth
      //计算每行宽度
      this.rowWidth += image.width
      //如果宽度大于容器宽度，去掉多余的宽度，整体进行缩放适应容器让右边对齐
      if (this.rowWidth > clientWidth) {
        //减去每个padding边距
        clientWidth = clientWidth - this.imgList[this.rowCount].length * 10
        this.rowWidth = this.rowWidth - image.width
        //把高度调整为放大后的
        let growAfterHeight = (clientWidth * this.baseHeight) / this.rowWidth
        this.imgList[this.rowCount].forEach(item => {
          item.height = growAfterHeight
        })
        //把多余图片放入到下一行
        this.rowWidth = image.width
        this.rowCount++
        this.$set(this.imgList, this.rowCount, [image])
      } else {
        this.imgList[this.rowCount].push(image)
      }
    }
  },
  created() {
    this.loadImage()
  }
}
</script>
<style lang="scss" scoped>
.img-container {
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
.image-box {
  float: left;
  padding: 5px;
  img {
    display: block;
  }
}
</style>
