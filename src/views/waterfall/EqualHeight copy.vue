<template>
  <div ref="waterfall" class="waterfall-height">
    <div class="image-box" v-for="img in imgList" :key="img.id">
      <img :src="img.url" :height="img.height" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'EqualHeight',
  data() {
    return {
      imgList: [],
      baseHeight: 200,
      rowList: [], //保存每一行的图片
      rowWidth: 0 //每行的图片宽度
    }
  },
  methods: {
    getImgList() {
      for (let i = 0; i < 17; i++) {
        let image = new Image()
        image.onload = async () => {
          this.compare({
            url: require(`@/assets/images/${i}.jpg`),
            width: this.baseHeight * (image.width / image.height),
            height: this.baseHeight
          })
        }
        image.src = require(`@/assets/images/${i}.jpg`)
      }
    },
    //缩放后的总图片宽度与屏幕宽度比较
    compare(image) {
      let growHeight = 1
      //容器宽度
      let clientWidth = this.$refs.waterfall.offsetWidth
      //计算每行宽度
      this.rowWidth += image.width
      //如果宽度大于容器宽度，去掉多余的宽度，整体进行缩放适应容器让右边对齐
      if (this.rowWidth > clientWidth) {
        this.rowWidth = this.rowWidth - image.width
        //去除边距
        clientWidth = clientWidth - this.rowList.length * 10
        growHeight = (clientWidth * this.baseHeight) / this.rowWidth
        this.repaint(growHeight)
        //把多余图片放入到下一行
        this.rowList = [image]
        this.rowWidth = image.width
      } else {
        //如果小于容器宽度就添加进去
        this.rowList.push(image)
      }
    },
    repaint(growHeight) {
      this.rowList.forEach(list => {
        this.imgList.push({
          url: list.url,
          height: growHeight || this.baseHeight
        })
      })
    }
  },
  created() {
    this.getImgList()
  }
}
</script>
<style lang="scss" scoped>
.waterfall-height {
  overflow: hidden;
}
.image-box {
  float: left;
  padding: 5px;
  box-sizing: border-box;
  img {
    display: block;
  }
}
</style>
