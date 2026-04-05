import { useEffect, useRef } from "react";

const BubblesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let bubblesArray = [];
    const numberOfBubbles = 50; 

   
    const setCanvasSize = () => {
     
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    setCanvasSize();

    class Bubble {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100; 
        
        this.size = Math.random() * 15 + 5; 
        
        
        this.speedY = Math.random() * 0.8 + 0.3; 
        
    
        this.angle = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.wobbleDistance = Math.random() * 2 + 1;

    
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.y -= this.speedY;
        
        this.angle += this.wobbleSpeed;
        this.x += Math.sin(this.angle) * this.wobbleDistance;

        if (this.y < -this.size * 2) {
          this.init();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        
        ctx.fillStyle = `rgba(35, 211, 238, ${this.opacity})`; 
        ctx.fill();
        
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity + 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    const initBubbles = () => {
      bubblesArray = [];
      for (let i = 0; i < numberOfBubbles; i++) {
        bubblesArray.push(new Bubble());
      }
    };

    initBubbles();

    let animationFrameId;
    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesArray.forEach((b) => {
        b.update();
        b.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    
    const handleResize = () => {
      setCanvasSize();
      initBubbles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" 
    />
  );
};

export default BubblesBackground;