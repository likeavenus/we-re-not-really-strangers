import React, { useRef, useEffect } from 'react';

import styles from './style.module';
import { render, getParticles } from './Particle';

export const SnowFlakes = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef?.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const particles = getParticles(canvas);
    render(canvas, ctx, particles);
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef} />;
};
