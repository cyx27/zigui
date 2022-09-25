<template>
  <header class="header-area header-3-area">
    <div class="header-top-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-top-item">
              <div class="header-info">
                <ul>
                  <li><a href="#"><i class="flaticon-email-2"></i> xxx@nju.edu.com</a></li>
                  <li><a href="#"><i class="flaticon-pin"></i>Nanjing University, Nanjing, 210093, China</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-header-item">
              <div class="main-header-menus  d-flex justify-content-between align-items-center">
                <div class="header-logo">
                  <div style="font-size: xx-large">logo</div>
                </div>
                <div class="toggle-btn ml-30 canvas_open">
                  <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                </div>
                <div class="header-menu d-none d-lg-block">
                  <ul>
                    <li>
                      <a class="active" href="#">首页</a>
                    </li>
                    <li>
                      <a href="#">信息</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/about">关于</nuxt-link></li>
                        <li><nuxt-link to="/our-team">团队</nuxt-link></li>
                        <li><nuxt-link to="/testimonials">帮助</nuxt-link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">服务</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services">全部服务</nuxt-link></li>
                        <li><nuxt-link to="/single-service">屈原故里数据库</nuxt-link></li>
                        <li><nuxt-link to="/single-service">屈原故里导览地图</nuxt-link></li>
                        <li><nuxt-link to="/single-service">非遗小铺</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/contact">联系我们</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`">
              <div class="canvas_close">
                <a @click="mobileToggle = !mobileToggle" href="javascript:void(0)"><i class="fa fa-times"></i></a>
              </div>
              <div class="header-social">
                <ul class="text-center">
                  <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-skype"></i></a></li>
                  <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                </ul>
              </div>
              <div id="menu" class="text-left ">
                <ul class="offcanvas_main_menu">
                  <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                    <a href="#">Home</a>
                    <ul class="sub-menu">
                      <li class="menu-item-has-children"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                        <a href="#">Header Versions</a>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/">Header Style 1r</nuxt-link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/about">About</nuxt-link></li>
                      <li><nuxt-link to="/our-team">Our Team</nuxt-link></li>
                      <li><nuxt-link to="/our-history">Our history</nuxt-link></li>
                      <li><nuxt-link to="/testimonials">testimonials</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                    <a href="#">Services</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/services">Services</nuxt-link></li>
                      <li><nuxt-link to="/single-service">single service</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                    <a href="#">Recent Projects</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/projects">Projects</nuxt-link></li>
                      <li><nuxt-link to="/single-project">single project</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">posts</nuxt-link></li>
                      <li><nuxt-link to="/single-post">single post</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <span><a href="mailto:tanvirahmed8282@gmail.com"><i class="fa fa-envelope-o"></i> layerdrops@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
      name: "NavThree",
      data(){
        return {
          mobileToggle: false
        }
      },
    }
</script>

<style scoped>

</style>
