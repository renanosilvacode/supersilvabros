"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,l){var a=l(7294),i=l(1597),c=l(396);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),n=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(1550)}),(null==n?void 0:n.name)&&a.createElement("p",null,a.createElement("strong",null,n.name)," ",(null==n?void 0:n.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"Twitter!"),a.createElement("a",{href:"https://facebook.com/"+((null==o?void 0:o.facebook)||"")},"Facebook!"),a.createElement("a",{href:"https://instagram.com/"+((null==o?void 0:o.instagram)||"")},"Instagram!"),a.createElement("a",{href:"https://youtube.com/"+((null==o?void 0:o.youtube)||"")},"Youtube!")))}},6558:function(e,t,l){l.r(t);var a=l(7294),i=l(1597),c=l(8771),r=l(8678),n=l(262);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=l.allMarkdownRemark.nodes;return 0===d.length?a.createElement(r.Z,{location:o,title:s},a.createElement(n.Z,{title:"All posts"}),a.createElement(c.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(r.Z,{location:o,title:s},a.createElement(n.Z,{title:"All posts"}),a.createElement(c.Z,null),a.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#084868","images":{"fallback":{"src":"/static/5c0e32d31965fc44db0e72b89d1c0c24/e5610/profile-pic.png","srcSet":"/static/5c0e32d31965fc44db0e72b89d1c0c24/e5610/profile-pic.png 50w,\\n/static/5c0e32d31965fc44db0e72b89d1c0c24/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/5c0e32d31965fc44db0e72b89d1c0c24/d4bf4/profile-pic.avif 50w,\\n/static/5c0e32d31965fc44db0e72b89d1c0c24/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/5c0e32d31965fc44db0e72b89d1c0c24/3faea/profile-pic.webp 50w,\\n/static/5c0e32d31965fc44db0e72b89d1c0c24/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-99b81849cb1f5a67571f.js.map