<template>
  <scroller>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
      <div class="frame" v-for="img in imageList">

        <image class="image" resize="cover" :src="img.src"></image>
  </div>
  </scroller>

</template>

<style scoped>
.image {
  width: 700px;
  height: 700px;
}
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 700px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}
.frame {
  width: 700px;
  height: 700px;
  position: relative;
}
</style>

<script>
const bannerUrl = require("../router/home").bannerUrl;
var stream = weex.requireModule("stream");

export default {
  data() {
    console.log(bannerUrl);
    return {
      imageList: [
        {
          src:
            "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"
        }
      ]
    };
  },

  methods: {
    getBannerData(callback) {
      return stream.fetch(
        {
          method: 'GET',
          type: 'jsonp',
          url: bannerUrl
        },
        callback
      );
    }
  },

  created: function() {
    this.getBannerData(function(ret) {
        if(!ret.ok){
          me.getResult = "request failed";
        }else{
          console.log('get:'+ret);
          me.getResult = JSON.stringify(ret.data);
        }
      },function(response){
        console.log('get in progress:'+response.length);
        me.getResult = "bytes received:"+response.length;
      });
  }
};
</script>