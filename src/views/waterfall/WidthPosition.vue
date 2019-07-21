<template>
  <div ref="waterfall" class="waterfall-width-position">
    <div class="image-col" v-for="(col, index) in imgList" :key="index">
      <div class="image-box" v-for="(img, indx) in col" :key="indx">
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
      colNumbers: 0
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
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped></style>
