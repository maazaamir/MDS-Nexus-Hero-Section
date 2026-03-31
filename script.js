const card = document.getElementById('hero-card');

document.addEventListener('mousemove', (e) => {
    const xPivot = (e.clientX / window.innerWidth - 0.5);
    const yPivot = (e.clientY / window.innerHeight - 0.5);

    // 1. Tilt the Card
    gsap.to(card, {
        rotationY: xPivot * 40,
        rotationX: -yPivot * 40,
        duration: 1.5,
        ease: "power3.out"
    });

    // 2. Parallax Shards (Explosion Effect)
    gsap.to('.s1', { x: xPivot * 180, y: yPivot * 180, duration: 2 });
    gsap.to('.s2', { x: -xPivot * 220, y: -yPivot * 220, duration: 2.5 });

    // 3. Subtle Header Tilt
    gsap.to('.top-brand-layer', {
        x: xPivot * 40,
        y: yPivot * 30,
        duration: 3
    });

    // 4. Dynamic Shine
    gsap.to('.light-ray', {
        background: `radial-gradient(circle at ${(e.clientX/window.innerWidth)*100}% ${(e.clientY/window.innerHeight)*100}%, rgba(226, 183, 74, 0.18) 0%, transparent 75%)`,
        duration: 0.6
    });
});

// Reset on Exit
document.addEventListener('mouseleave', () => {
    gsap.to([card, '.shard', '.top-brand-layer'], {
        x: 0, y: 0, rotationX: 0, rotationY: 0,
        duration: 2.5, ease: "elastic.out(1, 0.6)"
    });
});
const btn = document.querySelector('.exclusive-btn');

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // The button physically pulls toward the cursor
    gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
    });
});

btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
    });
});