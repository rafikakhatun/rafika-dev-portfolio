import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let trails = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Trail particle
    class Trail {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.opacity = 0.6;
        this.life = 0;
      }

      update() {
        this.life++;
        this.size *= 0.95;
        this.opacity -= 0.02;
      }

      draw() {
        ctx.fillStyle = `rgba(35,211,238,${this.opacity})`; // cyan glow

        ctx.shadowColor = "#23D3EE";
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    // Mouse move
    const handleMouseMove = (e) => {
      trails.push(new Trail(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trails.forEach((trail, index) => {
        trail.update();
        trail.draw();

        if (trail.opacity <= 0) {
          trails.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default CursorTrail;