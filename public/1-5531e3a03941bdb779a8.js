(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(131),d=a.n(s);a.d(e,"Link",function(){return d.a}),a.d(e,"withPrefix",function(){return s.withPrefix}),a.d(e,"navigate",function(){return s.navigate}),a.d(e,"push",function(){return s.push}),a.d(e,"replace",function(){return s.replace}),a.d(e,"navigateTo",function(){return s.navigateTo});var l=a(135),c=a.n(l);a.d(e,"PageRenderer",function(){return c.a});var u=a(43);a.d(e,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},133:function(t,e,a){"use strict";var n=a(136),r=a(0),o=a.n(r),i=a(4),s=a.n(i),d=a(137),l=a.n(d),c=a(132),u=(a(149),function(t){var e=t.siteTitle;return o.a.createElement("div",{className:"spark-docs-layout__header"},o.a.createElement(c.Link,{to:"/",className:"u-color-ink u-font--super",style:{textDecoration:"none"}},e))}),p=a(150),m=function(t){return t.pages.map(function(t,e){var a=t.node.frontmatter;return o.a.createElement(c.Link,{className:"o-link spark-docs-sidebar-item",activeClassName:"spark-docs-sidebar-item--current",to:a.path},o.a.createElement("div",{key:e}," ",a.title," "))})},f=function(t){t.data;return o.a.createElement(c.StaticQuery,{query:"3649305949",render:function(t){return o.a.createElement("div",{className:"spark-docs-sidebar"},o.a.createElement(m,{pages:t.allMarkdownRemark.edges}))},data:p})},h=function(t){var e=t.children;return o.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"spark-docs-container"},o.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{className:"spark-docs-layout"},o.a.createElement(f,null),o.a.createElement("div",{className:"spark-docs-details-body"},e))))},data:n})};h.propTypes={children:s.a.node.isRequired};e.a=h},135:function(t,e,a){var n;t.exports=(n=a(148))&&n.default||n},136:function(t){t.exports={data:{site:{siteMetadata:{title:"SparkUI"}}}}},148:function(t,e,a){"use strict";a.r(e);a(28);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(61),d=a(2),l=function(t){var e=t.location,a=d.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},149:function(t,e,a){},150:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Alerts",path:"/docs/alerts"}}},{node:{frontmatter:{title:"Avatars",path:"/docs/avatars"}}},{node:{frontmatter:{title:"Badges",path:"/docs/badges"}}},{node:{frontmatter:{title:"Breadcrumbs",path:"/docs/breadcrumbs"}}},{node:{frontmatter:{title:"Buttons",path:"/docs/buttons"}}},{node:{frontmatter:{title:"Cards",path:"/docs/cards"}}},{node:{frontmatter:{title:"Colors",path:"/docs/colors"}}},{node:{frontmatter:{title:"Dropdowns",path:"/docs/dropdowns"}}},{node:{frontmatter:{title:"HUDs",path:"/docs/huds"}}},{node:{frontmatter:{title:"Icons",path:"/docs/icons"}}},{node:{frontmatter:{title:"Inputs",path:"/docs/inputs"}}},{node:{frontmatter:{title:"Loaders",path:"/docs/loaders"}}},{node:{frontmatter:{title:"Modals and Drawers",path:"/docs/modals"}}},{node:{frontmatter:{title:"Tooltips",path:"/docs/tooltips"}}},{node:{frontmatter:{title:"Utilities - Alignment",path:"/docs/utilities-alignment"}}},{node:{frontmatter:{title:"Utilities - Box model",path:"/docs/utilities-box-model"}}},{node:{frontmatter:{title:"Utilities - Colors",path:"/docs/utilities-colors"}}},{node:{frontmatter:{title:"Utilities - Flexbox",path:"/docs/utilities-flex"}}},{node:{frontmatter:{title:"Utilities - Overflow",path:"/docs/utilities-overflow"}}},{node:{frontmatter:{title:"Utilities - Shadows",path:"/docs/utilities-shadows"}}},{node:{frontmatter:{title:"Utilities - Typography",path:"/docs/utilities-typography"}}},{node:{frontmatter:{title:"Utilities - Visibility",path:"/docs/utilities-visibility"}}}]}}}}}]);
//# sourceMappingURL=1-5531e3a03941bdb779a8.js.map