// ----------------------------------------------------------------------------
// markItUp! Universal MarkUp Engine, JQuery plugin
// v 1.1.6
// Dual licensed under the MIT and GPL licenses.
// ----------------------------------------------------------------------------
// Copyright (C) 2007-2009 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(3($){$.23.T=3(f,g){B k,v,A,F;v=A=F=l;k={D:\'\',12:\'\',U:\'\',1j:\'\',1B:7,24:\'25\',1k:\'~/2R/1C.1D\',1b:\'\',26:\'27\',1l:7,1E:\'\',1F:\'\',1G:{},1m:{},1n:{},1H:{},28:[{}]};$.V(k,f,g);2(!k.U){$(\'2S\').1c(3(a,b){1I=$(b).14(0).2T.2U(/(.*)2V\\.2W(\\.2X)?\\.2Y$/);2(1I!==29){k.U=1I[1]}})}4 G.1c(3(){B d,u,15,16,p,H,L,P,17,1o,w,2a,M,18;d=$(G);u=G;15=[];18=l;16=p=0;H=-1;k.1b=1d(k.1b);k.1k=1d(k.1k);3 1d(a,b){2(b){4 a.W(/("|\')~\\//g,"$1"+k.U)}4 a.W(/^~\\//,k.U)}3 2b(){D=\'\';12=\'\';2(k.D){D=\'D="\'+k.D+\'"\'}8 2(d.1J("D")){D=\'D="T\'+(d.1J("D").2c(0,1).2Z())+(d.1J("D").2c(1))+\'"\'}2(k.12){12=\'N="\'+k.12+\'"\'}d.1K(\'<z \'+12+\'></z>\');d.1K(\'<z \'+D+\' N="T"></z>\');d.1K(\'<z N="30"></z>\');d.2d("2e");17=$(\'<z N="31"></z>\').2f(d);$(1L(k.28)).1M(17);1o=$(\'<z N="32"></z>\').1N(d);2(k.1l===7&&$.X.33!==7){1l=$(\'<z N="34"></z>\').1N(d).1e("35",3(e){B h=d.2g(),y=e.2h,1p,1q;1p=3(e){d.2i("2g",36.37(20,e.2h+h-y)+"38");4 l};1q=3(e){$("1D").1O("2j",1p).1O("1r",1q);4 l};$("1D").1e("2j",1p).1e("1r",1q)});1o.2k(1l)}d.2l(1P).39(1P);d.1e("1Q",3(e,a){2(a.1s!==l){14()}2(u===$.T.2m){Y(a)}});d.1f(3(){$.T.2m=G})}3 1L(b){B c=$(\'<Z></Z>\'),i=0;$(\'C:2n > Z\',c).2i(\'3a\',\'q\');$.1c(b,3(){B a=G,t=\'\',1t,C,j;1t=(a.19)?(a.1R||\'\')+\' [3b+\'+a.19+\']\':(a.1R||\'\');19=(a.19)?\'2o="\'+a.19+\'"\':\'\';2(a.2p){C=$(\'<C N="3c">\'+(a.2p||\'\')+\'</C>\').1M(c)}8{i++;2q(j=15.6-1;j>=0;j--){t+=15[j]+"-"}C=$(\'<C N="2r 2r\'+t+(i)+\' \'+(a.3d||\'\')+\'"><a 3e="" \'+19+\' 1t="\'+1t+\'">\'+(a.1R||\'\')+\'</a></C>\').1e("3f",3(){4 l}).2s(3(){4 l}).1r(3(){2(a.2t){3g(a.2t)()}Y(a);4 l}).2n(3(){$(\'> Z\',G).3h();$(E).3i(\'2s\',3(){$(\'Z Z\',17).2u()})},3(){$(\'> Z\',G).2u()}).1M(c);2(a.2v){15.3j(i);$(C).2d(\'3k\').2k(1L(a.2v))}}});15.3l();4 c}3 2w(c){2(c){c=c.3m();c=c.W(/\\(\\!\\(([\\s\\S]*?)\\)\\!\\)/g,3(x,a){B b=a.1S(\'|!|\');2(F===7){4(b[1]!==2x)?b[1]:b[0]}8{4(b[1]===2x)?"":b[0]}});c=c.W(/\\[\\!\\[([\\s\\S]*?)\\]\\!\\]/g,3(x,a){B b=a.1S(\':!:\');2(18===7){4 l}1T=3n(b[0],(b[1])?b[1]:\'\');2(1T===29){18=7}4 1T});4 c}4""}3 I(a){2($.3o(a)){a=a(P)}4 2w(a)}3 1g(a){J=I(L.J);1a=I(L.1a);Q=I(L.Q);O=I(L.O);2(Q!==""){q=J+Q+O}8 2(m===\'\'&&1a!==\'\'){q=J+1a+O}8{q=J+(a||m)+O}4{q:q,J:J,Q:Q,1a:1a,O:O}}3 Y(a){B b,j,n,i;P=L=a;14();$.V(P,{1u:"",U:k.U,u:u,m:(m||\'\'),p:p,v:v,A:A,F:F});I(k.1E);I(L.1E);2(v===7&&A===7){I(L.3p)}$.V(P,{1u:1});2(v===7&&A===7){R=m.1S(/\\r?\\n/);2q(j=0,n=R.6,i=0;i<n;i++){2($.3q(R[i])!==\'\'){$.V(P,{1u:++j,m:R[i]});R[i]=1g(R[i]).q}8{R[i]=""}}o={q:R.3r(\'\\n\')};11=p;b=o.q.6+(($.X.1U)?n:0)}8 2(v===7){o=1g(m);11=p+o.J.6;b=o.q.6-o.J.6-o.O.6;b-=1v(o.q)}8 2(A===7){o=1g(m);11=p;b=o.q.6;b-=1v(o.q)}8{o=1g(m);11=p+o.q.6;b=0;11-=1v(o.q)}2((m===\'\'&&o.Q===\'\')){H+=1V(o.q);11=p+o.J.6;b=o.q.6-o.J.6-o.O.6;H=d.K().1h(p,d.K().6).6;H-=1V(d.K().1h(0,p))}$.V(P,{p:p,16:16});2(o.q!==m&&18===l){2y(o.q);1W(11,b)}8{H=-1}14();$.V(P,{1u:\'\',m:m});2(v===7&&A===7){I(L.3s)}I(L.1F);I(k.1F);2(w&&k.1B){1X()}A=F=v=18=l}3 1V(a){2($.X.1U){4 a.6-a.W(/\\n*/g,\'\').6}4 0}3 1v(a){2($.X.2z){4 a.6-a.W(/\\r*/g,\'\').6}4 0}3 2y(a){2(E.m){B b=E.m.1Y();b.2A=a}8{d.K(d.K().1h(0,p)+a+d.K().1h(p+m.6,d.K().6))}}3 1W(a,b){2(u.2B){2($.X.1U&&$.X.3t>=9.5&&b==0){4 l}1i=u.2B();1i.3u(7);1i.2C(\'1Z\',a);1i.3v(\'1Z\',b);1i.3w()}8 2(u.2D){u.2D(a,a+b)}u.1w=16;u.1f()}3 14(){u.1f();16=u.1w;2(E.m){m=E.m.1Y().2A;2($.X.2z){B a=E.m.1Y(),1x=a.3x();1x.3y(u);p=-1;3z(1x.3A(a)){1x.2C(\'1Z\');p++}}8{p=u.2E}}8{p=u.2E;m=d.K().1h(p,u.3B)}4 m}3 1C(){2(!w||w.3C){2(k.1j){w=3D.2F(\'\',\'1C\',k.1j)}8{M=$(\'<2G N="3E"></2G>\');2(k.24==\'25\'){M.1N(1o)}8{M.2f(17)}w=M[M.6-1].3F||3G[M.6-1]}}8 2(F===7){2(M){M.3H()}8{w.2H()}w=M=l}2(!k.1B){1X()}}3 1X(){2I()}3 2I(){B b;2(k.1b!==\'\'){$.2J({2K:\'3I\',2L:k.1b,27:k.26+\'=\'+3J(d.K()),2M:3(a){21(1d(a,1))}})}8{2(!2a){$.2J({2L:k.1k,2M:3(a){21(1d(a,1).W(/<!-- 3K -->/g,d.K()))}})}}4 l}3 21(a){2(w.E){3L{22=w.E.2N.1w}3M(e){22=0}B h="3N";w.E.2F();w.E.3O(a);w.E.2H();w.E.2N.1w=22}2(k.1j){w.1f()}}3 1P(e){A=e.A;F=e.F;v=(!(e.F&&e.v))?e.v:l;2(e.2K===\'2l\'){2(v===7){C=$("a[2o="+3P.3Q(e.1y)+"]",17).1z(\'C\');2(C.6!==0){v=l;C.3R(\'1r\');4 l}}2(e.1y===13||e.1y===10){2(v===7){2O.2P("1n");v=l;Y(k.1n);4 k.1n.1A}8 2(A===7){2O.2P("1m");A=l;Y(k.1m);4 k.1m.1A}8{Y(k.1G);4 k.1G.1A}}2(e.1y===9){2(A==7||v==7||F==7){4 l}2(H!==-1){14();H=d.K().6-H;1W(H,0);H=-1;4 l}8{Y(k.1H);4 k.1H.1A}}}}2b()})};$.23.3S=3(){4 G.1c(3(){$$=$(G).1O().3T(\'2e\');$$.1z(\'z\').1z(\'z.T\').1z(\'z\').Q($$)})};$.T=3(a){B b={1s:l};$.V(b,a);2(b.1s){4 $(b.1s).1c(3(){$(G).1f();$(G).2Q(\'1Q\',[b])})}8{$(\'u\').2Q(\'1Q\',[b])}}})(3U);',62,243,'||if|function|return||length|true|else|||||||||||||false|selection||string|caretPosition|block||||textarea|ctrlKey|previewWindow|||div|shiftKey|var|li|id|document|altKey|this|caretOffset|prepare|openWith|val|clicked|iFrame|class|closeWith|hash|replaceWith|lines||markItUp|root|extend|replace|browser|markup|ul||start|nameSpace||get|levels|scrollPosition|header|abort|key|placeHolder|previewParserPath|each|localize|bind|focus|build|substring|range|previewInWindow|previewTemplatePath|resizeHandle|onShiftEnter|onCtrlEnter|footer|mouseMove|mouseUp|mouseup|target|title|line|fixIeBug|scrollTop|rangeCopy|keyCode|parent|keepDefault|previewAutoRefresh|preview|html|beforeInsert|afterInsert|onEnter|onTab|miuScript|attr|wrap|dropMenus|appendTo|insertAfter|unbind|keyPressed|insertion|name|split|value|opera|fixOperaBug|set|refreshPreview|createRange|character||writeInPreview|sp|fn|previewPosition|after|previewParserVar|data|markupSet|null|template|init|substr|addClass|markItUpEditor|insertBefore|height|clientY|css|mousemove|append|keydown|focused|hover|accesskey|separator|for|markItUpButton|click|call|hide|dropMenu|magicMarkups|undefined|insert|msie|text|createTextRange|moveStart|setSelectionRange|selectionStart|open|iframe|close|renderPreview|ajax|type|url|success|documentElement|console|log|trigger|templates|script|src|match|jquery|markitup|pack|js|toUpperCase|markItUpContainer|markItUpHeader|markItUpFooter|safari|markItUpResizeHandle|mousedown|Math|max|px|keyup|display|Ctrl|markItUpSeparator|className|href|contextmenu|eval|show|one|push|markItUpDropMenu|pop|toString|prompt|isFunction|beforeMultiInsert|trim|join|afterMultiInsert|version|collapse|moveEnd|select|duplicate|moveToElementText|while|inRange|selectionEnd|closed|window|markItUpPreviewFrame|contentWindow|frame|remove|POST|encodeURIComponent|content|try|catch|test|write|String|fromCharCode|triggerHandler|markItUpRemove|removeClass|jQuery'.split('|'),0,{}))