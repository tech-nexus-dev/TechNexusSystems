import { useEffect, useRef, useState } from "react";

interface TechNexusLogo3DProps {
  variant?: "icon" | "badge" | "hero" | "full";
  size?: number;
  interactive?: boolean;
  className?: string;
  showText?: boolean;
}

export const TechNexusLogo3D = ({
  variant = "icon",
  size,
  interactive = true,
  className = "",
  showText = false,
}: TechNexusLogo3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Default dimensions according to variant
  const defaultSize = variant === "hero" ? 480 : variant === "badge" ? 140 : 46;
  const canvasSize = size || defaultSize;

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let startTime = performance.now();

    // Internal reference resolution
    const internalW = 1080;
    const internalH = variant === "full" ? 1080 : 700;
    cv.width = internalW;
    cv.height = internalH;

    // Palette sampled from brand guidelines
    const CYAN = "#00d4ff";
    const WHITE = "#ffffff";
    const ORANGE = "#e8845a";

    const CX = 540;
    const CY = variant === "full" ? 410 : 350;
    const CENTER_R = 26;

    // Authentic node topology from Tech Nexus
    const rawNodes = [
      { dx: -95, dy: -120, dz: 30, r: 42, type: "ring" as const, start: 1.2 }, // top-left big ring
      { dx: 95, dy: 120, dz: -30, r: 42, type: "ring" as const, start: 1.35 }, // bottom-right big ring
      { dx: 70, dy: -110, dz: 20, r: 18, type: "dot" as const, start: 1.7 }, // top-right orange
      { dx: -115, dy: 25, dz: -15, r: 18, type: "dot" as const, start: 1.85 }, // left orange
      { dx: -45, dy: 150, dz: 15, r: 18, type: "dot" as const, start: 2.0 }, // bottom orange
    ];

    const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
    const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
    const easeBack = (x: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };
    const seg = (t: number, s: number, d: number) => clamp((t - s) / d);

    // Helpers
    function drawRing(
      x: number,
      y: number,
      r: number,
      lw: number,
      color: string,
      alpha: number,
      glow?: number
    ) {
      if (r <= 0 || alpha <= 0) return;
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.strokeStyle = color;
      ctx!.lineWidth = lw;
      if (glow && glow > 0) {
        ctx!.shadowColor = color;
        ctx!.shadowBlur = glow;
      }
      ctx!.beginPath();
      ctx!.arc(x, y, Math.max(0.1, r), 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();
    }

    function drawDot(
      x: number,
      y: number,
      r: number,
      color: string,
      alpha: number,
      glow?: number
    ) {
      if (r <= 0 || alpha <= 0) return;
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = color;
      if (glow && glow > 0) {
        ctx!.shadowColor = color;
        ctx!.shadowBlur = glow;
      }
      ctx!.beginPath();
      ctx!.arc(x, y, Math.max(0.1, r), 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function drawLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      p: number,
      lw: number,
      alpha: number
    ) {
      if (p <= 0 || alpha <= 0) return;
      const ex = x1 + (x2 - x1) * p;
      const ey = y1 + (y2 - y1) * p;
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.strokeStyle = WHITE;
      ctx!.lineWidth = lw;
      ctx!.lineCap = "round";
      ctx!.shadowColor = CYAN;
      ctx!.shadowBlur = 10;
      ctx!.beginPath();
      ctx!.moveTo(x1, y1);
      ctx!.lineTo(ex, ey);
      ctx!.stroke();
      ctx!.restore();
    }

    function drawTrackedLetters(
      text: string,
      cx: number,
      cy: number,
      font: string,
      color: string,
      track: number,
      t: number,
      baseStart: number,
      per: number,
      dur: number
    ) {
      ctx!.save();
      ctx!.font = font;
      ctx!.textBaseline = "alphabetic";
      ctx!.fillStyle = color;
      const chars = [...text];
      const widths = chars.map((ch) => ctx!.measureText(ch).width);
      const total =
        widths.reduce((a, b) => a + b, 0) + track * (chars.length - 1);
      let x = cx - total / 2;

      for (let i = 0; i < chars.length; i++) {
        const p = seg(t, baseStart + i * per, dur);
        const a = p;
        const ry = (1 - easeOut(p)) * 34;
        ctx!.globalAlpha = a;
        if (chars[i] !== " ") ctx!.fillText(chars[i], x, cy + ry);
        x += widths[i] + track;
      }
      ctx!.restore();
    }

    function drawTracked(
      text: string,
      cx: number,
      cy: number,
      font: string,
      color: string,
      track: number,
      alpha: number,
      rise = 0
    ) {
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = color;
      ctx!.font = font;
      ctx!.textBaseline = "alphabetic";
      const chars = [...text];
      const widths = chars.map((ch) => ctx!.measureText(ch).width);
      const total =
        widths.reduce((a, b) => a + b, 0) + track * (chars.length - 1);
      let x = cx - total / 2;
      ctx!.translate(0, rise);
      for (let i = 0; i < chars.length; i++) {
        ctx!.fillText(chars[i], x, cy);
        x += widths[i] + track;
      }
      ctx!.restore();
    }

    const DURATION = 6.0;

    const renderFrame = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const t = elapsed % (DURATION + 1.2); // loop animation smoothly

      ctx.clearRect(0, 0, internalW, internalH);

      // Subtle 3D perspective rotation from interaction / idle orbital float
      const rotY = (tilt.x * 0.25) + Math.sin(elapsed * 0.8) * 0.08;
      const rotX = -(tilt.y * 0.25) + Math.cos(elapsed * 0.6) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 3D projection for node offsets
      const project3D = (dx: number, dy: number, dz: number) => {
        // Rotate around Y
        const x1 = dx * cosY + dz * sinY;
        const z1 = -dx * sinY + dz * cosY;
        // Rotate around X
        const y2 = dy * cosX - z1 * sinX;
        const z2 = dy * sinX + z1 * cosX;
        // Perspective scaling
        const fov = 600;
        const scale = fov / (fov + z2);
        return {
          px: CX + x1 * scale,
          py: CY + y2 * scale,
          scale,
          z: z2,
        };
      };

      // Idle breathing pulse
      const pulse = t > 3.8 ? Math.sin((t - 3.8) * 2.2) * 0.06 : 0;

      // Projected nodes
      const projectedNodes = rawNodes.map((n) => {
        const proj = project3D(n.dx, n.dy, n.dz);
        return { ...n, ...proj };
      });

      // Center node projection
      const centerProj = project3D(0, 0, 0);

      // Draw connection lines outward from center
      projectedNodes.forEach((n) => {
        const lp = seg(t, 0.45 + n.start * 0.15, 0.8);
        drawLine(
          centerProj.px,
          centerProj.py,
          n.px,
          n.py,
          easeOut(lp),
          Math.max(3, 7 * n.scale),
          0.95 * seg(t, 0.4, 0.4)
        );
      });

      // Draw center ring
      {
        const cp = seg(t, 0.35, 0.5);
        const s = easeBack(cp);
        drawRing(
          centerProj.px,
          centerProj.py,
          CENTER_R * (1 + pulse) * s * centerProj.scale,
          Math.max(4, 8 * centerProj.scale),
          WHITE,
          cp,
          20 * cp
        );
      }

      // Draw outer nodes with depth sort
      const sortedNodes = [...projectedNodes].sort((a, b) => a.z - b.z);

      sortedNodes.forEach((n) => {
        const np = seg(t, n.start * 0.9, 0.55);
        const s = easeBack(np);
        if (n.type === "ring") {
          drawRing(
            n.px,
            n.py,
            n.r * (1 + pulse) * s * n.scale,
            Math.max(4, 8 * n.scale),
            WHITE,
            np,
            18 * np
          );
        } else {
          drawDot(
            n.px,
            n.py,
            n.r * (1 + pulse * 1.5) * s * n.scale,
            ORANGE,
            np,
            16 * np
          );
        }
      });

      // Render typography if variant === "full" or showText is true
      if (variant === "full" || showText) {
        const titleFont = 'bold 84px "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif';
        drawTrackedLetters(
          "TECH NEXUS",
          540,
          720,
          titleFont,
          WHITE,
          6,
          t,
          2.45,
          0.05,
          0.45
        );

        const subFont = '400 32px "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif';
        const s1 = seg(t, 3.2, 0.5);
        const s2 = seg(t, 3.4, 0.5);
        drawTracked(
          "SYSTEMS PVT",
          540,
          795,
          subFont,
          WHITE,
          9,
          s1,
          (1 - easeOut(s1)) * 16
        );
        drawTracked(
          "LTD",
          540,
          844,
          subFont,
          WHITE,
          9,
          s2,
          (1 - easeOut(s2)) * 16
        );
      }

      animId = requestAnimationFrame(renderFrame);
    };

    animId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [variant, showText, tilt]);

  // Mouse move parallax interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`technexus-3d-logo-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: canvasSize,
        height: variant === "full" || showText ? canvasSize : (canvasSize * 0.9),
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          filter: "drop-shadow(0 8px 24px rgba(0, 212, 255, 0.25))",
        }}
      />
    </div>
  );
};
