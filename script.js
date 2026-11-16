// Builds the page from content.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

  // basics
  $('intro').textContent = S.intro;
  $('gh').href = S.github;
  $('li').href = S.linkedin;
  $('mail1').href = $('mail2').href = 'mailto:' + S.email;
  $('resume').href = S.resume;
  $('photo').src = S.photo;
  $('year').textContent = new Date().getFullYear();

  // little waveform under the photo
  const hw = $('heroWave');
  for (let i = 0; i < 48; i++) {
    const v = Math.abs(Math.sin(i * 0.8 + 0.5) * Math.cos(i * 0.31 + 1.2));
    const b = el('span');
    b.style.height = Math.round(18 + v * 82) + '%';
    b.style.background = i < 18 ? '#FFB13B' : '#3A3D46';
    hw.appendChild(b);
  }

  // tracks
  const list = $('trackList');
  const rows = [];
  let soloIndex = 0;

  function wave(seed, n) {
    const w = el('span', 'wave');
    w.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < n; i++) {
      const v = Math.abs(Math.sin(i * 0.9 + seed) * Math.cos(i * 0.37 + seed * 2));
      const b = el('span');
      b.style.height = Math.round(20 + v * 80) + '%';
      w.appendChild(b);
    }
    return w;
  }

  S.projects.forEach((p, i) => {
    const row = el('div', 'track');
    const head = el('div', 'track-head');
    const sw = el('div', 'swatch'); sw.style.background = p.color;
    const names = el('div'); names.style.flex = '1'; names.style.minWidth = '0';
    names.append(el('div', 'track-name', p.name), el('div', 'track-tag', p.tag));
    const solo = el('button', 'solo', 'S');
    solo.setAttribute('aria-label', 'Solo ' + p.name);
    head.append(sw, names, solo);

    const lane = el('div', 'lane');
    const clip = el('button', 'clip' + (p.wip ? ' wip' : ''));
    clip.setAttribute('aria-label', 'Open ' + p.name);
    clip.style.background = p.color;
    clip.style.marginLeft = (p.left || 0) + '%';
    clip.style.width = (p.width || 40) + '%';
    clip.append(el('span', 'clip-label', slug(p.name) + (p.wip ? ' (wip)' : '') + '.wav'), wave(i * 1.3 + 0.4, 44));
    lane.appendChild(clip);

    row.append(head, lane);
    list.appendChild(row);
    rows.push({ row, solo });
    const pick = () => { setSolo(i); if (window.innerWidth < 800) $('detail').scrollIntoView({ block: 'nearest' }); };
    solo.addEventListener('click', pick);
    clip.addEventListener('click', pick);
  });

  function setSolo(i) {
    soloIndex = i;
    rows.forEach((r, j) => {
      r.row.classList.toggle('on', j === i);
      r.solo.setAttribute('aria-pressed', j === i ? 'true' : 'false');
    });
    const p = S.projects[i];
    const d = $('detail');
    d.style.background = p.color;
    d.innerHTML = '';

    const main = el('div', 'detail-main');
    main.append(el('div', 'mono strong', 'SOLO ▸ ' + p.tag), el('h3', null, p.name), el('p', null, p.blurb));
    const chips = el('div', 'chips');
    (p.tech || []).forEach((t) => chips.appendChild(el('span', 'chip', t)));
    main.appendChild(chips);
    if (p.repo) {
      const a = el('a', null, 'Open the repo →');
      a.href = p.repo; a.target = '_blank'; a.rel = 'noopener';
      main.appendChild(a);
    } else {
      main.appendChild(el('span', 'mono strong', 'repo dropping soon'));
    }

    const side = el('div', 'detail-side');
    const stat = el('div', 'stat');
    stat.append(el('div', 'stat-big', p.stat), el('div', 'stat-label', p.statLabel));
    side.appendChild(stat);
    if (p.media) {
      const img = el('img'); img.src = p.media; img.alt = p.name + ' figure'; img.loading = 'lazy';
      side.appendChild(img);
    }
    if (p.audio) {
      const au = el('audio'); au.controls = true; au.preload = 'none'; au.src = p.audio;
      side.appendChild(au);
    }
    d.append(main, side);
  }
  setSolo(0);

  // mixer
  const ch = $('channels');
  S.experience.forEach((r) => {
    const lvl = r.level || 60;
    const c = el('div', 'channel');
    const cap = el('div', 'cap'); cap.style.background = r.color;
    const who = el('div');
    const role = el('div', 'ch-role', r.role); role.style.color = r.color;
    who.append(el('div', 'ch-org', r.org), role);
    const strip = el('div', 'strip'); strip.setAttribute('aria-hidden', 'true');
    const fader = el('div', 'fader');
    const fc = el('div', 'fader-cap'); fc.style.bottom = lvl + '%';
    fader.appendChild(fc);
    const m = el('div', 'meters');
    [0, 1].forEach((k) => {
      const x = el('div');
      x.style.background = r.color; x.style.opacity = k ? .7 : 1;
      x.style.height = (lvl + 6 - k * 10) + '%';
      m.appendChild(x);
    });
    const db = el('div', 'db', ((lvl - 66) / 8).toFixed(1));
    strip.append(fader, m, db);
    c.append(cap, el('div', 'ch-label', r.label + ' · ' + r.dates), who, el('p', 'ch-desc', r.desc), strip);
    ch.appendChild(c);
  });

  // plugin rack
  const cats = { lang: ['languages', '#FFB13B'], ml: ['machine learning', '#FF7AA8'], dsp: ['audio / DSP', '#3DD6C4'], tool: ['tools', '#C6F25E'] };
  const rack = $('plugins');
  S.skills.forEach((s, i) => {
    const c = cats[s[1]] || cats.tool;
    const p = el('div', 'plugin');
    const k = el('div', 'knob'); k.setAttribute('aria-hidden', 'true');
    k.style.borderColor = c[1];
    k.style.transform = 'rotate(' + (((i * 67) % 270) - 135) + 'deg)';
    const t = el('div'); t.style.minWidth = '0';
    t.append(el('div', 'plugin-name', s[0]), el('div', 'plugin-kind', c[0]));
    p.append(k, t);
    rack.appendChild(p);
  });

  // keyboard: S = solo next track
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 's' || e.key === 'S') setSolo((soloIndex + 1) % S.projects.length);
  });
})();
