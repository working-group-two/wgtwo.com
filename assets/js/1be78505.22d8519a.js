"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[9514,4248],{47108:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(67294),r=n(86010),o=n(35463),i=n(23702),l=n(60246),c=n(85019),d=n(58801),s=n(84432),u=n(19459),m=n(97325),p=n(72957),b=n(43266);var h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],o=n[1],i=(0,a.useRef)(!1),l=(0,p.Ct)(),c=l.startScroll,d=l.cancelScroll;return(0,p.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(i.current?i.current=!1:a>=r?(d(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,b.S)((function(e){e.location.hash&&(i.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(58986),v=n(16550),g=n(11685),T=n(85845),k={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function w(e){var t=e.toggleSidebar;return a.createElement("div",{className:k.expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(T.Z,{className:k.expandButtonIcon}))}var Z=n(44335);function S(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function C(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,l=(0,v.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],u=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,E.n)()&&s(!0),o((function(e){return!e}))}),[o,d]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,Z.Z.docSidebarContainer,n&&Z.Z.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Z.Z.docSidebarContainer)&&n&&s(!0)}},a.createElement(S,null,a.createElement("div",{className:(0,r.Z)(Z.Z.sidebarViewport,d&&Z.Z.sidebarViewportHidden)},a.createElement(g.Z,{sidebar:t,path:l,onCollapse:u,isHidden:d}),d&&a.createElement(w,{toggleSidebar:u}))))}var N=n(94894);function x(e){var t=e.hiddenSidebarContainer,n=e.children,o=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(N.Z.docMainContainer,(t||!o)&&N.Z.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",N.Z.docItemWrapper,t&&N.Z.docItemWrapperEnhanced)},n))}var B=n(19327);function I(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),o=r[0],i=r[1];return a.createElement(u.Z,{wrapperClassName:B.Z.docsWrapper},a.createElement(f,null),a.createElement("div",{className:B.Z.docPage},n&&a.createElement(C,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),a.createElement(x,{hiddenSidebarContainer:o},t)))}var _=n(74248),F=n(33647);function H(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(F.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function A(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(_.default,null);var l=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(H,e),a.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:u,items:m},a.createElement(I,null,l)))))}},74248:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(67294),r=n(97325),o=n(35463),i=n(19459);function l(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},58801:function(e,t,n){n.d(t,{E:function(){return l},q:function(){return i}});var a=n(67294),r=n(58755),o=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(o.Provider,{value:n},t)}function l(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);