(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{48:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA5SURBVHgBbYvBCQAgDAMPXMgtXMPN/fpzBQWrJGggtOSSBFS2Oq68XM7T4iq0TIPf4JZG+IFaMjgBX5YJXY8CCHkAAAAASUVORK5CYII="},52:function(e,a,t){"use strict";var r=t(44),s=t(0),n=t.n(s),l=t(86),c=t(87),i=t(88),o=t(89),m=t(10),u=t(84),d=t(93),g=t(91),f=t(85),b=t(23),p=t.n(b),h=t(48),E=t.n(h),N=function(){var e=Object(m.b)(function(e){return e.authAdmin.user.name}),a=Object(s.useState)(!1),t=Object(r.a)(a,2),l=t[0],c=t[1];return n.a.createElement(u.a,{isOpen:l,toggle:function(){return c(function(e){return!e})}},n.a.createElement(d.a,{className:"user-menu__dropdown",tag:"span","data-toggle":"dropdown","aria-expanded":l},n.a.createElement("div",{className:"user-menu"},n.a.createElement("img",{className:"user-menu__avatar",src:p.a,alt:"user avatar"}),n.a.createElement("p",{className:"user-menu__name"},e),n.a.createElement("div",{className:"user-menu__arrow--container"},n.a.createElement("img",{src:E.a,alt:""})))),n.a.createElement(g.a,{className:"user-menu__dropdown--menu"},n.a.createElement(f.a,null,"Foo Action"),n.a.createElement(f.a,null,"Bar Action"),n.a.createElement(f.a,null,"Quo Action")))};a.a=function(e){var a=e.title,t=Object(s.useState)(""),m=Object(r.a)(t,2),u=m[0],d=m[1];return n.a.createElement("header",{className:"header"},n.a.createElement(l.a,null,n.a.createElement(c.a,null,n.a.createElement(i.a,{xs:{size:8,offset:0,order:3},sm:{size:2,offset:0,order:3},md:{size:2,offset:0,order:1}},n.a.createElement("h2",{className:"header__title"},a)),n.a.createElement(i.a,{xs:{size:8,offset:0,order:2},sm:{size:4,offset:1,order:2},md:{size:4,offset:1},lg:{size:3,offset:4}},n.a.createElement(o.a,{className:"header__search",type:"text",value:u,name:"search",placeholder:"\u041d\u0430\u0439\u0442\u0438...",onChange:function(e){return function(e){return d(e)}(e.target.value)}})),n.a.createElement(i.a,{xs:{size:8,offset:3,order:1},md:{size:4,offset:0,order:3},lg:{size:3,order:3}},n.a.createElement(N,null)))))}},90:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(52),l=t(25),c=t(44),i=t(2),o=t(4),m=t(45),u=t(7),d=t(1),g=t.n(d),f=t(21),b=t.n(f),p=t(14),h={children:g.a.node,inline:g.a.bool,tag:p.e,innerRef:g.a.oneOfType([g.a.object,g.a.func,g.a.string]),className:g.a.string,cssModule:g.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(m.a)(t)),t.submit=t.submit.bind(Object(m.a)(t)),t}Object(u.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,n=e.tag,l=e.innerRef,c=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.c)(b()(a,!!r&&"form-inline"),t);return s.a.createElement(n,Object(i.a)({},c,{ref:l,className:m}))},a}(r.Component);E.propTypes=h,E.defaultProps={tag:"form"};var N=E,v={children:g.a.node,row:g.a.bool,check:g.a.bool,inline:g.a.bool,disabled:g.a.bool,tag:p.e,className:g.a.string,cssModule:g.a.object},_=function(e){var a=e.className,t=e.cssModule,r=e.row,n=e.disabled,l=e.check,c=e.inline,m=e.tag,u=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(p.c)(b()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!n)&&"disabled"),t);return"fieldset"===m&&(u.disabled=n),s.a.createElement(m,Object(i.a)({},u,{className:d}))};_.propTypes=v,_.defaultProps={tag:"div"};var A=_,j=t(88),O=t(89),y=t(67),z=["\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443","something","something2","something3"],M=["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u0418\u0441\u043f\u0430\u043d\u0441\u0438\u043a\u0439","\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439","something","something2"],k=["\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u0418\u0441\u043f\u0430\u043d\u0441\u0438\u043a\u0439","\u0420\u0443\u0441\u0441\u043a\u0438\u0439","something1","something2"],x=function(){var e=Object(r.useState)(""),a=Object(c.a)(e,2),t=a[0],n=a[1],i=Object(r.useState)(""),o=Object(c.a)(i,2),m=o[0],u=o[1],d=Object(r.useState)(z[0]),g=Object(c.a)(d,2),f=g[0],b=g[1],p=Object(r.useState)(M[0]),h=Object(c.a)(p,2),E=h[0],v=h[1],_=Object(r.useState)(k[0]),x=Object(c.a)(_,2),w=x[0],T=x[1];return s.a.createElement("div",{className:"search-form"},s.a.createElement(N,null,s.a.createElement(A,{row:!0},s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:3,lg:2},s.a.createElement("p",{className:"search-form__text"},"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u043e:")),s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement(O.a,{className:"search-form__select",bsSize:"lg",type:"select",value:f,name:"search-by",id:"search-by",onChange:function(e){return function(e){return b(e)}(e.target.value)}},z.map(function(e){return s.a.createElement("option",{key:e,className:"search-form__select--option"},e)}))),s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement(O.a,{className:"search-form__input--text",type:"text",bsSize:"lg",value:t,name:"searched-type-text",id:"searched-type-text",onChange:function(e){return function(e){return n(e)}(e.target.value)}}))),s.a.createElement(A,{row:!0},s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:3,lg:2},s.a.createElement("p",{className:"search-form__text"},"\u0441\u0442\u0440\u043e\u043a\u0430 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435:")),s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement(O.a,{className:"search-form__select",bsSize:"lg",type:"select",value:E,name:"search-lang",id:"search-lang",onChange:function(e){return function(e){return v(e)}(e.target.value)}},M.map(function(e){return s.a.createElement("option",{key:e,className:"search-form__select--option"},e)}))),s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement(O.a,{className:"search-form__input--text",type:"text",bsSize:"lg",value:m,name:"searched-lang-text",id:"searched-lang-text",onChange:function(e){return function(e){return u(e)}(e.target.value)}}))),s.a.createElement(A,{row:!0},s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement("p",{className:"search-form__text--squere"},"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434")),s.a.createElement(j.a,{className:"search-form__input--margins",sm:8,md:4,lg:3},s.a.createElement(O.a,{className:"search-form__select",bsSize:"lg",type:"select",value:w,name:"needed-translate",id:"needed-translate",onChange:function(e){return function(e){return T(e)}(e.target.value)}},k.map(function(e){return s.a.createElement("option",{key:e,className:"search-form__select--option"},e)})))),s.a.createElement(A,{row:!0},s.a.createElement(j.a,{sm:{size:4,offset:6},md:{size:3,offset:8},lg:{size:2,offset:9}},s.a.createElement(y.a,{className:"search-form__button",type:"submit",color:"primary",onClick:function(e){var a;e.preventDefault(),console.log((a={},Object(l.a)(a,f,t),Object(l.a)(a,E,m),Object(l.a)(a,"needTranslate",w),a)),n(""),u("")}},"\u041d\u0430\u0439\u0442\u0438")))))},w=t(10),T=t(9),S={className:g.a.string,cssModule:g.a.object,size:g.a.string,bordered:g.a.bool,borderless:g.a.bool,striped:g.a.bool,dark:g.a.bool,hover:g.a.bool,responsive:g.a.oneOfType([g.a.bool,g.a.string]),tag:p.e,responsiveTag:p.e,innerRef:g.a.oneOfType([g.a.func,g.a.string,g.a.object])},C=function(e){var a=e.className,t=e.cssModule,r=e.size,n=e.bordered,l=e.borderless,c=e.striped,m=e.dark,u=e.hover,d=e.responsive,g=e.tag,f=e.responsiveTag,h=e.innerRef,E=Object(o.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(p.c)(b()(a,"table",!!r&&"table-"+r,!!n&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!u&&"table-hover"),t),v=s.a.createElement(g,Object(i.a)({},E,{ref:h,className:N}));if(d){var _=Object(p.c)(!0===d?"table-responsive":"table-responsive-"+d,t);return s.a.createElement(f,{className:_},v)}return v};C.propTypes=S,C.defaultProps={tag:"table",responsiveTag:"div"};var R=C,B={children:g.a.node,className:g.a.string,listClassName:g.a.string,cssModule:g.a.object,size:g.a.string,tag:p.e,listTag:p.e,"aria-label":g.a.string},P=function(e){var a,t=e.className,r=e.listClassName,n=e.cssModule,l=e.size,c=e.tag,m=e.listTag,u=e["aria-label"],d=Object(o.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(p.c)(b()(t),n),f=Object(p.c)(b()(r,"pagination",((a={})["pagination-"+l]=!!l,a)),n);return s.a.createElement(c,{className:g,"aria-label":u},s.a.createElement(m,Object(i.a)({},d,{className:f})))};P.propTypes=B,P.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var X=P,I={active:g.a.bool,children:g.a.node,className:g.a.string,cssModule:g.a.object,disabled:g.a.bool,tag:p.e},Y=function(e){var a=e.active,t=e.className,r=e.cssModule,n=e.disabled,l=e.tag,c=Object(o.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(p.c)(b()(t,"page-item",{active:a,disabled:n}),r);return s.a.createElement(l,Object(i.a)({},c,{className:m}))};Y.propTypes=I,Y.defaultProps={tag:"li"};var F=Y,Q={"aria-label":g.a.string,children:g.a.node,className:g.a.string,cssModule:g.a.object,next:g.a.bool,previous:g.a.bool,first:g.a.bool,last:g.a.bool,tag:p.e},U=function(e){var a,t=e.className,r=e.cssModule,n=e.next,l=e.previous,c=e.first,m=e.last,u=e.tag,d=Object(o.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(p.c)(b()(t,"page-link"),r);l?a="Previous":n?a="Next":c?a="First":m&&(a="Last");var f,h=e["aria-label"]||a;l?f="\u2039":n?f="\u203a":c?f="\xab":m&&(f="\xbb");var E=e.children;return E&&Array.isArray(E)&&0===E.length&&(E=null),d.href||"a"!==u||(u="button"),(l||n||c||m)&&(E=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},E||f),s.a.createElement("span",{className:"sr-only",key:"sr"},h)]),s.a.createElement(u,Object(i.a)({},d,{className:g,"aria-label":h}),E)};U.propTypes=Q,U.defaultProps={tag:"a"};var J=U,V=t(11),q=function(){var e=Object(w.b)(function(e){return e.strings.existStrings}),a="\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b 1-6 \u0438\u0437 ".concat(e.length),t=e.slice(0,6),r=e.length/6<=10?Array(Math.ceil(e.length/6)).fill("el"):Array(10).fill("el");return s.a.createElement("div",{className:"strings-list"},s.a.createElement(T.b,{to:V.a.make_string},s.a.createElement(y.a,{className:"strings-list__button",color:"primary"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443")),s.a.createElement("p",{className:"strings-list__elements"},a),s.a.createElement(R,{className:"strings-list__table",borderless:!0},s.a.createElement("thead",{className:"strings-list__heading"},s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440"),s.a.createElement("th",null,"\u0421\u0442\u0440\u043e\u043a\u0430"),s.a.createElement("th",null,"\u0418\u043c\u0435\u044e\u0449\u0438\u0435\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b"))),s.a.createElement("tbody",{className:"strings-list__body"},t.map(function(e){var a=e.id,t=e.identifier,r=e.string,n=e.hasTranslate;return s.a.createElement("tr",{key:a},s.a.createElement("td",null,a),s.a.createElement("td",null,t),s.a.createElement("td",null,r),s.a.createElement("td",null,n.join(", ")),s.a.createElement("td",null,s.a.createElement(T.b,{to:V.a.strings,className:"strings-list__link"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))}))),s.a.createElement(X,{className:"strings-list__pagination"},s.a.createElement(F,null,s.a.createElement(J,{first:!0,href:"#"})),r.map(function(e,a){return s.a.createElement(F,{key:a},s.a.createElement(J,{href:"#"},a+1))}),s.a.createElement(F,null,s.a.createElement(J,{last:!0,href:"#"}))))};a.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,{title:"\u0421\u0442\u0440\u043e\u043a\u0438"}),s.a.createElement(x,null),s.a.createElement(q,null))}}}]);
//# sourceMappingURL=strings-home.2f9f502a.chunk.js.map