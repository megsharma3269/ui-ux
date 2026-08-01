/* ============================================================
   trueX — app interactions
   Navigation · live-ish rates · converter · currency picker ·
   exchange confirm + success. No dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- currency data (mid-market vs USD) ---------- */
  const CUR = {
    USD: { flag: '🇺🇸', name: 'US Dollar',        rate: 1,       sym: '$' },
    EUR: { flag: '🇪🇺', name: 'Euro',             rate: 0.9200,  sym: '€' },
    GBP: { flag: '🇬🇧', name: 'British Pound',    rate: 0.7850,  sym: '£' },
    JPY: { flag: '🇯🇵', name: 'Japanese Yen',     rate: 156.30,  sym: '¥' },
    AUD: { flag: '🇦🇺', name: 'Australian Dollar',rate: 1.5200,  sym: '$' },
    CAD: { flag: '🇨🇦', name: 'Canadian Dollar',  rate: 1.3700,  sym: '$' },
    CHF: { flag: '🇨🇭', name: 'Swiss Franc',      rate: 0.8850,  sym: 'Fr' },
    CNY: { flag: '🇨🇳', name: 'Chinese Yuan',     rate: 7.2400,  sym: '¥' },
    INR: { flag: '🇮🇳', name: 'Indian Rupee',     rate: 83.500,  sym: '₹' },
    SGD: { flag: '🇸🇬', name: 'Singapore Dollar', rate: 1.3500,  sym: '$' },
    AED: { flag: '🇦🇪', name: 'UAE Dirham',       rate: 3.6700,  sym: 'د.إ' },
    THB: { flag: '🇹🇭', name: 'Thai Baht',        rate: 36.200,  sym: '฿' },
    MXN: { flag: '🇲🇽', name: 'Mexican Peso',     rate: 18.700,  sym: '$' }
  };
  const WALLET = ['USD', 'EUR', 'GBP', 'JPY', 'AUD']; // currencies the traveler holds

  const state = {
    from: 'USD',
    to: 'EUR',
    base: 'USD',
    amount: 600,
    picking: null,        // 'from' | 'to' | 'base'
  };

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function crossRate(from, to) {
    // rates are per-USD, so: amount_from -> USD -> to
    return CUR[to].rate / CUR[from].rate;
  }
  function fmt(n, code) {
    const dp = CUR[code] && (CUR[code].rate >= 20 || code === 'JPY') ? 0 : 2;
    return n.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  }
  function haptic() {
    if (navigator.vibrate) { try { navigator.vibrate(8); } catch (e) {} }
  }

  /* ---------- navigation ---------- */
  const screens = {};
  $$('.screen').forEach(s => { screens[s.dataset.screen] = s; });
  let current = 'splash';

  function go(name) {
    if (!screens[name] || name === current) {
      if (name === current) return;
    }
    if (!screens[name]) return;
    screens[current].hidden = true;
    screens[current].classList.remove('is-active');
    const el = screens[name];
    el.hidden = false;
    // restart entrance animation
    el.classList.remove('is-active');
    void el.offsetWidth;
    el.classList.add('is-active');
    if (el.querySelector('.app-body')) el.querySelector('.app-body').scrollTop = 0;
    current = name;
    syncTabs();
    haptic();
  }

  // any element with data-go
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-go]');
    if (!t) return;
    go(t.dataset.go);
  });

  function syncTabs() {
    $$('.tab').forEach(tab => {
      tab.classList.toggle('is-active', tab.dataset.go === current);
    });
  }

  // mirror the tabbar markup into screens that requested it
  const tabTemplate = $('#tabbar');
  $$('.tabbar[data-mirror]').forEach(nav => { nav.innerHTML = tabTemplate.innerHTML; });

  /* ---------- splash ---------- */
  const splashScreen = screens.splash;
  let splashDone = false;
  function leaveSplash() {
    if (splashDone) return;
    splashDone = true;
    go('create');
  }
  $('#splashCta').addEventListener('click', e => { e.stopPropagation(); leaveSplash(); });
  splashScreen.addEventListener('click', e => {
    // let the CTA handle its own click; tapping elsewhere skips
    if (e.target.closest('#splashCta')) return;
    leaveSplash();
  });
  // auto-advance after the intro plays
  setTimeout(() => { if (current === 'splash') { /* wait for user */ } }, 4200);

  /* ---------- converter ---------- */
  const fromAmount = $('#fromAmount');
  const toAmount = $('#toAmount');
  const heroRate = $('#heroRate');
  const heroTrend = $('#heroTrend');
  const feeLine = $('#feeLine');
  const FEE = 0.004;

  function renderChips() {
    // update from/to chips + base chip flags & codes
    $$('.cur-chip').forEach(chip => {
      const which = chip.dataset.cur;
      const code = state[which];
      if (!code) return;
      chip.querySelector('[data-flag]').textContent = CUR[code].flag;
      chip.querySelector('[data-code]').textContent = code;
    });
  }

  function computeConversion() {
    const a = parseFloat(String(fromAmount.value).replace(/[^0-9.]/g, '')) || 0;
    state.amount = a;
    const rate = crossRate(state.from, state.to);
    const gross = a * rate;
    const net = gross * (1 - FEE);
    toAmount.textContent = fmt(net, state.to);
    heroRate.textContent = `1 ${state.from} = ${crossRate(state.from, state.to).toFixed(4)} ${state.to}`;
    const saved = (gross * FEE * (CUR[state.from].rate / CUR[state.to].rate)); // rough "vs bank"
    feeLine.textContent = `trueX fee ${(FEE * 100).toFixed(1)}% · you get ${CUR[state.to].sym}${fmt(net, state.to)} · no hidden markup`;
  }

  fromAmount.addEventListener('input', () => {
    // keep it numeric-ish while typing
    computeConversion();
  });
  fromAmount.addEventListener('blur', () => {
    const a = parseFloat(String(fromAmount.value).replace(/[^0-9.]/g, '')) || 0;
    fromAmount.value = a ? String(a) : '0';
    computeConversion();
  });

  const swapBtn = $('#swapBtn');
  swapBtn.addEventListener('click', () => {
    swapBtn.classList.toggle('spin');
    [state.from, state.to] = [state.to, state.from];
    renderChips();
    computeConversion();
    haptic();
  });

  /* ---------- live-ish rate ticker ---------- */
  function jitterRates() {
    Object.keys(CUR).forEach(code => {
      if (code === 'USD') return;
      const drift = 1 + (Math.random() - 0.5) * 0.0025; // ±0.25%
      CUR[code].rate *= drift;
      CUR[code].chg = (CUR[code].chg || 0) * 0.6 + (drift - 1) * 100 * 0.4;
    });
    computeConversion();
    buildQuickRail();
    buildRateList();
    const upPct = (0.02 + Math.random() * 0.28).toFixed(2);
    heroTrend.textContent = `▲ ${upPct}% today · updated just now`;
    const ru = $('#ratesUpdated'); if (ru) ru.textContent = 'updated just now';
  }

  /* ---------- quick rate strip ---------- */
  const quickRail = $('#quickRail');
  function buildQuickRail() {
    if (!quickRail) return;
    const list = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'SGD'];
    quickRail.innerHTML = list.map(code => {
      const chg = CUR[code].chg || 0;
      const cls = chg >= 0 ? 'up' : 'down';
      const arr = chg >= 0 ? '▲' : '▼';
      return `<div class="rate-pill">
        <span class="rp-top"><span>${CUR[code].flag}</span>${code}</span>
        <span class="rp-val">${CUR[code].rate.toFixed(CUR[code].rate >= 20 ? 2 : 4)}</span>
        <span class="rp-chg ${cls}">${arr} ${Math.abs(chg).toFixed(2)}%</span>
      </div>`;
    }).join('');
  }

  /* ---------- rates list ---------- */
  const rateList = $('#rateList');
  function buildRateList() {
    if (!rateList) return;
    rateList.innerHTML = Object.keys(CUR).filter(c => c !== state.base).map(code => {
      const r = crossRate(state.base, code);
      const chg = CUR[code].chg || 0;
      const cls = chg >= 0 ? 'up' : 'down';
      const arr = chg >= 0 ? '▲' : '▼';
      return `<li class="rate-item">
        <span class="flag">${CUR[code].flag}</span>
        <div><div class="ri-code">${code}</div><div class="ri-name">${CUR[code].name}</div></div>
        <div class="ri-right">
          <div class="ri-val">${r.toFixed(r >= 20 ? 2 : 4)}</div>
          <div class="ri-chg ${cls}">${arr} ${Math.abs(chg).toFixed(2)}%</div>
        </div>
      </li>`;
    }).join('');
  }

  /* ---------- wallet list ---------- */
  const walletList = $('#walletList');
  const HOLDINGS = { USD: 8250, EUR: 2140, GBP: 640, JPY: 92000, AUD: 380 };
  function buildWallet() {
    if (!walletList) return;
    walletList.innerHTML = WALLET.map(code => {
      const bal = HOLDINGS[code] || 0;
      const usd = bal / CUR[code].rate;
      return `<li class="wallet-item">
        <span class="flag">${CUR[code].flag}</span>
        <div><div class="wi-code">${code}</div><div class="wi-sub">${CUR[code].name}</div></div>
        <div class="wi-right">
          <div class="wi-bal">${CUR[code].sym}${fmt(bal, code)}</div>
          <div class="wi-fiat">≈ $${fmt(usd, 'USD')}</div>
        </div>
      </li>`;
    }).join('');
  }

  /* ---------- currency picker sheet ---------- */
  const scrim = $('#scrim');
  const curSheet = $('#curSheet');
  const curList = $('#curList');
  const curSearch = $('#curSearch');

  function openSheet(sheet) {
    scrim.hidden = false;
    sheet.hidden = false;
    sheet.classList.remove('closing');
  }
  function closeSheet(sheet) {
    sheet.classList.add('closing');
    scrim.hidden = true;
    setTimeout(() => { sheet.hidden = true; sheet.classList.remove('closing'); }, 260);
  }

  function buildCurList(filter = '') {
    const f = filter.trim().toUpperCase();
    const active = state[state.picking];
    curList.innerHTML = Object.keys(CUR)
      .filter(code => code.includes(f) || CUR[code].name.toUpperCase().includes(f))
      .map(code => `<li class="sheet-item ${code === active ? 'sel' : ''}" data-pick="${code}">
        <span class="flag">${CUR[code].flag}</span>
        <div><div class="si-code">${code}</div><div class="si-name">${CUR[code].name}</div></div>
        <span class="si-check">✓</span>
      </li>`).join('');
  }

  $$('.cur-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.picking = chip.dataset.cur;
      curSearch.value = '';
      buildCurList();
      openSheet(curSheet);
    });
  });
  curSearch.addEventListener('input', () => buildCurList(curSearch.value));
  curList.addEventListener('click', e => {
    const item = e.target.closest('[data-pick]');
    if (!item) return;
    const code = item.dataset.pick;
    const which = state.picking;
    // avoid picking the same currency on both sides of the converter
    if (which === 'from' && code === state.to) state.to = state.from;
    if (which === 'to' && code === state.from) state.from = state.to;
    state[which] = code;
    renderChips();
    computeConversion();
    buildRateList();
    closeSheet(curSheet);
  });
  $('#sheetClose').addEventListener('click', () => closeSheet(curSheet));
  scrim.addEventListener('click', () => {
    if (!curSheet.hidden) closeSheet(curSheet);
    if (!exSheet.hidden) closeSheet(exSheet);
  });

  /* ---------- exchange confirm ---------- */
  const exSheet = $('#exSheet');
  const exSummary = $('#exSummary');
  const success = $('#success');
  const successSub = $('#successSub');

  $('#exchangeBtn').addEventListener('click', () => {
    const a = state.amount;
    const rate = crossRate(state.from, state.to);
    const net = a * rate * (1 - FEE);
    exSummary.innerHTML = `
      <div class="ex-row">
        <span class="ex-k">You send</span>
        <span class="ex-v ex-big">${CUR[state.from].sym}${fmt(a, state.from)} ${state.from}</span>
      </div>
      <div class="ex-arrow">↓</div>
      <div class="ex-row">
        <span class="ex-k">You get</span>
        <span class="ex-v ex-big" style="color:var(--volt)">${CUR[state.to].sym}${fmt(net, state.to)} ${state.to}</span>
      </div>
      <div class="ex-row">
        <span class="ex-k">Rate</span>
        <span class="ex-v">1 ${state.from} = ${rate.toFixed(4)} ${state.to}</span>
      </div>
      <div class="ex-row">
        <span class="ex-k">trueX fee</span>
        <span class="ex-v">${(FEE * 100).toFixed(1)}%</span>
      </div>`;
    openSheet(exSheet);
  });
  $('#exClose').addEventListener('click', () => closeSheet(exSheet));

  $('#exConfirm').addEventListener('click', () => {
    const a = state.amount;
    const net = a * crossRate(state.from, state.to) * (1 - FEE);
    closeSheet(exSheet);
    setTimeout(() => {
      successSub.textContent = `You received ${CUR[state.to].sym}${fmt(net, state.to)} ${state.to}`;
      success.hidden = false;
      haptic();
    }, 260);
  });
  $('#successDone').addEventListener('click', () => {
    success.hidden = true;
    go('wallet');
  });

  /* ---------- press ripple feedback on buttons ---------- */
  document.addEventListener('pointerdown', e => {
    const b = e.target.closest('.btn, .pill, .cur-chip, .tab, .swap, .promo');
    if (!b) return;
    b.style.transition = 'transform .08s var(--ease)';
  });

  /* ---------- init ---------- */
  renderChips();
  computeConversion();
  buildQuickRail();
  buildRateList();
  buildWallet();
  buildCurList();

  // gentle live updates
  setInterval(jitterRates, 4000);
})();
