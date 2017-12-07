<template>
  <div>
    <slider class="slider" interval="3000" auto-play="true" @change="onSliderChange">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>

    <div ref='ani' class="text">
       <text >{{title}}</text>
    </div>
  </div>

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

.text {
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.frame {
  width: 700px;
  height: 700px;
  position: relative;
}
</style>

<script>
const bannerUrl = require("../router/home").bannerUrl;
const animation = weex.requireModule("animation");
var modal = weex.requireModule("modal");
var stream = weex.requireModule("stream");

export default {
  data() {
    console.log(bannerUrl);
    return {
      title: "loading...",
      imageList: [
        {
          src:
            "http://p4.music.126.net/CTU5B9R9y3XyYBZXJUXzTg==/2897213141428023.jpg"
        },
        {
          src:
            "http://p4.music.126.net/tGPljf-IMOCyPvumoWLOTg==/7987951976374270.jpg"
        },
        {
          src:
            "http://p3.music.126.net/e0gGadEhjur2UuUpDF9hPg==/7788940372125389.jpg"
        }
      ]
    };
  },

  methods: {
    // 轮播图改变监听

    onSliderChange: function(e) {
      console.log("11111");
      console.log(e.index);
      this.title = e.index;

      var scaleAni = this.$refs.ani;
      animation.transition(
        scaleAni,
        {
          styles: {
                          color: "#FF0000",
            transform: "scale(5, 5)",
            transformOrigin: "center center"
          },
          duration: 800, //ms
          timingFunction: "ease",
          needLayout: false,
          delay: 0 //ms
        },
        function() {

          animation.transition(scaleAni, {
            styles: {
              color: "#000000",
              transform: "scale(1, 1)",
              transformOrigin: "center center"
            },
            duration: 800, //ms
            timingFunction: "ease",
            delay: 0 //ms
          });
        }
      );
    }

    // 获取网易云音乐 数据
    // getBannerData(callback) {
    //   return stream.fetch(
    //     {
    //       method: "GET",
    //       type: "jsonp",
    //       url: bannerUrl
    //     },
    //     callback
    //   );
    // }
  },

  created: function() {
    // this.getBannerData(
    //   function(ret) {
    //     if (!ret.ok) {
    //       console.log("faild");
    //       modal.toast({
    //         message: "faild" + JSON.stringify(ret),
    //         duration: 2.0
    //       });
    //       this.errorContent = "faild" + JSON.stringify(ret.status);
    //       // me.getResult = "request failed";
    //     } else {
    //       console.log("get:" + ret.data.code);
    //       // me.getResult = JSON.stringify(ret.data);
    //       modal.toast({
    //         message: "2",
    //         duration: 2.0
    //       });
    //     }
    //   },
    //   function(response) {
    //     console.log("get in progress:" + response.length);
    //     // me.getResult = "bytes received:"+response.length;
    //     modal.toast({
    //       message: "3",
    //       duration: 2.0
    //     });
    //   }
    // );
  }
};
</script>