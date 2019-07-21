<template>
  <div class="waterfall-width-flex">
    <div class="image-col" v-for="(col, index) in imgList" :key="index">
      <div class="image-box" v-for="img in col" :key="img">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WidthFlex',
  data() {
    return {
      imgList: []
    }
  },
  methods: {
    //读取图片
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let colIndex = i % 4 //假设排4列，也可动态计算
        let url = require(`@/assets/images/${i}.jpg`)
        if (this.imgList[colIndex]) {
          this.imgList[colIndex].push(url)
        } else {
          this.$set(this.imgList, colIndex, [url])
        }
      }
    }
  },
  mounted() {
    this.loadImage()
  }
}
</script>
<style lang="scss" scoped>
.waterfall-width-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .image-col {
    width: 20%;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
