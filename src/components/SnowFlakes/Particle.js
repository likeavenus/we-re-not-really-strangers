export class Particle {
  constructor(x, y, radius, speed) {
    this.radius = radius;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.opacity = Math.random();
  }

  fall() {
    this.x += this.speed.x;
    this.y += this.speed.y;
  }

  draw(canvas, ctx) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    if (this.y > canvas.height + this.radius) {
      this.y = -this.radius;
      this.x = Math.random() * canvas.width;
    }
    this.fall();
  }
}

export const getParticles = (canvas) => {
  return Array(200)
    .fill()
    .map(() => {
      return new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        (Math.random() + 0.5) * 4,
        { x: (Math.random() - 0.5) * 2, y: (Math.random() + 0.5) * 2 },
      )
    });
};


export const render = (canvas, ctx, particles) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((item) => item.draw(canvas, ctx));
  requestAnimationFrame(() => render(canvas, ctx, particles));
}

