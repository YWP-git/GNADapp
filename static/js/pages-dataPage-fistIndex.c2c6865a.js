(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dataPage-fistIndex"],{"160b":function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"con","type":"address"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getErc20With","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockLp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"releaseLp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setAddPercent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setAddPercentMap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[4]","name":"_back","type":"uint256[4]"}],"name":"setBackPer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"_day","type":"uint256[3]"}],"name":"setDays","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setEthWith","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpAddress","type":"address"}],"name":"setLpContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setNeedInvite","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_parentAddress","type":"address"}],"name":"storeSome","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAddPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAddPercentMap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"GetAssetLog","outputs":[{"internalType":"uint256[]","name":"_idReturn","type":"uint256[]"},{"internalType":"uint256[]","name":"_amountReturn","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeReturn","type":"uint256[]"},{"internalType":"address[]","name":"_addressReturn","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"page","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"GetAssetLog2","outputs":[{"internalType":"uint256[]","name":"_idReturn","type":"uint256[]"},{"internalType":"address[]","name":"_addressReturn","type":"address[]"},{"internalType":"address[]","name":"_parentaddressReturn","type":"address[]"},{"internalType":"uint256[]","name":"_timeReturn","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_myAddress","type":"address"}],"name":"getbackP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBindLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"searchAddress","type":"address"}],"name":"getHasBind","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNeedInvite","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"searchAddress","type":"address"}],"name":"getParent","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserAllInvite","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_myAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_perId","type":"uint256"}],"name":"getUserInfoById","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserInvite","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},"29c9":function(t,e,n){"use strict";n.r(e);var a=n("aaac"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},4812:function(t,e,n){var a=n("24fb"),i=n("1de5"),s=n("aaee"),o=n("ecb4"),d=n("f0aa"),r=n("2642"),l=n("c598"),u=n("6935"),c=n("b6f4");e=a(!1);var p=i(s),f=i(o),v=i(d),g=i(r),y=i(l),m=i(u),h=i(c);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-904bfd96]{position:relative;border-radius:%?50?% %?50?% 0 0;padding-top:%?69?%;background-image:url('+p+");background-size:100% 100%;padding-top:%?140?%}.content .topStyle[data-v-904bfd96]{background-color:#12233b;display:flex;justify-content:space-between;padding:%?30?% %?30?% %?40?% %?30?%;align-items:center;position:fixed;top:0;width:93%;z-index:9}.content .topStyle .bgStyle[data-v-904bfd96]{position:absolute;left:0;bottom:0;width:100%;height:%?40?%;background:#000;border-radius:%?50?% %?50?% 0 0}.content .topStyle .leftImg[data-v-904bfd96]{display:flex;align-items:center}.content .topStyle .centerText[data-v-904bfd96]{display:flex;align-items:center}.content .topStyle .centerText .langStyle[data-v-904bfd96]{display:flex;align-items:center}.content .topStyle .centerText .addressBox[data-v-904bfd96]{height:%?58?%;line-height:%?58?%;background-image:url("+f+");background-size:100% 100%;border-radius:%?29?%;margin-left:%?30?%;display:flex;align-items:center;padding:0 %?20?%}.content .topStyle .centerText .addressBox uni-text[data-v-904bfd96]{width:%?100?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:%?62?%;font-size:%?24?%;font-family:Microsoft YaHei;font-weight:400;color:#fff;margin-left:%?10?%}.content .dataBody[data-v-904bfd96]{margin:0 %?30?%;position:relative}.content .dataBody .changeBtn[data-v-904bfd96]{position:absolute;top:%?300?%;right:%?250?%;background-image:url("+v+");background-size:100% 100%;padding:0 %?30?%;border-radius:%?30?%;height:%?55?%;line-height:%?55?%;text-align:center;color:#fff;font-size:%?30?%}.content .dataBody .changeBtn2[data-v-904bfd96]{position:absolute;top:%?300?%;right:%?10?%;background-image:url("+v+");background-size:100% 100%;padding:0 %?30?%;border-radius:%?30?%;height:%?55?%;line-height:%?55?%;text-align:center;color:#fff;font-size:%?30?%}.content .dataBody .title[data-v-904bfd96]{display:flex;justify-content:left}.content .dataBody .title uni-image[data-v-904bfd96]{width:%?630?%;height:%?325?%;margin-bottom:%?40?%}.content .dataBody .priceBox[data-v-904bfd96]{margin-top:%?30?%;display:flex;justify-content:space-between}.content .dataBody .priceBox .left[data-v-904bfd96], .content .dataBody .priceBox .right[data-v-904bfd96]{width:40%;background-image:url("+g+");background-size:100% 100%;width:%?342?%;padding:%?40?% 0;text-align:center}.content .dataBody .priceBox .left .top[data-v-904bfd96], .content .dataBody .priceBox .right .top[data-v-904bfd96]{display:flex;justify-content:center;align-items:center;font-size:%?30?%;font-family:DIN;font-weight:700;color:#fff}.content .dataBody .priceBox .left uni-text[data-v-904bfd96], .content .dataBody .priceBox .right uni-text[data-v-904bfd96]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#b4c6e0}.content .dataBody .btnBox[data-v-904bfd96]{display:flex;justify-content:space-around;align-items:center;margin-top:%?40?%}.content .dataBody .btnBox .left[data-v-904bfd96]{width:%?295?%;height:%?109?%;line-height:%?109?%;text-align:center;background-image:url("+y+");background-size:100% 100%;font-size:%?29?%;font-family:Microsoft YaHei;font-weight:700;color:#fff}.content .dataBody .btnBox .right[data-v-904bfd96]{width:%?295?%;height:%?109?%;line-height:%?109?%;text-align:center;background-image:url("+m+");background-size:100% 100%;font-size:%?29?%;font-family:Microsoft YaHei;font-weight:700;color:#fff}.content .dataBody .lpBox[data-v-904bfd96]{margin-top:%?60?%}.content .dataBody .lpBox .titleName[data-v-904bfd96]{text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#fff;background-image:url("+h+");background-size:100% 100%;height:%?71?%;line-height:%?71?%;margin:%?100?% 0 %?50?% 0}.content .dataBody .lpBox .centerImg[data-v-904bfd96]{width:100%;height:%?608?%}.content .dataBody .lpBox .centerImg uni-image[data-v-904bfd96]{width:100%;height:100%}.content .dataBody .lpBox .bottomBox[data-v-904bfd96]{margin:%?60?% %?20?% 0 %?20?%}.content .dataBody .lpBox .bottomBox .lpText[data-v-904bfd96]{font-size:%?29?%;font-family:Microsoft YaHei;font-weight:400;color:#edd088}.content .dataBody .lpBox .bottomBox .boxInput[data-v-904bfd96]{margin:%?40?% 0;height:%?95?%;background:#fff;border:1px solid #1d5c9d;border-radius:%?47?%}.content .dataBody .lpBox .bottomBox .boxInput uni-input[data-v-904bfd96]{width:100%;height:100%;padding-left:%?40?%}.content .dataBody .lpBox .bottomBox .inputBtn[data-v-904bfd96]{display:flex;justify-content:space-between}.content .dataBody .lpBox .bottomBox .inputBtn .left[data-v-904bfd96], .content .dataBody .lpBox .bottomBox .inputBtn .right[data-v-904bfd96]{width:%?300?%;height:%?88?%;line-height:%?88?%;text-align:center;background-image:url("+v+");background-size:100% 100%;border-radius:%?44?%;font-size:%?29?%;font-family:Microsoft YaHei;font-weight:700;color:#fff}.content .dataBody .lpBox .lpBottm[data-v-904bfd96]{margin-top:%?59?%;padding:%?20?%;background:rgba(55,82,121,.3);display:flex;justify-content:space-between;border-radius:%?30?%}.content .dataBody .lpBox .lpBottm .list[data-v-904bfd96]{text-align:center}.content .dataBody .lpBox .lpBottm .list .top[data-v-904bfd96]{width:%?61?%;height:%?61?%;margin-bottom:%?4?%}.content .dataBody .lpBox .lpBottm .list .top uni-image[data-v-904bfd96]{width:100%;height:100%}.content .dataBody .lpBox .lpBottm .list .center[data-v-904bfd96]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;margin-bottom:%?14?%}.content .dataBody .lpBox .lpBottm .list .bottom[data-v-904bfd96]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#95a0a8}.login-btn[data-v-904bfd96]{width:86%;height:%?90?%;border-radius:%?45?%;line-height:%?90?%;font-size:%?40?%;color:#a4c572;text-align:center;margin:auto}\r\n/* components/vas-prompt/vas-prompt.wxss */.prompt-box[data-v-904bfd96]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:9}.prompt-content[data-v-904bfd96]{position:absolute;left:50%;top:50%;width:100%;max-width:%?700?%;border-radius:%?10?%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:hidden}.prompt-title[data-v-904bfd96]{width:100%;padding-top:%?30?%;text-align:center;font-size:%?32?%}.prompt-input[data-v-904bfd96]{margin:8%;padding:%?10?% %?15?%;width:80%;height:%?44?%;background:#2c2c37;border-radius:%?10?%;font-size:%?28?%;font-family:Adobe Heiti Std;font-weight:400;color:#aaaab6}.prompt-btn-group[data-v-904bfd96]{display:flex}.btn-item[data-v-904bfd96]{width:25%;margin-bottom:%?20?%;height:%?60?%;line-height:%?56?%;background-color:#fff;justify-content:space-around;border-radius:%?20?%}.prompt-certain-btn[data-v-904bfd96]{color:#fff;background:#9145f8;font-size:%?28?%;font-family:Adobe Heiti Std;font-weight:700;color:#fff}.prompt-cancel-btn[data-v-904bfd96]{background:#46465a;font-size:%?28?%;font-family:Adobe Heiti Std;font-weight:700;color:#6a6a7a}.contentFontColor[data-v-904bfd96]{color:#aaaab6}.prompt-text[data-v-904bfd96]{margin-top:%?15?%;font-size:%?38?%}.popBox[data-v-904bfd96]{border-radius:%?20?%;background:#2d2e3f;z-index:9999999;height:220px}.popBox .boxTitleName[data-v-904bfd96]{width:100%;display:flex;justify-content:center}.popBox .boxTitleName .bgBox[data-v-904bfd96]{width:70%;height:%?80?%;color:#fff}.popBox .boxBody[data-v-904bfd96]{margin:%?40?%}.popBox .boxBody .userIndex[data-v-904bfd96]{position:relative;width:94%;padding:%?20?%;display:flex;justify-content:space-between;align-items:center;background:#262739;border-radius:%?20?%}.popBox .boxBody .userIndex .iconImg[data-v-904bfd96]{display:flex;align-items:center}.popBox .boxBody .userIndex .iconImg uni-image[data-v-904bfd96]{width:%?65?%;height:%?65?%;background:#f3f9fe;border:%?3?% solid #a6cfea;border-radius:50%;margin-right:%?23?%}.popBox .boxBody .userIndex .iconImg uni-text[data-v-904bfd96]{font-size:%?28?%;font-family:Microsoft YaHei;font-weight:400;color:#eee}.popBox .boxBody .userIndex .textAddress[data-v-904bfd96]{font-size:%?28?%;font-family:Microsoft YaHei;font-weight:400;color:#fff}.popBox .boxBody .userIndex .textAddress uni-input[data-v-904bfd96]{width:100%;height:100%}.popBox .popBtn[data-v-904bfd96]{display:flex;margin:%?40?%;justify-content:space-between}.popBox .popBtn .popLeft[data-v-904bfd96]{width:48%;height:%?85?%;line-height:%?85?%;text-align:center;font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#fff;border:%?4?% solid #5147e9;border-radius:%?44?%}.popBox .popBtn .popRight[data-v-904bfd96]{width:48%;height:%?95?%;line-height:%?95?%;text-align:center;font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#fff;background-image:url("+m+");background-size:100% 100%;border-radius:%?44?%}",""]),t.exports=e},5376:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={showModal:n("5571").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"topStyle",style:{paddingBottom:0==t.index?"15px":""}},[a("v-uni-view",{staticClass:"leftImg"},[t.leftStatus?t._e():a("v-uni-image",{staticStyle:{width:"39rpx",height:"33rpx"},attrs:{src:n("b15a"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle()}}})],1),a("v-uni-view",{staticClass:"centerText"},[a("v-uni-view",{staticClass:"langStyle"},[a("v-uni-picker",{attrs:{value:t.langIndex,range:t.langArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange1.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input",staticStyle:{color:"#fff","font-size":"26rpx"}},[t._v(t._s(t.langArray[t.langIndex]))])],1),a("v-uni-image",{staticStyle:{width:"13rpx",height:"8rpx","margin-left":"10rpx"},attrs:{src:n("fc2f"),mode:""}})],1),a("v-uni-view",{staticClass:"addressBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddress.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"29rpx",height:"25rpx","margin-bottom":"5rpx"},attrs:{src:n("75d6"),mode:""}}),a("v-uni-text",[t._v(t._s(""==t.myAddress||void 0==t.myAddress?t.$t("connectWallet"):t.myAddress))])],1)],1)],1),a("v-uni-view",{staticClass:"dataBody"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-image",{attrs:{src:n("b351"),mode:""}})],1),a("v-uni-view",{staticClass:"osdBox"},[a("v-uni-view",{staticClass:"priceBox"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(Math.floor(1e4*t.fendNum)/1e4))]),a("v-uni-text",[t._v("已领取FSENT收益")])],1),a("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecoding.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(Math.floor(1e4*t.jyNum)/1e4))]),a("v-uni-text",[t._v("已领取WSS收益")])],1)],1),a("v-uni-view",{staticClass:"priceBox"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(Math.floor(1e4*t.totalLIU)/1e4))]),a("v-uni-text",[t._v(t._s(t.$t("TotalCurrent")))])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(Math.floor(1e4*t.totalLP)/1e4))]),a("v-uni-text",[t._v(t._s(t.$t("TotalLPvalue")))])],1)],1),a("v-uni-view",{staticClass:"priceBox"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.wssDongtaiNum<0?0:Math.floor(1e4*t.wssDongtaiNum)/1e4))]),a("v-uni-text",[t._v(t._s(t.$t("CanReceive3")))])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.wssJingtaiNum<0?0:Math.floor(1e4*t.wssJingtaiNum)/1e4))]),a("v-uni-text",[t._v(t._s(t.$t("CanReceive4")))])],1)],1),a("v-uni-view",{staticClass:"priceBox"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.fsentDongtaiNum<0?0:Math.floor(1e4*t.fsentDongtaiNum)/1e4))]),a("v-uni-text",[t._v("可领取FSENT动态收益")])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.fsentJingtaiNum<0?0:Math.floor(1e4*t.fsentJingtaiNum)/1e4))]),a("v-uni-text",[t._v("可领取FSENT静态收益")])],1)],1),a("v-uni-view",{staticClass:"btnBox"},[a("v-uni-view",{staticClass:"left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLP.apply(void 0,arguments)}}},[t._v(t._s(t.$t("relationship")))]),a("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickGet.apply(void 0,arguments)}}},[t._v(t._s(t.$t("harvest")))])],1),a("v-uni-view",{staticClass:"lpBox"},[a("v-uni-view",{staticClass:"titleName"},[t._v("FIST挖矿")]),a("v-uni-view",{staticClass:"centerImg"},[a("v-uni-image",{attrs:{src:n("96d3"),mode:""}})],1),a("v-uni-view",{staticClass:"bottomBox"},[a("v-uni-view",{staticClass:"lpText",staticStyle:{display:"flex","justify-content":"space-between"}},[a("v-uni-text",[t._v("我的锁仓LP： "+t._s(Math.floor(100*t.oneLpNum)/100))])],1),a("v-uni-view",{staticClass:"boxInput"},[a("v-uni-input",{attrs:{type:"text",placeholder:"LP "+t.$t("num")+": "+t.oneLpNumNeed,disabled:!0}})],1),a("v-uni-view",{staticClass:"inputBtn"},[a("v-uni-view",{staticClass:"left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickOn.apply(void 0,arguments)}}},[t._v(t._s(t.$t("outData")))]),a("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickIn.apply(void 0,arguments)}}},[t._v(t._s(t.$t("pledge")))])],1)],1),a("v-uni-view",{staticClass:"lpBottm"},[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list",staticStyle:{"margin-top":"33rpx"}},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list",staticStyle:{"margin-top":"33rpx"}},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list",staticStyle:{"margin-top":"33rpx"}},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-image",{attrs:{src:n("9bb7"),mode:""}})],1),a("v-uni-view",{staticClass:"center"},[t._v("WSS")]),a("v-uni-view",{staticClass:"bottom"},[t._v("6.16")])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"login-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show2.apply(void 0,arguments)}}},[t.isHidden2?a("v-uni-view",{staticClass:"prompt-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.show2}}},[a("v-uni-view",{staticClass:"prompt-content contentFontColor"},[a("v-uni-view",{staticClass:"popBox"},[a("v-uni-view",{staticClass:"boxTitleName"},[a("v-uni-view",{staticClass:"bgBox"},[t._v(t._s(t.$t("harvest")))])],1),a("v-uni-view",{staticClass:"boxBody"},[a("v-uni-view",{staticClass:"userIndex"},[a("v-uni-view",{staticClass:"iconImg"},[a("v-uni-image",{attrs:{src:n("f5d9"),mode:""}}),a("v-uni-text",[t._v("选择领取收益")])],1),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[a("v-uni-picker",{attrs:{value:t.selectIndex,range:t.selectArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.selectArray[t.selectIndex]))])],1),a("v-uni-image",{staticStyle:{width:"13rpx",height:"8rpx","margin-left":"10rpx"},attrs:{src:n("fc2f"),mode:""}})],1)],1)],1),a("v-uni-view",{staticClass:"popBtn"},[a("v-uni-view",{staticClass:"popLeft",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePop1()}}},[t._v(t._s(t.$t("cancel")))]),a("v-uni-view",{staticClass:"popRight",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeWithClick()}}},[t._v(t._s(t.$t("harvest")))])],1)],1)],1)],1):t._e()],1),a("show-modal")],1)},s=[]},"8cda":function(t,e,n){"use strict";var a=n("ceb9"),i=n.n(a);i.a},aaac:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),s=a(n("1da1"));n("33d1"),n("ea98"),n("e25e");var o,d=a(n("160b")),r=a(n("7342")),l=a(n("0679")),u=a(n("adb8")),c=window.ethereum,p=new Web3(window.web3.currentProvider),f={data:function(){return{gebCoinNum:0,totalLP:0,isHidden2:!1,show2:null,totalLIU:0,jyNum:0,fendNum:0,oneLpNum:0,oneLpNum2:0,oneLpNumNeed:0,myAddress:"",coinNum:"",allOnceNum:0,staticBack:0,wssStaticBack:0,fsentStaticBack:0,allInput:0,dongtaiNum:0,jingtaiNum:0,wssDongtaiNum:0,wssJingtaiNum:0,fsentJingtaiNum:0,fsentDongtaiNum:0,selectArray:["WSS"],selectIndex:0,type:"left",leftStatus:!1,index:0,styleIndex:0,langArray:["中文","English"],langIndex:0,assetData:[],styleData:{borderLeft:"5rpx solid #00DEA1",color:"#00DEA1",background:"#000000"}}},created:function(){var t=this;t.index=0,t.Init((function(){var e=p.eth.contract(d.default);t.contractInstance=e.at(t.fistContractAddress),t.getMyInviteData(),t.getALLwANCE(),t.getLPnUM(),t.getLIU(),t.getINlp(),t.getINlpNeed(),t.getState(),t.tpSDK.getCurrentWallet().then((function(t){"observeWallet"==t.data.walletType&&console.log("观察钱包")})).catch((function(t){console.log(t)}))}))},methods:{clickPool:function(){uni.navigateTo({url:"/pages/dataPage/msnIndex"})},bindPickerChange:function(t){this.selectIndex=t.detail.value},getJYnUM:function(){var t=this;uni.request({url:"http://43.135.15.190:3124/getMyAsset",method:"GET",header:{"Content-Type":"application/json"},data:{address:this.myAddress},success:function(e){t.jyNum=0==e.data.data.length?0:e.data.data[0].CjuwssallGetPrize+e.data.data[0].CjuwssallInvitePrize,t.fendNum=0==e.data.data.length?0:e.data.data[0].NewCjuwssallGetPrize+e.data.data[0].NewCjuwssallInvitePrize;var n=0==e.data.data.length?0:e.data.data[0].CjuwssgetPrize,a=0==e.data.data.length?0:e.data.data[0].NewCjuwssgetPrize,i=0==e.data.data.length?0:e.data.data[0].Cjuasset,s=0==e.data.data.length?0:e.data.data[0].CjuwssupdateTime,d=0==e.data.data.length?0:e.data.data[0].CjuwssinvitePrize,r=0==e.data.data.length?0:e.data.data[0].NewCjuwssinvitePrize;o=setInterval((function(){var e=(new Date).getTime()/1e3,o=s<1666670400?parseInt(e-1666670400):parseInt(e-s),l=s<1668009600?parseInt(e-1668009600):parseInt(e-s);t.wssJingtaiNum=i/t.allInput*o/86400*t.wssStaticBack+n,t.wssDongtaiNum=t.getMyInvite/20/t.allInput*o/86400*t.wssStaticBack+d,t.fsentJingtaiNum=i/t.allInput*l/86400*t.fsentStaticBack+a,t.fsentDongtaiNum=t.getMyInvite/20/t.allInput*l/86400*t.fsentStaticBack+r}),1e3)}})},getMyInviteData:function(){var t=this;uni.request({url:"http://43.135.15.190:3124/getCjUMyInvite",method:"GET",header:{"Content-Type":"application/json"},data:{address:this.myAddress},success:function(e){t.getMyInvite=0==e.data.data.length||null==e.data.data[0].asset?0:e.data.data[0].asset}})},getState:function(){var t=this;uni.request({url:"http://43.135.15.190:3124/getjyAllinput",method:"GET",header:{"Content-Type":"application/json"},data:{},success:function(e){t.allInput=e.data.data[0].CjuallInput,t.wssStaticBack=e.data.data[0].CjuwssStaticBack,t.fsentStaticBack=e.data.data[0].NewCjuwssStaticBack,t.getJYnUM()}})},changeWithClick:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"区块确认中..."}),n=p.eth.contract(l.default).at(t.withContract),e.next=4,n.storeSome(2,{gas:3e5,gasPrice:5e9,from:t.myAddress},(function(e,n){if(e)uni.hideLoading(),uni.showToast({title:e,icon:"none"});else{console.log(n);var a=t;console.log(t.selectIndex),uni.request({url:"http://43.135.15.190:3124/getCjUWSSMyMoney",method:"GET",header:{"Content-Type":"application/json"},data:{hash:n,address:t.myAddress},success:function(t){uni.hideLoading(),clearInterval(o),a.getMyInviteData(),a.isHidden2=!a.isHidden2,a.getState(),console.log(t),uni.showToast({title:t.data.msg,icon:"none"})},error:function(t){uni.hideLoading(),a.isHidden2=!a.isHidden2,uni.showToast({title:t,icon:"none"})}})}}));case 4:case"end":return e.stop()}}),e)})))()},clickGet:function(){this.isHidden2=!this.isHidden2},closePop1:function(){this.isHidden2=!this.isHidden2},clickLP:function(){uni.navigateTo({url:"/pages/nftGame/index"})},goRecoding:function(){uni.navigateTo({url:"/pages/withRecoding/index?type=6"})},joinInput:function(){var t=this;t.contractInstance.lockLp({gas:9e5,gasPrice:5e9,from:t.myAddress},(function(e,n){e?uni.showToast({title:e,icon:"none"}):(setTimeout((function(){t.getLPnUM(),t.getLIU(),t.getINlp(),t.getINlpNeed()}),2e4),console.log(n),uni.showToast({title:"等待区块确认！",icon:"none"}))}))},clickOn:function(){var t=this;0!=t.oneLpNum&&null!=t.oneLpNum?t.$showModal({title:"提示",content:"确认取出吗？",success:function(e){e.confirm?t.contractInstance.releaseLp({gas:6e5,gasPrice:5e9,from:t.myAddress},(function(e,n){e?uni.showToast({title:e,icon:"none"}):(setTimeout((function(){t.getLPnUM(),t.getLIU(),t.getINlp(),t.getINlpNeed()}),2e4),console.log(n),uni.showToast({title:"等待区块确认！",icon:"none"}))})):e.cancel&&(uni.hideLoading(),console.log("用户点击取消"))}}):uni.showToast({title:"无法取出！",icon:"none"})},getALLwANCE:function(){var t=this;try{var e=p.eth.contract(r.default).at(this.fistCoinContract);e.balanceOf(this.myAddress,(function(e,n){t.allOnceNum=new u.default(n).shiftedBy(-18).toNumber()}))}catch(n){console.log(n)}},clickIn:function(){var t=this,e=p.eth.contract(r.default).at(t.fistCoinContract);t.$showModal({title:"提示",content:"确认质押吗？",success:function(n){n.confirm?e.allowance(t.myAddress,t.fistContractAddress,(function(n,a){if(!n){uni.hideLoading();var i=new u.default(a).shiftedBy(-18).toNumber();console.log(i),i>0&&t.allOnceNum<=i?t.joinInput():e.approve(t.fistContractAddress,1e7*Math.pow(10,18),{gas:3e5,gasPrice:5e9,from:t.myAddress},(function(e,n){n?(uni.showToast({title:"授权成功！",icon:"none"}),t.joinInput()):uni.showToast({title:"授权失败！",icon:"none"})}))}})):n.cancel&&(uni.hideLoading(),console.log("用户点击取消"))}})},getLPnUM:function(){var t=this,e=p.eth.contract(r.default).at(this.fistCoinContract);e.balanceOf(this.fistContractAddress,(function(e,n){t.totalLP=new u.default(n).shiftedBy(-18).toNumber()}))},getLIU:function(){var t=this,e=p.eth.contract(r.default).at("0x55d398326f99059fF775485246999027B3197955");e.balanceOf(this.fistCoinContract,(function(e,n){t.totalLIU=new u.default(n).shiftedBy(-18).toNumber()}))},getINlp:function(){var t=this;this.contractInstance.getUserInfo(this.myAddress,(function(e,n){t.oneLpNum=new u.default(n[0]).shiftedBy(-18).toNumber()}))},getINlpNeed:function(){var t=this,e=p.eth.contract(r.default).at(this.fistCoinContract);e.balanceOf(this.myAddress,(function(e,n){t.oneLpNumNeed=new u.default(n).shiftedBy(-18).toNumber()}))},toggle:function(){uni.navigateTo({url:"/pages/index/index"})},change:function(t){this.leftStatus=t.show},close:function(){this.$refs.popup.close()},bindPickerChange1:function(t){this.langIndex=t.target.value,console.log(this.langIndex),0==this.langIndex?(uni.setStorageSync("language","zh-CN"),this._i18n.locale="zh-CN"):1==this.langIndex&&(uni.setStorageSync("language","en-US"),this._i18n.locale="en-US")},Init:function(t){var e=this;"undefined"===typeof window.ethereum?console.log("请安装MetaMask"):c.send("eth_requestAccounts").catch((function(t){"User rejected provider access"===t?uni.showToast({title:"User rejected provider access！",icon:"none"}):uni.showToast({title:"There was a problem signing you in！",icon:"none"})})).then((function(n){e.myAddress=n.result[0],t()}))}}};e.default=f},ceb9:function(t,e,n){var a=n("4812");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b1cdf32e",a,!0,{sourceMap:!1,shadowMode:!1})},da08:function(t,e,n){"use strict";n.r(e);var a=n("5376"),i=n("29c9");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("8cda");var o=n("f0c5"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"904bfd96",null,!1,a["a"],void 0);e["default"]=d.exports}}]);