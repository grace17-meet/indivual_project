﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.core.personacardfacade.js'] = (new Date()).getTime();
Type.registerNamespace("_pcf");function PersonaCardFacadeComponent(){}PersonaCardFacadeComponent.$$cctor=function(){_a.t.a().a(PersonaCardFacadeComponent)};PersonaCardFacadeComponent.prototype={b:function(n,t,i){var e=this;n.b(_pcf.f,function(){return new _pcf.f(window.document.createElement("div"),n.a(_b.a),n.a(_y.a),n.a(_a.r))});var o=this;n.b(_pcf.g,function(){return new _pcf.g(n.a(_y.a),n.c(IChatProviderFactory),n.c(IModernGroupCardViewModelFactory),n.c(IReadPersonaCardViewModelFactory),n.c(IGroupCardViewModelFactory),n.c(ILocationCardViewModelFactory),n.c(IComposePersonaCardViewModelFactory))}).b(IPersonaCardViewModelFactory).a();var f=this;n.b(IModernGroupCardFacade,function(){var t=n.a(_pcf.b);return t.c(new _bc.h,0,null,!1)}).a();var r=this;n.b(_pcf.b,function(){return new _pcf.b(n.a(_y.a),n.a(_a.f),n.c(IChatProviderFactory),n.a(_pcf.g),n.a(IMailComposeLauncher),n.c(IPersonaPaneNavigatorViewModelFactory),n.c(_y.bN))}).b(IPersonaCardFacadeViewModelFactory).a();var u=this;n.b(_pcf.i,function(){return new _pcf.i(n.a(_y.a),n.f(_pcf.b))}).b(ICompositePersonaViewModelFactory).a()},a:function(){return[]}};_pcf.h=function(n,t,i,r,u){this.v=Function.createDelegate(this,this.F);this.u=Function.createDelegate(this,this.E);this.t=Function.createDelegate(this,this.C);this.s=Function.createDelegate(this,this.B);_pcf.h.initializeBase(this);_a.b.a(t,"basePersonaViewModel");this.l=n;this.h=t;this.y=i;this.w=r;this.x=u;this.q=0;this.p=this.h.bE()};_pcf.h.prototype={l:null,y:null,h:null,o:null,n:!1,m:null,j:null,q:0,p:null,w:!1,x:!1,k:function(){if(!this.m){this.m=new _bc.h;this.m.d=!1}return this.m},G:function(n){if(this.m!==n){this.m=n;this.j&&(this.j.S=n);this.ez("PersonaCardConfig")}return n},A:function(){switch(this.l.a()){case"Mouse":return 0;case"TouchWide":return 1;case"TouchNarrow":return 2;default:throw Error.invalidOperation("Unexpected value given for OwaShell.CurrentLayout: "+this.l.a());}},a:function(){return this.i()},i:function(){if(!this.j){var n=_j.n.b(this.p,2,"CreatePersonaCardFacade");this.K();this.j=this.y.c(this.k(),this.A(),null,this.w);_j.n.a(n);if(this.k().a!==1){this.j.bH(this.s);this.j.g(this.t);this.j.p(this.u)}this.eD("PersonaCardFacadeViewModel","PersonaCardFacade")}return this.j},c:function(){return this.n},d:function(){return this.q},b:function(n){this.q=n;return n},z:function(){return!!this.j},g:function(n){if(!this.l.i()){this.I();_pc.b.p(4,this.k().a,this.h.a().b())}var t=new _a.l;t.a("h",this.k().a).a("pt",this.h.a().b()).c("gm",this.l.i());n.j=t.toString();_a.c.a(n)},e:function(){this.o=null;this.z()&&this.i().c()},f:function(n){n&&this.H();if(this.n!==n){var t=!!this.i();if(this.n){!n&&this.i().M&&this.i().M.bi()&&this.i().M.n(!1);this.i().M&&this.h.a()&&(this.h.a().b()===1||this.h.a().b()===2||this.h.a().b()===5)&&!_pc.a.b(this.i().M.a(),this.o)&&this.i().c();this.o=null}else this.o=this.h.a();this.n=n;return t}return!1},eC:function(){if(this.j){this.j.bU(this.s);this.j.x(this.t);this.j.G(this.u)}_a.fM.prototype.eC.call(this)},I:function(){this.h.f(!0)},H:function(){var i=_j.n.b(this.p,2,"ShowPersonaCard");var t=this.h.R();var n=_pc.a.d(t);this.i().M&&this.i().M.n(!0);this.i().j(n,"",this.x);_j.n.a(i)},K:function(){this.k().q=!0;this.k().a&&this.k().a!==1&&(this.k().a=this.h.by())},E:function(){var n=this.i().M;n&&n.bc(this.v)},C:function(){var n=this.i().M;if(n){if(_pc.a.b(this.h.a(),n.a())){var t=this.h.R();n.bt(t.a())}n.bd(!0);n.c().w(!0);n.n(!0);this.l.a()!=="Mouse"?n.g(!1):n.g(!0);n.Y(this.v)}},F:function(){this.h.f(!1)},B:function(){this.j&&this.l.a()==="Mouse"&&this.h.f(!1)}};_pcf.i=function(n,t){this.b=n;this.c=t};_pcf.i.prototype={b:null,c:null,a:function(n,t,i){return new _pcf.h(this.b,n,this.c.e(),t,i)}};_pcf.b=function(n,t,i,r,u,f,e){this.e=n;this.g=t;this.f=i;this.j=r;this.i=u;this.k=f;this.h=e};_pcf.b.prototype={e:null,g:null,f:null,i:null,j:null,h:null,k:null,c:function(n,t,i,r){return new _pcf.e(n,t,this.j,this.g,this.e,this.i,i,this.k,this.h,r)},d:function(n){return new _rpc.g(null,n)},b:function(n,t,i){throw Error.notImplemented();},a:function(n,t,i){var u=n;var r=this.c(new _bc.h,3,null,!1);r.bL(u);this.l();return r},l:function(){if(this.e.a()==="Mouse"){var n=this;this.f.a(function(n){_g.k.b.jw(n.a())})}}};_pcf.g=function(n,t,i,r,u,f,e){this.c=n;this.a=t;this.b=i;this.g=r;this.d=u;this.f=f;this.e=e};_pcf.g.prototype={c:null,a:null,g:null,d:null,f:null,e:null,b:null,i:function(n,t,i,r,u,f,e){switch(n.b()){case 5:this.k(n,t,i,r,u,f);break;case 2:this.j(n,t,i,r,f,e);break;default:this.l(n,t,i,r,f);break}},h:function(n,t,i,r,u,f){switch(n.b()){case 2:this.m(n,t,i,r);break;case 4:this.n(n,t,i,r);break;case 5:this.o(n,t,i,r,f);break;default:this.p(n,t,i,r,u);break}},p:function(n,t,i,r,u){var f=this;this.g.a(function(f){f.a(n,t,i,r,u)})},o:function(n,t,i,r,u){if(this.c.a()!=="Mouse"){var e=this;this.b.a(function(u){var f=u.a(n,t,null,i,!1);f.e();r(f)})}else{var f=this;this.a.a(function(e){f.b.a(function(f){var o=f.a(n,t,e.a(),i,u);o.e();r(o)})})}},k:function(n,t,i,r,u,f){var e=this;this.b.a(function(e){var o=e.c(n,t,i,r,u);o.e();f(o)})},l:function(n,t,i,r,u){var f=this;this.e.a(function(f){var e=f.a(n,t,i,r);e.e();u(e)})},j:function(n,t,i,r,u,f){var e=this;this.d.a(function(e){var o=e.b(n,t,i,r,f);o.e();u(o)})},n:function(n,t,i,r){var u=this;this.f.a(function(f){if(u.c.a()!=="Mouse"){var e=f.a(n,t,null,i);e.e();r(e)}else u.a.a(function(u){var e=f.a(n,t,u.a(),i);e.e();r(e)})})},m:function(n,t,i,r){var u=this;this.d.a(function(f){if(u.c.a()!=="Mouse"){var e=f.a(n,t,null,i);e.e();r(e)}else u.a.a(function(u){var e=f.a(n,t,u.a(),i);e.e();r(e)})})}};_pcf.e=function(n,t,i,r,u,f,e,o,s,h){this.bz=Function.createDelegate(this,this.B);this.bB=Function.createDelegate(this,this.bT);this.bg=Function.createDelegate(this,this.bP);this.W=Function.createDelegate(this,this.bR);this.bh=Function.createDelegate(this,this.bQ);this.bi=Function.createDelegate(this,this.bS);this.bf=Function.createDelegate(this,this.bN);this.bA=Function.createDelegate(this,this.bb);this.by=Function.createDelegate(this,this.d);this.bx=Function.createDelegate(this,this.A);this.bw=Function.createDelegate(this,this.z);_pcf.e.resolveInheritance();this.h=this.apcl;this.i=this.rpcl;this.q=this.dispose;_pcf.e.initializeBase(this);this.P=u;this.T=r;this.S=n;this.V=t;this.Y=i;this.bq=f;this.bd=h;this.br=new _y.w;this.bj=e;this.bs=o;this.bo=s};_pcf.e.prototype={P:null,T:null,Y:null,br:null,bq:null,be:null,M:null,N:null,R:null,X:!1,bc:!1,V:0,S:null,O:null,U:!1,bs:null,bo:null,bp:null,bd:!1,Z:null,f:function(n){this.eE("OnEditAddCompleted",n)},v:function(n){this.eF("OnEditAddCompleted",n)},o:function(n){this.eE("PersonaCreated",n)},w:function(n){this.eF("PersonaCreated",n)},bH:function(n){this.eE("ComposeCardChanged",n)},bU:function(n){this.eF("ComposeCardChanged",n)},n:function(n){this.eE("BeforeComposeCardCreate",n)},u:function(n){this.eF("BeforeComposeCardCreate",n)},g:function(n){this.eE("ReadCardChanged",n)},x:function(n){this.eF("ReadCardChanged",n)},p:function(n){this.eE("ReadCardChanging",n)},G:function(n){this.eF("ReadCardChanging",n)},bD:function(){this.be||(this.be=new _bc.b);return this.be},E:function(){if(!this.R){this.R=new _j.l;var n=!!this.T&&this.T.a().c().Enabled;var t=_j.z.a(_g.a.a().e().bB.GroupCreationEnabled)||_g.a.a().e().bB.GroupCreationEnabled;this.R.a(new _ff.d(new _j.g(this.bw,_pcf.e.a),_nbs.a.oX,n?_nbs.a.hS:null,!0,!1));this.P.a()==="Mouse"&&this.R.a(new _ff.d(new _j.g(this.bx,_pcf.e.a),_nbs.a.HE,n?_nbs.a.oN:null,!1,!1));n&&t&&this.R.a(new _ff.d(new _j.g(this.by,_pcf.e.a),_nbs.a.XF,_nbs.a.fy,!1,!1));this.R.a(new _ff.d(new _j.g(this.bA,_pcf.e.a),_bcs.D.A,null,!1,!1))}return this.R},C:function(){return this.X},H:function(n){if(this.X!==n){this.X=n;this.ez("IsNewDialogShown")}return n},e:function(){return this.U},bu:function(n){if(this.U===n)return n;this.U=n;this.ez("IsReadCardVisible");this.M.v(this.U);return n},a:function(){return this.M},bv:function(n){if(this.M===n)return n;this.eH("ReadCardChanging");if(this.M){this.bu(!1);this.M.bo(this.bf);this.M.M(this.bi);this.M.c().q(this.bh);this.M.rpcl("IsVisible",this.W);this.M.dispose()}this.M=n;if(this.M){this.M.apcl("IsVisible",this.W);this.M.N(this.bf);this.M.h(this.bi);this.M.c().k(this.bh)}this.eH("ReadCardChanged");this.eD("ReadCard","HideConductor");return n},t:function(){return this.N},bt:function(n){if(this.N===n)return n;this.eH("ComposeCardChanging");if(this.N){this.N.bj(this.bg);this.N.rpcl("IsVisible",this.W);this.N.dispose()}this.N=n;if(this.N){this.N.apcl("IsVisible",this.W);this.N.be(this.bg)}this.eH("ComposeCardChanged");this.ez("ComposeCard");return n},bk:null,y:function(n){this.bk=n;return n},bj:null,bJ:function(){return!!this.T&&this.T.a().t().Enabled&&this.P.a()==="Mouse"},Q:function(){return this.N||this.M},bK:function(){return _db.r.isInstanceOfType(this.P.p().a())},F:function(n){this.bq.a(n)},K:function(n){var i=_j.n.b(_a.a.s,517,"CreatePersonaCardViewModel");var t=this;this.Y.h(n,this.S,this,function(n){t.bE(n,!1,i)},"",!1)},j:function(n,t,i){if(this.M&&_pc.a.b(this.M.a(),n)){this.bC(!1);return}var u=_j.n.b(_a.a.s,517,"CreatePersonaCardViewModel");var r=this;this.Y.h(n,this.S,this,function(n){r.bE(n,!0,u)},t,i)},b:function(n,t,i){this.Z&&t&&this.Z.b().a();switch(t){case 0:!this.bd&&_pe.c.h(n,this.T,this.P)?this.bV(n):!this.bd&&this.bJ()&&n.b()===5?this.bM(n):this.j(n,"",!1);break;case 1:this.j(n,"",!1);break;case 2:_db.w.isInstanceOfType(n)&&this.s(n,i);break;case 3:_db.w.isInstanceOfType(n)&&this.bl(n);break}},bV:function(n){if(this.bp)this.bp.j(n);else{var t=this;this.bs.a(function(i){t.Z=i.a(n,t);t.bo.a(function(i){i.u(t.Z);i.j(n)})})}},c:function(){this.bv(null)},B:function(){this.P.a()==="Mouse"?this.H(!0):this.ba(1)},z:function(){this.bb();this.ba(1)},A:function(){this.bb();this.ba(2)},d:function(){this.bb();if(!this.bc){this.bc=!0;this.ba(5)}},bG:function(n,t){this.bn(n,2,t)},bl:function(n){_a.n.b(_a.a.s,"PersonCard.AddToContacts");this.bn(n,3,new _rpc.g(null,3))},I:function(n,t){this.s(_pc.a.a(n,!1),t)},s:function(n,t){var i=null;switch(n.b()){case 1:i="EditContact";break;case 2:i="EditGroup";break;case 5:i="EditModernGroup";break;default:break}i&&_a.n.b(_a.a.p,i,!0);this.bn(n,1,t)},bm:function(n){if(n.K()){var t=null;var i=n.a().b();switch(n.b()){case 2:switch(i){case 1:t="NewContact";break;case 2:t="NewGroup";break;case 5:t="NewModernGroup";break}break;case 1:switch(i){case 1:t="EditContact";break;case 2:t="EditGroup";break}break;case 0:t="OpenContact";break;case 3:t="PersonCard.AddToContacts";break}t&&_a.n.a(t)}},bL:function(n){this.O=n;switch(this.O.a()){case 3:this.bl(this.O.l());break;case 1:this.s(this.O.l(),this.M?this.M.m():new _rpc.g(null,1));break;case 2:var t=new _rpc.g(null,2);t.d(n.b());t.m=n.p();this.bG(this.O.l(),t);break;default:this.j(this.O.l(),"",!1);break}},L:function(){this.N&&this.N.ba()?this.bD().h(2,this.N.a().b()===5?[_nbs.a.Ol]:[_nbs.a.Rm],this.bB,!1,_bcs.D.C,_bcs.D.J,_nbs.a.QL):this.bF()},eC:function(){this.bt(null);this.bv(null);_a.fM.prototype.eC.call(this)},bF:function(){var t=_a.c.b(_a.a.s,"PersonCard.Popout");if(this.P.a()!=="Mouse")throw Error.invalidOperation("Persona/Group Card can only be popped out in MUI");var n=this.bI();if(this.Q().b()){this.N.f(!1);this.N.bf().a()}this.Q().Z();this.P.g(_pcf.b,null,null,_bc.d.f(),n,!1);_a.c.a(t);_pc.b.c(32,8,this.Q().a().b())},bN:function(){this.bl(this.M.a())},bQ:function(){this.s(this.M.a(),this.M.m())},bn:function(n,t,i){var r;switch(t){case 3:r="AddPersonaCardViewModel";break;case 2:r="CreatePersonaCardViewModel";break;case 1:r="EditPersonaCardViewModel";break;default:throw Error.invalidOperation(_j.h.c("Cannot call CreateAndShowComposeCardViewModel with mode not in (Add,Create,Edit). Actual value = {0}",t));}var e=_j.n.b(_a.a.s,517,r);var u=this.S;if(t===1||t===3){u=new _bc.h;u.a=this.S.a}i||(i=new _rpc.M);i.k(t);this.eI("BeforeComposeCardCreate",i);var f=this;this.Y.i(n,t,u,this,i,function(n){f.bO(n,i,e)},this.bj)},bP:function(n){var t=this.N.b();_a.n.c("SaveContact")&&_a.n.a("SaveContact");_a.n.c("SaveGroup")&&_a.n.a("SaveGroup");if(this.N.M()){this.N.f(!1);this.N.M()()}(t===3||t===1)&&this.eI("OnEditAddCompleted",new _pcf.j(n,t));(t===3||t===1)&&n&&this.M&&this.M.bm(n);this.bt(null);t===2&&this.eI("PersonaCreated",n)},bO:function(n,t,i){_j.n.a(i);if(this.O){this.N.L(this.O);this.O=null}this.bt(n);this.N.bi(t);if(this.P.b()||n.b()!==2){var r=_j.n.b(_a.a.s,2,"OwaShell.PopUp");this.P.d(this.N);_j.n.a(r)}else this.br.d(this.N);(this.N.b()===3||this.N.b()===1)&&this.bm(this.N);this.bc=!1},bI:function(){var n=new _rpc.g(this.Q(),this.Q().b());if(this.Q().d()){n.z(this.Q().d().bc());n.v(this.Q().d().j())}if(this.N){n.d(this.N.bh());n.w(this.N.bg())}else n.B(this.M.bj());n.x(!0);n.y(!1);return n},bT:function(n,t){n&&this.bF()},bM:function(n){var i=this;var t=function(){_a.g.c().a(_y.bd,new _y.bd(0,n.a().EmailAddress,null,null,null))};_a.g.c().a(_y.o,new _y.o(0,t,!1,!0,!0,!0,!1));_pc.b.a(_a.a.bq,"ModernGroupCardPersonaClicked")},bR:function(n,t){if(_db.ce.isInstanceOfType(n)){var i=n;i.K()&&this.bm(i)}},bS:function(){this.bm(this.M)},bE:function(n,t,i){_j.n.a(i);var r=!1;if(this.O){r=!0;n.L(this.O);this.O=null}this.bv(n);t&&this.bC(r)},bC:function(n){if(this.V===3)if(n)this.bu(!0);else{this.M.c().i(!0);this.M.bb()}else if(this.V)if(this.V===1&&this.bK()){var i=_j.n.b(_a.a.s,2,"OwaShell.PopUp");this.P.f(this.M,1,!1);_j.n.a(i)}else{var t=_j.n.b(_a.a.s,2,"OwaShell.PopUp");this.P.d(this.M);_j.n.a(t)}else this.bu(!0)},bb:function(){this.H(!1)},ba:function(n){var i="";n===1?i="NewContact":n===2?i="NewGroup":n===5&&(i="NewModernGroup");_a.n.b(_a.a.p,i,!0);var t=_pc.a.h();t.bJ(n);t.dD=this.bk;if(n===2){t.cH(new _g.f);t.a().RoutingType="MAPIPDL"}this.bG(t,new _rpc.g(null,2))}};_pcf.j=function(n,t){this.d=n;this.c=t};_pcf.j.prototype={d:null,a:function(){return this.d},c:0,b:function(){return this.c}};_pcf.c=function(n){_pcf.c.initializeBase(this,[n]);this.y("PersonaCardFacadeView")};_pcf.c.prototype={a:null,b:function(){return this.W()},H:function(){_j.c.prototype.H.call(this);this.a=this.C.a("PersonaCardView")}};_pcf.d=function(n){_pcf.d.initializeBase(this,[n])};_pcf.d.prototype={a:null,H:function(){_j.c.prototype.H.call(this);this.a=this.C.a("PersonaCardFacadeView")}};_pcf.f=function(n,t,i,r){_pcf.f.initializeBase(this,[n,t,i,r,"PersonaCardView"])};_pcf.k=function(){};_pcf.k.prototype={a:function(n,t){var i=n;switch(i){case 2:return"ReadGroupCardView";case 4:return"ReadLocationCardView";case 5:return"ReadModernGroupCardView";default:return"ReadPersonaCardView"}},b:function(n,t){throw Error.notImplemented();}};_pcf.a=function(){};_pcf.a.$$cctor=function(){_pcf.a._I()};_pcf.a.l=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <div></div> <div></div> </div><div> <div></div> </div>";_j.i.a().appendChild(n);return n};_pcf.a.y=function(n){return n.bD()};_pcf.a.c=function(n){return n.M};_pcf.a.v=function(n){return n.bk()};_pcf.a.z=function(n){return n.b()};_pcf.a.x=function(n){return n.U};_pcf.a.o=function(n){return n.i()};_pcf.a.w=function(n){return n.N};_pcf.a.t=function(n){return n.N()};_pcf.a.i=function(n){return n.d()};_pcf.a.h=function(n){return n.e()};_pcf.a.q=function(n){return n.b()};_pcf.a.r=function(n){return n.c()};_pcf.a.p=function(n){return n.a()};_pcf.a.u=function(n){return n.q()};_pcf.a.s=function(n){return n.j()};_pcf.a.g=function(n,t){n.ba(t)};_pcf.a.m=function(n,t){n.y(t)};_pcf.a.n=function(n,t){n.K(t)};_pcf.a.b=function(n,t){n.l=t};_pcf.a.k=function(){_pcf.a.f||(_pcf.a.f=new _pcf.k);return _pcf.a.f};_pcf.a.j=function(){_pcf.a.e||(_pcf.a.e=new _fc.k);return _pcf.a.e};_pcf.a._I=function(){var i="PersonaCardFacadeView";new _j.d(i,function(){_pcf.a.a[i]===undefined&&(_pcf.a.a[i]=[[[-1,0,["MessageBoxViewModel"],[_pcf.a.y],null,"DataContext",null,_pcf.a.g,1,null,null,null]],[[-1,1,["PersonaCardFacadeViewModel","IsReadCardVisible"],[_pcf.a.z,_pcf.a.x],null,"IsHidden",null,_pcf.a.n,1,_pcf.a.j(),null,!0],[-1,0,["ReadCard"],[_pcf.a.c],null,"DataContext",null,_pcf.a.g,1,null,null,null],[0,0,["TypeOfPersona"],[_pcf.a.v],null,"TemplateId",null,_pcf.a.m,1,_pcf.a.k(),null,null]]]);var t=_pcf.a.d.childNodes[0].cloneNode(!0);var n=new _pcf.f(t.children[1],_j.b.Instance.a(_b.a),_j.b.Instance.a(_y.a),_j.b.Instance.a(_a.r));n.B(-1);var r=new _j.c(t.children[0]);r.y("MessageBoxDefaultView");return new _j.a(t,[r,n]).l({PersonaCardView:n})},"",_pcf.e,_pcf.c,function(n){return new _pcf.c(n)},!0,!1,!1,0,_pcf.a.a);var t="PersonaCardFacadeViewWrapper.PersonaView_Card";new _j.d(t,function(){_pcf.a.a[t]===undefined&&(_pcf.a.a[t]=[[[-1,0,["PersonaCardFacadeViewModel"],[_pcf.a.o],null,"DataContext",null,_pcf.a.g,1,null,null,null]]]);var e=_pcf.a.d.childNodes[1].cloneNode(!0);var o=new _pcf.c(e.children[0]);var s=new _fc.g;var r=new _fc.c;r.U(_j.f.a(["ComposeCard","SaveCommand"],[_pcf.a.w,_pcf.a.t],null,"Command",null,_pcf.a.b,1));r.j("S");r.k=4;var i=new _fc.c;i.U(_j.f.a(["ReadCard","PersonaControlViewModel","CommunicationActionsProvider","ComposeMeetingActionCommand"],[_pcf.a.c,_pcf.a.i,_pcf.a.h,_pcf.a.q],null,"Command",null,_pcf.a.b,1));i.j("M");i.k=4;var n=new _fc.c;n.U(_j.f.a(["ReadCard","PersonaControlViewModel","CommunicationActionsProvider","IMActionCommand"],[_pcf.a.c,_pcf.a.i,_pcf.a.h,_pcf.a.r],null,"Command",null,_pcf.a.b,1));n.j("I");n.k=4;var u=new _fc.c;u.U(_j.f.a(["ReadCard","PersonaControlViewModel","CommunicationActionsProvider","ComposeMailActionCommand"],[_pcf.a.c,_pcf.a.i,_pcf.a.h,_pcf.a.p],null,"Command",null,_pcf.a.b,1));u.j("M");u.k=2;var f=new _fc.c;f.U(_j.f.a(["ReadCard","ClosePersonaCardPopupCommand"],[_pcf.a.c,_pcf.a.u],null,"Command",null,_pcf.a.b,1));f.j("ESC");s.a([r,i,n,u,f]);o.E([s]);return new _j.a(e,[o])},"",_pcf.h,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_pcf.a.a);var n="PersonaCardView";new _j.d(n,function(){_pcf.a.a[n]===undefined&&(_pcf.a.a[n]=[[[-1,0,["MessageBoxViewModel"],[_pcf.a.s],null,"DataContext",null,_pcf.a.g,1,null,null,null]]]);var i=_pcf.a.d.childNodes[1].cloneNode(!0);var t=new _j.c(i.children[0]);t.y("MessageBoxDefaultView");return new _j.a(i,[t])},"",_db.r,_pcf.f,function(n){return new _pcf.f(n,_j.b.Instance.a(_b.a),_j.b.Instance.a(_y.a),_j.b.Instance.a(_a.r))},!0,!1,!1,0,_pcf.a.a)};PersonaCardFacadeComponent.registerClass("PersonaCardFacadeComponent",null,_a.ii,_j.cd);_pcf.h.registerClass("_pcf.h",_a.bs,_bc.bC);_pcf.i.registerClass("_pcf.i",null,ICompositePersonaViewModelFactory);_pcf.b.registerClass("_pcf.b",null,_bc.Y,IPersonaCardFacadeViewModelFactory);_pcf.g.registerClass("_pcf.g",null,IPersonaCardViewModelFactory);_pcf.e.registerClass("_pcf.e",_a.bs,IModernGroupCardFacade,_db.dd,_bc.bE);_pcf.j.registerClass("_pcf.j",null,_db.dc);_pcf.c.registerClass("_pcf.c",_j.c);_pcf.d.registerClass("_pcf.d",_j.c);_pcf.f.registerClass("_pcf.f",_pc.F);_pcf.k.registerClass("_pcf.k",null,_j.bO);PersonaCardFacadeComponent.$$cctor();_pcf.e.a=_a.a.s;_pcf.a.d=_pcf.a.l();_pcf.a.f=null;_pcf.a.e=null;_pcf.a.a={};_pcf.a.$$cctor();
window.scriptsLoaded['microsoft.owa.core.personacardfacade.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.core.personacardfacade.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }