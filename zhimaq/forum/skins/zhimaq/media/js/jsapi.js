if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'http://www.google.com/uds';
google.loader.GoogleApisBase = 'http://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = false;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = null;
google.loader.AdditionalParams = '';
(function() {var d=void 0,g=null,h=encodeURIComponent,j=window,k=document;function l(a,b){return a.load=b}var m="push",o="replace",p="charAt",r="indexOf",s="ServiceBase",t="name",u="getTime",v="length",w="prototype",x="setTimeout",y="loader",z="substring",A="join",B="toLowerCase";function C(a){if(a in D)return D[a];return D[a]=navigator.userAgent[B]()[r](a)!=-1}var D={};function E(a,b){var c=function(){};c.prototype=b[w];a.S=b[w];a.prototype=new c}
function F(a,b){var c=Array[w].slice.call(arguments,2)||[];return function(){var e=c.concat(Array[w].slice.call(arguments));return a.apply(b,e)}}function G(a){a=Error(a);a.toString=function(){return this.message};return a}function H(a,b){for(var c=a.split(/\./),e=j,f=0;f<c[v]-1;f++)e[c[f]]||(e[c[f]]={}),e=e[c[f]];e[c[c[v]-1]]=b}function I(a,b,c){a[b]=c}if(!J)var J=H;if(!K)var K=I;google[y].v={};J("google.loader.callbacks",google[y].v);var L={},M={};google[y].eval={};J("google.loader.eval",google[y].eval);
l(google,function(a,b,c){function e(a){var b=a.split(".");if(b[v]>2)throw G("Module: '"+a+"' not found!");else if(typeof b[1]!="undefined")f=b[0],c.packages=c.packages||[],c.packages[m](b[1])}var f=a,c=c||{};if(a instanceof Array||a&&typeof a=="object"&&typeof a[A]=="function"&&typeof a.reverse=="function")for(var i=0;i<a[v];i++)e(a[i]);else e(a);if(a=L[":"+f]){c&&!c.language&&c.locale&&(c.language=c.locale);if(c&&typeof c.callback=="string"&&(i=c.callback,i.match(/^[[\]A-Za-z0-9._]+$/)))i=j.eval(i),
c.callback=i;if((i=c&&c.callback!=g)&&!a.s(b))throw G("Module: '"+f+"' must be loaded before DOM onLoad!");else i?a.m(b,c)?j[x](c.callback,0):a.load(b,c):a.m(b,c)||a.load(b,c)}else throw G("Module: '"+f+"' not found!");});J("google.load",google.load);
google.R=function(a,b){b?(N[v]==0&&(O(j,"load",P),!C("msie")&&!C("safari")&&!C("konqueror")&&C("mozilla")||j.opera?j.addEventListener("DOMContentLoaded",P,!1):C("msie")?k.write("<script defer onreadystatechange='google.loader.domReady()' src=//:><\/script>"):(C("safari")||C("konqueror"))&&j[x](R,10)),N[m](a)):O(j,"load",a)};J("google.setOnLoadCallback",google.R);
function O(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var e=a["on"+b];a["on"+b]=e!=g?aa([c,e]):c}}function aa(a){return function(){for(var b=0;b<a[v];b++)a[b]()}}var N=[];google[y].N=function(){var a=j.event.srcElement;if(a.readyState=="complete")a.onreadystatechange=g,a.parentNode.removeChild(a),P()};J("google.loader.domReady",google[y].N);var ba={loaded:!0,complete:!0};function R(){ba[k.readyState]?P():N[v]>0&&j[x](R,10)}
function P(){for(var a=0;a<N[v];a++)N[a]();N.length=0}google[y].d=function(a,b,c){if(c){var e;if(a=="script")e=k.createElement("script"),e.type="text/javascript",e.src=b;else if(a=="css")e=k.createElement("link"),e.type="text/css",e.href=b,e.rel="stylesheet";(a=k.getElementsByTagName("head")[0])||(a=k.body.parentNode.appendChild(k.createElement("head")));a.appendChild(e)}else a=="script"?k.write('<script src="'+b+'" type="text/javascript"><\/script>'):a=="css"&&k.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
J("google.loader.writeLoadTag",google[y].d);google[y].O=function(a){M=a};J("google.loader.rfm",google[y].O);google[y].Q=function(a){for(var b in a)typeof b=="string"&&b&&b[p](0)==":"&&!L[b]&&(L[b]=new S(b[z](1),a[b]))};J("google.loader.rpl",google[y].Q);google[y].P=function(a){if((a=a.specs)&&a[v])for(var b=0;b<a[v];++b){var c=a[b];typeof c=="string"?L[":"+c]=new T(c):(c=new U(c[t],c.baseSpec,c.customSpecs),L[":"+c[t]]=c)}};J("google.loader.rm",google[y].P);google[y].loaded=function(a){L[":"+a.module].l(a)};
J("google.loader.loaded",google[y].loaded);google[y].M=function(){return"qid="+((new Date)[u]().toString(16)+Math.floor(Math.random()*1E7).toString(16))};J("google.loader.createGuidArg_",google[y].M);H("google_exportSymbol",H);H("google_exportProperty",I);google[y].b={};J("google.loader.themes",google[y].b);google[y].b.H="//www.google.com/cse/style/look/bubblegum.css";K(google[y].b,"BUBBLEGUM",google[y].b.H);google[y].b.J="//www.google.com/cse/style/look/greensky.css";K(google[y].b,"GREENSKY",google[y].b.J);
google[y].b.I="//www.google.com/cse/style/look/espresso.css";K(google[y].b,"ESPRESSO",google[y].b.I);google[y].b.L="//www.google.com/cse/style/look/shiny.css";K(google[y].b,"SHINY",google[y].b.L);google[y].b.K="//www.google.com/cse/style/look/minimalist.css";K(google[y].b,"MINIMALIST",google[y].b.K);function T(a){this.a=a;this.o=[];this.n={};this.e={};this.f={};this.j=!0;this.c=-1}
T[w].g=function(a,b){var c="";b!=d&&(b.language!=d&&(c+="&hl="+h(b.language)),b.nocss!=d&&(c+="&output="+h("nocss="+b.nocss)),b.nooldnames!=d&&(c+="&nooldnames="+h(b.nooldnames)),b.packages!=d&&(c+="&packages="+h(b.packages)),b.callback!=g&&(c+="&async=2"),b.style!=d&&(c+="&style="+h(b.style)),b.other_params!=d&&(c+="&"+b.other_params));if(!this.j){google[this.a]&&google[this.a].JSHash&&(c+="&sig="+h(google[this.a].JSHash));var e=[],f;for(f in this.n)f[p](0)==":"&&e[m](f[z](1));for(f in this.e)f[p](0)==
":"&&this.e[f]&&e[m](f[z](1));c+="&have="+h(e[A](","))}return google[y][s]+"/?file="+this.a+"&v="+a+google[y].AdditionalParams+c};T[w].t=function(a){var b=g;a&&(b=a.packages);var c=g;if(b)if(typeof b=="string")c=[a.packages];else if(b[v]){c=[];for(a=0;a<b[v];a++)typeof b[a]=="string"&&c[m](b[a][o](/^\s*|\s*$/,"")[B]())}c||(c=["default"]);b=[];for(a=0;a<c[v];a++)this.n[":"+c[a]]||b[m](c[a]);return b};
l(T[w],function(a,b){var c=this.t(b),e=b&&b.callback!=g;if(e)var f=new V(b.callback);for(var i=[],n=c[v]-1;n>=0;n--){var q=c[n];e&&f.A(q);if(this.e[":"+q])c.splice(n,1),e&&this.f[":"+q][m](f);else i[m](q)}if(c[v]){b&&b.packages&&(b.packages=c.sort()[A](","));for(n=0;n<i[v];n++)q=i[n],this.f[":"+q]=[],e&&this.f[":"+q][m](f);if(!b&&M[":"+this.a]!=g&&M[":"+this.a].versions[":"+a]!=g&&!google[y].AdditionalParams&&this.j){c=M[":"+this.a];google[this.a]=google[this.a]||{};for(var Q in c.properties)Q&&Q[p](0)==
":"&&(google[this.a][Q[z](1)]=c.properties[Q]);google[y].d("script",google[y][s]+c.path+c.js,e);c.css&&google[y].d("css",google[y][s]+c.path+c.css,e)}else(!b||!b.autoloaded)&&google[y].d("script",this.g(a,b),e);if(this.j&&(this.j=!1,this.c=(new Date)[u](),this.c%100!=1))this.c=-1;for(n=0;n<i[v];n++)q=i[n],this.e[":"+q]=!0}});
T[w].l=function(a){if(this.c!=-1)W("al_"+this.a,"jl."+((new Date)[u]()-this.c),!0),this.c=-1;this.o=this.o.concat(a.components);google[y][this.a]||(google[y][this.a]={});google[y][this.a].packages=this.o.slice(0);for(var b=0;b<a.components[v];b++){this.n[":"+a.components[b]]=!0;this.e[":"+a.components[b]]=!1;var c=this.f[":"+a.components[b]];if(c){for(var e=0;e<c[v];e++)c[e].B(a.components[b]);delete this.f[":"+a.components[b]]}}};T[w].m=function(a,b){return this.t(b)[v]==0};T[w].s=function(){return!0};
function V(a){this.D=a;this.q={};this.r=0}V[w].A=function(a){this.r++;this.q[":"+a]=!0};V[w].B=function(a){this.q[":"+a]&&(this.q[":"+a]=!1,this.r--,this.r==0&&j[x](this.D,0))};function U(a,b,c){this.name=a;this.C=b;this.p=c;this.u=this.h=!1;this.k=[];google[y].v[this[t]]=F(this.l,this)}E(U,T);l(U[w],function(a,b){var c=b&&b.callback!=g;c?(this.k[m](b.callback),b.callback="google.loader.callbacks."+this[t]):this.h=!0;(!b||!b.autoloaded)&&google[y].d("script",this.g(a,b),c)});U[w].m=function(a,b){return b&&b.callback!=g?this.u:this.h};U[w].l=function(){this.u=!0;for(var a=0;a<this.k[v];a++)j[x](this.k[a],0);this.k=[]};
var X=function(a,b){return a.string?h(a.string)+"="+h(b):a.regex?b[o](/(^.*$)/,a.regex):""};U[w].g=function(a,b){return this.F(this.w(a),a,b)};
U[w].F=function(a,b,c){var e="";a.key&&(e+="&"+X(a.key,google[y].ApiKey));a.version&&(e+="&"+X(a.version,b));b=google[y].Secure&&a.ssl?a.ssl:a.uri;if(c!=g)for(var f in c)a.params[f]?e+="&"+X(a.params[f],c[f]):f=="other_params"?e+="&"+c[f]:f=="base_domain"&&(b="http://"+c[f]+a.uri[z](a.uri[r]("/",7)));google[this[t]]={};b[r]("?")==-1&&e&&(e="?"+e[z](1));return b+e};U[w].s=function(a){return this.w(a).deferred};U[w].w=function(a){if(this.p)for(var b=0;b<this.p[v];++b){var c=this.p[b];if(RegExp(c.pattern).test(a))return c}return this.C};function S(a,b){this.a=a;this.i=b;this.h=!1}E(S,T);l(S[w],function(a,b){this.h=!0;google[y].d("script",this.g(a,b),!1)});S[w].m=function(){return this.h};S[w].l=function(){};S[w].g=function(a,b){if(!this.i.versions[":"+a]){if(this.i.aliases){var c=this.i.aliases[":"+a];c&&(a=c)}if(!this.i.versions[":"+a])throw G("Module: '"+this.a+"' with version '"+a+"' not found!");}return google[y].GoogleApisBase+"/libs/"+this.a+"/"+a+"/"+this.i.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"]};
S[w].s=function(){return!1};var Y=!1,Z=[],ca=(new Date)[u](),W=function(a,b,c){Y||(O(j,"unload",da),Y=!0);if(c){if(!google[y].Secure&&(!google[y].Options||google[y].Options.csi===!1))a=a[B]()[o](/[^a-z0-9_.]+/g,"_"),b=b[B]()[o](/[^a-z0-9_.]+/g,"_"),j[x](F($,g,"//gg.google.com/csi?s=uds&v=2&action="+h(a)+"&it="+h(b)),1E4)}else Z[m]("r"+Z[v]+"="+h(a+(b?"|"+b:""))),j[x](da,Z[v]>5?0:15E3)},da=function(){if(Z[v]){var a=google[y][s];a[r]("http:")==0&&(a=a[o](/^http:/,"https:"));$(a+"/stats?"+Z[A]("&")+"&nc="+(new Date)[u]()+"_"+((new Date)[u]()-
ca));Z.length=0}},$=function(a){var b=new Image,c=$.G++;$.z[c]=b;b.onload=b.onerror=function(){delete $.z[c]};b.src=a;b=g};$.z={};$.G=0;H("google.loader.recordStat",W);H("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":["feeds","spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search","orkut","ads","elements",{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"identitytoolkit",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.google.com/maps/api/js","ssl":"https://maps-api-ssl.google.com/maps/api/js","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"payments","wave","annotations_v2","earth","language",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}}]});
google.loader.rfm({":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/da11a17ee21435ab38fe3d34c57b4e8b/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"da11a17ee21435ab38fe3d34c57b4e8b",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/4c799b5d9590782ad04064fdda233029/","js":"default+en.I.js","properties":{":JSHash":"4c799b5d9590782ad04064fdda233029",":Version":"1.0"}},":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/b12054805fdceb92e8b121b87c5704bb/","js":"default+en.I.js","css":"default.css","properties":{":JSHash":"b12054805fdceb92e8b121b87c5704bb",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.4":"1"},"path":"/api/spreadsheets/0.4/87ff7219e9f8a8164006cbf28d5e911a/","js":"default.I.js","properties":{":JSHash":"87ff7219e9f8a8164006cbf28d5e911a",":Version":"0.4"}},":wave":{"versions":{":1":"1",":1.0":"1"},"path":"/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/","js":"default.I.js","properties":{":JSHash":"3b6f7573ff78da6602dda5e09c9025bf",":Version":"1.0"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/a53f4e87830de2a72937039b5507ebdc/","js":"default.I.js","properties":{":JSHash":"a53f4e87830de2a72937039b5507ebdc",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/dfca8805c4b6dacbd463750331da710e/","js":"default+en.I.js","properties":{":JSHash":"dfca8805c4b6dacbd463750331da710e",":Version":"1.0"}},":picker":{"versions":{":1":"1",":1.0":"1"},"path":"/api/picker/1.0/77d23be1d9a7f6c7632cb056f3de7c8a/","js":"default.I.js","css":"default.css","properties":{":JSHash":"77d23be1d9a7f6c7632cb056f3de7c8a",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.8.3"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.9.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.2r1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":3.3.0":{"uncompressed":"build/yui/yui.js","compressed":"build/yui/yui-min.js"}},"aliases":{":3":"3.3.0",":2":"2.9.0",":2.7":"2.7.0",":2.8.2":"2.8.2r1",":2.6":"2.6.0",":2.9":"2.9.0",":2.8":"2.8.2r1",":2.8.0":"2.8.0r4",":3.3":"3.3.0"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":webfont":{"versions":{":1.0.2":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.1":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.0":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.6":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.19":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.5":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.18":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.17":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.4":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.16":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.3":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.9":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.12":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.13":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.14":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.15":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.10":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.11":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"}},"aliases":{":1":"1.0.19",":1.0":"1.0.19"}},":mootools":{"versions":{":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.5":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.3":"1.3.1",":1.2":"1.2.5",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.9":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.7":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.8":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.12":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.5":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.11":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.6":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.10":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.4":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.8":"1.8.12",":1.7":"1.7.3",":1.6":"1.6.0",":1":"1.8.12",":1.5":"1.5.3",":1.8.3":"1.8.4"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":jquery":{"versions":{":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1":"1.5.2",":1.5":"1.5.2",":1.4":"1.4.4",":1.3":"1.3.2",":1.2":"1.2.6"}},":dojo":{"versions":{":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1":"1.6.0",":1.6":"1.6.0",":1.5":"1.5.1",":1.4":"1.4.3",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}},":prototype":{"versions":{":1.7.0.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.7":"1.7.0.0",":1.6.1":"1.6.1.0",":1":"1.7.0.0",":1.6":"1.6.1.0",":1.7.0":"1.7.0.0",":1.6.0":"1.6.0.3"}}});
}
