<template>
  <div class="waterfall-width-column">
    <div class="image-box" v-for="img in imgList" :key="img">
      <img :src="img" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WidthColumn',
  data() {
    return {
      imgList: [],
      cols: 3
    }
  },
  methods: {
    //读取图片
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let url = require(`@/assets/images/${i}.jpg`)
        this.imgList.push(url)
      }
    }
  },
  mounted() {
    this.loadImage()
    window.addEventListener('resize', () => {
      this.cols++
    })
  }
}
</script>
<style lang="scss" scoped>
.waterfall-width-column {
  column-count: 3;
  column-gap: 10px;
  .image-box {
    margin-bottom: 10px;
    img {
      display: block;
      width: 100%;
    }
  }
}
@media (min-width: 768px) {
  .waterfall-width-column {
    column-count: 3;
  }
}

@media (min-width: 992px) {
  .waterfall-width-column {
    column-count: 4;
  }
}

@media (min-width: 1200px) {
  .waterfall-width-column {
    column-count: 6;
  }
}
</style>
