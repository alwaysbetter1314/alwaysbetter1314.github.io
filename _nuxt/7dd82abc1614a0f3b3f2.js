(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("36873827",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var o=n(172);n.n(o).a},174:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,".demo-split{height:200px;border:1px solid #dcdee2}.demo-split-pane{padding:10px}.fill-70height{height:70%}.dom_width{width:600px;height:350px;margin:0 auto}",""])},175:function(t,e,n){"use strict";n.r(e);n(30),n(15);var o={data:function(){return{split1:.5,imgfile:"http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg",uploadList:[],tmp:"",actions:[],active:"gray"}},mounted:function(){$("#aaa").text("click to upload");new VConsole},methods:{selected:function(t){this.active=t,console.log(this.active)},getBase64:function(t){var e=new FileReader;return e.readAsDataURL(t),new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(t){console.log("Error: ",t),n(t)}})},bupload:function(t){var e=this;if("image/jpg"!==t.type&&"image/jpeg"!==t.type&&"image/png"!==t.type)this.handleFormatError(t);else if(t.size>2097152)this.handleMaxSize(t);else{var n="image/png"===t.type?22:23;this.getBase64(t).then(function(o){$("#previewer").html('<img width="80%" src='.concat(o,' id="preview" alt=""/>')),e.$Notice.warning({title:"文件正在上传",desc:"文件 "+t.name+" 正在上传。"}),$.ajax({url:"https://service-7gz1cso0-1251896466.gz.apigw.tencentcs.com/release/pichandle?action="+e.active,method:"POST",data:o.slice(n),dataType:"json",success:function(t){console.log(t),$("#showres").text(JSON.stringify(t&&t.responseText?t.responseText:t))},error:function(t){console.log("Error: ",t);var e=JSON.stringify(t.responseText?t.responseText:"");console.log(e),$("#showres").html('<img width="80%" src='.concat(e,' id="showimgres" alt=""/>'))}}).always(function(){})})}return!1},handleProgress:function(t,e){this.$Notice.info({title:"文件正在上传",desc:"文件 "+e.name+" 正在上传。"})},handleSuccess:function(t,e,n){console.log("sucesss"),console.log(t.data)},handleError:function(t,e){this.$Notice.error({title:"文件上传失败",desc:"文件 "+e.name+" 上传失败。"})},AutoSize:function(img,t,e){var image=new Image;image.src=img.src,image.width<t&&image.height<e?(img.width=image.width,img.height=image.height):t/e<=image.width/image.height?(img.width=t,img.height=t*(image.height/image.width)):(img.width=e*(image.width/image.height),img.height=e)},getStyle:function(t){return window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle},getWidHei:function(t,e){var n="width"===e?t.offsetWidth:t.offsetHeight,o="width"===e?["Left","Right"]:["Top","Bottom"];if(0===n)return 0;for(var a,style=this.getStyle(t),i=0;a=o[i++];)n-=parseFloat(style["border"+a+"Width"])||0,n-=parseFloat(style["padding"+a])||0;return n}}},r=(n(173),n(22)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{style:{padding:"0 50px"}},[n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",[t._v("图像识别在线demo")])],1),t._v(" "),n("Content",{style:{padding:"24px 0",minHeight:"280px",background:"#fff"}},[n("Layout",[n("Sider",{style:{background:"#fff"},attrs:{"hide-trigger":""}},[n("Menu",{attrs:{"active-name":t.active,theme:"light",width:"auto","open-names":["2"]},on:{"on-select":t.selected}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("测试SCF接口\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("腾讯云接口测试")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("新增接口")])],2),t._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("灰度二值\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"gray"}},[t._v("转灰度")]),t._v(" "),n("MenuItem",{attrs:{name:"binarize"}},[t._v("二值化")])],2),t._v(" "),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("平滑滤波\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"middle"}},[t._v("中值滤波")]),t._v(" "),n("MenuItem",{attrs:{name:"average"}},[t._v("均值滤波")]),t._v(" "),n("MenuItem",{attrs:{name:"double"}},[t._v("双边滤波")]),t._v(" "),n("MenuItem",{attrs:{name:"gauss"}},[t._v("高斯模糊")])],2),t._v(" "),n("Submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("倾斜校正\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"rectify"}},[t._v("倾斜矫正")])],2),t._v(" "),n("Submenu",{attrs:{name:"5"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("规范化\n            ")],1),t._v(" "),n("MenuItem",{attrs:{name:"standard"}},[t._v("规范化")])],2),t._v(" "),n("MenuItem",{attrs:{name:"rowandcol"}},[t._v("行列拆分")])],1)],1),t._v(" "),n("Content",{style:{padding:"24px",minHeight:"768px",background:"#fff"}},[n("div",{staticClass:"demo-split fill-70height"},[n("Split",{model:{value:t.split1,callback:function(e){t.split1=e},expression:"split1"}},[n("div",{staticClass:"demo-split-pane",attrs:{slot:"left"},slot:"left"},[n("Upload",{ref:"upload",attrs:{type:"drag",action:"","on-progress":t.handleProgress,"before-upload":t.bupload,"on-success":t.handleSuccess,"on-error":t.handleError,"show-upload-list":!1}},[n("div",{staticStyle:{padding:"5px 0"}},[n("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"33"}}),t._v(" "),n("p",{attrs:{id:"aaa"}},[t._v("Click or drag files here to upload")])],1)]),t._v(" "),n("div",{attrs:{id:"previewer"}})],1),t._v(" "),n("div",{staticClass:"demo-split-pane",attrs:{slot:"right"},slot:"right"},[n("br"),t._v("处理结果:\n              "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{attrs:{id:"showres"}})])])],1)])],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);