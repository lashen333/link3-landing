// src\components\GravityParticles.tsx
"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    homeX: number;
    homeY: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    rowIndex: number;
    colIndex: number;
}

export function GravityParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let width = 0;
        let height = 0;
        let time = 0;

        const stingray = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            angle: 0,
            speed: 0,
        };

        const mouse = { x: -1000, y: -1000 };

        const colors = [
            "rgba(0, 0, 0, 0.5)",
            "rgba(15, 23, 42, 0.45)",
            "rgba(30, 41, 59, 0.4)",
            "rgba(51, 65, 85, 0.45)",
        ];

        const createStingrayParticles = () => {
            const newParticles: Particle[] = [];

            // Responsive sizing - smaller on mobile, medium on desktop
            const isMobile = width < 768;
            const scale = isMobile ? 0.45 : 0.65;

            const bodyLength = 250 * scale;
            const maxWingWidth = 180 * scale;
            const tailLength = 120 * scale;

            // More realistic stingray shape with MANY particles
            for (let i = 0; i < 50; i++) {
                const t = i / 49;
                const bodyX = -t * bodyLength;

                // Realistic wing width curve
                let wingWidth;
                if (t < 0.35) {
                    wingWidth = maxWingWidth * (t / 0.35);
                } else if (t < 0.65) {
                    wingWidth = maxWingWidth * 0.98;
                } else {
                    wingWidth = maxWingWidth * 0.98 * (1 - (t - 0.65) / 0.35);
                }

                // MORE particles per row for smooth silhouette
                const particlesPerRow = Math.max(10, Math.floor(30 * (wingWidth / maxWingWidth)));

                for (let j = -particlesPerRow; j <= particlesPerRow; j++) {
                    const wingY = (j / particlesPerRow) * wingWidth;

                    newParticles.push({
                        x: 0,
                        y: 0,
                        homeX: bodyX,
                        homeY: wingY,
                        vx: 0,
                        vy: 0,
                        radius: 0.8 + Math.random() * 0.3,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        rowIndex: i,
                        colIndex: j,
                    });
                }
            }

            // Dense tail with realistic taper
            for (let i = 0; i < 40; i++) {
                const t = i / 39;
                const tailX = -bodyLength - (t * tailLength);
                const tailWidth = 12 * (1 - t) * scale;

                const tailParticles = Math.max(3, Math.floor(8 * (1 - t)));
                for (let j = -tailParticles; j <= tailParticles; j++) {
                    if (tailParticles === 0) continue;

                    newParticles.push({
                        x: 0,
                        y: 0,
                        homeX: tailX,
                        homeY: (j / tailParticles) * tailWidth,
                        vx: 0,
                        vy: 0,
                        radius: 0.6 + Math.random() * 0.25,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        rowIndex: 50 + i,
                        colIndex: j,
                    });
                }
            }

            // MASSIVE fill for smooth silhouette
            for (let i = 0; i < 600; i++) {
                const t = Math.random();
                const bodyX = -t * bodyLength * 0.85;
                const wingInfluence = t < 0.5 ? t / 0.5 : 1 - (t - 0.5) / 0.5;
                const maxY = maxWingWidth * wingInfluence * 0.92;

                newParticles.push({
                    x: 0,
                    y: 0,
                    homeX: bodyX,
                    homeY: (Math.random() - 0.5) * maxY,
                    vx: 0,
                    vy: 0,
                    radius: 0.6 + Math.random() * 0.35,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rowIndex: Math.floor(t * 50),
                    colIndex: 0,
                });
            }

            return newParticles;
        };

        const init = () => {
            if (canvas.parentElement) {
                width = canvas.parentElement.clientWidth;
                height = canvas.parentElement.clientHeight;
            } else {
                width = window.innerWidth;
                height = window.innerHeight;
            }

            canvas.width = width;
            canvas.height = height;
            particles = createStingrayParticles();

            stingray.x = 200;
            stingray.y = height * 0.5;
            stingray.targetX = width - 200;
            stingray.targetY = height * 0.5;
        };

        const update = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            time += 0.014;

            const movementCycle = Math.sin(time * 0.22) * 0.5 + 0.5;

            const dx = stingray.targetX - stingray.x;
            const dy = stingray.targetY - stingray.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only pick new target when at edges/corners (not in middle)
            const margin = 200;
            const atLeftEdge = stingray.x < margin;
            const atRightEdge = stingray.x > width - margin;
            const atTopEdge = stingray.y < margin;
            const atBottomEdge = stingray.y > height - margin;

            if (distance < 60 && (atLeftEdge || atRightEdge || atTopEdge || atBottomEdge)) {
                // Pick a corner or opposite edge
                const edges = [];

                // If at left, go to right
                if (atLeftEdge) edges.push({ x: width - margin, y: margin + Math.random() * (height - margin * 2) });
                // If at right, go to left
                if (atRightEdge) edges.push({ x: margin, y: margin + Math.random() * (height - margin * 2) });
                // If at top, go to bottom
                if (atTopEdge) edges.push({ x: margin + Math.random() * (width - margin * 2), y: height - margin });
                // If at bottom, go to top
                if (atBottomEdge) edges.push({ x: margin + Math.random() * (width - margin * 2), y: margin });

                if (edges.length > 0) {
                    const chosen = edges[Math.floor(Math.random() * edges.length)];
                    stingray.targetX = chosen.x;
                    stingray.targetY = chosen.y;
                }
            }

            const baseSpeed = 0.28 + movementCycle * 0.38;
            const targetSpeed = Math.min(baseSpeed, distance / 180);
            stingray.speed += (targetSpeed - stingray.speed) * 0.012;

            const targetAngle = Math.atan2(dy, dx);
            let angleDiff = targetAngle - stingray.angle;

            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

            stingray.angle += angleDiff * 0.012;

            stingray.x += Math.cos(stingray.angle) * stingray.speed;
            stingray.y += Math.sin(stingray.angle) * stingray.speed;

            particles.forEach((p) => {
                const longitudinalPhase = (p.rowIndex / 90) * Math.PI * 2;
                const lateralInfluence = Math.abs(p.homeY) / 90;

                // Body wave (wings)
                const waveAmplitude = p.rowIndex < 50 ? (14 + movementCycle * 10) * lateralInfluence : 0;
                const waveY = Math.sin(time * (1.4 + movementCycle * 0.6) - longitudinalPhase) * waveAmplitude;

                // Flapping
                const flapPhase = time * (1.15 + movementCycle * 0.65) - (p.rowIndex / 90) * Math.PI;
                const flapAmplitude = p.rowIndex < 50 ? (5 + movementCycle * 7) * lateralInfluence : 0;
                const flapY = Math.sin(flapPhase) * flapAmplitude;

                // Realistic tail whip
                let tailWhip = 0;
                if (p.rowIndex >= 50) {
                    const tailPhase = (p.rowIndex - 50) / 40;
                    tailWhip = Math.sin(time * 2.4 - tailPhase * Math.PI * 2.5) * 28 * tailPhase;
                }

                const totalWaveY = waveY + flapY + tailWhip;

                const cos = Math.cos(stingray.angle);
                const sin = Math.sin(stingray.angle);
                const rotX = p.homeX * cos - (p.homeY + totalWaveY) * sin;
                const rotY = p.homeX * sin + (p.homeY + totalWaveY) * cos;

                const targetX = stingray.x + rotX;
                const targetY = stingray.y + rotY;

                const mouseDx = mouse.x - p.x;
                const mouseDy = mouse.y - p.y;
                const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                const scatterRadius = 100;

                if (mouseDist < scatterRadius && mouse.x > 0) {
                    const force = (scatterRadius - mouseDist) / scatterRadius;
                    const angle = Math.atan2(-mouseDy, -mouseDx);
                    p.vx += Math.cos(angle) * force * 3;
                    p.vy += Math.sin(angle) * force * 3;
                } else {
                    p.vx += (targetX - p.x) * 0.055;
                    p.vy += (targetY - p.y) * 0.055;
                }

                p.x += p.vx;
                p.y += p.vy;

                p.vx *= 0.86;
                p.vy *= 0.86;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(update);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", init);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        init();
        update();

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}
