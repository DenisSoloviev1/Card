import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import classes from './ParticleSystem.module.scss';

interface ParticleSystemProps {}

const ParticleSystem: React.FC<ParticleSystemProps> = () => {
  const sketchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let Particles: Particle[] = [];
      let time = 0;

      const deg = (a: number) => (Math.PI / 180) * a;

      const opt = {
        particles: window.innerWidth / 500 ? 1000 : 500,
        noiseScale: 0.009,
        angle: (Math.PI / 180) * -90,
        strokeWeight: 1.2,
        tail: 82,
        bgColor: [26, 26, 29], // $color-black
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < opt.particles; i++) {
          Particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }
        p.strokeWeight(opt.strokeWeight);
        p.strokeCap(p.ROUND);
      };

      p.draw = () => {
        time++;
        p.background(opt.bgColor[0], opt.bgColor[1], opt.bgColor[2], 100 - opt.tail);

        Particles.forEach((particle) => {
          particle.update();
          particle.render();
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.mouseClicked = () => {
        opt.angle += deg(p.random(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

        Particles.forEach((particle) => {
          particle.randomize();
        });
      };

      class Particle {
        x: number;
        y: number;
        lx: number;
        ly: number;
        vx: number;
        vy: number;
        ax: number;
        ay: number;
        maxSpeed: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.lx = x;
          this.ly = y;
          this.vx = 0;
          this.vy = 0;
          this.ax = 0;
          this.ay = 0;
          this.maxSpeed = Math.random() > 0.5 ? 3 : 2;
        }

        randomize() {
          this.maxSpeed = Math.random() > 0.5 ? 3 : 2;
        }

        update() {
          this.follow();

          this.vx += this.ax;
          this.vy += this.ay;

          const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          const a = Math.atan2(this.vy, this.vx);
          const m = Math.min(this.maxSpeed, p);
          this.vx = Math.cos(a) * m;
          this.vy = Math.sin(a) * m;

          this.x += this.vx;
          this.y += this.vy;
          this.ax = 0;
          this.ay = 0;

          this.edges();
        }

        follow() {
          const angle = p.noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale) * Math.PI * 0.5 + opt.angle;

          this.ax += Math.cos(angle);
          this.ay += Math.sin(angle);
        }

        updatePrev() {
          this.lx = this.x;
          this.ly = this.y;
        }

        edges() {
          if (this.x < 0) {
            this.x = p.width;
            this.updatePrev();
          }
          if (this.x > p.width) {
            this.x = 0;
            this.updatePrev();
          }
          if (this.y < 0) {
            this.y = p.height;
            this.updatePrev();
          }
          if (this.y > p.height) {
            this.y = 0;
            this.updatePrev();
          }
        }

        render() {
          p.stroke(`#4e4e50`); // $color-gray
          p.line(this.x, this.y, this.lx, this.ly);
          this.updatePrev();
        }
      }

      // Возвращаем функцию очистки анимации при размонтировании
      return () => {
        Particles = []; // Очищаем массив частиц
        p.remove(); // Удаляем холст
      };
    };

    // Создаем экземпляр p5 и передаем ссылку на DOM-элемент
    if (sketchRef.current) {
      const myP5 = new p5(sketch, sketchRef.current);

      // Очищаем анимацию при размонтировании компонента
      return () => {
        myP5.remove();
      };
    }
  }, []);

  return <div ref={sketchRef} className={classes.particleSystem} />;
}

export default ParticleSystem;
