/* UX Study Path — app logic (rendering, routing, progress, theme) */
const host = u => { try{ return new URL(u).hostname.replace(/^www\./,""); }catch(e){ return ""; } };
const VTITLE = {}; Object.values(RES).flat().forEach(r => { if(r[0]==="Video") VTITLE[r[2]] = r[1]; });
const PLAY = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.8 L10.2 6 L3 10.2 Z" fill="currentColor"/></svg>';
const PLAY_LG = '<svg width="18" height="18" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5 L10.5 6 L3 10.5 Z" fill="currentColor"/></svg>';
const IC = {
  clock:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 4.6V8l2.4 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  book:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 3.2c2-.8 3.8-.6 5.5.6 1.7-1.2 3.5-1.4 5.5-.6v9.4c-2-.8-3.8-.6-5.5.6-1.7-1.2-3.5-1.4-5.5-.6z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 3.8v9.4" stroke="currentColor" stroke-width="1.5"/></svg>',
  play:'<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.6 5.4l4 2.6-4 2.6z" fill="currentColor"/></svg>',
  pencil:'<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16l1-4 8.5-8.5a1.8 1.8 0 0 1 2.5 2.5L7.5 14.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 5l3 3" stroke="currentColor" stroke-width="1.7"/></svg>'
};
const ck = () => `<span class="ck">${CHECK}</span>`;
const keyList = k => `<ul class="keys">${k.map(x => `<li>${ck()}<span>${esc(x)}</span></li>`).join("")}</ul>`;
const vidBlock = u => { const m = SUM[u] || {}; const vi = VINFO[u] || []; const t = vi[0] || VTITLE[u] || "Related video";
  return `<a class="vcard" href="${u}" target="_blank" rel="noopener"><span class="thumb"><span class="pbtn">${PLAY_LG}</span>${vi[1] ? `<span class="dur">${vi[1]}</span>` : ""}</span>` +
    `<span class="vbody"><span class="vlabel">Watch · ${host(u)} ↗</span><span class="vtitle">${esc(t)}</span>${m.s ? `<span class="vsum">${esc(m.s)}</span>` : ""}${m.k && m.k.length ? keyList(m.k) : ""}</span></a>`; };
const resItem = r => { const m = SUM[r[2]]; const vids = ATTACH[r[2]] || [];
  return `<li class="story"><div class="rmeta"><span class="rtype t-${r[0].toLowerCase()}">${r[0]}</span><span class="rhost">${host(r[2])}</span>${vids.length ? `<span class="vbadge">${PLAY} ${vids.length} video${vids.length > 1 ? "s" : ""}</span>` : ""}</div>` +
    `<a class="rtitle" href="#${rid(r[2])}">${esc(r[1])}</a>` +
    (m ? `<p class="rsum">${esc(m.s)}</p>${m.k.length ? `<div class="kbox"><p class="klabel">Key takeaways</p>${keyList(m.k)}</div>` : ""}` : "") +
    `<div class="r-links"><a class="r-read" href="#${rid(r[2])}">${NOTES[r[2]] ? "Read full study notes" : "Open notes"} →</a><a class="r-orig" href="${r[2]}" target="_blank" rel="noopener">Original on ${host(r[2])} ↗</a></div>` +
    vids.map(vidBlock).join("") + `</li>`; };
const libItem = r => { const m = SUM[r[2]];
  return `<li class="lcard"><div class="rmeta"><span class="rtype t-${r[0].toLowerCase()}">${r[0]}</span><span class="rhost">${host(r[2])}</span></div>` +
    `<a class="rtitle" href="#${rid(r[2])}">${esc(r[1])}</a>` +
    (m ? `<p class="rsum">${esc(m.s)}</p>` : "") +
    `<div class="r-links"><a class="r-read" href="#${rid(r[2])}">Read study notes →</a><a class="r-orig" href="${r[2]}" target="_blank" rel="noopener">Original ↗</a></div></li>`; };
const lessonRes = id => { const list = RES[id] || []; const inList = new Set(list.flatMap(a => ATTACH[a[2]] || []));
  return list.filter(r => !(r[0] === "Video" && inList.has(r[2]))); };

/* ---------- derived data ---------- */
const LESSONS = [];
MODULES.forEach((m, mi) => m.lessons.forEach((l, li) => { l.mi = mi; l.n = (mi+1)+"."+(li+1); LESSONS.push(l); }));
const byId = Object.fromEntries(LESSONS.map(l => [l.id, l]));
const PHASES = [
  {name:"Discover", mods:[1,2]}, {name:"Define", mods:[3,4]},
  {name:"Develop", mods:[5,6,7]}, {name:"Deliver", mods:[8,9]}
];
const TOTAL_MIN = LESSONS.reduce((s,l)=>s+l.min,0);

/* ---------- per-device storage (convenience only) ---------- */
function load(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } }
function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
const done = new Set(load("uxsp.done", []));
const notes = load("uxsp.notes", {});
let last = load("uxsp.last", null);

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad = n => String(n).padStart(2,"0");
const CHECK = '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5.2 L4.2 7.3 L8 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const modDone = m => m.lessons.filter(l => done.has(l.id)).length;

/* ---------- outline rail ---------- */
function renderRail(){
  const q = $("#q").value.trim().toLowerCase();
  const cur = location.hash.slice(1);
  const curMod = byId[cur] ? byId[cur].mi : -1;
  let html = "", hits = 0;
  MODULES.forEach((m, mi) => {
    const ls = q ? m.lessons.filter(l => (l.t+" "+l.what+" "+l.steps.join(" ")+" "+(RES[l.id]||[]).map(r=>r[1]+" "+((SUM[r[2]]||{}).s||"")).join(" ")).toLowerCase().includes(q)) : m.lessons;
    if(!ls.length) return;
    hits += ls.length;
    const c = modDone(m);
    const open = q || mi === curMod || (curMod === -1 && mi === 0);
    html += `<details data-ph="${m.phase}" ${open?"open":""}><summary><span class="mnum">${pad(mi+1)}</span><span class="mtitle">${esc(m.t)}</span><span class="mcount ${c===m.lessons.length?"full":""}">${c}/${m.lessons.length}</span></summary><ul>` +
      ls.map(l => `<li><a class="lesson-link ${done.has(l.id)?"is-done":""}" href="#${l.id}" ${l.id===cur?'aria-current="page"':""}><span class="tick">${CHECK}</span><span>${esc(l.t)}</span></a></li>`).join("") +
      `</ul></details>`;
  });
  $("#rail").innerHTML = railThemeHTML() + html;
  if(!hits){
    const p = document.createElement("p"); p.className = "rail-empty";
    p.textContent = `No lessons match “${$("#q").value.trim()}”. Try a method name like “card sorting” or “personas”.`;
    $("#rail").appendChild(p);
  }
}

function renderProgress(){
  const pct = Math.round(done.size / LESSONS.length * 100);
  $("#ring").style.setProperty("--p", pct);
  $("#progText").textContent = `${done.size} / ${LESSONS.length}`;
}

/* ---------- home ---------- */
function renderHome(){
  document.title = "UX Study Path";
  const pct = Math.round(done.size / LESSONS.length * 100);
  const lastL = last && byId[last];
  const firstOpen = LESSONS.find(l => !done.has(l.id));
  const cont = lastL && !done.has(lastL.id) ? lastL : firstOpen;
  const startIdx = cont ? LESSONS.indexOf(cont) : 0;
  const upNext = LESSONS.slice(startIdx).filter(l => !done.has(l.id)).slice(0, 3);
  const minLeft = LESSONS.filter(l => !done.has(l.id)).reduce((s, l) => s + l.min, 0);
  const allRes = Object.values(RES).flat();
  const readCount = new Set(allRes.filter(r => r[0] !== "Video").map(r => r[2])).size;
  const vidCount = new Set([...allRes.filter(r => r[0] === "Video").map(r => r[2]), ...ATTACHED]).size;
  const halves = [
    {p:PHASES[0], pts:"20,125 210,30 210,220", x:128},
    {p:PHASES[1], pts:"210,30 400,125 210,220", x:292},
    {p:PHASES[2], pts:"420,125 610,30 610,220", x:528},
    {p:PHASES[3], pts:"610,30 800,125 610,220", x:692}
  ];
  const phasePct = ph => { const ls = ph.mods.flatMap(i => MODULES[i].lessons); return Math.round(ls.filter(l=>done.has(l.id)).length/ls.length*100); };
  const svg = `<svg viewBox="0 0 820 250" role="group" aria-label="Double Diamond: choose a phase">` +
    halves.map(h => `<a data-ph="${h.p.name}" href="#${MODULES[h.p.mods[0]].lessons[0].id}" aria-label="${h.p.name}: start module ${h.p.mods[0]+1}"><polygon class="half" points="${h.pts}"/><text x="${h.x}" y="128">${h.p.name}</text><text class="pct" x="${h.x}" y="156">${phasePct(h.p)}%</text></a>`).join("") +
    `</svg>`;
  const legend = PHASES.map(ph => `<div data-ph="${ph.name}"><b>${ph.name}</b>${ph.mods.map(i => esc(MODULES[i].t)).join(", ")}</div>`).join("");
  const rows = MODULES.map((m, mi) => {
    const c = modDone(m), mp = Math.round(c/m.lessons.length*100);
    const mins = m.lessons.reduce((s, l) => s + l.min, 0);
    const target = m.lessons.find(l => !done.has(l.id)) || m.lessons[0];
    return `<li><a class="mod-row" data-ph="${m.phase}" href="#${target.id}"><span class="num">${pad(mi+1)}</span><span><span class="t">${esc(m.t)}</span><span class="d">${esc(m.d)}</span></span><span class="chip">${m.phase}</span><span class="p"><span>${c}/${m.lessons.length} done · ${mins} min</span><span class="bar"><i style="width:${mp}%"></i></span></span></a></li>`;
  }).join("");
  $("#main").innerHTML = `
  <div class="home">
    <section class="hero">
      <div class="hero-text">
        <div class="eyebrow">A field course in user experience design</div>
        <h1>UX design, from first interview to <em>final handoff</em>.</h1>
        <p class="hero-p">Every method you need, in the order you’ll use it. Each lesson gives you the steps, what you should end up with, common mistakes, an exercise, and summaries of the best articles and videos on the topic.</p>
        <div class="actions">
          ${cont ? `<a class="btn primary" href="#${cont.id}">${done.size || lastL ? "Continue" : "Start the path"} →</a>` : `<a class="btn primary" href="#${LESSONS[0].id}">Review from lesson 1.1</a>`}
          <a class="btn" href="#${LESSONS[0].id}">Lesson 1.1</a>
        </div>
      </div>
      <aside class="upnext" aria-label="Your progress">
        <div class="up-top"><div class="ring-lg" style="--p:${pct}"><span>${pct}%</span></div><div><b>${done.size} of ${LESSONS.length} lessons</b><small>${done.size === LESSONS.length ? "Path complete" : `About ${Math.round(minLeft/60)} hours to go`}</small></div></div>
        ${upNext.length ? `<p class="up-label">Up next</p><ol class="up-list">${upNext.map(l => `<li><a data-ph="${MODULES[l.mi].phase}" href="#${l.id}"><span class="up-n">${l.n}</span><span class="up-t">${esc(l.t)}</span><span class="up-m">${l.min} min</span></a></li>`).join("")}</ol>` : ""}
      </aside>
    </section>

    <section class="stats" aria-label="Course at a glance">
      <div class="stat"><b>${LESSONS.length}</b><span>Lessons</span></div>
      <div class="stat"><b>${MODULES.length}</b><span>Modules</span></div>
      <div class="stat"><b>${readCount}</b><span>Summarised readings</span></div>
      <div class="stat"><b>${vidCount}</b><span>Videos</span></div>
      <div class="stat"><b>~${Math.round(TOTAL_MIN/60)} h</b><span>Study time</span></div>
    </section>

    <section class="panel">
      <div class="panel-head"><div><h2>Where each module fits</h2><p class="sub">The path follows the Double Diamond. Module 1 lays the foundations and module 11 turns your work into a portfolio. Select a phase to jump in.</p></div></div>
      <div class="dd-wrap">
        <div class="dd-space"><span>Find the right problem</span><span>Find the right solution</span></div>
        <div class="dd">${svg}</div>
        <div class="dd-legend">${legend}</div>
      </div>
    </section>

    <section class="panel">
      <div class="panel-head"><div><h2>Syllabus</h2><p class="sub">Work through it in order, or jump to the module you need.</p></div></div>
      <ol class="syllabus">${rows}</ol>
    </section>

    <section class="panel">
      <div class="panel-head"><div><h2>Study library</h2><p class="sub">Full courses, free books and references for the whole path. Every lesson also has its own summarised readings and videos.</p></div></div>
      <div class="lib">${LIBRARY.map(g => `<div class="lib-group"><h3>${g.h}</h3><ul class="lib-grid">${g.items.map(libItem).join("")}</ul></div>`).join("")}</div>
    </section>
  </div>`;
}

/* ---------- lesson ---------- */
function renderLesson(l){
  const m = MODULES[l.mi];
  const i = LESSONS.indexOf(l);
  const j = m.lessons.indexOf(l);
  const prev = LESSONS[i-1], next = LESSONS[i+1];
  const isDone = done.has(l.id);
  const items = lessonRes(l.id);
  const nVid = items.reduce((a, r) => a + (ATTACH[r[2]] || []).length + (r[0] === "Video" ? 1 : 0), 0);
  const nRead = items.filter(r => r[0] !== "Video").length;
  document.title = l.t + " · UX Study Path";
  last = l.id; save("uxsp.last", last); readerFrom = l.id;
  const subBits = [`${l.min} min study`];
  if(nRead) subBits.push(`${nRead} reading${nRead>1?"s":""}`);
  $("#main").innerHTML = `
  <article class="post" data-ph="${m.phase}">
    <header class="post-head">
      <div class="crumb"><a href="#${m.lessons[0].id}">Module ${l.mi+1} · ${esc(m.t)}</a><span class="chip">${m.phase}</span></div>
      <h1 class="post-title">${esc(l.t)}</h1>
      <p class="post-lead">${esc(l.what)}</p>
      <div class="byline">
        <span class="bl-badge">${l.n}</span>
        <span class="bl-text"><span class="bl-top">Lesson ${l.n} · ${j+1} of ${m.lessons.length} in this module</span><span class="bl-sub">${subBits.join(" · ")}${nVid ? ` · <span class="v">${nVid} video${nVid>1?"s":""}</span>` : ""}</span></span>
        <button class="btn-done" id="doneBtn" aria-pressed="${isDone}"><span class="tick">${CHECK}</span>${isDone?"Completed":"Mark as complete"}</button>
      </div>
      <div class="modbar" aria-label="Lessons in this module">${m.lessons.map(x => `<a class="seg ${x.id===l.id?"cur":""} ${done.has(x.id)?"dn":""}" href="#${x.id}" title="${x.n} ${esc(x.t)}"><span class="sr">${x.n} ${esc(x.t)}</span></a>`).join("")}</div>
    </header>
    <nav class="jump" aria-label="On this page">
      <button data-go="s-how">How it works</button>
      ${items.length ? `<button data-go="s-study">Study material <span class="count">${items.length}</span></button>` : ""}
      <button data-go="s-practice">Practice & notes</button>
    </nav>
    <div class="post-body">
      <section class="l-sec" id="s-how">
        <h2 class="l-h2">How it works</h2>
        <blockquote class="when"><span class="lbl">Use it when</span><p>${esc(l.when)}</p></blockquote>
        <h3 class="l-h3">Steps</h3>
        <ol class="steps">${l.steps.map(s=>`<li><span>${esc(s)}</span></li>`).join("")}</ol>
        <div class="callouts">
          <div class="note"><span class="lbl">You'll produce</span><p>${esc(l.out)}</p></div>
          <div class="avoid-card"><span class="lbl">Avoid</span><ul class="avoid">${l.avoid.map(a=>`<li><span>${esc(a)}</span></li>`).join("")}</ul></div>
        </div>
      </section>
      ${items.length ? `<section class="l-sec" id="s-study">
        <h2 class="l-h2">Study material <span class="count">${items.length}</span></h2>
        <p class="l-sub">The best articles and guides on this method, with related videos attached. Open any title to read full study notes right here; the original link is always there too.</p>
        <ul class="feed">${items.map(resItem).join("")}</ul>
      </section>` : ""}
      <section class="l-sec" id="s-practice">
        <h2 class="l-h2">Practice</h2>
        <div class="try"><span class="try-ic">${IC.pencil}</span><div><span class="lbl">Try it</span><p>${esc(l.try)}</p></div></div>
        <div class="notes"><label class="lbl" for="noteBox">Your notes</label><textarea id="noteBox" placeholder="Key takeaways, links, where you'd use this…"></textarea><small>Saved in this browser only.</small></div>
      </section>
      <nav class="pager" aria-label="Lesson navigation">
        ${prev ? `<a href="#${prev.id}"><small>← Previous · ${prev.n}</small><span>${esc(prev.t)}</span></a>` : ""}
        ${next ? `<a class="next" href="#${next.id}"><small>Next · ${next.n} →</small><span>${esc(next.t)}</span></a>` : `<a class="next" href="#"><small>Finished the path</small><span>Back to the course map</span></a>`}
      </nav>
    </div>
  </article>`;
  const box = $("#noteBox");
  box.value = notes[l.id] || "";
  let tmr;
  box.addEventListener("input", () => { clearTimeout(tmr); tmr = setTimeout(() => { notes[l.id] = box.value; save("uxsp.notes", notes); }, 300); });
  $("#doneBtn").addEventListener("click", () => {
    done.has(l.id) ? done.delete(l.id) : done.add(l.id);
    save("uxsp.done", [...done]);
    const y = window.scrollY;
    renderLesson(l); renderRail(); renderProgress();
    window.scrollTo(0, y);
  });
  document.querySelectorAll(".jump [data-go]").forEach(b => b.addEventListener("click", () => {
    const t = document.getElementById(b.dataset.go);
    if(t) t.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start"});
  }));
}

/* ---------- theme: light / dark / system ---------- */
const THEME_IC = {
  light:'<svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10 1.8v2.1M10 16.1v2.1M1.8 10h2.1M16.1 10h2.1M4.2 4.2l1.5 1.5M14.3 14.3l1.5 1.5M4.2 15.8l1.5-1.5M14.3 5.7l1.5-1.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  dark:'<svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  system:'<svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="10" rx="1.8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7 17h6M10 13.5V17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
};
const THEME_LABEL = {light:"Light", dark:"Dark", system:"Match system"};
let mode = load("uxsp.mode", "system");
if(!THEME_LABEL[mode]) mode = "system";
function applyMode(){
  const root = document.documentElement;
  if(mode === "system") root.removeAttribute("data-mode"); else root.setAttribute("data-mode", mode);
  const btn = $("#themeBtn");
  if(btn){ btn.innerHTML = THEME_IC[mode]; btn.setAttribute("aria-label", `Appearance: ${THEME_LABEL[mode]}`); btn.title = `Appearance: ${THEME_LABEL[mode]}`; }
  document.querySelectorAll("[data-mode-opt]").forEach(o => o.setAttribute("aria-checked", String(o.dataset.modeOpt === mode)));
}
function setMode(v){ mode = v; save("uxsp.mode", mode); applyMode(); }
function themeMenuHTML(){
  return `<p>Appearance</p>` + ["light","dark","system"].map(k => `<button class="theme-opt" role="menuitemradio" data-mode-opt="${k}" aria-checked="${k===mode}">${THEME_IC[k]}<span>${THEME_LABEL[k]}</span><span class="on">${CHECK}</span></button>`).join("");
}
function railThemeHTML(){
  return `<div class="rail-theme" role="radiogroup" aria-label="Appearance">` + ["light","dark","system"].map(k => `<button role="radio" data-mode-opt="${k}" aria-checked="${k===mode}">${THEME_IC[k]}${k==="system"?"Auto":THEME_LABEL[k]}</button>`).join("") + `</div>`;
}
(function initTheme(){
  const btn = $("#themeBtn"), menu = $("#themeMenu");
  menu.innerHTML = themeMenuHTML();
  const close = () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", e => { e.stopPropagation(); const open = menu.hidden; menu.hidden = !open; btn.setAttribute("aria-expanded", String(open)); if(open) menu.querySelector('[aria-checked="true"]')?.focus(); });
  document.addEventListener("click", e => {
    const opt = e.target.closest("[data-mode-opt]");
    if(opt){ setMode(opt.dataset.modeOpt); if(menu.contains(opt)) close(); return; }
    if(!menu.hidden && !menu.contains(e.target)) close();
  });
  document.addEventListener("keydown", e => { if(e.key === "Escape" && !menu.hidden){ close(); btn.focus(); } });
  applyMode();
})();

/* ---------- in-app reader ---------- */
const rid = u => { let h = 5381; for(let i = 0; i < u.length; i++) h = ((h << 5) + h + u.charCodeAt(i)) >>> 0; return "r-" + h.toString(36); };
const RID = {}, RINFO = {};
(function indexResources(){
  const add = (r, lessonId) => { const id = rid(r[2]); RID[id] = r[2]; if(!RINFO[r[2]]) RINFO[r[2]] = {type:r[0], title:r[1], lessons:[]}; if(lessonId && !RINFO[r[2]].lessons.includes(lessonId)) RINFO[r[2]].lessons.push(lessonId); };
  Object.entries(RES).forEach(([lid, list]) => list.forEach(r => add(r, lid)));
  LIBRARY.forEach(g => g.items.forEach(r => add(r, null)));
  Object.values(ATTACH).flat().forEach(u => { if(!RINFO[u]) add(["Video", (VINFO[u]||[])[0] || VTITLE[u] || "Video", u], null); });
})();
let readerFrom = null;
const wordsIn = n => [n.o, ...(n.i||[]).flat(), ...(n.a||[]), ...(n.t||[]).flat()].join(" ").split(/\s+/).length;

function renderReader(url){
  const info = RINFO[url] || {type:"Article", title:url, lessons:[]};
  const n = NOTES[url], s = SUM[url] || {};
  const fromId = (readerFrom && (RES[readerFrom]||[]).some(r => r[2] === url)) ? readerFrom : info.lessons[0];
  const lesson = fromId ? byId[fromId] : null;
  const m = lesson ? MODULES[lesson.mi] : null;
  const list = lesson ? lessonRes(lesson.id) : LIBRARY.flatMap(g => g.items);
  const idx = list.findIndex(r => r[2] === url);
  const prev = idx > 0 ? list[idx-1] : null, next = idx >= 0 && idx < list.length-1 ? list[idx+1] : null;
  const isVideo = info.type === "Video";
  const mins = n ? Math.max(2, Math.round(wordsIn(n) / 200)) : 1;
  const vids = ATTACH[url] || [];
  document.title = info.title + " · UX Study Path";
  $("#main").innerHTML = `
  <article class="post reader" ${m ? `data-ph="${m.phase}"` : ""}>
    <header class="post-head">
      <div class="crumb">${lesson ? `<a href="#${lesson.id}">← Lesson ${lesson.n} · ${esc(lesson.t)}</a>` : `<a href="#">← Study library</a>`}</div>
      <div class="r-kicker"><span class="rtype t-${info.type.toLowerCase()}">${info.type}</span><span class="rhost">${host(url)}</span></div>
      <h1 class="post-title">${esc(info.title)}</h1>
      ${s.s ? `<p class="post-lead">${esc(s.s)}</p>` : ""}
      <div class="byline">
        <span class="bl-badge src">${esc(host(url).charAt(0).toUpperCase())}</span>
        <span class="bl-text"><span class="bl-top">Study notes from ${esc(host(url))}</span><span class="bl-sub">${n ? `${mins} min read` : "Summary"}${vids.length ? ` · <span class="v">${vids.length} related video${vids.length>1?"s":""}</span>` : ""}</span></span>
        <a class="btn-orig" href="${url}" target="_blank" rel="noopener">${isVideo ? "Watch video" : "Read original"} ↗</a>
      </div>
    </header>
    <div class="post-body">
      ${s.k && s.k.length ? `<section class="l-sec tight"><div class="kbox tldr"><p class="klabel">Key takeaways</p>${keyList(s.k)}</div></section>` : ""}
      ${n ? `
      <section class="l-sec"><h2 class="l-h2">Overview</h2><p class="r-p">${esc(n.o)}</p></section>
      ${(n.i||[]).length ? `<section class="l-sec"><h2 class="l-h2">Key ideas</h2><div class="ideas">${n.i.map((x, k) => `<div class="idea"><h3 class="idea-h"><span class="idea-n">${k+1}</span>${esc(x[0])}</h3><p class="r-p">${esc(x[1])}</p></div>`).join("")}</div></section>` : ""}
      ${(n.a||[]).length ? `<section class="l-sec"><h2 class="l-h2">How to apply it</h2><ol class="steps">${n.a.map(a => `<li><span>${esc(a)}</span></li>`).join("")}</ol></section>` : ""}
      ${(n.t||[]).length ? `<section class="l-sec"><h2 class="l-h2">Key terms</h2><dl class="terms">${n.t.map(t => `<div><dt>${esc(t[0])}</dt><dd>${esc(t[1])}</dd></div>`).join("")}</dl></section>` : ""}
      ` : isVideo ? `<section class="l-sec"><p class="r-p">This is a short video. The summary and key takeaways above cover its main points; watch it on ${esc(host(url))} for the full explanation.</p></section>` : ""}
      ${vids.length ? `<section class="l-sec"><h2 class="l-h2">Related video${vids.length>1?"s":""}</h2>${vids.map(vidBlock).join("")}</section>` : ""}
      <aside class="src-note">These study notes are written in our own words from the original ${isVideo ? "video" : "piece"}, so wording and emphasis are ours. For the full ${isVideo ? "video" : "text, examples and images"}, ${isVideo ? "watch" : "read"} it on <a href="${url}" target="_blank" rel="noopener">${esc(host(url))} ↗</a>.</aside>
      <nav class="pager" aria-label="Study material navigation">
        ${prev ? `<a href="#${rid(prev[2])}"><small>← Previous${lesson ? " in this lesson" : ""}</small><span>${esc(prev[1])}</span></a>` : (lesson ? `<a href="#${lesson.id}"><small>← Back to lesson</small><span>${esc(lesson.t)}</span></a>` : "")}
        ${next ? `<a class="next" href="#${rid(next[2])}"><small>Next${lesson ? " in this lesson" : ""} →</small><span>${esc(next[1])}</span></a>` : (lesson ? `<a class="next" href="#${lesson.id}"><small>Done · back to lesson</small><span>${esc(lesson.t)}</span></a>` : "")}
      </nav>
    </div>
  </article>`;
}

/* ---------- routing ---------- */
function route(){
  const id = location.hash.slice(1);
  document.body.classList.remove("nav-open");
  $("#outlineBtn").setAttribute("aria-expanded","false");
  if(byId[id]) renderLesson(byId[id]); else if(RID[id]) renderReader(RID[id]); else renderHome();
  renderRail(); renderProgress();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange", route);
$("#q").addEventListener("input", () => {
  renderRail();
  if($("#q").value.trim() && matchMedia("(max-width: 900px)").matches){ document.body.classList.add("nav-open"); $("#outlineBtn").setAttribute("aria-expanded","true"); }
});
$("#q").addEventListener("keydown", e => {
  if(e.key === "Enter"){ const a = $("#rail .lesson-link"); if(a){ location.hash = a.getAttribute("href"); } }
  if(e.key === "Escape"){ $("#q").value = ""; renderRail(); }
});
$("#outlineBtn").addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  $("#outlineBtn").setAttribute("aria-expanded", String(open));
});
route();
