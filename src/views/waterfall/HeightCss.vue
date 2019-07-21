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
        image.src = require(`@/assets/images/${i}.jpg`)
        image.onload = () => {
          this.imgList.push({
            url: require(`@/assets/images/${i}.jpg`),
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
// .waterfall-height-css {
//   margin-left: 40px;
// }
// .image-box {
//   margin: 5px 10px;
//   float: left;
//   width: 200px;
//   height: 200px;
//   border: 1px solid red;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// }
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
