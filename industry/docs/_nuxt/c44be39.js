(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(t,e,l){"use strict";var n={name:"FooterTwo",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},r=l(19),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"go-top-area"},[e("div",{staticClass:"go-top-wrap"},[e("div",{staticClass:"go-top-btn-wrap"},[e("div",{class:"go-top go-top-btn "+(this.scrollBtn?"active":""),on:{click:this.scrollTop}},[e("i",{staticClass:"fa fa-angle-double-up"}),this._v(" "),e("i",{staticClass:"fa fa-angle-double-up"})])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer-area"},[l("div",{staticClass:"container"},[l("div",{staticClass:"footer-main"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-3 col-md-6"},[l("div",{staticClass:"footer-widget mt-30"},[l("div",{staticClass:"footer-title pb-30"},[l("h4",{staticClass:"title"},[t._v("联系我们")])]),t._v(" "),l("div",{staticClass:"footer-about-content"},[l("p",[t._v("南京大学")]),t._v(" "),l("div",{staticClass:"email"},[l("a",{attrs:{href:"mailto:needhelp@indutri.com"}},[t._v("xxx@nju.edu.com")])]),t._v(" "),l("div",{staticClass:"social"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest-p"})])])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-6 col-sm-6",staticStyle:{"margin-left":"600px"}},[l("div",{staticClass:"footer-widget mt-30 ml-30"},[l("div",{staticClass:"footer-title pb-20"},[l("h4",{staticClass:"title"},[t._v("网站导航")])]),t._v(" "),l("div",{staticClass:"footer-about-list d-flex"},[l("ul",{staticClass:"mr-70"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" 网站首页")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" 网站服务")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" 关于中心")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" 团队信息")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-angle-right"}),t._v(" 团队信息")])])])])])])])]),t._v(" "),l("div",{staticClass:"footer-copyright text-center"},[l("p",[t._v("© Copyright 2020 by "),l("a",{attrs:{target:"blank_",href:"https://www.layerdrops.com"}},[t._v("Layerdrops.com")])])])]),t._v(" "),l("div",{staticClass:"footer-shape-1"},[l("img",{attrs:{src:"/assets/images/shape/shape-5.png",alt:""}})]),t._v(" "),l("div",{staticClass:"footer-shape-2 animated wow fadeInLeft",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"0ms"}},[l("img",{attrs:{src:"/assets/images/shape/shape-6.png",alt:""}})])])}],!1,null,"3a170432",null);e.a=component.exports},149:function(t,e,l){"use strict";var n={name:"Nav",data:function(){return{mobileToggle:!1}}},r=l(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header-area"},[t._m(0),t._v(" "),l("div",{staticClass:"main-header"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"main-header-item d-flex justify-content-between align-items-center"},[l("div",{staticClass:"main-header-menus  d-flex"},[t._m(1),t._v(" "),l("div",{staticClass:"toggle-btn ml-30 canvas_open"},[l("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),l("div",{staticClass:"header-menu d-none d-lg-block"},[l("ul",[l("li",[l("a",{staticClass:"active",attrs:{href:"#"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Home 3")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Header Style 1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Header Style 3")])],1)])])])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-history"}},[t._v("Our history")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("testimonials")])],1)])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("single service")])],1)])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Recent Projects")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-project"}},[t._v("single project")])],1)])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/posts"}},[t._v("posts")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-post"}},[t._v("single post")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),l("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[l("div",{staticClass:"canvas_close"},[l("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-times"})])]),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"text-left ",attrs:{id:"menu"}},[l("ul",{staticClass:"offcanvas_main_menu"},[l("li",{staticClass:"menu-item-has-children active"},[t._m(3),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Home 3")])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[t._m(4),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Header Style 1r")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Header Style 2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Header Style 3")])],1)])])])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(5),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-history"}},[t._v("Our history")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("testimonials")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(6),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("single service")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(7),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Recent Projects")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-project"}},[t._v("single project")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(8),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/posts"}},[t._v("posts")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-post"}},[t._v("single post")])],1)])]),t._v(" "),t._m(9)])]),t._v(" "),t._m(10)])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header-top"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"header-top-items d-flex justify-content-between align-items-center"},[l("div",{staticClass:"logo"},[l("a",{attrs:{href:"/"}},[l("img",{attrs:{src:"/assets/images/logo.png",alt:""}})])]),t._v(" "),l("div",{staticClass:"header-top-info d-none d-md-block"},[l("ul",[l("li",[l("i",{staticClass:"flaticon-email"}),t._v(" "),l("span",[t._v("Email")]),t._v(" "),l("a",{attrs:{href:"mailto:needhelp@indutri.com"}},[t._v("needhelp@indutri.com")])]),t._v(" "),l("li",[l("i",{staticClass:"flaticon-calling"}),t._v(" "),l("span",[t._v("Phone")]),t._v(" "),l("a",{attrs:{href:"tel:926668880000"}},[t._v("92 666 888 0000")])]),t._v(" "),l("li",[l("i",{staticClass:"flaticon-address"}),t._v(" "),l("span",[t._v("Visit")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("66 Broklyn New Street, USA")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-btn"},[e("a",{attrs:{href:"#"}},[this._v(" Get a Free Quote")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-social"},[e("ul",{staticClass:"text-center"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-skype"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-pinterest-p"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu-item-has-children active"},[e("a",{attrs:{href:"#"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"offcanvas_footer"},[e("span",[e("a",{attrs:{href:"mailto:tanvirahmed8282@gmail.com"}},[e("i",{staticClass:"fa fa-envelope-o"}),this._v(" layerdrops@gmail.com")])])])}],!1,null,"18f60232",null);e.a=component.exports},150:function(t,e,l){"use strict";var n={name:"PageHeader",props:{title:{type:String}}},r=l(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-title-area bg_cover pt-120",staticStyle:{"background-image":"url(/assets/images/page-bg.jpg)"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"page-title-item text-center"},[l("nav",{attrs:{"aria-label":"breadcrumb"}},[l("ol",{staticClass:"breadcrumb"},[l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("主页")])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title))])])]),t._v(" "),l("h3",{staticClass:"title"},[t._v(t._s(t.title))])])])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-shadow"},[e("img",{attrs:{src:"/assets/images/page-shadow.png",alt:""}})])}],!1,null,"087d6b27",null);e.a=component.exports},156:function(t,e,l){"use strict";var n={name:"NavThree",data:function(){return{mobileToggle:!1}}},r=l(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header-area header-3-area"},[t._m(0),t._v(" "),l("div",{staticClass:"main-header"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"main-header-item"},[l("div",{staticClass:"main-header-menus  d-flex justify-content-between align-items-center"},[t._m(1),t._v(" "),l("div",{staticClass:"toggle-btn ml-30 canvas_open"},[l("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),l("div",{staticClass:"header-menu d-none d-lg-block"},[l("ul",[t._m(2),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("信息")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("关于")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-team"}},[t._v("团队")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("帮助")])],1)])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("服务")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services"}},[t._v("全部服务")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("屈原故里数据库")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("屈原故里导览地图")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("非遗小铺")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("联系我们")])],1)])])])]),t._v(" "),l("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[l("div",{staticClass:"canvas_close"},[l("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-times"})])]),t._v(" "),t._m(3),t._v(" "),l("div",{staticClass:"text-left ",attrs:{id:"menu"}},[l("ul",{staticClass:"offcanvas_main_menu"},[l("li",{staticClass:"menu-item-has-children active"},[t._m(4),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Home 3")])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[t._m(5),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Header Style 1r")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Header Style 2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index"}},[t._v("Header Style 3")])],1)])])])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(6),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/our-history"}},[t._v("Our history")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("testimonials")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(7),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("single service")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(8),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Recent Projects")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-project"}},[t._v("single project")])],1)])]),t._v(" "),l("li",{staticClass:"menu-item-has-children active"},[t._m(9),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("nuxt-link",{attrs:{to:"/posts"}},[t._v("posts")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/single-post"}},[t._v("single post")])],1)])]),t._v(" "),t._m(10)])]),t._v(" "),t._m(11)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-top-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"header-top-item"},[e("div",{staticClass:"header-info"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"flaticon-email-2"}),this._v(" xxx@nju.edu.com")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"flaticon-pin"}),this._v("Nanjing University, Nanjing, 210093, China")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-logo"},[e("div",{staticStyle:{"font-size":"xx-large"}},[this._v("logo")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"active",attrs:{href:"#"}},[this._v("首页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-social"},[e("ul",{staticClass:"text-center"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-skype"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-pinterest-p"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu-item-has-children active"},[e("a",{attrs:{href:"#"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"offcanvas_footer"},[e("span",[e("a",{attrs:{href:"mailto:tanvirahmed8282@gmail.com"}},[e("i",{staticClass:"fa fa-envelope-o"}),this._v(" layerdrops@gmail.com")])])])}],!1,null,"7660b462",null);e.a=component.exports},173:function(t,e,l){"use strict";l.r(e);var n=l(149),r=l(148),c=l(150),v={name:"ServicePage"},o=l(19),_=Object(o.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"industri-services-area services-page"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[l("div",{staticClass:"services-item mt-30"},[t._m(0),t._v(" "),l("div",{staticClass:"services-content"},[l("h4",{staticClass:"title"},[t._v("屈原故里数据库")]),t._v(" "),l("p",[t._v("There are many variations of passages of available but the have alteration in not avein that some form by injected.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("了解更多")])],1)])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[l("div",{staticClass:"services-item mt-30"},[t._m(1),t._v(" "),l("div",{staticClass:"services-content"},[l("h4",{staticClass:"title"},[t._v("屈原故里导览地图")]),t._v(" "),l("p",[t._v("There are many variations of passages of available but the have alteration in not avein that some form by injected.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("了解更多")])],1)])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6 col-sm-9"},[l("div",{staticClass:"services-item mt-30"},[t._m(2),t._v(" "),l("div",{staticClass:"services-content"},[l("h4",{staticClass:"title"},[t._v("非遗小铺")]),t._v(" "),l("p",[t._v("There are many variations of passages of available but the have alteration in not avein that some form by injected.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/single-service"}},[t._v("了解更多")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services-thumb"},[e("img",{attrs:{src:"/assets/images/services-1.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services-thumb"},[e("img",{attrs:{src:"/assets/images/services-2.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services-thumb"},[e("img",{attrs:{src:"/assets/images/services-3.jpg",alt:""}})])}],!1,null,"14e45c5a",null).exports,m={components:{NavThree:l(156).a,ServicePage:_,PageHeader:c.a,FooterTwo:r.a,Nav:n.a},head:function(){return{title:"Indutri | Services"}}},f=Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavThree"),this._v(" "),e("PageHeader",{attrs:{title:"服务"}}),this._v(" "),e("ServicePage"),this._v(" "),e("FooterTwo")],1)}),[],!1,null,null,null);e.default=f.exports}}]);