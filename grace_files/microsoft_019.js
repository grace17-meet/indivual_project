﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.prefetch.js'] = (new Date()).getTime();
Type.registerNamespace("_pt");_pt.g=function(n,t,i,r,u,f,e,o,s,h,c){this.m=Function.createDelegate(this,this.p);this.l=Function.createDelegate(this,this.o);this.e=n;this.n=t;this.c=i;this.f=r;this.b=u;this.a=f;this.k=e;this.i=o;this.h=s;this.d=h;this.g=c;var a=i.c().a.linkPrefetch;var l=!this.b.b()||this.b.b()&&this.b.m();this.j=a!=="0"&&this.c.d().a().dG().Enabled&&!(this.c.q()&&this.f)&&l;this.e.b(_j.W,this.l)};_pt.g.prototype={e:null,n:null,c:null,f:!1,b:null,k:null,i:null,a:null,d:null,g:null,h:null,j:!1,o:function(n){var r=new _pt.b(this.g,null,4);this.a.a(r);this.h.c(601);var i=new _pt.b(this.d,this.m,5);this.a.a(i);if(this.j){var t=["calendarsurface","calendarcompose","locationwell","calendarpeek"];this.q(t,5)}},p:function(n){n&&n.a()},q:function(n,t){var r=new _pt.j(this.k,this.i,n,!1);var i=new _pt.m(r,t);this.a.a(i)}};_pt.k=function(n,t){this.h=Function.createDelegate(this,this.j);this.d=n;this.f=t;this.d.a(this.h);this.g=this.i(n)};_pt.k.prototype={d:null,f:null,e:null,g:0,a:function(){return this.g},b:function(n){this.e=n;return n},j:function(n){this.e&&this.e()},c:function(){this.d.v();this.f.a(this.d)},i:function(n){var t=7;switch(n.y()){case 201:t=0;break;case 301:t=1;break;case 702:t=2;break;case 601:t=3;break;default:_j.e.b(_a.a.ba,"ActionPrefetch task type is unknown, this prefetch task won't be scheduled");break}return t}};_pt.l=function(){_pt.l.initializeBase(this,[1,"BootExp"])};_pt.m=function(n,t){this.e=n;this.f=t};_pt.m.prototype={e:null,d:null,f:0,a:function(){return this.f},b:function(n){this.d=n;return n},c:function(){this.e.a();this.d&&this.d()}};_pt.b=function(n,t,i){this.f=n;this.d=t;this.g=i};_pt.b.prototype={e:null,f:null,d:null,g:0,a:function(){return this.g},b:function(n){this.e=n;return n},c:function(){var n=this;this.f.a(function(t){n.d&&n.d(t);n.e&&n.e()})}};_pt.a=function(n,t,i){this.n=Function.createDelegate(this,this.q);this.m=Function.createDelegate(this,this.p);this.o=Function.createDelegate(this,this.s);this.j=t;this.f=n;this.g=i;this.a=!1;this.b=0;this.h=1e4};_pt.a.prototype={j:null,f:null,g:null,c:0,d:null,e:null,a:!1,i:0,k:0,b:0,h:0,l:!1,t:function(){return this.b?_a.M.b()-this.b:0},r:function(){if(!this.a){this.c=0;this.i=_a.cw.a.length;this.a=!0;this.k=_a.M.b();this.l=!1;this.p()}},u:function(){this.c=0;this.d=null;this.e=null;this.a=!1;this.b=0},p:function(){if(this.a){var n=this.k+6e4<=_a.M.b();if(n||this.i===_a.cw.a.length&&!this.j.g()&&0!==this.c){_a.cw.b();this.f.d(_a.a.bp,"NetworkTaskMonitor",this.o);this.c=2;this.b=_a.M.b();this.d&&this.d();this.q();return}else{this.i=_a.cw.a.length;this.c=1}this.f.a(_a.a.ba,"NetworkActivityMonitor",this.m,2e3)}},q:function(){if(this.t()>=this.h||!this.d){this.e&&this.e();this.u()}else this.f.a(_a.a.ba,"NetworkActivityMonitor",this.n,this.h)},s:function(){for(var r="",e=0;e<_a.cw.a.length;e++){var l=_a.cw.a[e];try{var n;var o;var c,a;_a.w.k(l,c={val:n},a={val:o}),n=c.val,o=a.val;if(n.endsWith("service.svc")){var y=_a.w.f(o);r+="A:"+y.action+"|"}else{var v=n.indexOf(window.location.hostname);v>=0&&(n=n.substr(v+window.location.hostname.length));r+=n+"|"}}catch(w){_j.e.b(_a.a.ba,"url parse hit exception: {0}",l);r+="FailParsedUrl|"}}for(var u="",h=window.document.head.getElementsByTagName("script"),f=0;f<h.length;f++){var t=h[f];try{if(!_j.h.a(t.src)){var s=t.src.lastIndexOf("/");u+=(s>=0?t.src.substr(s):t.src)+"|"}}catch(p){_j.e.b(_a.a.ba,"script src parse hit exception: {0}",t.src);u+="FailParsedSrc|"}}var i=new _pt.l;i.a.xhr=r;i.a.src=u;i.a.to=this.l?1:0;i.a.pt=this.g&&this.g.a().q().Enabled?1:0;_a.z.a.a(i)}};_pt.f=function(n){n.a||n.r()};function PrefetchComponent(){}PrefetchComponent.$$cctor=function(){_a.t.a().a(PrefetchComponent)};PrefetchComponent.prototype={b:function(n,t,i){var l=this;n.b(_pt.a,function(){return new _pt.a(n.a(_j.v),n.a(_j.I),n.a(_a.f))}).a();var h=this;n.b(_pt.h,function(){var n=new _pt.h(i.c());i.d().a().gP().Enabled&&n.f(_g.a.a().a().ca());return n}).a();var c=this;n.b(_pt.i,function(){var t=n.a(_pt.a);t.a||t.r();return new _pt.i(n.a(_j.v),t,n.a(_pt.h))}).b(IPrefetchThrottler).a();var r=!_a.g.b&&!_a.g.j&&i.f()&&!t.a()&&!i.c().c();var a=this;n.b(_pt.e,function(){var t=n.a(_j.o);var e=!t.b()||t.b()&&t.m();var u=["calendarsurface","calendarcompose","locationwell","calendarpeek"];var f=i.c().a.linkPrefetch;return r&&f!=="0"&&i.d().a().dG().Enabled&&!(i.q()&&n.a(_h.q).a())&&e&&!i.d().a().q().Enabled?new _pt.e(n.a(_j.v),n.a(_j.j),n.a(_j.I),new _pt.j(n.a(_j.I),n.a(_j.ba),u,!1),u):null}).a();var u=i.d().a().bM().Enabled?0:8e3;u=i.a()==="TouchNarrow"?15e3:u;var e=this;n.b(_pt.c,function(){return r&&!i.d().a().q().Enabled?new _pt.c(n.c(ICalendarPrefetcher),n.a(_j.v),n.a(_j.j),u):null}).a();var f=this;n.b(_pt.d,function(){return r&&!i.d().a().q().Enabled?new _pt.d(n.a(_j.v),n.a(_j.j),u,n.a(_y.bD)):null}).a();var s=this;n.b(_pt.g,function(){return r&&i.d().a().q().Enabled?new _pt.g(n.a(_j.j),t,i,n.a(_h.q).a(),n.a(_j.o),n.a(_pt.i),n.a(_j.I),n.a(_j.ba),n.a(_y.bD),n.c(ICalendarPrefetcher),n.c(IMailComposeContextFactory)):null}).a();var o=this;n.b(_pt.f,function(){return i.d().a().cM().Enabled?new _pt.f(n.a(_pt.a)):null}).a()},a:function(){return[new _j.x(_pt.g,2,1),new _j.x(_pt.e,2,1),new _j.x(_pt.c,2,1),new _j.x(_pt.d,2,1),new _j.x(_pt.f,2,1)]}};_pt.n=function(){};_pt.n.prototype={b:function(n,t){return new _pt.k(n,t)},a:function(n,t,i){return new _pt.b(n,t,i)}};_pt.h=function(n){this.c={};this.a={};var t=_a.dK.b(n);this.a[0]=2;this.a[4]=2;this.a[5]=2;this.a[1]=2;this.a[6]=2;this.a[2]=2;this.a[3]=2;if(t.startsWith("/mail")){this.a[0]=3;this.a[4]=3}else if(t.startsWith("/calendar")){this.a[5]=3;this.a[1]=3}else if(t.startsWith("/group")){this.a[6]=3;this.a[2]=3}this.b(4,0);this.b(3,4);this.b(1,1);this.b(1,5);this.b(6,3);this.b(2,2);this.b(2,6);this.b(5,0)};_pt.h.prototype={c:null,a:null,e:function(n){return n in this.a?this.a[n]:0},f:function(n){if(n){for(var o={},r=0;r<n.b();r++){var t=n.a(r);if(!(t.Version<2)&&t.Id in this.c)for(var s=this.c[t.Id],i=0;i<s.length;i++){var h=s[i];this.d(h,t.Score,o)}}var u=o;for(var e in u){var f={key:e,value:u[e]};this.a[f.key]=f.value}}},b:function(n,t){n in this.c||(this.c[n]=[]);Array.add(this.c[n],t)},d:function(n,t,i){if(!(t<0)){n in i||(i[n]=0);t>=2&&i[n]<3?i[n]=3:t>=1&&i[n]<2&&(i[n]=2)}}};_pt.i=function(n,t,i){this.o=Function.createDelegate(this,this.t);this.n=Function.createDelegate(this,this.r);this.m=Function.createDelegate(this,this.q);this.i=[];this.f=[];this.h=[];this.l=n;this.k=new _pt.n;this.d=null;this.e=t;this.j=i;if(this.e&&this.e.a){this.c=4;this.e.d=this.m;this.e.e=this.n}else this.c=2};_pt.i.prototype={i:null,f:null,h:null,l:null,e:null,j:null,k:null,d:null,c:0,b:function(){return this.k},a:function(n){n.b(this.o);if(this.j){var t=this.j.e(n.a());t===4?Array.enqueue(this.i,n):t===3?Array.enqueue(this.f,n):t===2&&Array.enqueue(this.h,n)}else Array.enqueue(this.f,n);this.g()},q:function(){this.c=3;this.g()},r:function(){this.c=2;this.g()},g:function(){this.d||this.p()},t:function(){this.d=null;this.g()},p:function(){var n=null;this.i.length>0&&this.c<=4?n=this.i:this.f.length>0&&this.c<=3?n=this.f:this.h.length>0&&this.c<=2&&(n=this.h);if(n){var t=Array.dequeue(n);if(t){this.d=t;t.c();var i=this;this.l.a(_a.a.ba,"PrefetchThrottler",function(){i.s(t)},1e4)}}},s:function(n){if(this.d===n){_j.e.b(_a.a.ba,"Prefetch task timeout, task type is: {0}",_a.fH.toString(n.a()));n.b(null);this.d=null;this.g()}}};_pt.c=function(n,t,i,r){_pt.c.initializeBase(this,[t,i,_a.a.bd,r,"PrefetchCalendarData"]);this.b=n};_pt.c.prototype={b:null,d:function(){var n=this;this.b.a(function(n){n&&n.a()})}};_pt.d=function(n,t,i,r){_pt.d.initializeBase(this,[n,t,_a.a.d,i,"PrefetchOptionsPermissions"]);this.b=r};_pt.d.prototype={b:null,d:function(){this.b.c(601)}};_pt.o=function(n,t,i,r,u){this.i=Function.createDelegate(this,this.d);this.c=Function.createDelegate(this,this.j);this.g=n;this.a=t;this.h=i;this.e=r;this.f=u;this.a.b(_j.W,this.c)};_pt.o.prototype={e:0,a:null,g:null,h:null,f:null,j:function(n){this.g.a(this.h,this.f,this.i,this.e);this.a.c(_j.W,this.c)}};_pt.p=function(){};_pt.j=function(n,t,i,r){this.f=Function.createDelegate(this,this.e);this.b=[];this.k=n;this.j=t;this.h=i;this.i=r;this.g=document.getElementsByTagName("head")[0];var u=_a.o.a().J;this.d=u.a()===1&&u.b()>=11||u.a()===6||u.a()===2||u.a()===4};_pt.j.prototype={h:null,k:null,j:null,c:0,g:null,i:!1,d:!1,a:function(){this.o(this.h);if(this.d){this.m();return}while(this.c<1&&this.c<this.b.length)this.e()},m:function(){for(var n=0;n<this.b.length;n++)this.l(this.b[n])},e:function(){if(!(this.c>=this.b.length)){var n=this.b[this.c];this.c++;if(this.j.b(n))this.e();else{var t=this;_j.m.a().d(_a.a.eN,"LinkPF.SLP",function(){t.l(n)})}}},o:function(n){for(var u={},f=0,r=0;r<n.length;r++){var t=this.n(n[r]);if(t)for(var i=0;i<t.length;i++)if(!(t[i]in u)){this.b[f++]=t[i];u[t[i]]=!0}}},n:function(n){return this.k.f(n)},l:function(n){var t=document.createElement("link");t.rel=this.d?"prefetch":"stylesheet";t.href=n;if(!this.d){t.type="text/css";t.onerror=this.f;t.onload=this.f}this.g.appendChild(t);this.i&&this.e()}};_pt.e=function(n,t,i,r,u){this.e=Function.createDelegate(this,this.i);this.b=Function.createDelegate(this,this.h);this.d=n;this.a=t;this.g=i;this.c=r;this.f=u;this.a.b(_j.W,this.b)};_pt.e.prototype={a:null,d:null,g:null,c:null,f:null,h:function(n){this.d.d(_a.a.J,"PrefetchLink",this.e);this.a.c(_j.W,this.b)},i:function(){this.c.a()}};_pt.g.registerClass("_pt.g");_pt.l.registerClass("_pt.l",_a.bq);_pt.b.registerClass("_pt.b",null,_a.jd);_pt.a.registerClass("_pt.a");_pt.f.registerClass("_pt.f");PrefetchComponent.registerClass("PrefetchComponent",null,_a.ii,_j.cd);_pt.h.registerClass("_pt.h");_pt.i.registerClass("_pt.i",null,IPrefetchThrottler);_pt.o.registerClass("_pt.o");_pt.c.registerClass("_pt.c",_pt.o);_pt.d.registerClass("_pt.d",_pt.o);_pt.e.registerClass("_pt.e");PrefetchComponent.$$cctor();
window.scriptsLoaded['microsoft.owa.prefetch.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.prefetch.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
