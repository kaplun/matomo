/*!
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ Simplified BSD (also in js/LICENSE.txt)
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var f,a={},o=document,c=navigator,B=screen,y=window,l=false,w=[],h=y.encodeURIComponent,x=y.decodeURIComponent,d=unescape,C,F;function q(N){var i=typeof N;return i!=="undefined"}function m(i){return typeof i==="function"}function A(i){return typeof i==="object"}function j(i){return typeof i==="string"||i instanceof String}function I(){var N,P,O;for(N=0;N<arguments.length;N+=1){O=arguments[N];P=O.shift();if(j(P)){C[P].apply(C,O)}else{P.apply(C,O)}}}function L(P,O,N,i){if(P.addEventListener){P.addEventListener(O,N,i);return true}if(P.attachEvent){return P.attachEvent("on"+O,N)}P["on"+O]=N}function G(O,R){var N="",Q,P;for(Q in a){if(Object.prototype.hasOwnProperty.call(a,Q)){P=a[Q][O];if(m(P)){N+=P(R)}}}return N}function J(){var i;G("unload");if(f){do{i=new Date()}while(i.getTimeAlias()<f)}}function H(){var N;if(!l){l=true;G("load");for(N=0;N<w.length;N++){w[N]()
}}return true}function k(){var N;if(o.addEventListener){L(o,"DOMContentLoaded",function i(){o.removeEventListener("DOMContentLoaded",i,false);H()})}else{if(o.attachEvent){o.attachEvent("onreadystatechange",function i(){if(o.readyState==="complete"){o.detachEvent("onreadystatechange",i);H()}});if(o.documentElement.doScroll&&y===y.top){(function i(){if(!l){try{o.documentElement.doScroll("left")}catch(O){setTimeout(i,0);return}H()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){N=setInterval(function(){if(l||/loaded|complete/.test(o.readyState)){clearInterval(N);H()}},10)}L(y,"load",H,false)}function e(O,N){var i=o.createElement("script");i.type="text/javascript";i.src=O;if(i.readyState){i.onreadystatechange=function(){var P=this.readyState;if(P==="loaded"||P==="complete"){i.onreadystatechange=null;N()}}}else{i.onload=N}o.getElementsByTagName("head")[0].appendChild(i)}function r(){var i="";try{i=y.top.document.referrer}catch(O){if(y.parent){try{i=y.parent.document.referrer}catch(N){i=""
}}}if(i===""){i=o.referrer}return i}function g(i){var O=new RegExp("^([a-z]+):"),N=O.exec(i);return N?N[1]:null}function b(i){var O=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),N=O.exec(i);return N?N[1]:i}function z(O,N){var R=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),Q=R.exec(O),P=new RegExp("(?:^|&)"+N+"=([^&]*)"),i=Q?P.exec(Q[1]):0;return i?x(i[1]):""}function n(i){return d(h(i))}function K(ad){var P=function(W,i){return(W<<i)|(W>>>(32-i))},ae=function(ak){var aj="",ai,W;for(ai=7;ai>=0;ai--){W=(ak>>>(ai*4))&15;aj+=W.toString(16)}return aj},S,ag,af,O=[],X=1732584193,U=4023233417,T=2562383102,R=271733878,Q=3285377520,ac,ab,aa,Z,Y,ah,N,V=[];ad=n(ad);N=ad.length;for(ag=0;ag<N-3;ag+=4){af=ad.charCodeAt(ag)<<24|ad.charCodeAt(ag+1)<<16|ad.charCodeAt(ag+2)<<8|ad.charCodeAt(ag+3);V.push(af)}switch(N&3){case 0:ag=2147483648;break;case 1:ag=ad.charCodeAt(N-1)<<24|8388608;break;case 2:ag=ad.charCodeAt(N-2)<<24|ad.charCodeAt(N-1)<<16|32768;break;case 3:ag=ad.charCodeAt(N-3)<<24|ad.charCodeAt(N-2)<<16|ad.charCodeAt(N-1)<<8|128;
break}V.push(ag);while((V.length&15)!==14){V.push(0)}V.push(N>>>29);V.push((N<<3)&4294967295);for(S=0;S<V.length;S+=16){for(ag=0;ag<16;ag++){O[ag]=V[S+ag]}for(ag=16;ag<=79;ag++){O[ag]=P(O[ag-3]^O[ag-8]^O[ag-14]^O[ag-16],1)}ac=X;ab=U;aa=T;Z=R;Y=Q;for(ag=0;ag<=19;ag++){ah=(P(ac,5)+((ab&aa)|(~ab&Z))+Y+O[ag]+1518500249)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=20;ag<=39;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+1859775393)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=40;ag<=59;ag++){ah=(P(ac,5)+((ab&aa)|(ab&Z)|(aa&Z))+Y+O[ag]+2400959708)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=60;ag<=79;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+3395469782)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}X=(X+ac)&4294967295;U=(U+ab)&4294967295;T=(T+aa)&4294967295;R=(R+Z)&4294967295;Q=(Q+Y)&4294967295}ah=ae(X)+ae(U)+ae(T)+ae(R)+ae(Q);return ah.toLowerCase()}function E(O,i,N){if(O==="translate.googleusercontent.com"){if(N===""){N=i}i=z(i,"u");O=b(i)}else{if(O==="cc.bingj.com"||O==="webcache.googleusercontent.com"||O.slice(0,5)==="74.6."){i=o.links[0].href;
O=b(i)}}return[O,i,N]}function s(N){var i=N.length;if(N.charAt(--i)==="."){N=N.slice(0,i)}if(N.slice(0,2)==="*."){N=N.slice(1)}return N}function M(N){if(!j(N)){N=N.text||"";var i=o.getElementsByTagName("title");if(i&&q(i[0])){N=i[0].text}}return N}function u(i,N){if(N){return N}if(i.slice(-9)==="piwik.php"){i=i.slice(0,i.length-9)}return i}function t(Q){var i="Piwik_Overlay";var T=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var O=T.exec(o.referrer);if(O){var P=O[1];if(P!==String(Q)){return false}var S=O[2],N=O[3];y.name=i+"###"+S+"###"+N}var R=y.name.split("###");return R.length===3&&R[0]===i}function D(N,S,P){var R=y.name.split("###"),Q=R[1],i=R[2],O=u(N,S);e(O+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(O,P,Q,i)})}function v(ah,aG){var Q=E(o.domain,y.location.href,r()),a0=s(Q[0]),be=Q[1],aN=Q[2],aL="GET",P=ah||"",ae="",aI="",a4=aG||"",ax,an=o.title,ap="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aJ=[a0],T=[],aB=[],ag=[],aH=500,U,ai,V,W,ar=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],am=["pk_kwd","piwik_kwd","utm_term"],bc="_pk_",Z,bd,X=false,a7,au,aw,ad=63072000000,af=1800000,ay=15768000000,S=false,aC={},a8=200,aT={},a5={},aQ=false,aO=false,aM,aD,aa,aq=K,aP,av;
function aV(bn,bk,bj,bm,bi,bl){if(X){return}var bh;if(bj){bh=new Date();bh.setTime(bh.getTime()+bj)}o.cookie=bn+"="+h(bk)+(bj?";expires="+bh.toGMTString():"")+";path="+(bm||"/")+(bi?";domain="+bi:"")+(bl?";secure":"")}function ac(bj){if(X){return 0}var bh=new RegExp("(^|;)[ ]*"+bj+"=([^;]*)"),bi=bh.exec(o.cookie);return bi?x(bi[2]):0}function a9(bh){var bi;if(V){bi=new RegExp("#.*");return bh.replace(bi,"")}return bh}function aZ(bj,bh){var bk=g(bh),bi;if(bk){return bh}if(bh.slice(0,1)==="/"){return g(bj)+"://"+b(bj)+bh}bj=a9(bj);if((bi=bj.indexOf("?"))>=0){bj=bj.slice(0,bi)}if((bi=bj.lastIndexOf("/"))!==bj.length-1){bj=bj.slice(0,bi+1)}return bj+bh}function aK(bk){var bi,bh,bj;for(bi=0;bi<aJ.length;bi++){bh=s(aJ[bi].toLowerCase());if(bk===bh){return true}if(bh.slice(0,1)==="."){if(bk===bh.slice(1)){return true}bj=bk.length-bh.length;if((bj>0)&&(bk.slice(bj)===bh)){return true}}}return false}function bg(bh){var bi=new Image(1,1);bi.onload=function(){};bi.src=P+(P.indexOf("?")<0?"?":"&")+bh
}function aW(bh){try{var bj=y.XMLHttpRequest?new y.XMLHttpRequest():y.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bj.open("POST",P,true);bj.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){bg(bh)}};bj.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bj.send(bh)}catch(bi){bg(bh)}}function at(bj,bi){var bh=new Date();if(!a7){if(aL==="POST"){aW(bj)}else{bg(bj)}f=bh.getTime()+bi}}function aU(bh){return bc+bh+"."+a4+"."+aP}function R(){if(X){return"0"}if(!q(c.cookieEnabled)){var bh=aU("testcookie");aV(bh,"1");return ac(bh)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function aE(){aP=aq((Z||a0)+(bd||"/")).slice(0,4)}function ab(){var bi=aU("cvar"),bh=ac(bi);if(bh.length){bh=JSON2.parse(bh);if(A(bh)){return bh}}return{}}function O(){if(S===false){S=ab()}}function a3(){var bh=new Date();aM=bh.getTime()}function Y(bl,bi,bh,bk,bj,bm){aV(aU("id"),bl+"."+bi+"."+bh+"."+bk+"."+bj+"."+bm,ad,bd,Z)}function N(){var bi=new Date(),bh=Math.round(bi.getTime()/1000),bk=ac(aU("id")),bj;
if(bk){bj=bk.split(".");bj.unshift("0")}else{if(!av){av=aq((c.userAgent||"")+(c.platform||"")+JSON2.stringify(a5)+bh).slice(0,16)}bj=["1",av,bh,0,bh,"",""]}return bj}function i(){var bh=ac(aU("ref"));if(bh.length){try{bh=JSON2.parse(bh);if(A(bh)){return bh}}catch(bi){}}return["","",0,""]}function ao(bj,bI,bJ,bl){var bG,bi=new Date(),br=Math.round(bi.getTime()/1000),bL,bH,bn,bz,bD,bq,bB,bo,bF,bm=1024,bM,bu,bC=S,bx=aU("id"),bs=aU("ses"),bt=aU("ref"),bN=aU("cvar"),bA=N(),bw=ac(bs),bE=i(),bK=ax||be,bp,bh;if(X){X=false;aV(bx,"",-86400,bd,Z);aV(bs,"",-86400,bd,Z);aV(bN,"",-86400,bd,Z);aV(bt,"",-86400,bd,Z);X=true}if(a7){return""}bL=bA[0];bH=bA[1];bz=bA[2];bn=bA[3];bD=bA[4];bq=bA[5];if(!q(bA[6])){bA[6]=""}bB=bA[6];if(!q(bl)){bl=""}var bv=o.characterSet||o.charset;if(!bv||bv.toLowerCase()==="utf-8"){bv=null}bp=bE[0];bh=bE[1];bo=bE[2];bF=bE[3];if(!bw){bn++;bq=bD;if(!aw||!bp.length){for(bG in ar){if(Object.prototype.hasOwnProperty.call(ar,bG)){bp=z(bK,ar[bG]);if(bp.length){break}}}for(bG in am){if(Object.prototype.hasOwnProperty.call(am,bG)){bh=z(bK,am[bG]);
if(bh.length){break}}}}bM=b(aN);bu=bF.length?b(bF):"";if(bM.length&&!aK(bM)&&(!aw||!bu.length||aK(bu))){bF=aN}if(bF.length||bp.length){bo=br;bE=[bp,bh,bo,a9(bF.slice(0,bm))];aV(bt,JSON2.stringify(bE),ay,bd,Z)}}bj+="&idsite="+a4+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bi.getHours()+"&m="+bi.getMinutes()+"&s="+bi.getSeconds()+"&url="+h(a9(bK))+(aN.length?"&urlref="+h(a9(aN)):"")+"&_id="+bH+"&_idts="+bz+"&_idvc="+bn+"&_idn="+bL+(bp.length?"&_rcn="+h(bp):"")+(bh.length?"&_rck="+h(bh):"")+"&_refts="+bo+"&_viewts="+bq+(String(bB).length?"&_ects="+bB:"")+(String(bF).length?"&_ref="+h(a9(bF.slice(0,bm))):"")+(bv?"&cs="+h(bv):"");var bk=JSON2.stringify(aC);if(bk.length>2){bj+="&cvar="+h(bk)}for(bG in a5){if(Object.prototype.hasOwnProperty.call(a5,bG)){bj+="&"+bG+"="+a5[bG]}}if(bI){bj+="&data="+h(JSON2.stringify(bI))}else{if(W){bj+="&data="+h(JSON2.stringify(W))}}if(S){var by=JSON2.stringify(S);if(by.length>2){bj+="&_cvar="+h(by)}for(bG in bC){if(Object.prototype.hasOwnProperty.call(bC,bG)){if(S[bG][0]===""||S[bG][1]===""){delete S[bG]
}}}aV(bN,JSON2.stringify(S),af,bd,Z)}Y(bH,bz,bn,br,bq,q(bl)&&String(bl).length?bl:bB);aV(bs,"*",af,bd,Z);bj+=G(bJ);if(aI.length){bj+="&"+aI}return bj}function aY(bk,bj,bo,bl,bh,br){var bm="idgoal=0",bn,bi=new Date(),bp=[],bq;if(String(bk).length){bm+="&ec_id="+h(bk);bn=Math.round(bi.getTime()/1000)}bm+="&revenue="+bj;if(String(bo).length){bm+="&ec_st="+bo}if(String(bl).length){bm+="&ec_tx="+bl}if(String(bh).length){bm+="&ec_sh="+bh}if(String(br).length){bm+="&ec_dt="+br}if(aT){for(bq in aT){if(Object.prototype.hasOwnProperty.call(aT,bq)){if(!q(aT[bq][1])){aT[bq][1]=""}if(!q(aT[bq][2])){aT[bq][2]=""}if(!q(aT[bq][3])||String(aT[bq][3]).length===0){aT[bq][3]=0}if(!q(aT[bq][4])||String(aT[bq][4]).length===0){aT[bq][4]=1}bp.push(aT[bq])}}bm+="&ec_items="+h(JSON2.stringify(bp))}bm=ao(bm,W,"ecommerce",bn);at(bm,aH)}function aX(bh,bl,bk,bj,bi,bm){if(String(bh).length&&q(bl)){aY(bh,bl,bk,bj,bi,bm)}}function bb(bh){if(q(bh)){aY("",bh,"","","","")}}function aA(bk,bl){var bh=new Date(),bj=ao("action_name="+h(M(bk||an)),bl,"log");
at(bj,aH);if(U&&ai&&!aO){aO=true;L(o,"click",a3);L(o,"mouseup",a3);L(o,"mousedown",a3);L(o,"mousemove",a3);L(o,"mousewheel",a3);L(y,"DOMMouseScroll",a3);L(y,"scroll",a3);L(o,"keypress",a3);L(o,"keydown",a3);L(o,"keyup",a3);L(y,"resize",a3);L(y,"focus",a3);L(y,"blur",a3);aM=bh.getTime();setTimeout(function bi(){var bm=new Date(),bn;if((aM+ai)>bm.getTime()){if(U<bm.getTime()){bn=ao("ping=1",bl,"ping");at(bn,aH)}setTimeout(bi,ai)}},ai)}}function al(bh,bk,bi,bl){var bj=ao("search="+h(bh)+(bk?"&search_cat="+h(bk):"")+(q(bi)?"&search_count="+bi:""),bl,"sitesearch");at(bj,aH)}function aF(bh,bk,bj){var bi=ao("idgoal="+bh+(bk?"&revenue="+bk:""),bj,"goal");at(bi,aH)}function a2(bi,bh,bk){var bj=ao(bh+"="+h(a9(bi)),bk,"link");at(bj,aH)}function a6(bi,bh){if(bi!==""){return bi+bh.charAt(0).toUpperCase()+bh.slice(1)}return bh}function ak(bm){var bl,bh,bk=["","webkit","ms","moz"],bj;if(!au){for(bh=0;bh<bk.length;bh++){bj=bk[bh];if(Object.prototype.hasOwnProperty.call(o,a6(bj,"hidden"))){if(o[a6(bj,"visibilityState")]==="prerender"){bl=true
}break}}}if(bl){L(o,bj+"visibilitychange",function bi(){o.removeEventListener(bj+"visibilitychange",bi,false);bm()});return}bm()}function aj(bj,bi){var bk,bh="(^| )(piwik[_-]"+bi;if(bj){for(bk=0;bk<bj.length;bk++){bh+="|"+bj[bk]}}bh+=")( |$)";return new RegExp(bh)}function a1(bk,bh,bl){var bj=aj(aB,"download"),bi=aj(ag,"link"),bm=new RegExp("\\.("+ap+")([?&#]|$)","i");return bi.test(bk)?"link":(bj.test(bk)||bm.test(bh)?"download":(bl?0:"link"))}function aS(bm){var bk,bi,bh;while((bk=bm.parentNode)!==null&&q(bk)&&((bi=bm.tagName.toUpperCase())!=="A"&&bi!=="AREA")){bm=bk}if(q(bm.href)){var bn=bm.hostname||b(bm.href),bo=bn.toLowerCase(),bj=bm.href.replace(bn,bo),bl=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bl.test(bj)){bh=a1(bm.className,bj,aK(bo));if(bh){bj=d(bj);a2(bj,bh)}}}}function bf(bh){var bi,bj;bh=bh||y.event;bi=bh.which||bh.button;bj=bh.target||bh.srcElement;if(bh.type==="click"){if(bj){aS(bj)}}else{if(bh.type==="mousedown"){if((bi===1||bi===2)&&bj){aD=bi;
aa=bj}else{aD=aa=null}}else{if(bh.type==="mouseup"){if(bi===aD&&bj===aa){aS(bj)}aD=aa=null}}}}function aR(bi,bh){if(bh){L(bi,"mouseup",bf,false);L(bi,"mousedown",bf,false)}else{L(bi,"click",bf,false)}}function az(bi){if(!aQ){aQ=true;var bj,bh=aj(T,"ignore"),bk=o.links;if(bk){for(bj=0;bj<bk.length;bj++){if(!bh.test(bk[bj].className)){aR(bk[bj],bi)}}}}}function ba(){var bi,bj,bk={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bh=(new RegExp("Mac OS X.*Safari/")).test(c.userAgent)?y.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(c.userAgent))){if(c.mimeTypes&&c.mimeTypes.length){for(bi in bk){if(Object.prototype.hasOwnProperty.call(bk,bi)){bj=c.mimeTypes[bk[bi]];a5[bi]=(bj&&bj.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&q(c.javaEnabled)&&c.javaEnabled()){a5.java="1"
}if(m(y.GearsFactory)){a5.gears="1"}a5.cookie=R()}a5.res=B.width*bh+"x"+B.height*bh}ba();aE();return{getVisitorId:function(){return(N())[1]},getVisitorInfo:function(){return N()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(bh){P=bh},setSiteId:function(bh){a4=bh},setCustomData:function(bh,bi){if(A(bh)){W=bh}else{if(!W){W=[]}W[bh]=bi}},appendToTrackingUrl:function(bh){aI=bh},getCustomData:function(){return W},setCustomVariable:function(bi,bh,bl,bj){var bk;if(!q(bj)){bj="visit"}if(bi>0){bh=q(bh)&&!j(bh)?String(bh):bh;bl=q(bl)&&!j(bl)?String(bl):bl;bk=[bh.slice(0,a8),bl.slice(0,a8)];if(bj==="visit"||bj===2){O();S[bi]=bk}else{if(bj==="page"||bj===3){aC[bi]=bk}}}},getCustomVariable:function(bi,bj){var bh;if(!q(bj)){bj="visit"}if(bj==="page"||bj===3){bh=aC[bi]
}else{if(bj==="visit"||bj===2){O();bh=S[bi]}}if(!q(bh)||(bh&&bh[0]==="")){return false}return bh},deleteCustomVariable:function(bh,bi){if(this.getCustomVariable(bh,bi)){this.setCustomVariable(bh,"","",bi)}},setLinkTrackingTimer:function(bh){aH=bh},setDownloadExtensions:function(bh){ap=bh},addDownloadExtensions:function(bh){ap+="|"+bh},setDomains:function(bh){aJ=j(bh)?[bh]:bh;aJ.push(a0)},setIgnoreClasses:function(bh){T=j(bh)?[bh]:bh},setRequestMethod:function(bh){aL=bh||"GET"},setReferrerUrl:function(bh){aN=bh},setCustomUrl:function(bh){ax=aZ(be,bh)},setDocumentTitle:function(bh){an=bh},setAPIUrl:function(bh){ae=bh},setDownloadClasses:function(bh){aB=j(bh)?[bh]:bh},setLinkClasses:function(bh){ag=j(bh)?[bh]:bh},setCampaignNameKey:function(bh){ar=j(bh)?[bh]:bh},setCampaignKeywordKey:function(bh){am=j(bh)?[bh]:bh},discardHashTag:function(bh){V=bh},setCookieNamePrefix:function(bh){bc=bh;S=ab()},setCookieDomain:function(bh){Z=s(bh);aE()},setCookiePath:function(bh){bd=bh;aE()},setVisitorCookieTimeout:function(bh){ad=bh*1000
},setSessionCookieTimeout:function(bh){af=bh*1000},setReferralCookieTimeout:function(bh){ay=bh*1000},setConversionAttributionFirstReferrer:function(bh){aw=bh},disableCookies:function(){X=true;a5.cookie="0"},setDoNotTrack:function(bi){var bh=c.doNotTrack||c.msDoNotTrack;a7=bi&&(bh==="yes"||bh==="1");if(a7){this.disableCookies()}},addListener:function(bi,bh){aR(bi,bh)},enableLinkTracking:function(bh){if(l){az(bh)}else{w.push(function(){az(bh)})}},setHeartBeatTimer:function(bj,bi){var bh=new Date();U=bh.getTime()+bj*1000;ai=bi*1000},killFrame:function(){if(y.location!==y.top.location){y.top.location=y.location}},redirectFile:function(bh){if(y.location.protocol==="file:"){y.location=bh}},setCountPreRendered:function(bh){au=bh},trackGoal:function(bh,bj,bi){ak(function(){aF(bh,bj,bi)})},trackLink:function(bi,bh,bj){ak(function(){a2(bi,bh,bj)})},trackPageView:function(bh,bi){if(t(a4)){ak(function(){D(P,ae,a4)})}else{ak(function(){aA(bh,bi)})}},trackSiteSearch:function(bh,bj,bi){ak(function(){al(bh,bj,bi)
})},setEcommerceView:function(bk,bh,bj,bi){if(!q(bj)||!bj.length){bj=""}else{if(bj instanceof Array){bj=JSON2.stringify(bj)}}aC[5]=["_pkc",bj];if(q(bi)&&String(bi).length){aC[2]=["_pkp",bi]}if((!q(bk)||!bk.length)&&(!q(bh)||!bh.length)){return}if(q(bk)&&bk.length){aC[3]=["_pks",bk]}if(!q(bh)||!bh.length){bh=""}aC[4]=["_pkn",bh]},addEcommerceItem:function(bl,bh,bj,bi,bk){if(bl.length){aT[bl]=[bl,bh,bj,bi,bk]}},trackEcommerceOrder:function(bh,bl,bk,bj,bi,bm){aX(bh,bl,bk,bj,bi,bm)},trackEcommerceCartUpdate:function(bh){bb(bh)}}}function p(){return{push:I}}L(y,"beforeunload",J,false);k();Date.prototype.getTimeAlias=Date.prototype.getTime;C=new v();for(F=0;F<_paq.length;F++){if(_paq[F][0]==="setTrackerUrl"||_paq[F][0]==="setSiteId"){I(_paq[F]);delete _paq[F]}}for(F=0;F<_paq.length;F++){if(_paq[F]){I(_paq[F])}}_paq=new p();return{addPlugin:function(i,N){a[i]=N},getTracker:function(i,N){return new v(i,N)},getAsyncTracker:function(){return C}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)
}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};