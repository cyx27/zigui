(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(t,e,n){"use strict";var l={name:"FooterTwo",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},r=n(19),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"go-top-area"},[e("div",{staticClass:"go-top-wrap"},[e("div",{staticClass:"go-top-btn-wrap"},[e("div",{class:"go-top go-top-btn "+(this.scrollBtn?"active":""),on:{click:this.scrollTop}},[e("i",{staticClass:"fa fa-angle-double-up"}),this._v(" "),e("i",{staticClass:"fa fa-angle-double-up"})])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer-main"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"footer-widget mt-30"},[n("div",{staticClass:"footer-title pb-30"},[n("h4",{staticClass:"title"},[t._v("联系我们")])]),t._v(" "),n("div",{staticClass:"footer-about-content"},[n("p",[t._v("南京大学")]),t._v(" "),n("div",{staticClass:"email"},[n("a",{attrs:{href:"mailto:needhelp@indutri.com"}},[t._v("xxx@nju.edu.com")])]),t._v(" "),n("div",{staticClass:"social"},[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-pinterest-p"})])])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 col-sm-6",staticStyle:{"margin-left":"600px"}},[n("div",{staticClass:"footer-widget mt-30 ml-30"},[n("div",{staticClass:"footer-title pb-20"},[n("h4",{staticClass:"title"},[t._v("网站导航")])]),t._v(" "),n("div",{staticClass:"footer-about-list d-flex"},[n("ul",{staticClass:"mr-70"},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" 网站首页")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" 网站服务")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" 关于中心")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" 团队信息")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-angle-right"}),t._v(" 团队信息")])])])])])])])]),t._v(" "),n("div",{staticClass:"footer-copyright text-center"},[n("p",[t._v("© Copyright 2020 by "),n("a",{attrs:{target:"blank_",href:"https://www.layerdrops.com"}},[t._v("Layerdrops.com")])])])]),t._v(" "),n("div",{staticClass:"footer-shape-1"},[n("img",{attrs:{src:"/assets/images/shape/shape-5.png",alt:""}})]),t._v(" "),n("div",{staticClass:"footer-shape-2 animated wow fadeInLeft",attrs:{"data-wow-duration":"1500ms","data-wow-delay":"0ms"}},[n("img",{attrs:{src:"/assets/images/shape/shape-6.png",alt:""}})])])}],!1,null,"3a170432",null);e.a=component.exports},150:function(t,e,n){"use strict";var l={name:"Nav",data:function(){return{mobileToggle:!1}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-area"},[t._m(0),t._v(" "),n("div",{staticClass:"main-header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"main-header-item d-flex justify-content-between align-items-center"},[n("div",{staticClass:"main-header-menus  d-flex"},[t._m(1),t._v(" "),n("div",{staticClass:"toggle-btn ml-30 canvas_open"},[n("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})]),t._v(" "),n("div",{staticClass:"header-menu d-none d-lg-block"},[n("ul",[n("li",[n("a",{staticClass:"active",attrs:{href:"#"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index"}},[t._v("Home 3")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Header Style 1")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index"}},[t._v("Header Style 3")])],1)])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/our-history"}},[t._v("Our history")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("testimonials")])],1)])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-service"}},[t._v("single service")])],1)])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Recent Projects")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-project"}},[t._v("single project")])],1)])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("posts")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-post"}},[t._v("single post")])],1)])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),n("div",{class:"offcanvas_menu_wrapper "+(t.mobileToggle?"active":"")},[n("div",{staticClass:"canvas_close"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[n("i",{staticClass:"fa fa-times"})])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"text-left ",attrs:{id:"menu"}},[n("ul",{staticClass:"offcanvas_main_menu"},[n("li",{staticClass:"menu-item-has-children active"},[t._m(3),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home 2")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index"}},[t._v("Home 3")])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[t._m(4),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Header Style 1r")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Header Style 2")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index"}},[t._v("Header Style 3")])],1)])])])]),t._v(" "),n("li",{staticClass:"menu-item-has-children active"},[t._m(5),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/our-team"}},[t._v("Our Team")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/our-history"}},[t._v("Our history")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("testimonials")])],1)])]),t._v(" "),n("li",{staticClass:"menu-item-has-children active"},[t._m(6),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-service"}},[t._v("single service")])],1)])]),t._v(" "),n("li",{staticClass:"menu-item-has-children active"},[t._m(7),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Recent Projects")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-project"}},[t._v("single project")])],1)])]),t._v(" "),n("li",{staticClass:"menu-item-has-children active"},[t._m(8),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("posts")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/single-post"}},[t._v("single post")])],1)])]),t._v(" "),t._m(9)])]),t._v(" "),t._m(10)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"header-top-items d-flex justify-content-between align-items-center"},[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:"/assets/images/logo.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"header-top-info d-none d-md-block"},[n("ul",[n("li",[n("i",{staticClass:"flaticon-email"}),t._v(" "),n("span",[t._v("Email")]),t._v(" "),n("a",{attrs:{href:"mailto:needhelp@indutri.com"}},[t._v("needhelp@indutri.com")])]),t._v(" "),n("li",[n("i",{staticClass:"flaticon-calling"}),t._v(" "),n("span",[t._v("Phone")]),t._v(" "),n("a",{attrs:{href:"tel:926668880000"}},[t._v("92 666 888 0000")])]),t._v(" "),n("li",[n("i",{staticClass:"flaticon-address"}),t._v(" "),n("span",[t._v("Visit")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("66 Broklyn New Street, USA")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-btn"},[e("a",{attrs:{href:"#"}},[this._v(" Get a Free Quote")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-social"},[e("ul",{staticClass:"text-center"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-skype"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-pinterest-p"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"menu-expand"},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"menu-item-has-children active"},[e("a",{attrs:{href:"#"}},[this._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"offcanvas_footer"},[e("span",[e("a",{attrs:{href:"mailto:tanvirahmed8282@gmail.com"}},[e("i",{staticClass:"fa fa-envelope-o"}),this._v(" layerdrops@gmail.com")])])])}],!1,null,"18f60232",null);e.a=component.exports},151:function(t,e,n){"use strict";var l={name:"PageHeader",props:{title:{type:String}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title-area bg_cover pt-120",staticStyle:{"background-image":"url(/assets/images/page-bg.jpg)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"page-title-item text-center"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("主页")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title))])])]),t._v(" "),n("h3",{staticClass:"title"},[t._v(t._s(t.title))])])])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-shadow"},[e("img",{attrs:{src:"/assets/images/page-shadow.png",alt:""}})])}],!1,null,"087d6b27",null);e.a=component.exports},176:function(t,e,n){"use strict";n.r(e);var l=n(150),r=n(149),o=n(151),c={name:"ProjectSingle"},v=n(19),_={components:{ProjectSingle:Object(v.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"single-project-area pt-120"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"single-project"},[n("div",{staticClass:"single-project-thumb"},[n("img",{attrs:{src:"/assets/images/project/single-project-thumb.jpg",alt:"project"}}),t._v(" "),n("div",{staticClass:"single-project-thumb-content d-flex"},[n("ul",[n("li",[t._v("Date:")]),t._v(" "),n("li",[t._v("Website:")]),t._v(" "),n("li",[t._v("Location:")]),t._v(" "),n("li",[t._v("Value:")])]),t._v(" "),n("ul",{staticClass:"pl-95"},[n("li",[t._v("06 Apr, 2020")]),t._v(" "),n("li",[t._v("indutri.com")]),t._v(" "),n("li",[t._v("New York, USA")]),t._v(" "),n("li",[t._v("$25,60000")])])])]),t._v(" "),n("div",{staticClass:"single-project-content-1"},[n("h3",{staticClass:"title"},[t._v("Bridge Construction")]),t._v(" "),n("p",[t._v("Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.")])]),t._v(" "),n("div",{staticClass:"single-project-content-1 item-2"},[n("h3",{staticClass:"title"},[t._v("Challenge & Solutions")]),t._v(" "),n("p",[t._v("Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry stan when an unknown printer took a galley.")])]),t._v(" "),n("div",{staticClass:"single-project-content-1 item-3"},[n("span",[t._v("Making this the first true generator on the Internet")]),t._v(" "),n("p",[t._v("When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.")])]),t._v(" "),n("div",{staticClass:"single-project-content-1 item-3"},[n("span",[t._v("first true generator on the Internet")]),t._v(" "),n("p",[t._v("When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry stan when an unknown printer took a galley.")])])])])])])])}],!1,null,"3d5715cf",null).exports,PageHeader:o.a,FooterTwo:r.a,Nav:l.a},head:function(){return{title:"Indutri | Project Details"}}},m=Object(v.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._v(" "),e("PageHeader",{attrs:{title:"Bridge construction"}}),this._v(" "),e("ProjectSingle"),this._v(" "),e("FooterTwo")],1)}),[],!1,null,null,null);e.default=m.exports}}]);