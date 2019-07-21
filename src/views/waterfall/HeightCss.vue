<template>
  <div class="waterfall-height-css">
    <div class="image-box" v-for="img in imgList" :key="img.url">
      <img :src="img.url" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeightCss',
  data() {
    return {
      imgList: []
    }
  },
  methods: {
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let image = new Image()
        let url = require(`@/assets/images/${i}.jpg`)
        image.src = url
        image.onload = () => {
          this.imgList.push({
            url: url,
            width: image.width,
            height: image.height
          })
        }
      }
    }
  },
  created() {
    this.loadImage()
  }
}
</script>
<style lang="scss" scoped>
.waterfall-height-css {
  display: flex;
  flex-wrap: wrap;
  .image-box {
    margin: 5px;
    flex-grow: 1;
  }
  img {
    display: block;
    min-width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &:after {
    content: '';
    display: block;
    flex-grow: 99999;
  }
}
</style>
