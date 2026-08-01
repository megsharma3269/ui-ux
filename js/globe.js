/* ============================================================
   trueX splash globe
   Left hemisphere: a quiet, shaded "real" Earth.
   Right hemisphere: a morse-style dot/dash matrix that ripples
   in — strictly in the two brand colors (volt + electric blue).
   ============================================================ */
(function () {
  const VOLT = '#D4FF3D';
  const BLUE = '#2B3EFF';

  const canvas = document.getElementById('globe');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const R = W * 0.46;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- pre-compute the dot/dash cells for the right hemisphere ---
  const cells = [];
  const step = 30;              // grid spacing
  const gap = 8;                // keep dots off the exact seam
  for (let y = -R; y <= R; y += step) {
    for (let x = gap; x <= R; x += step) {
      // jitter so it feels organic rather than a rigid grid
      const jx = (Math.random() - 0.5) * 8;
      const jy = (Math.random() - 0.5) * 8;
      const px = x + jx, py = y + jy;
      if (px * px + py * py > (R - 6) * (R - 6)) continue; // stay inside the sphere
      const isDash = Math.random() < 0.22;                 // ~1 in 5 is a "dash"
      cells.push({
        x: cx + px,
        y: cy + py,
        r: isDash ? 5.5 : 4.6,
        len: isDash ? step * 0.72 : 0,
        color: Math.random() < 0.5 ? VOLT : BLUE,
        // ripple delay grows with distance from the seam -> sweeps outward
        delay: (px / R) * 620 + Math.random() * 260,
        tw: Math.random() * Math.PI * 2            // twinkle phase
      });
    }
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  const start = performance.now();

  function drawEarth() {
    // clip to the left hemisphere
    ctx.save();
    ctx.beginPath();
    ctx.rect(cx - R - 4, cy - R - 4, R + 4, (R + 4) * 2);
    ctx.clip();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // base sphere shading — lit from the right seam, dark to the left limb
    const g = ctx.createRadialGradient(cx - R * 0.05, cy - R * 0.15, R * 0.15, cx, cy, R);
    g.addColorStop(0, '#26302a');
    g.addColorStop(0.55, '#141a17');
    g.addColorStop(1, '#050706');
    ctx.fillStyle = g;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

    // faint continents / clouds so the "real" half reads as a planet
    const blobs = [
      [-0.55, -0.35, 0.28, 'rgba(70,84,60,.55)'],
      [-0.30, 0.10, 0.34, 'rgba(56,70,48,.5)'],
      [-0.62, 0.42, 0.22, 'rgba(48,60,44,.5)'],
      [-0.15, -0.55, 0.20, 'rgba(90,100,70,.35)'],
      [-0.10, 0.55, 0.26, 'rgba(40,52,40,.45)']
    ];
    blobs.forEach(([dx, dy, rr, col]) => {
      const bg = ctx.createRadialGradient(cx + dx * R, cy + dy * R, 0, cx + dx * R, cy + dy * R, rr * R);
      bg.addColorStop(0, col);
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(cx + dx * R, cy + dy * R, rr * R, 0, Math.PI * 2);
      ctx.fill();
    });

    // atmosphere rim light along the seam
    const rim = ctx.createLinearGradient(cx - R * 0.4, 0, cx, 0);
    rim.addColorStop(0, 'rgba(0,0,0,0)');
    rim.addColorStop(1, 'rgba(120,150,255,.10)');
    ctx.fillStyle = rim;
    ctx.fillRect(cx - R, cy - R, R, R * 2);

    ctx.restore();
  }

  function frame(now) {
    const t = now - start;
    ctx.clearRect(0, 0, W, H);

    drawEarth();

    // seam glow
    const seam = ctx.createLinearGradient(cx - 20, 0, cx + 30, 0);
    seam.addColorStop(0, 'rgba(212,255,61,0)');
    seam.addColorStop(1, 'rgba(212,255,61,.10)');
    ctx.fillStyle = seam;
    ctx.fillRect(cx - 20, cy - R, 60, R * 2);

    // dot / dash matrix
    for (const c of cells) {
      let appear = reduce ? 1 : Math.min(1, Math.max(0, (t - c.delay) / 520));
      if (appear <= 0) continue;
      // ease-out
      const e = 1 - Math.pow(1 - appear, 3);
      const twinkle = reduce ? 0.92 : 0.78 + 0.22 * Math.sin(now / 700 + c.tw);
      ctx.globalAlpha = e * twinkle;
      ctx.fillStyle = c.color;
      ctx.shadowColor = c.color;
      ctx.shadowBlur = 10 * e;
      if (c.len) {
        roundRect(c.x - c.r, c.y - c.r, c.len + c.r * 2, c.r * 2, c.r);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * e, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    if (!reduce) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
