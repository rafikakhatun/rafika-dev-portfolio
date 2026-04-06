import React, { useEffect, useRef } from "react";

const ContactParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    const numberOfParticles = 40;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };


    const drawStar = (ctx, x, y, spikes, outerRadius, innerRadius, opacity) => {
      let rot = (Math.PI / 2) * 3;
      let cx = x;
      let cy = y;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, y - outerRadius);
      ctx.closePath();
      
      // তারার উজ্জ্বলতা ও গ্লো
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.shadowBlur = outerRadius * 2;
      ctx.shadowColor = "white";
      ctx.fill();
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    
        this.size = Math.random() * 2 + 3; 
        this.speedY = Math.random() * 0.02; 
        this.opacity = Math.random();
        
        this.fadeSpeed = Math.random() * 0.015 + 0.005;
        this.growing = Math.random() > 0.5;
      }
      update() {
        this.y -= this.speedY;
        if (this.y < 0) this.y = canvas.height;
        
        //Twinkle
        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 1) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.1) this.growing = true;
        }
      }
      draw() {
        drawStar(ctx, this.x, this.y, 4, this.size, this.size / 5, this.opacity);
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0; 
      particlesArray.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };

    setCanvasSize();
    init();
    animate();
    window.addEventListener("resize", setCanvasSize);
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#030014]">
      {/*STAR*/}
      <canvas ref={canvasRef} className="w-full h-full opacity-80" />

      {/*Solid Moon*/}
      <div 
        className="absolute top-20 right-[8%] w-32 h-32 rounded-full z-10"
        style={{
          background: "linear-gradient(135deg, #e6e6e6 0%, #a6a6a6 100%)",
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.4), 0 0 50px rgba(255,255,255,0.2)",
          animation: "float 6s ease-in-out infinite"
        }}
      >
        <div className="absolute top-6 left-8 w-6 h-6 bg-black/10 rounded-full blur-[1px]"></div>
        <div className="absolute top-16 left-12 w-4 h-4 bg-black/10 rounded-full blur-[1px]"></div>
        <div className="absolute top-10 left-20 w-5 h-5 bg-black/10 rounded-full blur-[1px]"></div>
      </div>

      {/*MOON GLOW */}
      <div 
        className="absolute top-5 right-[5%] w-[450px] h-[450px] bg-white opacity-[0.06] rounded-full blur-[110px] z-0"
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default ContactParticles;