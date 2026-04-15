import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Setup canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Particles setup
        const particles = [];
        // Brand colours matching the Antigravity themes (blue, pink, amber, purple)
        const colors = ['#5D5FEF', '#E879F9', '#FBBF24', '#A78BFA', '#2DD4BF'];

        // Adjust particle density based on screen size (prevent mobile lag)
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 30 : 65;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2.0 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
            });
        }

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        // Reset mouse when leaving so particles don't stay repelled at edges
        const handleMouseLeave = () => {
            mouse = { x: -1000, y: -1000 };
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Natural slow movement
                p.x += p.vx;
                p.y += p.vy;

                // Loop around edges seamlessly
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Mouse forcefield logic (Antigravity repel)
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 180; // Distance of forcefield

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    p.x -= (dx / distance) * force * 6; // Push away X
                    p.y -= (dy / distance) * force * 6; // Push away Y
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
};

export default ParticleBackground;
