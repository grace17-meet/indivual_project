﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.calendar.controls.core.js'] = (new Date()).getTime();
var ICalendarReactComponentFactory=function(){};ICalendarReactComponentFactory.registerInterface("ICalendarReactComponentFactory");var ICalendarReactComponent=function(){};ICalendarReactComponent.registerInterface("ICalendarReactComponent");function CalendarControlsCoreComponent(){}CalendarControlsCoreComponent.$$cctor=function(){_a.t.a().a(CalendarControlsCoreComponent)};CalendarControlsCoreComponent.prototype={b:function(n,t,i){n.e(_ca.b).a();var r=this;n.b(_j.bE.$$(_ca.e),function(){return new(_j.bE.$$(_ca.e))(function(t){return new _ca.e(t,n.a(_ca.b),n.a(_y.a),n.a(_g.h),n.a(_j.j))},"div")})},a:function(){return null}};Type.registerNamespace("_ca");_ca.k=function(){};_ca.k.prototype={calendarSurface:0,meetingForm:1,quickCompose:2,other:3};_ca.k.registerEnum("_ca.k",!1);_ca.l=function(){};_ca.l.prototype={date:1,time:2,month:4};_ca.l.registerEnum("_ca.l",!1);_ca.b=function(){this.e=Function.createDelegate(this,this.j);this.c=_a.d.a();_ca.b.initializeBase(this)};_ca.b.prototype={a:null,b:0,i:function(n){this.eE("CalendarTimeChanged",n);++this.b==1&&this.g()},k:function(n){this.eF("CalendarTimeChanged",n);--this.b||this.f()},d:function(n){this.eE("CalendarDateChanged",n);++this.b==1&&this.g()},h:function(n){this.eF("CalendarDateChanged",n);--this.b||this.f()},g:function(){if(!this.a){this.c=_a.d.a();this.a=_j.m.a().e(_a.a.c,"CalendarDateTimeNotification",this.e,6e4)}},f:function(){this.a&&(this.a=_j.m.a().b(this.a))},j:function(){var n=_a.d.a();var t=!!this.c.k(n);this.c=n;this.eJ("CalendarTimeChanged",this,n);t&&this.eJ("CalendarDateChanged",this,n)}};_ca.c=function(n,t){_ca.c.initializeBase(this,[n,t]);this.y("DatePickerView")};_ca.c.prototype={c:null,k:null,d:function(n){if(!this.c||!this.c.B(n)){this.c=n;this.bv("SelectedDate")}return n},g:function(n){if(this.k!==n){this.k=n;this.bv("PickerAriaLabel")}return n}};_ca.f=function(n,t){_ca.f.initializeBase(this,[n]);this.bF=t;this.x=22};_ca.f.prototype={m:null,bF:null,bc:null,A:!0,j:!1,i:!1,s:null,x:0,t:null,a:function(){return this.eB(_ca.f.b)},f:function(n){if(_a.d.c(this.a(),n)||!this.j&&!n)return n;this.eA(_ca.f.b,n);return n},e:function(){return this.A},b:function(n){if(n!==this.A){this.A=n;this.bv("IsEnabled")}return n},h:function(n){if(this.j!==n){this.j=n;this.bv("CanSelectNone")}return n},bP:function(n){if(n!==this.m){this.m=n;this.bv("SuggestedDate")}return n},q:function(){return this.eB(_ca.f.a)},bH:function(n){this.eA(_ca.f.a,n);return n},bJ:function(n){if(this.q()&&!_j.t.a(this.q()))return n;var t=n.toLowerCase();switch(t){case"date":this.bH(1);break;case"time":this.bH(2);break}this.bc=t;return n},r:function(){this.s||this.cl();return this.s},G:function(){_j.c.prototype.G.call(this);this.bc!=="date"&&this.bc!=="time"&&this.bJ("date");if(this.t&&this.x!==22){var n=this.t.z;_j.k.a(n,"height",this.x+"px")}},H:function(){_j.c.prototype.H.call(this);var n=this.C;this.t=n?n.a("PickerCoreView"):null},cl:function(){this.s=_bc.s.isInstanceOfType(this.W())?this.W().bQ():this.bF}};_ca.e=function(n,t,i,r,u){this.cQ=Function.createDelegate(this,this.ed);this.cO=Function.createDelegate(this,this.dX);this.cP=Function.createDelegate(this,this.eb);this.cT=Function.createDelegate(this,this.em);this.cU=Function.createDelegate(this,this.eo);this.bT=Function.createDelegate(this,this.el);this.dq=Function.createDelegate(this,this.dY);this.dv=Function.createDelegate(this,this.ej);this.du=Function.createDelegate(this,this.ee);this.dr=Function.createDelegate(this,this.dZ);this.dB=Function.createDelegate(this,this.en);this.dw=Function.createDelegate(this,this.ek);this.dt=Function.createDelegate(this,this.ec);this.ds=Function.createDelegate(this,this.ea);this.cR=Function.createDelegate(this,this.ei);this.bY=new _a.d(1900,0,1);this.bl=new _a.d(2099,11,31);_ca.e.initializeBase(this,[n]);this.y("MonthPickerView");this.cl=t;this.t=i;this.bi=i.u();this.cq=u;this.dQ(new _j.l);if(this.t.a()==="TouchNarrow"){this.bV="";this.bP="ms-bg-color-themeLight";this.h="ms-bg-color-themeLight"}else{this.bV="ms-bg-color-neutralLight";this.bP="ms-bg-color-themeLighter";this.h="ms-bg-color-themeLighter"}this.cq.b(_a.bp,this.cR);this.v=r;this.a=_a.d.a();this.A=[this.a];this.bc(this.a);this.dh(new _j.l);this.cf=!0;this.ci=!0;this.cj=!0;this.dg=new _j.g(this.ds,_a.a.c);this.cX=new _j.g(this.dt,_a.a.c);this.cY=new _j.g(this.dw,_a.a.c);this.da=new _j.g(this.dB,_a.a.c);this.cW=new _j.g(this.dr,_a.a.c);this.cC=new _j.g(this.du,_a.a.c);this.cD=new _j.g(this.dv,_a.a.c);var f=this;this.bF=new _j.u(this.dq,_a.a.c,this,"CanPickMonth",function(){return f.be})};_ca.e.a=function(n,t){return n.f()===t.f()&&n.g()===t.g()};_ca.e.prototype={v:null,cq:null,t:null,dg:null,cX:null,cY:null,da:null,cW:null,cC:null,cD:null,cl:null,bV:null,bF:null,j:null,q:null,cN:null,e:null,m:null,bU:null,bR:null,g:null,d:null,x:null,dn:0,bi:!1,bZ:0,r:0,i:0,cB:0,bJ:0,a:null,c:null,cc:null,A:null,p:null,l:null,u:0,df:0,bW:!1,bH:!1,cz:!1,be:!1,b:!1,bg:!0,w:"monthPickerCurrentDay ms-font-weight-semibold ms-font-color-white ms-bg-color-themePrimary",bP:null,h:null,cn:"ms-font-s",f:0,cr:!1,dd:!1,k:0,n:0,dc:!1,ce:!0,o:function(n){if(n&&!this.a.B(n)){this.a=n;this.dD()}return n},bc:function(n){this.ez(n);return n},er:function(n){n!==this.cc&&(this.cc=n);return n},cL:function(n){if(this.u!==n){this.u=n;this.A=_a.G.a(this.c,this.u,this.u===2,this.v.a().v().bB.WorkDays);this.s()}return n},cx:function(){return this.df},dP:function(n){this.df=n;return n},dQ:function(n){if(this.p!==n){this.p&&this.p.f(this.bT);this.p=n;this.p&&this.p.e(this.bT)}return n},dh:function(n){if(this.l!==n){this.l&&this.l.f(this.bT);this.l=n;this.l&&this.l.e(this.bT)}return n},ck:!1,cw:function(){return this.bH||!this.bX(this.a.s(-1))},cv:function(){return this.cz||!this.bX(this.a.s(1))},cI:function(n){if(n!==this.cz){this.cz=n;this.s()}return n},cj:!1,cf:!1,ci:!1,bD:!1,br:function(n){if(this.be!==n){this.be=n;this.bv("CanPickMonth")}return n},bs:function(n){if(this.b!==n)if(this.Z()){this.dC();this.f=-1;this.b=n;this.bS(_ca.e.b);this.s();this.dm(this.Z())}else{this.b=n;this.bS(_ca.e.b)}return n},eq:function(n){if(this.bg!==n){this.bg=n;this.z.style.cursor=this.bg?"pointer":"";this.bv("IsEnabled")}return n},dF:function(){return this.b?String.format(_u.c.I,this.bf(),this.a.x(1).a(13)):String.format(_u.c.I,this.bf(),this.a.s(1).a(2))},dG:function(){return this.b?String.format(_u.c.I,this.bf(),this.a.x(-1).a(13)):String.format(_u.c.I,this.bf(),this.a.s(-1).a(2))},bf:function(){if(this.b){var n=this.a?this.a.g().toString():"";return String.format(_u.c.D,n)}return this.e.bg},cV:!1,dO:function(n){if(n===this.dc)return n;this.dc=n;var t=this.v.a();if(n){t.apcl("WeekStartDay",this.cU);this.t.a()==="Mouse"&&t.apcl("ShowWeekNumbers",this.cT);t.apcl("FirstWeekOfYear",this.cP)}else{t.rpcl("WeekStartDay",this.cU);this.t.a()==="Mouse"&&t.rpcl("ShowWeekNumbers",this.cT);t.rpcl("FirstWeekOfYear",this.cP)}return n},db:function(){return this.v.a().bB.ShowWeekNumbers&&this.t.a()==="Mouse"&&!this.cV},ev:function(n){var t=this.cy(n);this.bB(t,!0)},bw:function(){this.cq.c(_a.bp,this.cR);var n;_a.h.a(n={val:this.bF}),this.bF=n.val;this.dO(!1);_j.c.prototype.bw.call(this)},H:function(){_j.c.prototype.H.call(this);this.C?this.dV():this.ep()},P:function(){var i=_j.n.b(_a.a.c,2,"MonthPickerView:OnFirstActivate");_j.c.prototype.P.call(this);if(this.bW)for(var n=0,t=this.m.length;n<t;n++)this.m[n].K(!0);if(this.ck){this.cN.K(!0);this.j.z.style.top="0"}this.j.bn(this.cn);!this.c&&this.cc&&this.o(this.cc);_j.n.a(i)},G:function(){var n=_j.n.b(_a.a.c,2,"MonthPickerView:OnActivate");_j.c.prototype.G.call(this);this.cl.d(this.cO);this.bi&&this.dm(this.cr);if(this.ce){this.b||this.dJ();this.s();this.ce=!1}_j.n.a(n)},M:function(){_j.c.prototype.M.call(this);this.bs(!1);this.cl.h(this.cO)},bI:function(n){if(this.bg){var e=_j.k.i(this.z);var t=n.e()-e.b;var i=n.f()-e.a;if(this.b){var v=_a.c.b(this.I(),"MonthPickerView_SelectMonth");i-=32;if(i>0){var a=Math.floor(i/this.cB);var u=0;u=this.v.c().bB.IsUserCultureRightToLeft?Math.floor((this.bJ*4-t)/this.bJ):Math.floor(t/this.bJ);var c=a*4+u;if(c<12){var s=new _a.d(this.a.g(),c,this.a.j(),this.a.n(),this.a.p(),this.a.u(),this.a.y());if(this.bX(s)){this.a=s;this.dD()}}}_a.c.a(v)}else if(this.be&&i<=32&&t>this.bZ&&t<this.dn-this.bZ)this.bs(!0);else{i-=this.ck?this.r:32+this.r;if(this.g){this.v.c().bB.IsUserCultureRightToLeft||(t-=this.i);if(t<0||t>this.i*7)return}if(i>0){var h=Math.floor(i/this.r);var f=0;f=this.v.c().bB.IsUserCultureRightToLeft?Math.floor((this.i*7-t)/this.i):Math.floor(t/this.i);var o=_a.G.a(this.a,3);var r=o[0].c(h*7+f);if((_ca.e.a(r,this.a)||!this.cw()&&r.f()===this.a.s(-1).f()||!this.cv()&&r.f()===this.a.s(1).f()&&o[0].c(h*7).f()===this.a.f())&&!this.bD||this.bD&&this.cM(r)){var l=_a.c.b(this.I(),"MonthPickerView_SelectDate");this.bc(r);_a.c.a(l)}}}}},ez:function(n){if((this.cx()||n!==this.c&&(!this.c||!this.c.B(n))&&n)&&!this.p.w(n)){this.c=n;if(this.cx()===1&&this.cj)if(this.l.w(n)){this.l.p(n,!0);this.di(n,null)}else{this.di(null,n);this.l.a(n)}else if(n){this.di(this.c,n);this.A=_a.G.a(n,this.u,this.u===2,this.v.a().v().bB.WorkDays)}this.s();this.bv("SelectedDate");this.bi&&this.dm(!1)}},dH:function(n){if(this.b){this.a=this.a.x(n?1:-1);this.s()}else this.o(this.a.s(n?1:-1));this.by("NextButtonAccessibleName","PreviousButtonAccessibleName");this.e.R();this.m[n?1:0].R()},eo:function(n,t){this.dJ();this.s()},el:function(n,t){this.s()},dR:function(){this.g=this.C.a("weekNumbersContainer");this.g.K(!1);_b.v.a(this.j.z.style,this.i+"px")},em:function(n,t){if(this.db())this.dR();else{_b.v.a(this.j.z.style,"0");this.g.K(!0);this.g=null}this.dT();this.ex();this.dp()},eb:function(n,t){this.g&&!this.g.bq()&&this.dp()},dV:function(){_a.b.a(this.C,"TemplateInstance");this.e=this.C.a("DateButton");this.e.O(_j.C.a());this.cN=this.C.a("TopHeaderContainer");this.m=new Array(2);this.m[0]=this.C.a("PrevArrow");this.m[1]=this.C.a("NextArrow");this.j=this.C.a("dayGridContainer");this.q=this.C.a("monthGridContainer");this.q.fy(this.cQ);this.bZ=this.t.a()==="Mouse"?30:26;this.dn=this.k-2*this.bZ;this.r=(this.n-32)/7;this.dT();this.cB=(this.n-32)/4;this.bJ=Math.round(this.k/4);this.dI();this.bi&&this.dW();if(this.t.a()==="Mouse"){this.j.F(27);this.q.F(27);this.j.bb(this.e.co());this.q.bb(this.e.co());this.j.S().v(!0);this.q.S().v(!0);this.db()&&this.dR()}this.bk(1)},dT:function(){var n=this.db()?8:7;this.i=Math.round(this.k/n)},ed:function(n){this.dI()},ep:function(){this.e=null;this.bU=null;this.g=null;this.q.kJ(this.cQ);this.q=null;this.cN=null;Array.clear(this.bR);Array.clear(this.d)},dJ:function(){if(!this.Z()){this.ce=!0;return}for(var r=_a.G.a(this.a,3),u=r[0],f=this.bU.children,n,i,t=0;t<7;t++){i=u.c(t).r();n=f[t];n.innerText=_a.d.bX(i);n.title=_a.d.m(i);n.setAttribute("aria-label",n.title)}},s:function(){if(!this.Z()){this.ce=!0;return}var i=_j.n.b(_a.a.c,2,"MonthPickerView:UpdateContent");var t,n;if(this.b){t=this.a.x(-1);n=this.a.x(1);this.e.F(41);this.ey()}else{t=this.a.s(-1);n=this.a.s(1);this.e.F(3);this.ew();this.dp()}this.e.bb(null);this.e.Q(this.bf());if(!this.bW){this.m[0].z.style.display=this.bX(t)?"block":"none";this.m[1].z.style.display=this.bX(n)?"block":"none"}_j.n.a(i)},ey:function(){this.g&&this.g.K(!0);this.e.k(this.a.a(13));for(var n,t=0;t<12;t++){n=this.x[t];if(this.c&&this.c.f()===t&&this.c.g()===this.a.g()){_j.k.f(n,this.bV);_j.k.d(n,this.h)}else if(this.a.g()<=this.bY.g()&&t<this.bY.f()||this.a.g()>=this.bl.g()&&t>this.bl.f())n.style.display="none";else{n.style.display="block";_j.k.f(n,this.h);_j.k.d(n,this.bV)}var i=new _a.d(this.a.g(),t,1);n.setAttribute("aria-label",i.a(2))}},dp:function(){if(this.g){this.g.K(!1);for(var f=this.g.z.children,e=_a.G.a(this.a,3),r=[e[0],e[0].c(6)],o=this.a.f(),n,u,i,t=0;t<6;t++){n=f[t];u=r[0];i=r[1];if(u.f()===o||i.f()===o){n.style.display="block";n.style.top=(t+1)*this.r+"px";this.ca(n,0,this.i-1,this.r,0);f[t].innerText=_a.d.bu(i).toString()}else n.style.display="none";r[0]=u.c(7);r[1]=i.c(7)}}},ew:function(){var t;var u;var i;var h=this.a.a(2,2);var s=_a.G.a(this.a,3);var e=_a.d.br();var c=_a.d.a().d();var o=s[0];var f=this.a.f();for(i=0;i<42;i++){t=o.c(i);u=t.b(this.a);if(t.r()===e&&t.f()!==f&&u>0)break;var n=this.d[i];if(i<7||i/7>4)if(t.f()!==f)if(this.cw()&&u<0||this.cv()&&u>0)n.style.display="none";else{n.style.display="block";_j.k.d(n,"ms-font-color-neutralTertiaryAlt")}else{n.style.display="block";_j.k.f(n,"ms-font-color-neutralTertiaryAlt")}n.innerText=t.a(19);n.setAttribute("aria-label",t.a(3));if(this.p.w(t.d())){_j.k.f(n,this.h);_j.k.d(n,this.bP)}else{_j.k.f(n,this.bP);if(t.B(c)&&_ca.e.a(t,this.a))if(this.cM(t)&&this.cx()===1){_j.k.d(n,this.w);_j.k.d(n,this.h)}else{_j.k.f(n,this.h);_j.k.d(n,this.w)}else{_j.k.f(n,this.w);this.cM(t)&&(this.ci&&this.cf||t.f()===f)?_j.k.d(n,this.h):_j.k.f(n,this.h)}}}this.e.k(h);for(var r=4;r<6;r++)this.bR[r].style.display=r>=i/7?"none":"block"},cM:function(n){if(!(_ca.e.a(n,this.a)||!this.cw()&&n.f()===this.a.s(-1).f()||!this.cv()&&n.f()===this.a.s(1).f())||this.p.w(n))return!1;switch(this.u){case 0:if(this.cx()){if(this.l.w(n))return!0}else return _a.d.g(n,this.c);return!1;case 3:case 6:return _ca.e.a(this.a,this.c)&&_ca.e.a(n,this.a);case 1:case 5:return this.A[0].b(n)<=0&&this.A[1].b(n)>0;case 2:for(var t=0,i=this.A.length-1;t<i;t++)if(this.A[t].B(n))return!0;return!1;default:throw Error.notImplemented("Unexpected SelectionType"+this.u);}},dD:function(){this.be&&this.bs(!1);this.s();this.bv("DisplayedDate")},bX:function(n){return this.b?n.g()>=this.bY.g()&&n.g()<=this.bl.g():n.b(this.bY)>=0&&n.b(this.bl)<=0},dW:function(){var u=new _fc.c;u.l=this.dg;u.j("ENTER");var r=new _fc.c;r.l=this.cX;r.j("LEFTARROW");r.m=!1;var n=new _fc.c;n.l=this.cY;n.j("RIGHTARROW");n.m=!1;var i=new _fc.c;i.l=this.da;i.j("UPARROW");i.m=!1;var t=new _fc.c;t.l=this.cW;t.j("DOWNARROW");t.m=!1;var e=new _fc.g;var f=new _fc.g;e.a([u,r,n,i,t]);f.a([u,r,n,i,t]);this.j.E([e]);this.q.E([f])},ea:function(){if(this.bD){var t=_a.G.a(this.a,3);var n=t[0].c(this.f);this.cM(n)&&this.de()}else this.de()},de:function(){if(this.b)this.o(new _a.d(this.a.g(),this.f,this.a.j(),this.a.n(),this.a.p(),this.a.u()));else{var i=_a.G.a(this.a,3);var n=i[0].c(this.f);var t=!this.c||n.f()!==this.c.f();this.bc(n);t&&this.bB(this.f,!0)}},dE:function(n){var t=this.f;t+=n?-1:1;t=Math.max(t,0);t=Math.min(this.b?this.x.length-1:this.d.length-1,t);var i=_a.G.a(this.a,3);(this.b||this.cm(i[0].c(t)))&&this.bB(t,!0)},ec:function(){this.dE(!0);this.cE()},ek:function(){this.dE(!1);this.cE()},en:function(){var t=_a.G.a(this.a,3);if(this.b||this.cm(t[0].c(this.f-7))){var n=this.b?4:7;this.bB(this.f-n,!0)}this.cE()},dZ:function(){var t=_a.G.a(this.a,3);if(this.b||this.cm(t[0].c(this.f+7))){var n=this.b?4:7;this.bB(this.f+n,!0)}this.cE()},cE:function(){this.dd&&!this.b&&this.de()},ee:function(){this.dH(!_a.v.d())},ej:function(){this.dH(_a.v.d())},dY:function(){this.be&&this.bs(!this.b)},cm:function(n){if(n.f()===this.a.f())return!0;var t=_a.G.a(n,1);return!this.cw()&&t[1].f()===this.a.f()||!this.cv()&&t[0].f()===this.a.f()},bB:function(n,t){this.dC();var i=this.b?this.x[n]:this.d[n];if(i){this.f=n;var r=this.bi?0:-1;i.setAttribute("tabindex",r.toString());t&&i.focus()}},dC:function(){var n=this.b?this.x[this.f]:this.d[this.f];n&&n.setAttribute("tabindex","-1")},dm:function(n){if(this.Z()){if(!this.c){n&&this.j.R();return}!this.b&&_ca.e.a(this.c,this.a)?this.bB(this.cy(this.c.d()),n):this.bB(this.dU(),n)}},di:function(n,t){if(this.t.a()==="Mouse"&&!this.b&&this.d){if(n){var r=this.cy(n.d());r>=0&&r<this.d.length&&this.d[r].setAttribute("aria-selected",_j.bp.toString(0))}if(t){var i=this.cy(t.d());i>=0&&i<this.d.length&&this.d[i].setAttribute("aria-selected",_j.bp.toString(1))}}},cy:function(n){var t=_a.G.a(this.a,3);return n.k(t[0])>=0&&n.k(t[1])<=0?n.e(t[0])/864e5:-1},dU:function(){if(this.b)return 0;for(var t=_a.G.a(this.a,3)[0],n=0;n<42;n++)if(this.cm(t.c(n)))return n;return-1},dX:function(n,t){this.s()},dI:function(){var n;var i;var h;var o;var r;var s;if(this.b&&!this.x){r=this.cB;s=this.bJ;h=this.q.z.children;this.x=new Array(12);for(var e=0,c=0;e<3;e++){n=h[e];o=n.children;this.dS(n,e,r,10);for(var u=0;u<4;u++,c++){i=o[u];i.innerText=_a.d.P(c);this.ca(i,u,s,r,10);this.x[c]=i}}}else if(!this.b&&!this.bR){r=this.r;s=this.i;h=this.j.z.children;this.bR=new Array(6);this.d=new Array(42);for(var l=0,t=0,a=7;t<a;t++){n=h[t];o=n.children;this.dS(n,t,r,0);t?this.bR[t-1]=n:this.bU=n;for(var f=0;f<7;f++){i=o[f];this.ca(i,f,s,r,0);if(t>0){this.d[l]=i;l++}}}}},ex:function(){for(var i=this.bU.children,n=0,f=i.length;n<f;n++){var e=n%7;this.ca(i[n],e,this.i,this.r,0)}for(var t=0,u=this.d.length;t<u;t++){var r=t%7;this.ca(this.d[t],r,this.i,this.r,0)}},dS:function(n,t,i,r){n.style.position="absolute";n.style.top=t*i+"px";n.style.height=i-r+"px"},ca:function(n,t,i,r,u){var f=u/2;_j.k.a(n,"width",i-u+"px");_j.k.a(n,"height",r-u+"px");_j.k.a(n,"line-height",r-u+"px");_b.v.a(n.style,t*i+f+"px")},ei:function(n){this.dO(n.a)}};_ca.m=function(){};_ca.m.prototype={a:function(n,t){var i=n;return i===1604?_u.c.DZ:i},b:function(n,t){throw Error.notImplemented();}};_ca.j=function(){};_ca.j.prototype={a:function(n,t){t===null&&(t=!0);var i=n;return i>=0&&i<=11?t?_a.d.ba(i):_a.ea.toString(i):""},b:function(n,t){throw Error.notImplemented();}};_ca.i=function(n){_ca.i.initializeBase(this,[n]);this.f=new _j.l;this.e=new _j.l;this.d=new _j.l;var t=_a.d.a();this.i=1900;this.h=t.g();this.c=1604;this.b=t.f();this.a=t.j()};_ca.i.prototype={c:0,b:0,a:0,l:null,f:null,p:function(n){if(this.c!==n){this.c=n;this.g();this.bv("SelectedYear")}return n},i:0,h:0,e:null,o:function(n){if(this.b!==n){this.b=n;this.g();this.bv("SelectedMonth")}return n},d:null,m:function(n){if(this.a!==n){this.a=n;this.k();this.bv("SelectedDay")}return n},P:function(){_j.c.prototype.P.call(this);if(this.C){for(var e=50,f=129,s=60,n=0,o=_a.d.ck(),i=o,u=i.length,t=0;t<u;++t){var r=i[t];switch(r){case 7:n=this.j("DayPicker",e,n);break;case 6:n=this.j("MonthPicker",f,n);break;case 5:n=this.j("YearPicker",s,n);break}}this.n()}},Y:function(){_j.i.prototype.Y.call(this);if(this.W()){var n=this.W();var t=new _a.d(this.c,this.b,this.a);if(n.k(t)){this.c=n.g();this.b=n.f();this.a=n.j()}this.g();this.by("SelectedYear","SelectedMonth")}else this.k()},j:function(n,t,i){var u=10;var r=this.C.a(n);_j.k.a(r.z,_fc.n.a(),i+"px");_j.k.a(r.z,"position","absolute");r.z.style.width=t.toString()+"px";return i+t+u},n:function(){var i=new _j.q;i.c(1604);for(var t=this.h;t>=this.i;t--)i.c(t);this.f.m(i.i());for(var r=new _j.q,n=0;n<12;n++)r.c(n);this.e.m(r.i());this.g()},k:function(){var t=this.W();var n=new _a.d(this.c,this.b,this.a);(!t||n.k(t))&&this.ba(n)},g:function(){for(var t=_a.d.r(this.b,this.c),i=this.a,r=new _j.q,n=1;n<=t;n++)r.c(n);this.d.g();this.d.m(r.i());this.m(i>t?t:i);this.k()}};_ca.d=function(n,t){_ca.d.initializeBase(this,[n,t]);this.y("TimePickerView")};_ca.d.prototype={c:null,p:null,n:null,l:0,d:function(n){this.c=n;this.bv("SelectedTime");return n},k:function(n){if(this.p!==n){this.p=n;this.bv("TextBoxAriaLabel")}return n},g:function(n){if(this.n!==n){this.n=n;this.bv("DropDownButtonTitle")}return n},o:function(n){if(this.l!==n){this.l=n;this.bv("CustomTimeIntervalMinutes")}return n}};_ca.g=function(n,t,i){this.r=Function.createDelegate(this,this.u);this.e=new _j.l;_ca.g.initializeBase(this,[n]);this.y("Pivot");this.o=t.i()&&i.a()!=="Mouse"};_ca.g.prototype={o:!1,c:null,b:0,d:null,a:null,f:null,g:!1,m:null,h:!1,l:!1,k:null,q:function(n){if(this.c!==n){if(n)for(var r=n,u=r.length,t=0;t<u;++t){var i=r[t];if(!i.a)throw Error.argumentNull("Data field in the pivot option cannot be empty.");if(!Object.getType(i.a).inheritsFrom(_a.bs))throw Error.argument("Data field in the pivot option must inherit from the view model base class.");}this.c=n;this.j();this.bv("Options")}return n},cp:function(){return this.k},Q:function(n){if(this.k!==n){this.k=n;this.bv("AriaLabel")}return n},n:function(n){if(this.b!==n){this.b=n;if(this.Z()){this.t();this.j()}this.bv("SelectedOptionIndex")}return n},i:function(n){this.m!==n&&(this.m=n);return n},p:function(n){this.h!==n&&(this.h=n);return n},s:function(n){this.l!==n&&(this.l=n);return n},w:function(n){this.f!==n&&(this.f=n);return n},P:function(){_j.c.prototype.P.call(this);this.d=this.C.a("PivotMenu");this.a=this.C.a("ContentConductor");this.a.bD(this.r);this.f&&(this.a.A=this.f);if(!this.h&&this.d.bf()&&this.o){var n=this;_b.g.a(this.z,function(t){n.v(t)},null,!1,!1)}},G:function(){_j.c.prototype.G.call(this);this.t();this.j()},Y:function(){_j.i.prototype.Y.call(this);this.j()},t:function(){if(this.c&&this.b>this.c.length-1)throw Error.argumentOutOfRange("Cannot assign a selected option for the pivot that is outside the range of total options.");},j:function(){this.c&&this.c.length>0&&this.b>=0&&!this.g&&(this.e.x.length?this.e.q(0,this.c[this.b].a):this.e.a(this.c[this.b].a))},v:function(n){var u=this.b;var i=n.e();if(this.d.x(n)){var r=this;_b.g.e(this.z,function(n){r.d.df(n);var t=n.e()-i;_j.k.a(r.a.z,_b.m.a(),_b.m.c(t,0));_j.k.a(r.a.z,_b.m.d(),_b.m.a()+" 0s")},null);var t=this;_b.g.b(this.z,function(n){_b.g.c(t.z,null);t.g=!0;t.d.de(n);if(u===t.b){_j.k.a(t.a.z,_b.m.a(),_b.m.c(0,0));_j.k.a(t.a.z,_b.m.d(),_b.m.a()+" 250ms");t.g=!1}else{var e=n.e()-i;_j.k.a(t.a.z,_fc.n.a(),e.toString()+"px");_j.k.a(t.a.z,_b.m.a(),"");_j.k.a(t.a.z,_b.m.d(),"");var r=31;var f=28;if(n.e()>i){r=32;f=27}t.a.g=function(){return new _ff.h(f,r)};t.g=!1;t.j();t.a.g=null}},null)}},u:function(){_j.k.a(this.a.z,_fc.n.a(),"")}};_ca.h=function(){this.c=Function.createDelegate(this,this.d);_ca.h.initializeBase(this)};_ca.h.prototype={b:!1,a:null,bb:function(){_j.bU.prototype.bb.call(this);this.X.d(this.c)},bd:function(){this.X.e(this.c);_j.bU.prototype.bd.call(this)},bf:function(n){_j.bU.prototype.bf.call(this,n);if(!_fce.f.isInstanceOfType(n))throw Error.argumentType("AttachedControl");},d:function(){if(this.X.c()>0){if(!this.b){this.X.bn(this.a);this.b=!0}}else if(this.b){this.X.bt(this.a);this.b=!1}}};_ca.a=function(){};_ca.a.$$cctor=function(){_ca.a._I()};_ca.a.q=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <span></span> </div><div> <span class='_ca_2'></span> </div><div> <label> <span class='reminder-label label ms-font-s ms-font-weight-semilight'></span> <div></div> <div></div> <div></div> </label> </div><div> <div></div> <div class='_ca_3'></div> </div>";_j.i.a().appendChild(n);return n};_ca.a.k=function(n){return n.W()};_ca.a.G=function(n){return n.l};_ca.a.L=function(n){return n.f};_ca.a.K=function(n){return n.c};_ca.a.h=function(n){return n.b()};_ca.a.H=function(n){return n.e};_ca.a.J=function(n){return n.b};_ca.a.F=function(n){return n.d};_ca.a.I=function(n){return n.a};_ca.a.m=function(n){return n.l};_ca.a.B=function(n){return n.c};_ca.a.D=function(n){return n.b};_ca.a.r=function(n){return n.c};_ca.a.A=function(n){return n.h};_ca.a.C=function(n){return n.m};_ca.a.y=function(n){return n.cp()};_ca.a.z=function(n){return n.e};_ca.a.g=function(n,t){n.a(t)};_ca.a.i=function(n,t){n.c(t)};_ca.a.O=function(n,t){n.p(t)};_ca.a.j=function(n,t){n.e(t)};_ca.a.N=function(n,t){n.o(t)};_ca.a.M=function(n,t){n.m(t)};_ca.a.x=function(n,t){n.K(t)};_ca.a.s=function(n,t){n.j(t)};_ca.a.E=function(n,t){n.n(t)};_ca.a.t=function(n,t){n.f(t)};_ca.a.u=function(n,t){n.bY=t};_ca.a.w=function(n,t){n.bE(t)};_ca.a.v=function(n,t){n.Q(t)};_ca.a.P=function(n,t){n.b(t)};_ca.a.o=function(){_ca.a.e||(_ca.a.e=new _ca.m);return _ca.a.e};_ca.a.n=function(){_ca.a.d||(_ca.a.d=new _ca.j);return _ca.a.d};_ca.a.p=function(){_ca.a.f||(_ca.a.f=new _b.X);return _ca.a.f};_ca.a.l=function(){_ca.a.c||(_ca.a.c=new _fc.k);return _ca.a.c};_ca.a._I=function(){var r="SplitDatePicker.YearTemplate";new _j.d(r,function(){_ca.a.a[r]===undefined&&(_ca.a.a[r]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.o(),null,null]]]);var n=_ca.a.b.childNodes[0].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var u="SplitDatePicker.MonthTemplate";new _j.d(u,function(){_ca.a.a[u]===undefined&&(_ca.a.a[u]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.n(),null,null]]]);var n=_ca.a.b.childNodes[0].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var f="SplitDatePicker.DayTemplate";new _j.d(f,function(){_ca.a.a[f]===undefined&&(_ca.a.a[f]=[[[-1,1,["DataContext"],[_ca.a.k],null,"Text",null,_ca.a.g,1,_ca.a.p(),null,null]]]);var n=_ca.a.b.childNodes[1].cloneNode(!0);var t=new _fc.a(n.children[0]);return new _j.a(n,[t])},"",Object,_j.i,null,!1,!1,!1,0,_ca.a.a);var n="SplitDatePicker";new _j.d(n,function(){_ca.a.a[n]===undefined&&(_ca.a.a[n]=[[[-1,1,["Label"],[_ca.a.G],null,"Text",null,_ca.a.g,1,null,null,null]],[[-1,1,["YearOptions"],[_ca.a.L],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedYear"],[_ca.a.K],_ca.a.O,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]],[[-1,1,["MonthOptions"],[_ca.a.H],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedMonth"],[_ca.a.J],_ca.a.N,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]],[[-1,1,["DayOptions"],[_ca.a.F],null,"Options",null,_ca.a.i,1,null,null,null],[-1,1,["SelectedDay"],[_ca.a.I],_ca.a.M,"SelectedValue",_ca.a.h,_ca.a.j,2,null,null,null]]]);var r=_ca.a.b.childNodes[2].cloneNode(!0);var u=new _fce.k(_j.a.a(r,[0,3]));u.a("SplitDatePicker.DayTemplate");u.l=!0;u.bb("SplitDatePicker.Label");var t=new _fce.k(_j.a.a(r,[0,2]));t.a("SplitDatePicker.MonthTemplate");t.l=!0;t.bb("SplitDatePicker.Label");var i=new _fce.k(_j.a.a(r,[0,1]));i.a("SplitDatePicker.YearTemplate");i.l=!0;i.bb("SplitDatePicker.Label");var f=new _fc.a(_j.a.a(r,[0,0]));f.O("SplitDatePicker.Label");f.N(!0);return new _j.a(r,[f,i,t,u]).l({YearPicker:i,MonthPicker:t,DayPicker:u})},"",_a.d,_ca.i,function(n){return new _ca.i(n)},!0,!1,!1,0,_ca.a.a);var t="Pivot";new _j.d(t,function(){_ca.a.a[t]===undefined&&(_ca.a.a[t]=[[[-1,1,["HidePivotMenu"],[_ca.a.m],null,"IsHidden",null,_ca.a.x,1,null,null,!0],[-1,1,["Options"],[_ca.a.B],null,"Options",null,_ca.a.s,1,null,null,null],[-1,1,["SelectedOptionIndex"],[_ca.a.D],_ca.a.E,"SelectedOptionIndex",_ca.a.r,_ca.a.t,2,null,null,0],[-1,1,["DisableSurfaceSwipe"],[_ca.a.A],null,"TouchDisabled",null,_ca.a.u,1,_ca.a.l(),null,!1],[-1,1,["PivotMenuCss"],[_ca.a.C],null,"CssClass",null,_ca.a.w,1,null,null,null],[-1,1,["AriaLabel"],[_ca.a.y],null,"AriaLabel",null,_ca.a.v,1,null,null,null]],[[-1,1,["ConductorStack"],[_ca.a.z],null,"ActiveNavigationStack",null,_ca.a.P,1,null,null,null],[-1,5,["HidePivotMenu"],[_ca.a.m],null,"_ca_4",null,null,1,_ca.a.l(),null,null]]]);var i=_ca.a.b.childNodes[3].cloneNode(!0);var r=new _n.g(i.children[1],_j.b.Instance.a(_n.f),_j.b.Instance.a(_b.a));var n=new _fce.z(i.children[0],_j.b.Instance.a(_ff.a),_j.b.Instance.a(_j.p),_j.b.Instance.a(_ff.n),_j.b.Instance.a(_ff.b));n.F(30);return new _j.a(i,[n,r]).l({PivotMenu:n,ContentConductor:r})},"",Object,_ca.g,function(n){return new _ca.g(n,_j.b.Instance.a(_j.o),_j.b.Instance.a(_y.a))},!1,!1,!1,0,_ca.a.a);var i="TimezonePicker";new _j.d(i,function(){_ca.a.a[i]===undefined&&(_ca.a.a[i]=[null]);var t=_ca.a.b.childNodes[0].cloneNode(!0);var n=new _j.bn(t.children[0],"application.TimezonePicker",_j.b.Instance.a(_j.I));n.g(!0);return new _j.a(t,[n])},"",Object,_j.c,function(n){return new _j.c(n)},!0,!1,!1,0,_ca.a.a)};CalendarControlsCoreComponent.registerClass("CalendarControlsCoreComponent",null,_a.ii,_j.cd);_ca.b.registerClass("_ca.b",_a.bs);_ca.f.registerClass("_ca.f",_j.c);_ca.c.registerClass("_ca.c",_ca.f);_ca.e.registerClass("_ca.e",_j.c);_ca.m.registerClass("_ca.m",null,_j.bO);_ca.j.registerClass("_ca.j",null,_j.bO);_ca.i.registerClass("_ca.i",_j.c);_ca.d.registerClass("_ca.d",_ca.f);_ca.g.registerClass("_ca.g",_j.c);_ca.h.registerClass("_ca.h",_j.bU);CalendarControlsCoreComponent.$$cctor();_ca.f.b=new _a.e("SelectedValue",_a.d,_ca.f);_ca.f.a=new _a.e("DateTimeType",_ca.l,_ca.f);_ca.e.b=["IsPickingMonth","NextButtonAccessibleName","PreviousButtonAccessibleName","DateButtonAccessibleName"];_ca.a.b=_ca.a.q();_ca.a.e=null;_ca.a.d=null;_ca.a.f=null;_ca.a.c=null;_ca.a.a={};_ca.a.$$cctor();
window.scriptsLoaded['microsoft.owa.calendar.controls.core.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.calendar.controls.core.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
