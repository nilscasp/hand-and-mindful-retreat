/* ============================================================
   Hand & Mindful — Cookie Consent (DSGVO / TTDSG §25)
   ------------------------------------------------------------
   - Schlanke Vanilla-Lösung, keine externe Library
   - Steuert Google Consent Mode v2 (gtag('consent', ...))
   - Speichert Wahl in localStorage; läuft nach 6 Monaten ab
   - Self-contained: HTML, CSS und Logik in dieser Datei
   - window.HMConsent.show() öffnet das Panel erneut
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'hm-consent';
  var EXPIRY_MS = 1000 * 60 * 60 * 24 * 180; // 6 Monate

  function loadChoice() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || typeof data.ts !== 'number') return null;
      if (Date.now() - data.ts > EXPIRY_MS) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function saveChoice(analytics) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        analytics: !!analytics,
        ts: Date.now()
      }));
    } catch (e) { /* ignore */ }
  }

  function applyConsent(analytics) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied'
      });
    }
  }

  function injectStyles() {
    if (document.getElementById('hm-consent-styles')) return;
    var s = document.createElement('style');
    s.id = 'hm-consent-styles';
    s.textContent = [
      '#hm-consent-banner{position:fixed;left:50%;bottom:1.2rem;transform:translateX(-50%);',
      'z-index:99999;max-width:min(640px,calc(100vw - 2rem));',
      'background:#1E1228;color:#E8D5A0;border:1px solid rgba(184,148,62,0.35);',
      'border-radius:14px;box-shadow:0 18px 48px rgba(0,0,0,0.45);',
      'padding:1.1rem 1.25rem;font-family:"Jost",system-ui,sans-serif;',
      'font-size:0.92rem;line-height:1.5;opacity:0;transform:translate(-50%,12px);',
      'transition:opacity .35s ease,transform .35s ease;}',
      '#hm-consent-banner.hm-visible{opacity:1;transform:translate(-50%,0);}',
      '#hm-consent-banner h2{font-family:"Cormorant Garamond",serif;font-style:italic;',
      'font-weight:400;font-size:1.15rem;margin:0 0 .35rem;color:#FEFCFF;}',
      '#hm-consent-banner p{margin:0 0 .85rem;color:rgba(232,213,160,0.92);}',
      '#hm-consent-banner a{color:#D4AF5A;text-decoration:underline;text-underline-offset:2px;}',
      '#hm-consent-banner a:hover{color:#E8D5A0;}',
      '#hm-consent-banner .hm-actions{display:flex;flex-wrap:wrap;gap:.55rem;}',
      '#hm-consent-banner button{font-family:inherit;font-size:.85rem;font-weight:500;',
      'letter-spacing:.04em;padding:.6rem 1.1rem;border-radius:999px;cursor:pointer;',
      'border:1px solid rgba(184,148,62,0.45);background:transparent;color:#E8D5A0;',
      'transition:background .2s,border-color .2s,color .2s;}',
      '#hm-consent-banner button:hover{border-color:#D4AF5A;color:#FEFCFF;}',
      '#hm-consent-banner button.hm-primary{background:#B8943E;border-color:#B8943E;color:#1E1228;}',
      '#hm-consent-banner button.hm-primary:hover{background:#D4AF5A;border-color:#D4AF5A;color:#1E1228;}',
      '#hm-consent-banner button:focus-visible{outline:2px solid #D4AF5A;outline-offset:2px;}',
      '#hm-consent-link{position:fixed;left:1rem;bottom:1rem;z-index:9998;',
      'font-family:"Jost",system-ui,sans-serif;font-size:.7rem;font-weight:500;',
      'letter-spacing:.12em;text-transform:uppercase;color:rgba(232,213,160,0.55);',
      'background:rgba(30,18,40,0.78);border:1px solid rgba(184,148,62,0.25);',
      'padding:.4rem .75rem;border-radius:999px;cursor:pointer;backdrop-filter:blur(6px);',
      'transition:color .2s,border-color .2s,background .2s;}',
      '#hm-consent-link:hover{color:#E8D5A0;border-color:rgba(184,148,62,0.6);',
      'background:rgba(30,18,40,0.95);}',
      '@media (max-width:520px){#hm-consent-banner{left:.75rem;right:.75rem;',
      'transform:translateY(12px);bottom:.75rem;max-width:none;}',
      '#hm-consent-banner.hm-visible{transform:translateY(0);}',
      '#hm-consent-link{left:.6rem;bottom:.6rem;font-size:.62rem;}}'
    ].join('');
    document.head.appendChild(s);
  }

  function buildBanner() {
    var b = document.createElement('aside');
    b.id = 'hm-consent-banner';
    b.setAttribute('role', 'region');
    b.setAttribute('aria-label', 'Cookie-Einstellungen');
    b.innerHTML = [
      '<h2>Eine kurze Frage zu Cookies</h2>',
      '<p>Diese Seite nutzt Google Analytics 4, um anonymisiert zu sehen, ',
      'welche Texte gelesen werden. Nur mit deiner Zustimmung. ',
      'Details in der <a href="/datenschutz.html">Datenschutzerklärung</a>.</p>',
      '<div class="hm-actions">',
      '  <button type="button" class="hm-primary" data-hm-action="accept">Ich stimme zu</button>',
      '  <button type="button" data-hm-action="decline">Nur Notwendige</button>',
      '</div>'
    ].join('');
    b.querySelector('[data-hm-action="accept"]').addEventListener('click', function () {
      applyConsent(true);
      saveChoice(true);
      hideBanner();
      showLink();
    });
    b.querySelector('[data-hm-action="decline"]').addEventListener('click', function () {
      applyConsent(false);
      saveChoice(false);
      hideBanner();
      showLink();
    });
    return b;
  }

  function buildLink() {
    var a = document.createElement('button');
    a.id = 'hm-consent-link';
    a.type = 'button';
    a.textContent = 'Cookie-Einstellungen';
    a.setAttribute('aria-label', 'Cookie-Einstellungen erneut öffnen');
    a.addEventListener('click', function () { showBanner(); });
    return a;
  }

  var bannerEl = null;
  var linkEl = null;

  function showBanner() {
    if (!bannerEl) {
      bannerEl = buildBanner();
      document.body.appendChild(bannerEl);
    }
    requestAnimationFrame(function () { bannerEl.classList.add('hm-visible'); });
  }

  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove('hm-visible');
    setTimeout(function () {
      if (bannerEl && bannerEl.parentNode) bannerEl.parentNode.removeChild(bannerEl);
      bannerEl = null;
    }, 380);
  }

  function showLink() {
    if (linkEl) return;
    linkEl = buildLink();
    document.body.appendChild(linkEl);
  }

  function init() {
    injectStyles();
    var choice = loadChoice();
    if (choice === null) {
      showBanner();
    } else {
      applyConsent(choice.analytics === true);
      showLink();
    }
  }

  window.HMConsent = {
    show: function () {
      if (linkEl && linkEl.parentNode) {
        linkEl.parentNode.removeChild(linkEl);
        linkEl = null;
      }
      showBanner();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
