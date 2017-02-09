﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.o365.suiteapi.owa.js'] = (new Date()).getTime();
Type.registerNamespace("_o365sa");_o365sa.IA=function(){};_o365sa.IA.registerInterface("_o365sa.IA");_o365sa.ISA=function(){};_o365sa.ISA.registerInterface("_o365sa.ISA");_o365sa.ISAC=function(){};_o365sa.ISAC.registerInterface("_o365sa.ISAC");_o365sa.IM=function(){};_o365sa.IM.registerInterface("_o365sa.IM");_o365sa.ILT=function(){};_o365sa.ILT.registerInterface("_o365sa.ILT");_o365sa.ISt=function(){};_o365sa.ISt.registerInterface("_o365sa.ISt");_o365sa.SAlT=function(){};_o365sa.h=function(n,t){_o365sa.h.initializeBase(this,[n]);this.userLocale=t};_o365sa.h.prototype={userLocale:null};_o365sa.i=function(n,t){_o365sa.i.initializeBase(this,[n]);this.request=t};_o365sa.i.prototype={request:null};_o365sa.A=function(){_o365sa.A.resolveInheritance();this.IS=this.get_IS;_o365sa.A.initializeBase(this)};_o365sa.A.prototype={GSA:function(n,t){this.CI();if(!n)throw _o365cl.a.a(300022,"successCallback",6,2,0);var r=this,i=this;this.a.Sv().c("Microsoft.Online.BOX.Admin.UI.Alert.GetAlerts",function(t){n(t)},function(n){O365.Log.WriteShellLog(175245,1,2,0,n.message);t(n)})},GSAA:function(n,t){this.CI();if(!n)throw _o365cl.a.a(423022,"successCallback",6,2,0);var r=this,i=this;this.a.Sv().c("Microsoft.Online.BOX.Admin.UI.SystemAlert.GetAlerts",function(t){n(t)},function(n){O365.Log.WriteShellLog(423023,1,2,0,n.message);t(n)})},GSAO:function(n,t){this.CI();if(!n)throw _o365cl.a.a(300020,"successCallback",6,2,0);t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);var r=this,i=this;this.a.Sv().CallSuiteServiceAction("GetSystemAlerts",null,function(t){n(t)},function(n){O365SuiteServiceProxy.b.a(n)||O365.Log.WriteShellLog(300021,1,2,0,n.message);t(n)})},IC:function(){}};_o365sa.SAl=function(){};_o365sa.SAl.prototype={Title:null,ActionText:null,Message:null,ActionUrl:null,ActionTarget:null,IsLocal:!1,Id:null,ActionCallback:null,NotificationToastShouldPersist:!1};_o365sa.b=function(){};_o365sa.b.a=function(n){var r=new Date(n.g(),n.f(),n.j(),n.n());var i=r.getTimezoneOffset()*6e4;var t=n.w()+i;return new Date(t)};_o365sa.b.b=function(n){var u=_o365sa.a.a.f();var t=null;var f=null;if(u.t())f="%H";else{f="%h";t=_a.C.i[u.s()]?"%t":"tt"}var o=u.o();var r=_o365sa.b.a(n);var i=r.format(f);i=i+_o365sa.b.c(o)+r.format("mm");var e=t?r.format(t).toLocaleLowerCase():"";return o.indexOf("tt")?i+e:e+i};_o365sa.b.c=function(n){var u=null;if(-1!==n.indexOf("'h'"))return"'h'".replace(_a.C.d,"");if(-1!==n.indexOf("' h '"))return"' h '".replace(_a.C.d,"");var f=n.split(new RegExp("[hH]+"));if(f)for(var r=f,e=r.length,t=0;t<e;++t){var i=r[t];i.length>1&&(u=i.substring(0,1))}return u};_o365sa.M=function(){_o365sa.M.resolveInheritance();this.IS=this.get_IS;_o365sa.M.initializeBase(this)};_o365sa.M.prototype={GUPMC:function(n,t){throw Error.notImplemented();},RUPMC:function(n,t){throw Error.notImplemented();},GUGMC:function(n,t,i){throw Error.notImplemented();},RUGMC:function(n,t,i){throw Error.notImplemented();},IC:function(){}};_o365sa.g=function(){this.GULT=this.GLT;this.SULT=this.SLT;_o365sa.g.resolveInheritance();this.IS=this.get_IS;_o365sa.g.initializeBase(this)};_o365sa.g.prototype={GLT:function(n,t){this.CI();if(!n)throw _o365cl.a.a(412068,"onSuccessCallback",6,2,0);var i=String.format("{0}{1}","O365SuiteService/api/","LanguageTimezone");var u=this,r=this;this.a.Sv().CallO365SuiteServiceAction(i,null,0,function(t){var i=t.Body;n(i)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var i=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[412070,1,2,0].concat(i))}t(n)})},SLT:function(n,t,i){this.CI();if(!t)throw _o365cl.a.a(412071,"onSuccessCallback",6,2,0);if(!n)throw _o365cl.a.a(412219,"languageTimezoneData",6,2,0);var r=String.format("{0}{1}","O365SuiteService/api/","LanguageTimezone");var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction(r,n,2,function(n){t(n.Body)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[412073,1,2,0].concat(t))}i(n)})}};_o365sa.LTzD=function(){};_o365sa.LTzD.prototype={CurrentTimeZone:null,CurrentCultureLcid:0,CurrentCultureName:null,CurrentDateFormat:null,CurrentTimeFormat:null};_o365sa.q=function(){_o365sa.q.initializeBase(this,[headers]);this.Body=body};_o365sa.q.prototype={Body:null};_o365sa.r=function(){_o365sa.r.initializeBase(this);this.Body=null};_o365sa.r.prototype={Body:null};_o365sa.s=function(){this.Data=languageTimezoneData};_o365sa.s.prototype={Data:null};_o365sa.t=function(){};_o365sa.t.prototype={Configuration:null};_o365sa.f=function(){};_o365sa.f.prototype={O365SuiteNotificationId:null,Source:null,Type:null,Status:null,Score:null,Payload:null,CreationDate:null,NewNotificationTime:null};_o365sa.St=function(){_o365sa.St.resolveInheritance();this.IS=this.get_IS;_o365sa.St.initializeBase(this)};_o365sa.St.d=function(){var n={};n.NFD="NFDSettings";n.GallatinAlert="GallatinAlertSettings";n.AdminPortalSettings="O365SettingsStorage/AdminPortalSettings";return n};_o365sa.St.CSK=function(n,t,i,r){return new(_o365sa.SKOT.$$(n))(t,i,r)};_o365sa.St.c=function(){var n={};n.AppsLOBData=!0;n.AppsFirstRunTimestamp=!0;n.AppsCustomizationDataTEST=!0;n.AppsAuthenticatedImages=!0;n.HelpTpicVersionInfoKey=!0;n.CustomSupportData=!0;n.GallatinLegalAlertLastViewTimestamp=!0;n.Theme=!0;n.Exist=!0;n.InvalidName=!0;n.UserThemeAllowed=!0;n.MailToastsEnabled=!0;return n};_o365sa.St.prototype={RADC:function(n,t,i){this.CI();if(!t)throw _o365cl.a.a(420037,"successCallback",6,2,0);var r="O365SuiteService/api/AppDataCache/User/?collectorIds="+n;i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction(r,null,0,function(n){O365.Log.WriteShellLog(420038,1,2,0,r);t(n)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[420039,1,2,0].concat(t))}i(n)})},RALS:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(407280,"mailBox",6,2,0);if(!t)throw _o365cl.a.a(407281,"successCallback",6,2,0);var r="O365SuiteService/api/AppLauncherCustomization/"+n;i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction(r,null,0,function(n){O365.Log.WriteShellLog(408370,1,2,0,r);t(_o365sa.SRp.a(n.Body))},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[407282,1,2,0].concat(t))}i(n)})},WALS:function(n,t,i,r,u){this.CI();if(!n)throw _o365cl.a.a(407283,"mailBox",6,2,0);if(!t)throw _o365cl.a.a(407284,"settingName",6,2,0);if(!i)throw _o365cl.a.a(407285,"settingValue",6,2,0);if(!r)throw _o365cl.a.a(407286,"successCallback",6,2,0);var f="O365SuiteService/api/AppLauncherCustomization/"+n+"/"+t;u=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(u);var o=this,e=this;this.a.Sv().CallO365SuiteServiceAction(f,i,2,function(n){O365.Log.WriteShellLog(408369,1,2,0,f);r(_o365sa.SRp.a(n.Body))},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[407287,1,2,0].concat(t))}u(n)})},OSSRS:function(n,t,i,r,u){this.CI();if(!n)throw _o365cl.a.a(408178,"feature",6,2,0);if(!t)throw _o365cl.a.a(408180,"mailBox",6,2,0);if(!i)throw _o365cl.a.a(408244,"settingname:key",6,2,0);if(!r)throw _o365cl.a.a(408181,"successCallback",6,2,0);var f=String.format("{0}{1}/{2}/{3}","O365SuiteService/api/",_o365sa.St.b[n],t,i);u=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(u);var o=this,e=this;this.a.Sv().CallO365SuiteServiceAction(f,null,0,function(n){O365.Log.WriteShellLog(408371,1,2,0,f);r(_o365sa.SRp.a(n.Body))},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[408182,1,2,0].concat(t))}u(n)})},OSSWS:function(n,t,i,r,u,f){this.CI();if(!n)throw _o365cl.a.a(408183,"feature",6,2,0);if(!t)throw _o365cl.a.a(408184,"mailBox",6,2,0);if(!i)throw _o365cl.a.a(408190,"settingName",6,2,0);if(!r)throw _o365cl.a.a(408192,"settingValue",6,2,0);if(!u)throw _o365cl.a.a(408193,"successCallback",6,2,0);var e=String.format("{0}{1}/{2}/{3}","O365SuiteService/api/",_o365sa.St.b[n],t,i);f=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(f);var s=this,o=this;this.a.Sv().CallO365SuiteServiceAction(e,r,2,function(n){O365.Log.WriteShellLog(408372,1,2,0,e);u(_o365sa.SRp.a(n.Body))},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[408194,1,2,0].concat(t))}f(n)})},RNS:function(n,t){this.CI();if(!n)throw _o365cl.a.a(409090,"successCallback",6,2,0);var i="O365SuiteService/api/NotificationsSettings/User";t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);var u=this,r=this;this.a.Sv().CallO365SuiteServiceAction(i,null,0,function(t){O365.Log.WriteShellLog(411768,1,2,0,i);n(t)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var i=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[411769,1,2,0].concat(i))}t(n)})},WNS:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(409085,"settingValue",6,2,0);if(!t)throw _o365cl.a.a(409086,"successCallback",6,2,0);var r="O365SuiteService/api/NotificationsSettings/User";i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction(r,n,2,function(){O365.Log.WriteShellLog(409087,1,2,0,r);t()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[409088,1,2,0].concat(t))}i(n)})},RSKS:function(n,t){this.CI();if(!n)throw _o365cl.a.a(413935,"successCallback",6,2,0);t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);var r=this,i=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/SkypeSettings/User",null,0,function(t){O365.Log.WriteShellLog(413934,1,2,0);n(t)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var i=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog(413936,1,2,0,i,n)}t(n)})},WSKS:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(413937,"skypeSettings",6,2,0);if(!t)throw _o365cl.a.a(413938,"successCallback",6,2,0);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var u=this,r=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/SkypeSettings/User",n,2,function(){O365.Log.WriteShellLog(413939,1,2,0);t()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[413940,1,2,0].concat(t))}i(n)})},CreateStorageRequest:function(){this.CI();return new _o365sa.SRq},S2Sv:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(50234,"request",6,2,0);if(!t)throw _o365cl.a.a(171460,"successCallback",6,2,0);if(!this.f(n))throw _o365cl.a.b(407781,2,6);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var u=this,r=this;this.a.Sv().CallSuiteServiceAction("ProcessSuiteStorage",n.h(),function(n){t(_o365sa.SRp.a(n.Body))},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[175248,1,2,0].concat(t))}i(n)})},S2Ss:function(n,t,i,r){var u=!1;this.c(n,t);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var s=this.e(t,i);var f=this.d(i);var o=n.g(this.a.Cg().CUU);var h=this,l=this;this.a.Sv().SessionStorageRequest(o,function(n){if(!u){u=!0;s(n)}},function(n){if(!u){u=!0;f(n)}});if(!_j.B.a(r)&&r){var c=this;var e=function(){if(!u){u=!0;O365.Log.WriteShellLog(409642,1,1,0);f(Error.create("Timeout"))}};_j.m.a().a(_ff.c.a,"SSReq",e,r)}},SDSR:function(n,t,i){this.c(n,t);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var u=this.e(t,i);var f=this.d(i);var r=n.g(this.a.Cg().CUU);r.requestType=1;this.a.Sv().SuiteDataSharingRequest(r,u,f)},ISvSE:function(n){var t=!1;(O365SuiteServiceProxy.d.a.g||O365SuiteServiceProxy.d.a.f&&n)&&(t=!0);return t},IC:function(){},c:function(n,t){this.CI();if(!n)throw _o365cl.a.a(50235,"request",6,2,0);if(!t)throw _o365cl.a.a(171461,"successCallback",6,2,0);},e:function(n,t){var r=this;return function(i){var r=i;if(r.clearError){var s=0;var v,w;w=O365SuiteServiceProxy.b.b(r.clearError,v={val:s}),s=v.val,w;O365.Log.WriteShellLog(175659,4,2,0,s,r.clearError)}if(r.deleteError){var o=0;var p,y;y=O365SuiteServiceProxy.b.b(r.deleteError,p={val:o}),o=p.val,y;O365.Log.WriteShellLog(175660,4,2,0,o,r.deleteError)}if(r.writeError){var u=0;var k,b;b=O365SuiteServiceProxy.b.b(r.writeError,k={val:u}),u=k.val,b;O365.Log.WriteShellLog(175661,4,2,0,u,r.writeError)}if(r.readError){var f=0;var c,h;h=O365SuiteServiceProxy.b.b(r.readError,c={val:f}),f=c.val,h;O365.Log.WriteShellLog(175662,4,2,0,f,r.readError)}if(r.resetError){var e=0;var l,a;a=O365SuiteServiceProxy.b.b(r.resetError,l={val:e}),e=l.val,a;O365.Log.WriteShellLog(175658,1,2,0,e,r.resetError);t(r.resetError)}else n(_o365sa.SRp.c(r))}},d:function(n){var i=this;return function(t){if(!O365SuiteServiceProxy.b.a(t)){var i;var u,r;r=O365SuiteServiceProxy.b.b(t,u={val:i}),i=u.val,r;O365.Log.WriteShellLog(175663,4,2,0,i,t.message)}n(t)}},f:function(n){var e=n.GSK();if(e)for(var f=e,c=f.length,u=0;u<c;++u){var i=f[u];if(!(i.Name in _o365sa.St.a)&&!i.Name.startsWith("LastAccessedDate")){O365.Log.WriteShellLog(407783,6,2,0,i.Name);return!1}}var s=n.GWSKV();if(s)for(var t,o=s,l=o.length,r=0;r<l;++r){var h=o[r];t=h.Key;if(!(t.Name in _o365sa.St.a)&&!t.Name.startsWith("LastAccessedDate")){O365.Log.WriteShellLog(407784,6,2,0,t.Name);return!1}}return!0}};_o365sa.SkypeSettings=function(){};_o365sa.SkypeSettings.prototype={Version:0,AutoSignIn:!1,AutoDiscoveredUrl:null,LastSeenSkypeWebExperienceVersion:null};_o365sa.l=function(){_o365sa.l.initializeBase(this);this.__type="StorageJsonResponse:#Exchange";this.Body=null};_o365sa.l.prototype={Body:null};_o365sa.k=function(n,t){_o365sa.k.initializeBase(this,[n]);this.Body=t};_o365sa.k.prototype={Body:null};_o365sa.n=function(){};_o365sa.n.a=function(n,t){var i=new O365SuiteServiceProxy.SSWE;i.key=n.a();i.value=t;return i};_o365sa.j=function(){};_o365sa.j.a=function(n,t,i,r,u){_o365su.b.ThrowOnNullOrEmpty(n,"userId");var f=new O365SuiteServiceProxy.SSRqD;f.userId=n;f.clear=t;f.requestType=0;for(var v=[],a=i,d=a.length,o=0;o<d;++o){var k=a[o];Array.add(v,k.a())}f.reads=v;for(var p=[],h=r,nt=h.length,s=0;s<nt;++s){var c=h[s];var g=_o365sa.n.a(c.Key,c.Value);Array.add(p,g)}f.writes=p;for(var y=[],l=u,b=l.length,e=0;e<b;++e){var w=l[e];Array.add(y,w.a())}f.deletes=y;return f};_o365sa.SKVOT=function(n,t){_o365sa.SKVOT.$$(this.$$gta["_o365sa.SKVOT"].T).initializeBase(this,[n,t])};_o365sa.SKVOT.$$=function(n){var u=_o365sa.__tc=_o365sa.__tc||{};var t="SKVOT"+"$"+n.getName().replace(/\./g,"_");if(!u[t]){var r=u[t]=function(){for(var t=[],n=0;n<arguments.length;++n)t[n]=arguments[n];_o365sa.SKVOT.apply(this,t)};var o=_o365sa.SKV;r.registerClass("_o365sa.__tc."+t,o);var s={"_o365sa.SKVOT":{T:n},ctor:_o365sa.SKVOT};r.prototype.$$gta=s;var e=_o365sa.SKVOT.prototype;for(var f in e){var i={key:f,value:e[f]};"constructor"!==i.key&&(r.prototype[i.key]=i.value)}}return u[t]};_o365sa.SKOT=function(n,t,i){_o365sa.SKOT.$$(this.$$gta["_o365sa.SKOT"].T).initializeBase(this,[n,t,i])};_o365sa.SKOT.$$=function(n){var u=_o365sa.__tc=_o365sa.__tc||{};var t="SKOT"+"$"+n.getName().replace(/\./g,"_");if(!u[t]){var r=u[t]=function(){for(var t=[],n=0;n<arguments.length;++n)t[n]=arguments[n];_o365sa.SKOT.apply(this,t)};var o=_o365sa.SK;r.registerClass("_o365sa.__tc."+t,o);var s={"_o365sa.SKOT":{T:n},ctor:_o365sa.SKOT};r.prototype.$$gta=s;var e=_o365sa.SKOT.prototype;for(var f in e){var i={key:f,value:e[f]};"constructor"!==i.key&&(r.prototype[i.key]=i.value)}}return u[t]};_o365sa.SKs=function(){};_o365sa.m=function(n,t){this.ReadSettings=n;this.WriteSettings=t};_o365sa.m.prototype={ReadSettings:null,WriteSettings:null};_o365sa.SRq=function(){this.a=!1;this.c={};this.b={};this.d={}};_o365sa.SRq.prototype={c:null,b:null,d:null,a:!1,RRd:function(n){for(var i=[],t=1;t<arguments.length;++t)i[t-1]=arguments[t];this.e.apply(this,i)},IRdR:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"key");return n.a()in this.c},RW:function(n,t){for(var r=[],i=2;i<arguments.length;++i)r[i-2]=arguments[i];this.f.apply(this,[t].concat(r))},IWR:function(n){return n.a()in this.b},VTBW:function(n,t){return this.i(t)},RRm:function(){for(var t=[],i=0;i<arguments.length;++i)t[i]=arguments[i];_o365su.b.ThrowOnNullOrEmptyArray(t,"keys");for(var r=0;r<t.length;r++){var n=t[r];_o365su.b.ThrowOnNull(n,"key");if(this.IRdR(n)||this.IWR(n))throw Error.invalidOperation("Cannot remove a key needed for read or write.");this.d[n.a()]=n}},IRmR:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"key");return n.a()in this.d},RC:function(){this.a=!0},ICR:function(){return this.a},C:function(){for(var i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];_o365su.b.ThrowOnNullOrEmptyArray(i,"requests");var n=new _o365sa.SRq;n.a=this.a;var y=this.c;for(var v in y){var tt={key:v,value:y[v]};n.e(tt.value)}var a=this.b;for(var p in a){var nt={key:p,value:a[p]};var w=nt.value;n.f(w.Value,w.Key)}var b=this.d;for(var l in b){var rt={key:l,value:b[l]};n.RRm(rt.value)}for(var u=0;u<i.length;u++){var t=i[u];n.a=n.a||t.a;var f=t.c;for(var h in f){var it={key:h,value:f[h]};n.e(it.value)}var o=t.b;for(var s in o){var g={key:s,value:o[s]};var c=g.value;n.f(c.Value,c.Key)}var e=t.d;for(var k in e){var d={key:k,value:e[k]};n.RRm(d.value)}}return n},GSK:function(){var i=[];var t=this.c;for(var n in t){var r={key:n,value:t[n]};Array.add(i,r.value)}return i},GWSKV:function(){var i=[];var t=this.b;for(var n in t){var r={key:n,value:t[n]};Array.add(i,r.value)}return i},GRSK:function(){var i=[];var t=this.d;for(var n in t){var r={key:n,value:t[n]};Array.add(i,r.value)}return i},h:function(){var o=[];var f=this.c;for(var e in f){var s={key:e,value:f[e]};Array.add(o,s.value)}var u=[];var t=this.b;for(var n in t){var c={key:n,value:t[n]};var r=c.value;var h=new _o365sa.SKV(r.Key,_o365su.d.a(r.Value));Array.add(u,h)}var i=new _g.cn("Exchange2013");i=null;return new _o365sa.k(i,new _o365sa.m(o,u))},g:function(n){var h=[];var o=this.c;for(var s in o){var v={key:s,value:o[s]};Array.add(h,v.value)}var c=[];var e=this.b;for(var i in e){var a={key:i,value:e[i]};var t=a.value;var y=new _o365sa.SKV(t.Key,_o365su.d.a(t.Value));Array.add(c,y)}var r=[];var f=this.d;for(var u in f){var l={key:u,value:f[u]};Array.add(r,l.value)}return _o365sa.j.a(n,this.a,h,c,r)},e:function(){for(var i=[],t=0;t<arguments.length;++t)i[t]=arguments[t];_o365su.b.ThrowOnNullOrEmptyArray(i,"keys");for(var r=0;r<i.length;r++){var n=i[r];_o365su.b.ThrowOnNull(n,"key");if(this.IRmR(n))throw Error.invalidOperation("Cannot remove a key needed for read or write.");this.c[n.a()]=n}},f:function(n){for(var r=[],i=1;i<arguments.length;++i)r[i-1]=arguments[i];_o365su.b.ThrowOnUndefined(n,"value");_o365su.b.ThrowOnNullOrEmptyArray(r,"keys");for(var u=0;u<r.length;u++){var t=r[u];_o365su.b.ThrowOnNull(t,"key");if(this.IRmR(t))throw Error.invalidOperation("Cannot remove a key needed for read or write.");this.b[t.a()]=new _o365sa.SKV(t,n)}},i:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"key");var t=this.b[n.a()];if(!t)throw Error.invalidOperation("Cannot read key without value.");return t.Value}};_o365sa.SRp=function(){this.a=null;this.b=null};_o365sa.SRp.c=function(n){_o365su.b.ThrowOnNullOrUndefined(n,"data");var t=new _o365sa.SRp;var f=[];t.a={};var u=n.reads;for(var e in u){var r={key:e,value:u[e]};var o=new _o365sa.SKV(_o365sa.SK.a(r.key),r.value);var i=_o365sa.SRp.b(o);Array.add(f,i);t.a[i.Key.a()]=i.Value}t.b=f;return t};_o365sa.SRp.a=function(n){_o365su.b.ThrowOnNullOrUndefined(n,"data");var t=new _o365sa.SRp;t.b=new Array(n.Settings.length);t.a={};for(var i=0;i<n.Settings.length;i++){var u=n.Settings[i];var r=_o365sa.SRp.b(u);t.b[i]=r;t.a[r.Key.a()]=r.Value}return t};_o365sa.SRp.b=function(n){return new _o365sa.SKV(new _o365sa.SK(n.Key.Scope,n.Key.Namespace,n.Key.Name),_o365su.d.b(n.Value))};_o365sa.SRp.prototype={a:null,b:null,HV:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"key");return n.a()in this.a},V:function(n,t){return this.c(t)},VOD:function(n,t,i){return this.ValueOrDefault(t,i)},GSKV:function(){return Array.clone(this.b)},c:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"key");var t=this.a[n.a()];if(_o365su.c.e(t))throw Error.invalidOperation("Key value missing.");return t},ValueOrDefault:function(n,t){_o365su.b.ThrowOnUndefined(t,"defaultValue");return this.HV(n)?this.c(n):t}};_o365sa.SAC=function(){this.IS=this.get_IS;this.a=null;this.b=!1};_o365sa.SAC.prototype={b:!1,get_IS:function(){return this.b},set_IS:function(n){this.b=n;return n},a:null,get_SA:function(){return this.a},set_SA:function(n){this.a=n;return n},I:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"suiteApi");if(!this.b){this.a=n;this.IC();this.b=!0}},IC:function(){},CI:function(){if(!this.b)throw _o365cl.a.b(171456,2,6,0);}};_o365sa.SACg=function(){};_o365sa.SACg.prototype={ASU:null,SSU:null,LU:null,CUU:null,IStO:null,IMO:null,IAO:null,ICO:null,IGO:null,INO:null,ISO:null,ILTzO:null,ISearchO:null,SKIM:null,IO:!1,UEL:!1,CD:!1,SDSU:null,SHSID:null,OAUTH:null,HUN:!1,EHAM:!1};_o365sa.SK=function(n,t,i){_o365su.b.ThrowOnNullOrEmpty(n,"keyScope");_o365su.b.ThrowOnNullOrEmpty(t,"keyNamespace");_o365su.b.ThrowOnNullOrEmpty(i,"keyName");this.Scope=n;this.Namespace=t;this.Name=i};_o365sa.SK.a=function(n){if(!n)throw _o365cl.a.a(50236,"keyString",6,2,n);var t=n.split("//");return new _o365sa.SK(t[0],t[1],t[2])};_o365sa.SK.prototype={Scope:null,Namespace:null,Name:null,a:function(){return this.Scope+"//"+this.Namespace+"//"+this.Name}};_o365sa.SKV=function(n,t){_o365su.b.ThrowOnNullOrUndefined(n,"key");_o365su.b.ThrowOnUndefined(t,"value");this.Key=n;this.Value=t};_o365sa.SKV.prototype={Key:null,Value:null};_o365sa.SA=function(n){this.GS=this.get_GS;this.Cg=this.get_Cg;this.Sv=this.get_Sv;this.G=this.get_G;this.M=this.get_M;this.A=this.get_A;this.N=this.get_N;this.SN=this.get_SN;this.Search=this.get_Search;this.LTz=this.get_LTz;_o365sa.SA.initializeBase(this);this.VC(n);this.m(n);this.k=n;O365SuiteServiceProxy.d.d(n.SSU,n.ASU,n.UEL,"GetOwaUserConfiguration",n.IO,n.SDSU,n.CUU,n.SHSID,n.HUN,n.OAUTH,n.EHAM);this.j=n.IStO||new _o365sa.St;this.b=n.ICO||new _o365sa.C;this.g=n.IGO||new _o365sa.Gs;this.h=n.IMO||new _o365sa.M;this.f=n.IAO||new _o365sa.A;this.d=n.INO||new _o365sa.N;this.i=n.ISO||new _o365sa.SN;this.l=n.ISearchO||new _o365sa.Search;this.c=n.ILTzO||new _o365sa.g;this.e=O365SuiteServiceProxy.h.a;n.UEL||n.EHAM?n.CD&&this.e.b(2):this.e.b(1);this.j.I(this);this.b.I(this);this.g.I(this);this.h.I(this);this.f.I(this);this.d.I(this);this.i.I(this);this.c.I(this);var r=this;this.e.f(function(){r.cg("AuthenticationExpired")});var i=this;this.e.g(function(){i.cg("UserCultureNotSet")});var t=this,u=this;this.b.GetOwaUserConfiguration(function(n){O365SuiteServiceProxy.d.c||t.d.SrPG()},function(n){})};_o365sa.SA.b=function(n){if(_o365sa.SA.a)throw Error.invalidOperation("Instance already exists");return _o365sa.SA.a=new _o365sa.SA(n)};_o365sa.SA.GI=function(){if(!_o365sa.SA.a)throw Error.invalidOperation("Instance not yet created");return _o365sa.SA.a};_o365sa.SA.prototype={e:null,a:function(n){this.bz("AuthenticationExpired",n)},get_GS:function(){return _o365sa.a.a.f()},k:null,get_Cg:function(){return this.k},set_Cg:function(n){this.k=n;return n},get_Sv:function(){return O365SuiteServiceProxy.h.a},j:null,get_Storage:function(){return this.j},set_Storage:function(n){this.j=n;return n},b:null,get_Calendar:function(){return this.b},set_Calendar:function(n){this.b=n;return n},g:null,get_G:function(){return this.g},set_G:function(n){this.g=n;return n},h:null,get_M:function(){return this.h},set_M:function(n){this.h=n;return n},f:null,get_A:function(){return this.f},set_A:function(n){this.f=n;return n},d:null,get_N:function(){return this.d},set_N:function(n){this.d=n;return n},i:null,get_SN:function(){return this.i},set_SN:function(n){this.i=n;return n},l:null,get_Search:function(){return this.l},set_Search:function(n){this.l=n;return n},c:null,get_LTz:function(){return this.c},set_LTz:function(n){this.c=n;return n},GA:function(n){var i=new Array(2);i[0]=O365SuiteServiceProxy.Util.h();var t=null;(n===3||n===5)&&(t=this.d.GC());i[1]=t?"PgmCid_"+t:"";return i},VC:function(n){_o365su.b.ThrowOnNullOrUndefined(n,"configuration");_o365su.b.ThrowOnNullOrUndefined(n.SSU,"SuiteApiConfiguration.SuiteServiceUrl")},m:function(n){if(n.IO){var r=n.SSU.toLowerCase();var i=O365SuiteServiceProxy.e.a(r);var t=O365SuiteServiceProxy.e.a(window.location.href).toLowerCase();i!==t&&(n.SSU=r.replace(i,t))}}};_o365sa.ISNs=function(){};_o365sa.ISNs.registerInterface("_o365sa.ISNs");_o365sa.v=function(){};_o365sa.v.prototype={TargetGroupName:null,MessagePreview:null};_o365sa.w=function(){_o365sa.w.initializeBase(this)};_o365sa.w.prototype={ItemId:null,CreatedTimeStamp:null,Actor:null,Target:null,Metadata:null,Action:0};_o365sa.x=function(){};_o365sa.x.prototype={TargetItemType:null,TargetConversationId:null,TargetItemId:null,TargetMailboxSmtpAddress:null,TargetMailboxGuid:null,TargetSubject:null,TargetLogicalId:null};_o365sa.SN=function(){_o365sa.SN.resolveInheritance();this.IS=this.get_IS;_o365sa.SN.initializeBase(this)};_o365sa.SN.prototype={GSN:function(n,t,i){this.CI();_o365sa.e.a.a(n,t,i)},MSNS:function(n,t,i){this.CI();_o365sa.e.a.b(n,t,i)}};_o365sa.IGs=function(){};_o365sa.IGs.registerInterface("_o365sa.IGs");_o365sa.Gs=function(){_o365sa.Gs.resolveInheritance();this.IS=this.get_IS;_o365sa.Gs.initializeBase(this)};_o365sa.Gs.prototype={GMGS:function(n,t){this.CI();if(!n)throw _o365cl.a.a(400111,"successCallback",6,2,0);t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);_o365sa.d.a.b(n,t)},GMG:function(n,t,i,r,u){this.CI();if(!n)throw _o365cl.a.a(400112,"groupMailbox",6,2,n);if(!t)throw _o365cl.a.a(400127,"userIdentifier",6,2,t);if(!i)throw _o365cl.a.a(400124,"timeZone",6,2,i);if(!r)throw _o365cl.a.a(400113,"successCallback",6,2,0);u=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(u);_o365sa.d.a.a(n,t,i,r,u)},GMUI:function(n,t,i,r,u){this.CI();if(!r)throw _o365cl.a.a(400115,"successCallback",6,2,0);if(!n)throw _o365cl.a.a(400114,"groupMailbox",6,2,n);if(!t)throw _o365cl.a.a(400126,"userIdentifier",6,2,t);if(!i)throw _o365cl.a.a(400125,"timeZone",6,2,i);u=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(u);_o365sa.d.a.c(n,t,i,r,u)}};_o365sa.IC=function(){};_o365sa.IC.registerInterface("_o365sa.IC");_o365sa.C=function(){this.OUC=this.get_OUC;_o365sa.C.resolveInheritance();this.IS=this.get_IS;_o365sa.C.initializeBase(this)};_o365sa.C.prototype={get_OUC:function(){return _o365sa.a.a.j()},GR:function(n,t,i,r,u,f){this.CI();if(n>t)throw _o365cl.a.a(171171,"beginTime",6,2,n,t);if(!r)throw _o365cl.a.a(171172,"timeZone",6,2,0);_o365sa.a.a.q(n,t,i,r,u,f)},DR:function(n,t,i,r){this.CI();if(!t||!t.length)throw _o365cl.a.a(171173,"remindersToDismiss",6,2,0);if(!n)throw _o365cl.a.a(171174,"timeZone",6,2,0);_o365sa.a.a.h(n,t,i,r)},SR:function(n,t,i,r,u){this.CI();if(!n||!n.length)throw _o365cl.a.a(171175,"remindersToSnooze",6,2,0);if(!t)throw _o365cl.a.a(400299,"newReminderTime",6,2,0);if(!i)throw _o365cl.a.a(171176,"timeZone",6,2,0);_o365sa.a.a.s(n,t,i,r,u)},GetOwaUserConfiguration:function(n,t){this.CI();_o365sa.a.a.o(n,t)},GOUOS:function(n,t){this.CI();_o365sa.a.a.p(n,t)},GDUPE:function(n,t){this.CI();_o365sa.a.a.m(n,t)},GCF:function(n,t){this.CI();_o365sa.a.a.l(n,t)},GCFC:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(400117,"ownerEmailAddress",6,2);_o365sa.a.a.k(n,t,i)},FI:function(n,t,i,r,u,f,e,o){this.CI();if(!n)throw _o365cl.a.a(50211,"timeZone",6,2,n);if(!t)throw _o365cl.a.a(400271,"startDate",6,2);if(!i)throw _o365cl.a.a(400272,"endDate",6,2);if(t>i)throw _o365cl.a.a(171457,"startDate",6,2,t,i);_o365sa.a.a.i(n,t,i,r,u,f,e,o)},GUA:function(n,t,i,r,u,f){this.CI();if(!n)throw _o365cl.a.a(50214,"timeZone",6,2,n);if(!t)throw _o365cl.a.a(400269,"startDate",6,2);if(!i)throw _o365cl.a.a(400270,"endDate",6,2);if(t>i)throw _o365cl.a.a(171458,"startDate",6,2,t,i);if(!r)throw _o365cl.a.a(171459,"emailAddress",6,2,r);_o365sa.a.a.r(n,t,i,r,u,f)},GFI:function(n){return _o365sa.a.a.n(n)},SetNotificationSettings:function(n,t,i,r,u){this.CI();if(!!n!==n)throw _o365cl.a.a(171931,"enableReminder",6,2,0);if(!!t!==t)throw _o365cl.a.a(171932,"enableReminderSound",6,2,0);if(_j.t.a(i))throw _o365cl.a.a(171933,"newItemNotify",6,2,0);try{var f=new _gg.eL;f.EnableReminders=n;f.EnableReminderSound=t;f.NewItemNotify=i;var o=null;var e=new _gg.jc(o);e.Body=f;var c=this,h=this;this.a.Sv().CallSuiteServiceAction("SetNotificationSettings",e,function(n){O365.Log.WriteShellLog(171742,1,2,0,f.EnableReminders,f.EnableReminderSound,f.NewItemNotify);r(n)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[175246,1,2,0].concat(t))}u(n)})}catch(s){O365.Log.WriteShellLog(171743,1,2,0);u(s)}},SetUserTheme:function(n,t,i,r){this.CI();if(!n)throw _o365cl.a.a(174898,"themeId",6,2,0);try{var u=new _gg.cK;u.SkipO365Call=t;u.ThemeId=n;var f=new _o365sa.i(null,u);var s=this,o=this;O365SuiteServiceProxy.h.a.CallSuiteServiceAction("SetUserTheme",f,function(n){O365.Log.WriteShellLog(174896,1,2,0);i(n)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[175247,1,2,0].concat(t))}r(n)})}catch(e){O365.Log.WriteShellLog(174897,1,2,0);r(e)}},SetUserLocale:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(402697,"UserLocale",6,2,0);try{var r=new _o365sa.h(null,n);var e=this,f=this;O365SuiteServiceProxy.h.a.CallSuiteServiceAction("SetUserLocale",r,function(n){t(n)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.c(n["X-OWA-CorrelationId"],n);O365.Log.WriteShellLog.apply(null,[402696,1,2,0].concat(t))}i(n)})}catch(u){O365.Log.WriteShellLog(405459,1,2,0);i(u)}}};_o365sa.CalendarUtils=function(){};_o365sa.CalendarUtils.createReminderItemModel=function(n){var t=new _h.s;if(n){t.t(n.Subject);t.o(n.Location);t.k(_a.d.b(n.ReminderTime));t.s(_a.d.b(n.StartDate));t.l(_a.d.b(n.EndDate));t.m(new _g.e(n.ItemId.Id));t.c().ChangeKey=n.ItemId.ChangeKey;t.p(n.RecurringMasterItemId);t.q(n.ReminderGroup);t.r(n.ReminderGroupTypes);t.n(n.JoinOnlineMeetingUrl)}return t};_o365sa.IN=function(){};_o365sa.IN.registerInterface("_o365sa.IN");_o365sa.u=function(){};_o365sa.u.prototype={Undelivered:1,Unseen:2,Seen:3,Retracted:4,Snoozed:5,Dismissed:6};_o365sa.u.registerEnum("_o365sa.u",!1);_o365sa.ISearch=function(){};_o365sa.ISearch.registerInterface("_o365sa.ISearch");_o365sa.N=function(){_o365sa.N.resolveInheritance();this.IS=this.get_IS;_o365sa.N.initializeBase(this)};_o365sa.N.prototype={S:function(n,t,i,r){var u;var e,f;(f=this.c(n,t,i,r,e={val:u}),u=e.val,f)&&_o365sa.c.b().a(u,i)},SRN:function(n,t,i,r,u,f){var e;var s,o;(o=this.c(n,t,u,f,s={val:e}),e=s.val,o)&&_o365sa.c.b().b(i,r,e,u)},SrPG:function(){},SpPG:function(){},GC:function(){return _no.a.a},c:function(n,t,i,r,u){this.CI();if(!i)throw _o365cl.a.a(408642,"successCallback",6,2,0);u.val=new _g.Q;u.val.NotificationType=n;switch(n){case"CalendarItemNotification":case"RowNotification":if(t)u.val.FolderId=t;else{O365.Log.WriteShellLog(50219,1,2,0,n);r&&r(Error.argument());return!1}break}return!0},ASNE:function(){return O365SuiteServiceProxy.d.a.g||O365SuiteServiceProxy.d.a.f},CN:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(411969,"id",6,2,0);if(!t)throw _o365cl.a.a(411970,"successCallback",6,2,0);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var u=this,r=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/",n,1,function(n){var i=n;i&&t(i)},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[413128,1,2,0].concat(t))}i(n)})},GNH:function(n,t){this.GN(null,n,t)},GN:function(n,t,i){this.CI();if(!t)throw _o365cl.a.a(408438,"successCallback",6,2,0);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var r=n?encodeURIComponent(n):"";var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/"+r,null,0,function(i){O365.Log.WriteShellLog(412007,1,2,0);var u=i;if(u&&u.Notifications){for(var e=[],o=u.Notifications,s=o.length,r=0;r<s;++r){var f=o[r];(f.Status!==6||n)&&Array.add(e,f)}t(e)}},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[412023,4,2,0].concat(t))}i(n)})},DN:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(409151,"id",6,2,0);if(!t)throw _o365cl.a.a(409147,"successCallback",6,2,0);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var r;var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/"+encodeURIComponent(n),(r=new _o365sa.f,r.Status=6,r),3,function(n){O365.Log.WriteShellLog(412025,1,2,0);t()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[409148,4,2,0].concat(t))}i(n)})},MS:function(n,t,i){this.CI();if(!n||!n.CreationDate)throw _o365cl.a.a(410822,"latestSeenNotification",6,2,0);var u=this,r=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/MarkAsSeen/",n.CreationDate,1,function(n){O365.Log.WriteShellLog(412027,1,2,0);t&&t()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[410824,4,2,0].concat(t))}i&&i(n)})},GSAN:function(n,t){this.CI();if(!n)throw _o365cl.a.a(408438,"GetSystemAlertNotificationsFailed",6,2,0);t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);var r=this,i=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/SystemAlerts",null,0,function(t){O365.Log.WriteShellLog(413339,1,2,0);var r=t;if(r&&r.Notifications){for(var f=[],u=r.Notifications,o=u.length,i=0;i<o;++i){var e=u[i];Array.add(f,e)}n(f)}},function(n){if(!O365SuiteServiceProxy.b.a(n)){var i=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[413338,4,2,0].concat(i))}t(n)})},RSAN:function(n,t){this.CI();if(!n)throw _o365cl.a.a(413336,"RefreshSystemAlertNotificationsFailed",6,2,0);t=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(t);var r=this,i=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/SystemAlerts",null,1,function(t){O365.Log.WriteShellLog(412025,1,2,0);n()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var i=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[413337,4,2,0].concat(i))}t(n)})},SN:function(n,t,i,r){this.CI();if(!n)throw _o365cl.a.a(413955,"id",6,2,0);if(t<=0)throw _o365cl.a.a(413956,"sd",6,2,0,t);if(!i)throw _o365cl.a.a(413957,"successCallback",6,2,0);r=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(r);var u;var e=this,f=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/"+encodeURIComponent(n),(u=new _o365sa.f,u.Status=5,u.NewNotificationTime=_a.d.get_utcNow().o(t).C(),u),3,function(n){O365.Log.WriteShellLog(413958,1,2,0);i()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[413959,4,2,0].concat(t))}r(n)})},AR:function(n,t,i){this.CI();if(!n)throw _o365cl.a.a(421200,"id",6,2,0);if(!t)throw _o365cl.a.a(421201,"successCallback",6,2,0);i=O365SuiteServiceProxy.Util.NoOpErrorCallbackIfNullOrUndefined(i);var r;var f=this,u=this;this.a.Sv().CallO365SuiteServiceAction("O365SuiteService/api/Notifications/"+encodeURIComponent(n),(r=new _o365sa.f,r.Status=2,r),3,function(n){O365.Log.WriteShellLog(421202,1,2,0);t()},function(n){if(!O365SuiteServiceProxy.b.a(n)){var t=O365SuiteServiceProxy.Util.b(n);O365.Log.WriteShellLog.apply(null,[421203,4,2,0].concat(t))}i(n)})}};_o365sa.Search=function(){_o365sa.Search.resolveInheritance();this.IS=this.get_IS;_o365sa.Search.initializeBase(this)};_o365sa.Search.prototype={GHSR:function(n,t,i,r,u){var f=new _gg.gb;f.SearchQuery=n;f.AppVersionId=t;f.CultureName=i;var e=this;O365SuiteServiceProxy.h.a.CallSuiteServiceAction("GetBingHelpSearchResults",f,function(n){r(n)},u)}};_o365sa.h.registerClass("_o365sa.h",_g.hM);_o365sa.i.registerClass("_o365sa.i",_g.hM);_o365sa.SAC.registerClass("_o365sa.SAC",null,_o365sa.ISAC);_o365sa.A.registerClass("_o365sa.A",_o365sa.SAC,_o365sa.IA,_o365sa.ISAC);_o365sa.SAl.registerClass("_o365sa.SAl");_o365sa.M.registerClass("_o365sa.M",_o365sa.SAC);_o365sa.g.registerClass("_o365sa.g",_o365sa.SAC);_o365sa.LTzD.registerClass("_o365sa.LTzD");_o365sa.q.registerClass("_o365sa.q",_g.hM);_o365sa.r.registerClass("_o365sa.r",_g.kd);_o365sa.f.registerClass("_o365sa.f");_o365sa.St.registerClass("_o365sa.St",_o365sa.SAC);_o365sa.SkypeSettings.registerClass("_o365sa.SkypeSettings");_o365sa.l.registerClass("_o365sa.l",_g.kd);_o365sa.k.registerClass("_o365sa.k",_g.hM);_o365sa.SKV.registerClass("_o365sa.SKV");_o365sa.SK.registerClass("_o365sa.SK");_o365sa.SRq.registerClass("_o365sa.SRq");_o365sa.SRp.registerClass("_o365sa.SRp");_o365sa.SACg.registerClass("_o365sa.SACg");_o365sa.SA.registerClass("_o365sa.SA",_j.Q,_o365sa.ISA);_o365sa.w.registerClass("_o365sa.w",_no.k);_o365sa.w.prototype.toString=_no.k.prototype.toString;_o365sa.SN.registerClass("_o365sa.SN",_o365sa.SAC);_o365sa.Gs.registerClass("_o365sa.Gs",_o365sa.SAC);_o365sa.C.registerClass("_o365sa.C",_o365sa.SAC,_o365sa.IC,_o365sa.ISAC);_o365sa.N.registerClass("_o365sa.N",_o365sa.SAC);_o365sa.Search.registerClass("_o365sa.Search",_o365sa.SAC);_o365sa.St.b=_o365sa.St.d();_o365sa.St.a=_o365sa.St.c();_o365sa.l.dataContractName="StorageJsonResponse:#Exchange";_o365sa.SKs.US="User";_o365sa.SKs.OS="Org";_o365sa.SKs.SN="Suite";_o365sa.SKs.SST=_o365sa.St.CSK(Boolean,"User","Suite","ShowSystemToasts");_o365sa.SKs.SCT=_o365sa.St.CSK(Boolean,"User","Suite","ShowCalendarToasts");_o365sa.SKs.SMT=_o365sa.St.CSK(Boolean,"User","Suite","ShowMailToasts");_o365sa.SA.a=null;
window.scriptsLoaded['microsoft.o365.suiteapi.owa.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.o365.suiteapi.owa.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
