"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5394],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),f=r,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||c;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6064:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),o=["components"],l={},i="\u8d26\u53f7\u7ba1\u7406",s={unversionedId:"getting-started/accounts/account-manage",id:"getting-started/accounts/account-manage",title:"\u8d26\u53f7\u7ba1\u7406",description:"Starcoin \u8282\u70b9\u5185\u7f6e\u4e86\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u94b1\u5305\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8d26\u53f7\u76f8\u5173\u7684\u63a5\u53e3\u4ee5\u53ca\u547d\u4ee4\u6765\u7ba1\u7406\u81ea\u5df1\u7684\u8d26\u53f7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/1.account-manage.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/account-manage",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/account-manage",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/03-accounts/1.account-manage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating your own private Starcoin network",permalink:"/starcoin-cookbook/zh/docs/getting-started/setup/private-network"},next:{title:"\u7b2c\u4e00\u7b14\u94fe\u4e0a\u4ea4\u6613",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/first-transaction"}},u={},p=[],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u8d26\u53f7\u7ba1\u7406"},"\u8d26\u53f7\u7ba1\u7406"),(0,c.kt)("p",null,"Starcoin \u8282\u70b9\u5185\u7f6e\u4e86\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u94b1\u5305\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8d26\u53f7\u76f8\u5173\u7684\u63a5\u53e3\u4ee5\u53ca\u547d\u4ee4\u6765\u7ba1\u7406\u81ea\u5df1\u7684\u8d26\u53f7\u3002"),(0,c.kt)("p",null,"\u8282\u70b9\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u8d26\u53f7\uff0c\u9ed8\u8ba4\u5bc6\u7801\u662f\u7a7a\u3002\u9ed8\u8ba4\u53ef\u4ee5\u901a\u8fc7\u8d26\u53f7\u76f8\u5173\u7684\u547d\u4ee4\u8fdb\u884c\u53d8\u66f4\u3002\u4ee5\u4e0b\u547d\u4ee4\u9700\u8981\u8fde\u63a5\u5230\u63a7\u5236\u53f0\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fde\u63a5\u65b9\u5f0f\u8bf7\u53c2\u770b",(0,c.kt)("a",{parentName:"p",href:"../setup/starcoin-usage"},"\u4f7f\u7528 starcoin \u547d\u4ee4\u884c"),"\u3002"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8d26\u53f7")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account create -p my-pass\n+--------------------+------------------------------------------------------------------------------------------+\n| address            | 0x812a1a9c8f03a008f96ae412baa69be8                                                       |\n+--------------------+------------------------------------------------------------------------------------------+\n| is_default         | false                                                                                    |\n+--------------------+------------------------------------------------------------------------------------------+\n| is_readonly        | false                                                                                    |\n+--------------------+------------------------------------------------------------------------------------------+\n| public_key         | 0x36012395c6ddf99cc4e6d60f35ac24b59c3a930d5e2611ac39d8bdfac2bfecf4                       |\n+--------------------+------------------------------------------------------------------------------------------+\n| receipt_identifier | stc1psy4p48y0qwsq37t2usft4f5maq7nrgfm |\n+--------------------+------------------------------------------------------------------------------------------+\n\n")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8d26\u53f7")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account show 0x812a1a9c8f03a008f96ae412baa69be8\n+----------------------------+------------------------------------------------------------------------------------------+\n| account.address            | 0x812a1a9c8f03a008f96ae412baa69be8                                                       |\n+----------------------------+------------------------------------------------------------------------------------------+\n| account.is_default         | false                                                                                    |\n+----------------------------+------------------------------------------------------------------------------------------+\n| account.is_readonly        | false                                                                                    |\n+----------------------------+------------------------------------------------------------------------------------------+\n| account.public_key         | 0x36012395c6ddf99cc4e6d60f35ac24b59c3a930d5e2611ac39d8bdfac2bfecf4                       |\n+----------------------------+------------------------------------------------------------------------------------------+\n| account.receipt_identifier | stc1psy4p48y0qwsq37t2usft4f5maq7nrgfm |\n+----------------------------+------------------------------------------------------------------------------------------+\n| auth_key                   | 0x7b9eb1fcbeb82e47c3e8958f4c5a2a97812a1a9c8f03a008f96ae412baa69be8                       |\n+----------------------------+------------------------------------------------------------------------------------------+\n| sequence_number            |                                                                                          |\n+----------------------------+------------------------------------------------------------------------------------------+\n\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"address \u662f\u8d26\u6237\u5730\u5740"),(0,c.kt)("li",{parentName:"ul"},"is_default \u8868\u793a\u662f\u5426\u4e3a\u9ed8\u8ba4\u8d26\u53f7\u3002\u5f88\u591a\u547d\u4ee4\u5982\u679c\u9700\u8981\u8d26\u53f7\u53c2\u6570\uff0c\u4f46\u7528\u6237\u6ca1\u6709\u4f20\u9012\uff0c\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8d26\u53f7\u3002\u5982\u679c\u8282\u70b9\u5f00\u542f\u4e86\u6316\u77ff\u5ba2\u6237\u7aef\uff0c\u4e5f\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8d26\u53f7\u8fdb\u884c\u6316\u77ff\u3002"),(0,c.kt)("li",{parentName:"ul"},"is_readonly \u8868\u793a\u662f\u5426\u4e3a\u53ea\u8bfb\u8d26\u53f7\uff0c\u53ea\u8bfb\u8d26\u53f7\u7684\u79c1\u94a5\u5e76\u4e0d\u6258\u7ba1\u5728\u8282\u70b9\u94b1\u5305\u4e2d\u3002  "),(0,c.kt)("li",{parentName:"ul"},"public_key \u662f\u8d26\u6237\u5730\u5740\u5bf9\u5e94\u7684\u516c\u94a5"),(0,c.kt)("li",{parentName:"ul"},"receipt_identifier \u662f\u6536\u6b3e\u4eba\u8bc6\u522b\u7801  "),(0,c.kt)("li",{parentName:"ul"},"auth_key \u662f\u8ba4\u8bc1\u79d8\u94a5\uff0c\u6700\u540e\u662f\u9700\u8981\u5199\u5230\u94fe\u4e0a\u53bb\u7684")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u521b\u5efa\u8d26\u6237\u53ea\u662f\u5728 starcoin node \u91cc\u521b\u5efa\u4e00\u5bf9\u5bc6\u94a5\uff0c\u5e76\u4e0d\u4f1a\u66f4\u65b0\u94fe\u7684\u72b6\u6001\u3002\u6240\u4ee5 balance \u548c  sequence_number \u6b64\u65f6\u8fd8\u662f\u7a7a\u7684\u3002\u4ee5\u4e0a\u4fe1\u606f\u90fd\u5c5e\u4e8e\u516c\u5f00\u4fe1\u606f\uff0c\u53ea\u6709\u79c1\u94a5\u662f\u9700\u8981\u7528\u6237\u4fdd\u5bc6\u7684\u3002")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8d26\u53f7\u5217\u8868")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account list\n")),(0,c.kt)("ol",{start:4},(0,c.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6216\u8005\u53d8\u66f4\u9ed8\u8ba4\u8d26\u53f7")),(0,c.kt)("p",null,"\u67e5\u770b\u9ed8\u8ba4\u8d26\u53f7\u5730\u5740\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account default\n")),(0,c.kt)("p",null,"\u5c06 0x812a1a9c8f03a008f96ae412baa69be8 \u8bbe\u7f6e\u4f4d\u9ed8\u8ba4\u5730\u5740\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account default 0x812a1a9c8f03a008f96ae412baa69be8\n")),(0,c.kt)("ol",{start:5},(0,c.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u5bfc\u5165\u8d26\u53f7")),(0,c.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u78c1\u76d8\u635f\u574f\u7b49\u539f\u56e0\u5bfc\u81f4\u81ea\u5df1\u7684\u8d44\u4ea7\u635f\u5931\uff0c\u5907\u4efd\u81ea\u5df1\u7684\u79c1\u94a5\u975e\u5e38\u91cd\u8981\u3002"),(0,c.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account export 0x812a1a9c8f03a008f96ae412baa69be8 -p my-pass\n")),(0,c.kt)("p",null,"\u5373\u53ef\u5bfc\u51fa 0x812a1a9c8f03a008f96ae412baa69be8 \u7684\u79c1\u94a5\u3002"),(0,c.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account import -i <private-key> -p my-pass 0x812a1a9c8f03a008f96ae412baa69be8\n")),(0,c.kt)("p",null,"\u5373\u53ef\u5bfc\u5165 0x812a1a9c8f03a008f96ae412baa69be8 \u8d26\u53f7\u3002\u8fd9\u4e2a\u547d\u4ee4\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5c06\u8d26\u53f7\u5bfc\u5165\u5230\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\uff0c\u7528\u6765\u505a\u8282\u70b9\u8fc1\u79fb\u3002"),(0,c.kt)("ol",{start:6},(0,c.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u53ea\u8bfb\u8d26\u53f7")),(0,c.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u628a\u79c1\u94a5\u6258\u7ba1\u5728\u8282\u70b9\u94b1\u5305\u4e2d\uff0c\u53ea\u662f\u60f3\u67e5\u770b\u8be5\u8d26\u53f7\uff0c\u6216\u8005\u5c06\u8be5\u8d26\u53f7\u4f5c\u4e3a\u6316\u77ff\u8d26\u53f7\uff0c\u53ef\u4ee5\u901a\u8fc7\u516c\u94a5\u5bfc\u5165\u53ea\u8bfb\u8d26\u53f7:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account import-readonly -i <public-key>  \n")),(0,c.kt)("p",null,"\u7136\u540e\u5c06\u8be5\u8d26\u53f7\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8d26\u53f7\u3002"),(0,c.kt)("ol",{start:7},(0,c.kt)("li",{parentName:"ol"},"\u5220\u9664\u8d26\u53f7")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account remove 0x812a1a9c8f03a008f96ae412baa69be8 -p my-pass\n")),(0,c.kt)("p",null,"\u5982\u679c\u662f\u53ea\u8bfb\u8d26\u53f7\uff0c\u65e0\u9700\u4f20\u9012 -p \u53c2\u6570\u3002\u5220\u9664\u8d26\u53f7\u53ea\u662f\u5c06\u8d26\u53f7\u4ece\u8282\u70b9\u94b1\u5305\u4e2d\u5220\u9664\uff0c\u5e76\u4e0d\u5f71\u54cd\u8be5\u8d26\u53f7\u5728\u94fe\u4e0a\u7684\u72b6\u6001\u3002"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u672c\u6587\u6863\u9700\u8981\u6539\u8fdb"),(0,c.kt)("ol",{parentName:"div"},(0,c.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4e3a json \u8f93\u51fa"),(0,c.kt)("li",{parentName:"ol"},"\u4ecb\u7ecd\u66f4\u591a\u8d26\u53f7\u547d\u4ee4")))))}f.isMDXComponent=!0}}]);