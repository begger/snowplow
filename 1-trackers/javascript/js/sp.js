/*
 * SnowPlow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracking client for SnowPlow
 * @version 0.5
 * @author Alex Dean, Anthon Pang
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _snaq=_snaq||[],SnowPlow=SnowPlow||(function(){var f,a={},p=document,c=navigator,A=screen,x=window,m=false,v=[],h=x.encodeURIComponent,w=x.decodeURIComponent,d=unescape,B,D;function r(i){return typeof i!=="undefined"}function n(i){return typeof i==="function"}function z(i){return typeof i==="object"}function j(i){return typeof i==="string"||i instanceof String}function G(){var L,N,M;for(L=0;L<arguments.length;L+=1){M=arguments[L];N=M.shift();if(j(N)){B[N].apply(B,M)}else{N.apply(B,M)}}}function J(N,M,L,i){if(N.addEventListener){N.addEventListener(M,L,i);return true}if(N.attachEvent){return N.attachEvent("on"+M,L)}N["on"+M]=L}function E(M,P){var L="",O,N;for(O in a){if(Object.prototype.hasOwnProperty.call(a,O)){N=a[O][M];if(n(N)){L+=N(P)}}}return L}function H(){var i;E("unload");if(f){do{i=new Date()}while(i.getTimeAlias()<f)}}function F(){var L;if(!m){m=true;E("load");for(L=0;L<v.length;L++){v[L]()
}}return true}function k(){var L;if(p.addEventListener){J(p,"DOMContentLoaded",function i(){p.removeEventListener("DOMContentLoaded",i,false);F()})}else{if(p.attachEvent){p.attachEvent("onreadystatechange",function i(){if(p.readyState==="complete"){p.detachEvent("onreadystatechange",i);F()}});if(p.documentElement.doScroll&&x===x.top){(function i(){if(!m){try{p.documentElement.doScroll("left")}catch(M){setTimeout(i,0);return}F()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){L=setInterval(function(){if(m||/loaded|complete/.test(p.readyState)){clearInterval(L);F()}},10)}J(x,"load",F,false)}function s(){var i="";try{i=x.top.document.referrer}catch(M){if(x.parent){try{i=x.parent.document.referrer}catch(L){i=""}}}if(i===""){i=p.referrer}return i}function g(i){var M=new RegExp("^([a-z]+):"),L=M.exec(i);return L?L[1]:null}function b(i){var M=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),L=M.exec(i);return L?L[1]:i}function y(M,L){var P=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),O=P.exec(M),N=new RegExp("(?:^|&)"+L+"=([^&]*)"),i=O?N.exec(O[1]):0;
return i?w(i[1]):""}function l(Q,N,M,P,L,O){var i;if(M){i=new Date();i.setTime(i.getTime()+M)}p.cookie=Q+"="+h(N)+(M?";expires="+i.toGMTString():"")+";path="+(P||"/")+(L?";domain="+L:"")+(O?";secure":"")}function e(M){var i=new RegExp("(^|;)[ ]*"+M+"=([^;]*)"),L=i.exec(p.cookie);return L?w(L[2]):0}function o(i){return d(h(i))}function I(ab){var N=function(W,i){return(W<<i)|(W>>>(32-i))},ac=function(ai){var ah="",ag,W;for(ag=7;ag>=0;ag--){W=(ai>>>(ag*4))&15;ah+=W.toString(16)}return ah},Q,ae,ad,M=[],U=1732584193,S=4023233417,R=2562383102,P=271733878,O=3285377520,aa,Z,Y,X,V,af,L,T=[];ab=o(ab);L=ab.length;for(ae=0;ae<L-3;ae+=4){ad=ab.charCodeAt(ae)<<24|ab.charCodeAt(ae+1)<<16|ab.charCodeAt(ae+2)<<8|ab.charCodeAt(ae+3);T.push(ad)}switch(L&3){case 0:ae=2147483648;break;case 1:ae=ab.charCodeAt(L-1)<<24|8388608;break;case 2:ae=ab.charCodeAt(L-2)<<24|ab.charCodeAt(L-1)<<16|32768;break;case 3:ae=ab.charCodeAt(L-3)<<24|ab.charCodeAt(L-2)<<16|ab.charCodeAt(L-1)<<8|128;break}T.push(ae);while((T.length&15)!==14){T.push(0)
}T.push(L>>>29);T.push((L<<3)&4294967295);for(Q=0;Q<T.length;Q+=16){for(ae=0;ae<16;ae++){M[ae]=T[Q+ae]}for(ae=16;ae<=79;ae++){M[ae]=N(M[ae-3]^M[ae-8]^M[ae-14]^M[ae-16],1)}aa=U;Z=S;Y=R;X=P;V=O;for(ae=0;ae<=19;ae++){af=(N(aa,5)+((Z&Y)|(~Z&X))+V+M[ae]+1518500249)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=20;ae<=39;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+1859775393)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=40;ae<=59;ae++){af=(N(aa,5)+((Z&Y)|(Z&X)|(Y&X))+V+M[ae]+2400959708)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=60;ae<=79;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+3395469782)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}U=(U+aa)&4294967295;S=(S+Z)&4294967295;R=(R+Y)&4294967295;P=(P+X)&4294967295;O=(O+V)&4294967295}af=ac(U)+ac(S)+ac(R)+ac(P)+ac(O);return af.toLowerCase()}function C(M,i,L){if(M==="translate.googleusercontent.com"){if(L===""){L=i}i=y(i,"u");M=b(i)}else{if(M==="cc.bingj.com"||M==="webcache.googleusercontent.com"||M.slice(0,5)==="74.6."){i=p.links[0].href;M=b(i)}}return[M,i,L]}function t(L){var i=L.length;
if(L.charAt(--i)==="."){L=L.slice(0,i)}if(L.slice(0,2)==="*."){L=L.slice(1)}return L}function K(L){if(!j(L)){L=L.text||"";var i=p.getElementsByTagName("title");if(i&&r(i[0])){L=i[0].text}}return L}function u(ap){var at=C(p.domain,x.location.href,s()),ab=t(at[0]),aa=at[1],aH=at[2],O="GET",i=W(ap),aW="",aP,aV=p.title,ak="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aI=[ab],S=[],aJ=[],aM=[],ae=500,N,an,aq,aK="_sp_",X,aG,P,aw,aX=63072000000,ah=1800000,ad=15768000000,U=window.navigator.userLanguage||window.navigator.language,aT=p.location.protocol==="https",av={},aA=false,Y=false,ac,aS,ay,aO=I,aE,am;function aQ(aY){var aZ;if(aq){aZ=new RegExp("#.*");return aY.replace(aZ,"")}return aY}function aj(a0,aY){var a1=g(aY),aZ;if(a1){return aY}if(aY.slice(0,1)==="/"){return g(a0)+"://"+b(a0)+aY}a0=aQ(a0);if((aZ=a0.indexOf("?"))>=0){a0=a0.slice(0,aZ)
}if((aZ=a0.lastIndexOf("/"))!==a0.length-1){a0=a0.slice(0,aZ+1)}return a0+aY}function az(a1){var aZ,aY,a0;for(aZ=0;aZ<aI.length;aZ++){aY=t(aI[aZ].toLowerCase());if(a1===aY){return true}if(aY.slice(0,1)==="."){if(a1===aY.slice(1)){return true}a0=a1.length-aY.length;if((a0>0)&&(a1.slice(a0)===aY)){return true}}}return false}function L(aY){var aZ=new Image(1,1);aZ.onload=function(){};aZ.src=i+"?"+aY}function aR(a0,aZ){var aY=new Date();if(!P){L(a0);f=aY.getTime()+aZ}}function T(aY){return aK+aY+"."+aW+"."+aE}function aC(){var aY=T("testcookie");if(!r(c.cookieEnabled)){l(aY,"1");return e(aY)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function al(){aE=aO((X||ab)+(aG||"/")).slice(0,4)}function V(){var aY=new Date();ac=aY.getTime()}function Q(a2,aZ,aY,a1,a0){l(T("id"),a2+"."+aZ+"."+aY+"."+a1+"."+a0,aX,aG,X,aT)}function R(){var aZ=new Date(),aY=Math.round(aZ.getTime()/1000),a1=e(T("id")),a0;if(a1){a0=a1.split(".");a0.unshift("0")}else{if(!am){am=aO((c.userAgent||"")+(c.platform||"")+JSON2.stringify(av)+aY).slice(0,16)
}a0=["1",am,aY,0,aY,""]}return a0}function au(aZ,bg){var be,aY=new Date(),a4=Math.round(aY.getTime()/1000),bi,bf,a1,ba,bc,a3,a2,bd,a0=1024,bj,a6,a9=T("id"),a5=T("ses"),bb=R(),a8=e(a5),bh=aP||aa,a7;if(P){l(a9,"",-1,aG,X);l(a5,"",-1,aG,X);return""}bi=bb[0];bf=bb[1];ba=bb[2];a1=bb[3];bc=bb[4];a3=bb[5];if(!a8){a1++;a3=bc}aZ+="&tid="+String(Math.random()).slice(2,8)+"&uid="+bf+"&vid="+a1+"&lang="+U+(aH.length?"&refr="+h(aQ(aH)):"");for(be in av){if(Object.prototype.hasOwnProperty.call(av,be)){a7=(be==="res"||be==="cookie")?"&":"&f_";aZ+=a7+be+"="+av[be]}}aZ+="&url="+h(aQ(window.location));Q(bf,ba,a1,a4,a3);l(a5,"*",ah,aG,X,aT);aZ+=E(bg);return aZ}function aF(aY){return("https:"==document.location.protocol?"https":"http")+"://"+aY+"/ice.png"}function W(aY){return aF(aY+".cloudfront.net")}function aD(a0,a3,aY,a2,a1){var aZ="ev_ca="+h(a0)+"&ev_ac="+h(a3);if(String(aY).length){aZ+="&ev_la="+h(aY)}if(String(a2).length){aZ+="&ev_pr="+h(a2)}if(String(a1).length){aZ+="&ev_va="+h(a1)}aZ=au(aZ,"event");
aR(aZ,ae)}function ao(a2,aY,a0,aZ){var a1="ad_ba="+h(a2);if(String(aY).length){a1+="&ad_ca="+h(aY)}if(String(a0).length){a1+="&ad_ad="+h(a0)}if(String(aZ).length){a1+="&ad_uid="+h(aZ)}a1=au(a1,configCustomData,"adimp");aR(a1,ae)}function M(a1){var aY=new Date(),a0=au("page="+h(K(a1||aV)),"log");aR(a0,ae);if(N&&an&&!Y){Y=true;J(p,"click",V);J(p,"mouseup",V);J(p,"mousedown",V);J(p,"mousemove",V);J(p,"mousewheel",V);J(x,"DOMMouseScroll",V);J(x,"scroll",V);J(p,"keypress",V);J(p,"keydown",V);J(p,"keyup",V);J(x,"resize",V);J(x,"focus",V);J(x,"blur",V);ac=aY.getTime();setTimeout(function aZ(){var a2=new Date(),a3;if((ac+an)>a2.getTime()){if(N<a2.getTime()){a3=au("ping=1","ping");aR(a3,ae)}setTimeout(aZ,an)}},an)}}function ai(aZ,aY){var a0=au(aY+"="+h(aQ(aZ)),"link");aR(a0,ae)}function aL(aZ,aY){if(aZ!==""){return aZ+aY.charAt(0).toUpperCase()+aY.slice(1)}return aY}function ar(a3){var a2,aY,a1=["","webkit","ms","moz"],a0;if(!aw){for(aY=0;aY<a1.length;aY++){a0=a1[aY];if(Object.prototype.hasOwnProperty.call(p,aL(a0,"hidden"))){if(p[aL(a0,"visibilityState")]==="prerender"){a2=true
}break}}}if(a2){J(p,a0+"visibilitychange",function aZ(){p.removeEventListener(a0+"visibilitychange",aZ,false);a3()});return}a3()}function aB(a0,aZ){var a1,aY="(^| )(piwik[_-]"+aZ;if(a0){for(a1=0;a1<a0.length;a1++){aY+="|"+a0[a1]}}aY+=")( |$)";return new RegExp(aY)}function aU(a1,aY,a2){if(!a2){return"link"}var a0=aB(aJ,"download"),aZ=aB(aM,"link"),a3=new RegExp("\\.("+ak+")([?&#]|$)","i");return aZ.test(a1)?"link":(a0.test(a1)||a3.test(aY)?"download":0)}function Z(a3){var a1,aZ,aY;while((a1=a3.parentNode)!==null&&r(a1)&&((aZ=a3.tagName.toUpperCase())!=="A"&&aZ!=="AREA")){a3=a1}if(r(a3.href)){var a4=a3.hostname||b(a3.href),a5=a4.toLowerCase(),a0=a3.href.replace(a4,a5),a2=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!a2.test(a0)){aY=aU(a3.className,a0,az(a5));if(aY){a0=d(a0);ai(a0,aY)}}}}function af(aY){var aZ,a0;aY=aY||x.event;aZ=aY.which||aY.button;a0=aY.target||aY.srcElement;if(aY.type==="click"){if(a0){Z(a0)}}else{if(aY.type==="mousedown"){if((aZ===1||aZ===2)&&a0){aS=aZ;
ay=a0}else{aS=ay=null}}else{if(aY.type==="mouseup"){if(aZ===aS&&a0===ay){Z(a0)}aS=ay=null}}}}function aN(aZ,aY){if(aY){J(aZ,"mouseup",af,false);J(aZ,"mousedown",af,false)}else{J(aZ,"click",af,false)}}function ax(aZ){if(!aA){aA=true;var a0,aY=aB(S,"ignore"),a1=p.links;if(a1){for(a0=0;a0<a1.length;a0++){if(!aY.test(a1[a0].className)){aN(a1[a0],aZ)}}}}}function ag(){var aY,aZ,a0={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(c.mimeTypes&&c.mimeTypes.length){for(aY in a0){if(Object.prototype.hasOwnProperty.call(a0,aY)){aZ=c.mimeTypes[a0[aY]];av[aY]=(aZ&&aZ.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&r(c.javaEnabled)&&c.javaEnabled()){av.java="1"}if(n(x.GearsFactory)){av.gears="1"}av.res=A.width+"x"+A.height;av.cookie=aC()}ag();al();return{getVisitorId:function(){return(R())[1]
},getVisitorInfo:function(){return R()},setSiteId:function(aY){aW=aY},setLinkTrackingTimer:function(aY){ae=aY},setDownloadExtensions:function(aY){ak=aY},addDownloadExtensions:function(aY){ak+="|"+aY},setDomains:function(aY){aI=j(aY)?[aY]:aY;aI.push(ab)},setIgnoreClasses:function(aY){S=j(aY)?[aY]:aY},setReferrerUrl:function(aY){aH=aY},setCustomUrl:function(aY){aP=aj(aa,aY)},setDocumentTitle:function(aY){aV=aY},setDownloadClasses:function(aY){aJ=j(aY)?[aY]:aY},setLinkClasses:function(aY){aM=j(aY)?[aY]:aY},discardHashTag:function(aY){aq=aY},setCookieNamePrefix:function(aY){aK=aY},setCookieDomain:function(aY){X=t(aY);al()},setCookiePath:function(aY){aG=aY;al()},setVisitorCookieTimeout:function(aY){aX=aY*1000},setSessionCookieTimeout:function(aY){ah=aY*1000},setReferralCookieTimeout:function(aY){ad=aY*1000},setDoNotTrack:function(aZ){var aY=c.doNotTrack||c.msDoNotTrack;P=aZ&&(aY==="yes"||aY==="1")},addListener:function(aZ,aY){aN(aZ,aY)},enableLinkTracking:function(aY){if(m){ax(aY)}else{v.push(function(){ax(aY)
})}},setHeartBeatTimer:function(a0,aZ){var aY=new Date();N=aY.getTime()+a0*1000;an=aZ*1000},killFrame:function(){if(x.location!==x.top.location){x.top.location=x.location}},redirectFile:function(aY){if(x.location.protocol==="file:"){x.location=aY}},setCountPreRendered:function(aY){aw=aY},trackLink:function(aZ,aY){ar(function(){ai(aZ,aY)})},trackPageView:function(aY){ar(function(){M(aY)})},setAccount:function(aY){i=W(aY)},setCollectorUrl:function(aY){i=aF(aY)},trackEvent:function(aZ,a2,aY,a1,a0){aD(aZ,a2,aY,a1,a0)},trackImpression:function(a1,aY,a0,aZ){ao(a1,aY,a0,aZ)}}}function q(){return{push:G}}J(x,"beforeunload",H,false);k();Date.prototype.getTimeAlias=Date.prototype.getTime;B=new u();for(D=0;D<_snaq.length;D++){G(_snaq[D])}_snaq=new q();return{addPlugin:function(i,L){a[i]=L},getTracker:function(i){return new u(i)},getAsyncTracker:function(){return B}}}());