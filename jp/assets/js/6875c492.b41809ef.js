"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[8610],{93241:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(87462),n=a(63366),l=a(67294),i=a(86010),o="blogBackground_WB8r",c="cardListView_Xc25",s="singleBlogPageView_LeVK",m=a(46235),u=(a(34082),["sidebar","toc","children","isListView","isTagsPostPage"]);function g(e){var t,a=e.sidebar,g=e.toc,d=e.children,p=e.isListView,h=e.isTagsPostPage,f=(0,n.Z)(e,u),v=(a&&a.items.length,!p&&!h);return l.createElement(m.Z,(0,r.Z)({},f,{wrapperClassName:o}),l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:(0,i.Z)("col",(t={"col--8":v,"col--offset-1":g&&v,"col--offset-2":!g&&v},t[c]=!0===p||!0===h,t[s]=v,t)),itemScope:!0,itemType:"http://schema.org/Blog"},d),g&&l.createElement("div",{className:"col col--2"},g))))}},29498:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n="blogNavigationButtons_Fhdd",l=a(97325),i=a(23672);function o(e){var t=e.metadata,a=t.previousPage,o=t.nextPage;return r.createElement("nav",{className:"pagination-nav "+n,"aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(i.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&r.createElement(i.Z,{permalink:o,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},49898:function(e,t,a){a.d(t,{Z:function(){return qe}});var r=a(67294),n=a(86010),l=a(79107),i="articleCard_EtO4",o="articleContainer_Rf03",c=a(79524);function s(e){var t,a,s=e.children,m=(e.className,(0,l.C)()),u=m.frontMatter,g=m.assets,d=m.metadata,p=m.isBlogPostPage,h=(d.hasTruncateMarker,(0,c.C)().withBaseUrl),f=null!=(t=g.image)?t:u.image;return r.createElement("article",{className:(0,n.Z)((a={},a[i]=!p,a[o]=p,a)),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},f&&r.createElement("meta",{itemProp:"image",content:h(f,{absolute:!0})}),s)}var m="featuredImage_X5qz",u="dottedBorderBottom_ncyy",g="linkClickArea_empq",d=a(83699),p="avatarContainer_wkVt",h="avatarPhoto__Yie",f="avatarName_nPzs",v="hasImageBackground_S_Ba",E="avatarSubtitle_mwwR";function b(e){return e.href?r.createElement(d.Z,e):r.createElement(r.Fragment,null,e.children)}function w(e){var t,a,i,o,c=e.author,s=e.className,m=c.name,u=c.title,g=c.url,d=c.imageURL,w=c.email,_=g||w&&"mailto:"+w||void 0,N=(0,l.C)(),P=N.assets,y=N.metadata,k=N.isBlogPostPage,Z=y.frontMatter,C=void 0!==P.image||void 0!==Z.image;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",(t={},t[p]=!k,t),s)},d&&r.createElement(b,{href:_,className:"avatar__photo-link"},r.createElement("img",{className:(0,n.Z)("avatar__photo",(a={},a[h]=!k,a)),src:d,alt:m})),m&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:(0,n.Z)("avatar__name",(i={},i[f]=!k,i[v]=C,i))},r.createElement(b,{href:_,itemProp:"url"},r.createElement("span",{itemProp:"name"},m))),u&&r.createElement("small",{className:(0,n.Z)("avatar__subtitle",(o={},o[E]=!k,o[v]=C,o)),itemProp:"description",title:u},u)))}var _="authorCol_q4o9",N="imageOnlyAuthorRow_lXe7",P="imageOnlyAuthorCol_cxD5",y="authorsContainerCardView_c4as",k="authorItem_b5pK",Z="avatarPhoto_KbfP";function C(e){return e.href?r.createElement(d.Z,e):r.createElement(r.Fragment,null,e.children)}function O(e){var t,a,i,o,c=e.className,s=(0,l.C)(),m=s.metadata.authors,u=s.assets,g=s.isBlogPostPage;if(0===m.length)return null;var d=m.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",d?N:"row",(t={},t[y]=!g,t),c)},(g||m.length<=2)&&m.map((function(e,t){var a,l;return r.createElement("div",{className:(0,n.Z)(!d&&"col col--6",d?P:_,(a={},a[k]=!g,a)),key:t},r.createElement(w,{author:Object.assign({},e,{imageURL:null!=(l=u.authorsImageUrls[t])?l:e.imageURL})}))})),m.length>2&&!g&&r.createElement(r.Fragment,null,r.createElement("div",{className:(0,n.Z)(!d&&"col col--6",d?P:_,(a={},a[k]=!g,a))},m.slice(1).map((function(e,t){var a;return r.createElement(C,{href:e.url,className:"avatar__photo-link",key:t},r.createElement("img",{className:(0,n.Z)("avatar__photo",(a={},a[Z]=!g,a)),src:e.imageURL,alt:e.name,title:e.name}))}))),r.createElement("div",{className:(0,n.Z)(!d&&"col col--6",d?P:_,(i={},i[k]=!g,i))},r.createElement(w,{author:Object.assign({},m[0],{imageURL:null!=(o=u.authorsImageUrls[0])?o:m[0].imageURL})}))))}var T=a(28342);function x(e){e.children,e.className;var t,a,i=(0,l.C)(),o=i.assets,c=i.metadata,s=(i.isBlogPostPage,c.frontMatter),p=null!=(t=o.image)?t:s.image;return r.createElement("div",{className:(0,n.Z)(m,(a={},a[u]=void 0===p,a)),style:{backgroundImage:p?"linear-gradient(transparent 62%, #242c37cc 85%), url('"+p+"')":"url('/img/image-placeholder-wgtwo.png')"}},r.createElement(d.Z,{to:c.permalink,className:g}),r.createElement(O,null))}var B="articleCardHeader_doJu",I="title_xvU1",j="titleCardView_r57b";function z(e){var t,a,i=e.className,o=(0,l.C)(),c=o.metadata,s=o.isBlogPostPage,m=c.permalink,u=c.title,g=s?"h1":"h2";return r.createElement(g,{className:(0,n.Z)((t={},t[I]=s,t),(a={},a[j]=!s,a),i),itemProp:"headline"},s?u:r.createElement(d.Z,{itemProp:"url",to:m,title:u},u))}var L,M,S=a(97325),R=a(23777),U=a(39962),F="container_iJTo",V="containerCardView_EbU1",A="dateContainer_S5xq",D="iconsContainer_WcqX",H="noIcons_O5Tx",X="button_jnFd",q="icon_K6Vf",K="iconLink_fFIC",G="spacer_N6vp",W=["title","titleId"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},J.apply(this,arguments)}function $(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Y=function(e){var t=e.title,a=e.titleId,n=$(e,W);return r.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",height:56.693,width:56.693,viewBox:"0 0 56.693 56.693",xmlSpace:"preserve","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,L||(L=r.createElement("rect",{width:"100%",height:"100%",fill:"none"})),M||(M=r.createElement("g",{className:"currentLayer"},r.createElement("title",null,"Layer 1"),r.createElement("path",{d:"M56.237 11.546a22.859 22.859 0 0 1-6.598 1.809 11.509 11.509 0 0 0 5.051-6.357 22.997 22.997 0 0 1-7.295 2.79 11.473 11.473 0 0 0-8.385-3.629c-6.344 0-11.488 5.144-11.488 11.489 0 .899.101 1.775.298 2.618-9.548-.48-18.014-5.053-23.68-12.004a11.43 11.43 0 0 0-1.555 5.777c0 3.985 2.027 7.502 5.11 9.562a11.456 11.456 0 0 1-5.204-1.438v.145c0 5.565 3.96 10.208 9.215 11.265a11.55 11.55 0 0 1-5.189.195c1.463 4.564 5.705 7.887 10.732 7.979A23.047 23.047 0 0 1 2.98 46.665c-.926 0-1.841-.055-2.74-.161a32.51 32.51 0 0 0 17.61 5.161c21.132 0 32.687-17.505 32.687-32.686 0-.498-.01-.995-.032-1.488a23.268 23.268 0 0 0 5.731-5.945z",className:"selected"}))))},Q=["title","titleId"];function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ae,re,ne=function(e){var t=e.title,a=e.titleId,n=te(e,Q);return r.createElement("svg",ee({height:500,width:500,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,r.createElement("path",{d:"M50 0C22.3 0 0 22.3 0 50v400c0 27.7 22.3 50 50 50h400c27.7 0 50-22.3 50-50V50c0-27.7-22.3-50-50-50H50zm89.906 105.781c19.182 0 34.719 15.537 34.719 34.719 0 19.182-15.537 34.75-34.719 34.75-19.182 0-34.719-15.568-34.719-34.75 0-19.182 15.537-34.719 34.72-34.719zm181.875 90.438c3.922.014 7.925.199 13.313.531 26.184 1.615 55.36 22.08 56.219 70.031.706 39.493.5 102.081.5 125.125H332.28c0-23.574.25-72.274.25-106.719 0-15.672-7.035-36.75-32.094-36.75-27.597 0-34.312 25.645-34.312 36.75 0 33.074-.281 85.752-.281 106.72h-59.188c0-35.345.375-156.654.375-190.907 30.568 0 45.191-.063 56.375-.063 0 11.218-.094 18.722-.094 26.907 9.337-18.852 34.832-30.655 45.75-31.219 4.98-.257 8.797-.42 12.72-.406zm-211.594 5.531h59.344v190.063h-59.344V201.75z",style:{fillOpacity:1,fillRule:"nonzero"}}))},le=["title","titleId"];function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ie.apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ce=function(e){var t=e.title,a=e.titleId,n=oe(e,le);return r.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:256,height:256,viewBox:"0 0 256 256","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,ae||(ae=r.createElement("rect",{width:"100%",height:"100%",fill:"none"})),re||(re=r.createElement("g",{className:"currentLayer"},r.createElement("title",null,"Layer 1"),r.createElement("path",{fill:"none",d:"M0 0h256v256H0z"}),r.createElement("path",{d:"M255.429 115.27a33.99 33.99 0 0 0-56.19-25.705c-17.844-9.453-39.088-15.189-61.287-16.464l5.523-33.14 23.156 3.612a25.705 25.705 0 1 0 2.655-16.783l-31.547-4.886a8.497 8.497 0 0 0-9.666 7.01l-7.329 44.081c-23.155.956-45.46 6.692-64.049 16.57a33.99 33.99 0 0 0-45.249 50.666 65.218 65.218 0 0 0-2.443 17.526c0 23.262 12.746 45.037 36.008 61.076s51.728 23.899 82.956 23.899 60.65-8.498 82.957-23.9 36.007-37.813 36.007-61.075a63.837 63.837 0 0 0-2.443-17.42 34.415 34.415 0 0 0 10.94-25.067zM68.485 145.011a16.995 16.995 0 1 1 16.995 16.995 16.995 16.995 0 0 1-16.995-16.995zm98.464 54.277a85.08 85.08 0 0 1-77.964 0 8.497 8.497 0 0 1 7.754-15.082 68.192 68.192 0 0 0 62.456 0 8.497 8.497 0 0 1 7.754 15.082zm3.505-37.282a16.995 16.995 0 1 1 16.995-16.995 16.995 16.995 0 0 1-16.995 16.995z"}))))},se=a(71787);function me(e){window.open("http://twitter.com/intent/tweet?text="+e,"twitterwindow","left=20,top=20,width=600,height=300,toolbar=0,resizable=1")}function ue(e,t){var a="http://www.reddit.com/submit?url="+e+"&title="+t;window.open(a,"redditwindow","left=20,top=20,width=600,height=500,toolbar=0,resizable=1")}function ge(e,t){var a="http://www.linkedin.com/shareArticle?url="+e+"&title="+t;window.open(a,"linkedinwindow","left=20,top=20,width=600,height=500,toolbar=0,resizable=1")}function de(e){var t,a=e.readingTime,n=(t=(0,R.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,S.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,n(a))}function pe(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function he(){return r.createElement(r.Fragment,null," \xb7 ")}function fe(e){var t,a,i,o=e.className,c=(0,U.Z)().siteConfig.url,s=(0,l.C)(),m=s.metadata,u=s.isBlogPostPage,g=m.date,d=m.formattedDate,p=m.readingTime;return r.createElement("div",{className:(0,n.Z)((t={},t[F]=u,t),(a={},a[V]=!u,a),"margin-vert--md",o)},r.createElement("div",{className:A},r.createElement(pe,{date:g,formattedDate:d}),void 0!==p&&r.createElement(r.Fragment,null,r.createElement(he,null),r.createElement(de,{readingTime:p}))),r.createElement("div",{className:(0,n.Z)((i={},i[D]=u,i[H]=!u,i))},r.createElement("button",{className:X,onClick:function(){return function(e,t){var a=t.title;ge(ve(e)+t.permalink,a)}(c,m)}},r.createElement(ne,{className:q})),r.createElement("button",{className:X,onClick:function(){return function(e,t){me(t.title+" "+(ve(e)+t.permalink))}(c,m)}},r.createElement(Y,{className:q})),r.createElement("button",{className:X,onClick:function(){return function(e,t){var a=t.title;ue(ve(e)+t.permalink,a)}(c,m)}},r.createElement(ce,{className:q})),r.createElement("span",{className:G},"|"),r.createElement("button",{className:X,onClick:function(){return function(e,t){var a=ve(e)+t.permalink;navigator.clipboard.writeText(a)}(c,m)}},r.createElement(se.Z,{className:q+" "+K,strokeWidth:2.5}))))}function ve(e){return e.replace(/\/+$/,"")}function Ee(){var e=(0,l.C)().isBlogPostPage;return r.createElement("header",{className:B},e&&r.createElement(r.Fragment,null,r.createElement(z,null),r.createElement(fe,null),r.createElement(O,null)),!e&&r.createElement(r.Fragment,null,r.createElement(z,null),r.createElement(fe,null)))}var be="articleCardContent_XsZ2",we="articleContent_wrOu",_e=a(63905);function Ne(e){var t,a=e.children,i=e.className,o=(0,l.C)().isBlogPostPage;return r.createElement("div",{id:o?_e.blogPostContainerID:void 0,className:(0,n.Z)("markdown",i,(t={},t[be]=!o,t[we]=o,t)),itemProp:"articleBody"},r.createElement(T.Z,null,a))}var Pe=a(94850),ye=a(74597),ke=a(87462),Ze=a(63366),Ce="readMoreButton_vHrp",Oe=["blogPostTitle"];function Te(){return r.createElement("b",null,r.createElement(S.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function xe(e){var t=e.blogPostTitle,a=(0,Ze.Z)(e,Oe);return r.createElement(d.Z,(0,ke.Z)({className:Ce,"aria-label":(0,S.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(Te,null))}var Be="articleCardFooter_iNs2",Ie="readMoreContainer_ZuCA",je="tagsContainer_xDUT",ze="sharingSection_o4gn",Le="sharingButton__GCX",Me="sharingIcon_aNi7",Se="menuContainer_Dr6x",Re="menuIcon_fiGe",Ue=a(25256),Fe=a(10663),Ve=a(30680),Ae=a(24778),De=a(80064);a(51008),a(92241);function He(){var e,t,a=(0,U.Z)().siteConfig.url,i=(0,l.C)(),o=i.metadata,c=i.isBlogPostPage,s=o.tags,m=o.title,u=o.editUrl,g=o.hasTruncateMarker,d=!c&&g,p=s.length>0;return p||d||u?r.createElement("footer",{className:(0,n.Z)((e={},e[Be]=!c,e["row docusaurus-mt-lg"]=c,e))},p&&r.createElement("div",{className:(0,n.Z)((t={},t[je]=!c,t["col col--9"]=c,t))},r.createElement(ye.Z,{tags:s})),c&&r.createElement("div",{className:(0,n.Z)("col "+ze,{"col--3":p})},r.createElement(Fe.v,{menuButton:r.createElement(Ve.j,{className:Le},r.createElement(Ue.Z,{size:20,className:Me})),className:Se,align:"center",arrow:!0,transition:!0},r.createElement(Ae.s,{onClick:function(){return function(e,t){var a=Xe(e)+t.permalink;navigator.clipboard.writeText(a)}(a,o)}},r.createElement(se.Z,{size:20,className:Re,style:{fill:"transparent"}})," ","Copy link"),r.createElement(De.R,null),r.createElement(Ae.s,{onClick:function(){return function(e,t){var a=t.title;ge(Xe(e)+t.permalink,a)}(a,o)}},r.createElement(ne,{className:Re})," Share on LinkedIn"),r.createElement(Ae.s,{onClick:function(){return function(e,t){me(t.title+" "+(Xe(e)+t.permalink))}(a,o)}},r.createElement(Y,{className:Re})," Share on Twitter"),r.createElement(Ae.s,{onClick:function(){return function(e,t){var a=t.title;ue(Xe(e)+t.permalink,a)}(a,o)}},r.createElement(ce,{className:Re})," Share on Reddit"))),c&&u&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(Pe.Z,{editUrl:u})),!c&&r.createElement("div",{className:"col col--3 "+Ie},r.createElement(xe,{blogPostTitle:m,to:o.permalink}))):null}function Xe(e){return e.replace(/\/+$/,"")}function qe(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl",o=(0,l.C)().isBlogPostPage;return r.createElement(s,{className:(0,n.Z)(i,a)},!o&&r.createElement(x,null),r.createElement(Ee,null),r.createElement(Ne,null,t),r.createElement(He,null))}},55512:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(79107),l=a(49898);function i(e){var t=e.items,a=e.component,i=void 0===a?l.Z:a;return r.createElement(r.Fragment,null,t.map((function(e){var t=e.content;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(i,null,r.createElement(t,null)))})))}},2345:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r=a(67294),n=a(86010),l="tagsHeader_K6t5",i=a(97325),o=a(23777),c=a(35463),s=a(23702),m=a(83699),u=a(93241),g=a(29498),d=a(33647),p=a(55512);function h(e){var t,a=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function f(e){var t=h(e.tag);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:t}),r.createElement(d.Z,{tag:"blog_tags_posts"}))}function v(e){var t=e.tag,a=e.items,n=(e.sidebar,e.listMetadata),o=h(t);return r.createElement(u.Z,{isTagsPostPage:!0},r.createElement("header",{className:"margin-bottom--xl "+l},r.createElement("h1",null,o),r.createElement(m.Z,{href:t.allTagsPath},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement(p.Z,{items:a}),r.createElement(g.Z,{metadata:n}))}function E(e){return r.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},r.createElement(f,e),r.createElement(v,e))}}}]);