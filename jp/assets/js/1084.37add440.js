"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[1084],{11685:function(e,t,a){a.d(t,{Z:function(){return ae}});var n=a(67294),l=a(13488),i=a(86010),r=a(20107),c=a(96811),o=a(97325),s=a(85845),d="collapseSidebarButton_PEFL",u="collapseSidebarButtonIcon_kv0_";function m(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",d),onClick:t},n.createElement(s.Z,{className:u}))}var b=a(23702),v=a(65830),p=a(72957),_=a(87462),f=a(63366),h=a(58755),E=Symbol("EmptyContext"),k=n.createContext(E);function C(e){var t=e.children,a=(0,n.useState)(null),l=a[0],i=a[1],r=(0,n.useMemo)((function(){return{expandedItem:l,setExpandedItem:i}}),[l]);return n.createElement(k.Provider,{value:r},t)}var g=a(54639),Z=a(85019),I=a(69003),y=a(83699),S=a(51048),N=["item","onItemClick","activePath","level","index"];function L(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,o.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function x(e){var t=e.item,a=e.onItemClick,l=e.activePath,c=e.level,o=e.index,s=(0,f.Z)(e,N),d=t.items,u=t.label,m=t.collapsible,v=t.className,p=t.href,C=(0,r.L)().docs.sidebar.autoCollapseCategories,x=function(e){var t=(0,S.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,Z.Wl)(e):void 0}),[e,t])}(t),M=(0,Z._F)(t,l),w=(0,I.Mg)(p,l),P=(0,g.u)({initialState:function(){return!!m&&(!M&&t.collapsed)}}),A=P.collapsed,B=P.setCollapsed,H=function(){var e=(0,n.useContext)(k);if(e===E)throw new h.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=H.expandedItem,W=H.setExpandedItem,F=function(e){void 0===e&&(e=!A),W(e?null:o),B(e)};return function(e){var t=e.isActive,a=e.collapsed,l=e.updateCollapsed,i=(0,h.D9)(t);(0,n.useEffect)((function(){t&&!i&&a&&l(!1)}),[t,i,a,l])}({isActive:M,collapsed:A,updateCollapsed:F}),(0,n.useEffect)((function(){m&&null!=T&&T!==o&&C&&B(!0)}),[m,T,o,B,C]),n.createElement("li",{className:(0,i.Z)(b.k.docs.docSidebarItemCategory,b.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":A},v)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":w})},n.createElement(y.Z,(0,_.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":M}),onClick:m?function(e){null==a||a(t),p?F(!1):(e.preventDefault(),F())}:function(){null==a||a(t)},"aria-current":w?"page":void 0,"aria-expanded":m?!A:void 0,href:m?null!=x?x:"#":x},s),u),p&&m&&n.createElement(L,{categoryLabel:u,onClick:function(e){e.preventDefault(),F()}})),n.createElement(g.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:A},n.createElement(U,{items:d,tabIndex:A?-1:0,onItemClick:a,activePath:l,level:c+1})))}var M=a(2735),w=a(14082),P="menuExternalLink_NmtK",A=["item","onItemClick","activePath","level","index"];function B(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,c=(e.index,(0,f.Z)(e,A)),o=t.href,s=t.label,d=t.className,u=t.autoAddBaseUrl,m=(0,Z._F)(t,l),v=(0,M.Z)(o);return n.createElement("li",{className:(0,i.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",d),key:s},n.createElement(y.Z,(0,_.Z)({className:(0,i.Z)("menu__link",!v&&P,{"menu__link--active":m}),autoAddBaseUrl:u,"aria-current":m?"page":void 0,to:o},v&&{onClick:a?function(){return a(t)}:void 0},c),s,!v&&n.createElement(w.Z,null)))}var H="menuHtmlItem_M9Kj";function T(e){var t=e.item,a=e.level,l=e.index,r=t.value,c=t.defaultStyle,o=t.className;return n.createElement("li",{className:(0,i.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(a),c&&[H,"menu__list-item"],o),key:l,dangerouslySetInnerHTML:{__html:r}})}var W=["item"];function F(e){var t=e.item,a=(0,f.Z)(e,W);switch(t.type){case"category":return n.createElement(x,(0,_.Z)({item:t},a));case"html":return n.createElement(T,(0,_.Z)({item:t},a));default:return n.createElement(B,(0,_.Z)({item:t},a))}}var z=["items"];function D(e){var t=e.items,a=(0,f.Z)(e,z);return n.createElement(C,null,t.map((function(e,t){return n.createElement(F,(0,_.Z)({key:t,item:e,index:t},a))})))}var U=(0,n.memo)(D),K="menu_SIkG",j="menuWithAnnouncementBar_GW3s";function G(e){var t=e.path,a=e.sidebar,l=e.className,r=function(){var e=(0,v.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,p.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",K,r&&j,l)},n.createElement("ul",{className:(0,i.Z)(b.k.docs.docSidebarMenu,"menu__list")},n.createElement(U,{items:a,activePath:t,level:1})))}var R="sidebar_njMd",q="sidebarWithHideableNavbar_wUlq",O="sidebarHidden_VK0M",V="sidebarLogo_isFc";function X(e){var t=e.path,a=e.sidebar,l=e.onCollapse,o=e.isHidden,s=(0,r.L)(),d=s.navbar.hideOnScroll,u=s.docs.sidebar.hideable;return n.createElement("div",{className:(0,i.Z)(R,d&&q,o&&O)},d&&n.createElement(c.Z,{tabIndex:-1,className:V}),n.createElement(G,{path:t,sidebar:a}),u&&n.createElement(m,{onClick:l}))}var Y=n.memo(X),J=a(53086),Q=a(52600),$=function(e){var t=e.sidebar,a=e.path,l=(0,Q.e)();return n.createElement("ul",{className:(0,i.Z)(b.k.docs.docSidebarMenu,"menu__list")},n.createElement(U,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ee(e){return n.createElement(J.Zo,{component:$,props:e})}var te=n.memo(ee);function ae(e){var t=(0,l.i)(),a="desktop"===t||"ssr"===t,i="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),i&&n.createElement(te,e))}},85845:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(87462),l=a(67294);function i(e){return l.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),l.createElement("g",{fill:"#7a7a7a"},l.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},94894:function(e,t){t.Z={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"}},44335:function(e,t){t.Z={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry"}},19327:function(e,t){t.Z={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"}}}]);