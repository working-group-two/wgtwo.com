"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[8610],{3074:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(3366),n=a(7294),l=a(6010),i=a(5321),s=a(3699),o="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(7325);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},3866:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(3699),l=a(3074),i=a(7209),s=a(7325),o=a(9623);function m(e){var t,a=e.metadata,m=e.items,c=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},34:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(7325),l=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(9623);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6363:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(3699),i="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!c,t[o]=c,t))},m,c&&r.createElement("span",null,c))}},5907:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(7325),i=a(6363),s="tags_XVD_",o="tag_JSN8";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(i.Z,{name:t,permalink:a}))}))))}},8973:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7365),n="newsletterSignup_R97Y",l="hidden_MOSg",i="formContainer_hsPX",s="privacyPolicyLink_Ajza",o="onBlog_JIS6",m="onBlogContainer_NO9N",c=a(3699),u=a(4384),d=a(7294),g=function(e){var t=e.onBlogPost,a=void 0!==t&&t,g=e.hidden;return void 0!==g&&g?a?null:d.createElement("div",{className:n+" "+l}):d.createElement("div",{className:(!a&&r.Z.section)+" "+n+" "+(a&&o)},d.createElement("div",{className:r.Z.container+" "+(a&&m)},d.createElement(u.Z,null,d.createElement("script",{type:"text/javascript",src:"https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"})),d.createElement("div",{className:r.Z.centeredText},d.createElement("h2",null,"Stay updated"),d.createElement("p",null,"Get the latest from Working Group Two. We'll send you news and updates from time to time."," "),d.createElement("form",{className:"js-cm-form "+i,id:"subForm",action:"https://www.createsend.com/t/subscribeerror?description=",method:"post","data-id":"191722FC90141D02184CB1B62AB3DC26955E76E0D27B7A1AB8E959FCE242FF63E7D5C217A62680441C6357AC1AAA7146FDBB1C4EB96CCAB4391278030E63DF48"},d.createElement("input",{type:"email",className:"js-cm-email-input qa-input-email",id:"fieldEmail",name:"cm-jrduthd-jrduthd",autoComplete:"Email","aria-label":"Email",placeholder:"Email",maxLength:200,required:!0}),d.createElement("button",{className:r.Z.button+" "+r.Z.buttonPrimary,type:"submit"},"Subscribe")),d.createElement("p",null,d.createElement(c.Z,{to:"/privacy",className:s},"Privacy notice")))))}},7209:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7294),n=a(6010),l=a(4137),i=a(7325),s=a(3699),o=a(9524),m=a(9623),c=a(3905),u=a(7649),d=a(34),g="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",E=a(5907),b="image_o0gy";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:b,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?N:f),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var P=function(e){var t,a,b,v=(b=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,o.C)().withBaseUrl,_=e.children,N=e.frontMatter,P=e.assets,k=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,C=k.date,B=k.formattedDate,A=k.permalink,D=k.tags,L=k.readingTime,x=k.title,I=k.editUrl,R=k.authors,U=null!=(t=P.image)?t:N.image,F=!y&&T,M=D.length>0,S=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(S,{className:g,itemProp:"headline"},y?x:r.createElement(s.Z,{itemProp:"url",to:A},x)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:C,itemProp:"datePublished"},B),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",v(L))),r.createElement(Z,{authors:R,assets:P})),U&&r.createElement("meta",{itemProp:"image",content:f(U,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:u.Z},_)),(M||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},M&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":F})},r.createElement(E.Z,{tags:D})),y&&I&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:I})),F&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":M})},r.createElement(s.Z,{to:k.permalink,"aria-label":"Read more about "+x},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))},k=a(8973),T=a(9962),w=function(e){return"en"!==(0,T.Z)().i18n.currentLocale?r.createElement(P,e):r.createElement(r.Fragment,null,r.createElement(P,e),e.isBlogPostPage&&r.createElement(k.Z,{onBlogPost:!0}))}},7365:function(e,t){t.Z={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",pillTitle:"pillTitle_HzMn",pillTechnology:"pillTechnology_d5Uk",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",spacer:"spacer_SqUp"}}}]);