"use client";

import { useEffect, useRef } from "react";

const KATAKANA =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const ALPHABET = `${KATAKANA}${LATIN}${NUMBERS}`;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let intervalId = 0;
    let drops: number[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const fontSize = 14;
      const columns = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      const fontSize = 14;

      context.fillStyle = "rgba(0, 0, 0, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#39ff14";
      context.font = `${fontSize}px monospace`;

      for (let index = 0; index < drops.length; index += 1) {
        const character = ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
        context.fillText(character, index * fontSize, drops[index] * fontSize);

        if (drops[index] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index] += 1;
      }
    };

    const paintStaticFrame = () => {
      context.fillStyle = "rgba(0, 0, 0, 1)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      draw();
    };

    resizeCanvas();

    if (motionQuery.matches) {
      paintStaticFrame();
    } else {
      intervalId = window.setInterval(draw, 30);
      animationFrame = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrame);
      window.clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" id="matrix-bg" />;
}
