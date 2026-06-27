// Inline, render-blocking locale decision for static hosting (no server middleware).
// Runs before the page paints: a saved manual choice wins; otherwise the browser
// language decides ( Spanish browser -> /es, everything else -> EN root ).

const BOOT = `(function(){try{
var p=location.pathname;
var onEs=p==='/es'||p.indexOf('/es/')===0;
var saved=null;try{saved=localStorage.getItem('lyfion_locale');}catch(e){}
var pref=saved;
if(!pref){var l=(navigator.language||navigator.userLanguage||'').toLowerCase();pref=l.indexOf('es')===0?'es':'en';}
if(pref==='es'&&!onEs){location.replace((p==='/'?'/es':'/es'+p)+location.search+location.hash);}
else if(pref==='en'&&onEs){location.replace((p==='/es'?'/':p.slice(3))+location.search+location.hash);}
}catch(e){}})();`;

export default function LocaleBoot() {
  return <script dangerouslySetInnerHTML={{ __html: BOOT }} />;
}
