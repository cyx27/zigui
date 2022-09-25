<template>
    <div>
      <footer class="footer-area">
        <div class="container">
          <div class="footer-main">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget mt-30">
                  <div class="footer-title pb-30">
                    <h4 class="title">联系我们</h4>
                  </div>
                  <div class="footer-about-content">
                    <p>南京大学</p>
                    <div class="email">
                      <a href="mailto:needhelp@indutri.com">xxx@nju.edu.com</a>
                    </div>
                    <div class="social">
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6" style="margin-left: 600px">
                <div class="footer-widget mt-30 ml-30">
                  <div class="footer-title pb-20">
                    <h4 class="title">网站导航</h4>
                  </div>
                  <div class="footer-about-list d-flex">
                    <ul class="mr-70">
                      <li><a href="#"><i class="fa fa-angle-right"></i> 网站首页</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> 网站服务</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> 关于中心</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> 团队信息</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> 团队信息</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="footer-copyright text-center">
            <p>© Copyright 2020 by <a target="blank_" href="https://www.layerdrops.com">Layerdrops.com</a></p>
          </div>
        </div>
        <div class="footer-shape-1">
          <img src="/assets/images/shape/shape-5.png" alt="">
        </div>
        <div class="footer-shape-2 animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
          <img src="/assets/images/shape/shape-6.png" alt="">
        </div>
      </footer>

      <div class="go-top-area">
        <div class="go-top-wrap">
          <div class="go-top-btn-wrap">
            <div @click="scrollTop" :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`">
              <i class="fa fa-angle-double-up"></i>
              <i class="fa fa-angle-double-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "FooterTwo",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
